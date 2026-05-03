import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CreateNotePayload } from "../api";

const initialDraft: CreateNotePayload = {
  title: "",
  content: "",
  tag: "Todo",
};

type NoteDraftStore = {
  draft: CreateNotePayload;
  setDraft: (note: Partial<CreateNotePayload>) => void;
  clearDraft: () => void;
};

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,

      setDraft: (partial) =>
        set((state) => ({
          draft: { ...state.draft, ...partial },
        })),

      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: "note-draft", // key in localStorage
    },
  ),
);
