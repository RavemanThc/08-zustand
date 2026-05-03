"use client";

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createNote, CreateNotePayload } from "@/lib/api";
import { Tag } from "@/types/note";

import css from "./NoteForm.module.css";
import { useNoteDraftStore } from "@/lib/store/noteStore";
import { useRouter } from "next/navigation";

interface NoteFormProps {
  onClose?: () => void;
  categories: Tag[];
}

export default function NoteForm({ categories, onClose }: NoteFormProps) {
  const router = useRouter();

  const queryClient = useQueryClient();
  const { draft, setDraft, clearDraft } = useNoteDraftStore();
  const handleClose = () => {
    router.back(); // або router.push("/notes")
  };
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setDraft({
      ...draft,
      [event.target.name]: event.target.value,
    });
  };
  const mutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      clearDraft();
      onClose?.();
    },
  });

  // formAction (новый подход)
  const formAction = (formData: FormData) => {
    const data: CreateNotePayload = {
      title: String(formData.get("title") || ""),
      content: String(formData.get("content") || ""),
      tag: String(formData.get("tag") || ""),
    };

    mutation.mutate(data);
  };

  return (
    <form action={formAction} className={css.form}>
      {/* TITLE */}
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          className={css.input}
          defaultValue={draft?.title}
          onChange={handleChange}
        />
      </div>

      {/* CONTENT */}
      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          className={css.textarea}
          defaultValue={draft?.content}
          onChange={handleChange}
        />
      </div>

      {/* TAG */}
      <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>

        <select
          id="tag"
          name="tag"
          className={css.select}
          defaultValue={draft?.tag}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select tag
          </option>

          {categories.map((tag) => (
            <option key={tag.id} value={tag.name}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      {/* ACTIONS */}
      <div className={css.actions}>
        <button
          type="button"
          className={css.cancelButton}
          onClick={onClose ?? handleClose}
        >
          Cancel
        </button>

        <button
          type="submit"
          className={css.submitButton}
          disabled={mutation.isPending}
        >
          Create note
        </button>
      </div>
    </form>
  );
}
