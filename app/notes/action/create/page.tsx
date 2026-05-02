// app/notes/action/create/page.tsx

import { getTags } from "@/lib/api";
import css from "./CreateNote.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";

const CreateNote = async () => {
  const categories = await getTags();

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
