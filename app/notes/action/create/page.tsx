import { fetchNotes } from "@/lib/api";
import css from "./CreateNote.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";
import { Tag } from "@/types/note";

const CreateNote = async () => {
  let categories: Tag[] = [];

  try {
    const data = await fetchNotes();

    const uniqueTags = Array.from(new Set(data.notes.map((note) => note.tag)));

    categories = uniqueTags.map((tag) => ({
      id: tag,
      name: tag,
    }));
  } catch {
    categories = [];
  }

  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>

        <NoteForm categories={categories} onClose={() => {}} />
      </div>
    </main>
  );
};

export default CreateNote;
