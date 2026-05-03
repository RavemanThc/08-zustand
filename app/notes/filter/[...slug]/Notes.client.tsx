"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useDebouncedCallback } from "use-debounce";
import Link from "next/link";

import { fetchNotes, deleteNote } from "@/lib/api";

import NoteList from "@/components/NoteList/NoteList";
import SearchBox from "@/components/SearchBox/SearchBox";
import Pagination from "@/components/Pagination/Pagination";

import css from "./Notes.module.css";
import { NotesResponse } from "@/types/note";

type Props = {
  tag: string;
};

export default function NotesClient({ tag }: Props) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const queryClient = useQueryClient();

  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearch(value);
    setPage(1);
  }, 500);

  const {
    data = { notes: [], totalPages: 0 },
    isLoading,
    error,
  } = useQuery<NotesResponse>({
    queryKey: ["notes", tag, page, search],
    queryFn: () => fetchNotes(search, page, tag),
    placeholderData: (prev) => prev,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error) return <p>Could not fetch the list of notes.</p>;

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={search} onChange={debouncedSearch} />

        {data.totalPages > 1 && (
          <Pagination
            currentPage={page}
            pageCount={data.totalPages}
            onPageChange={setPage}
          />
        )}

        {/* 🔥 ЗАМІНА MODAL BUTTON → LINK */}
        <Link href="/notes/action/create" className={css.button}>
          Create note +
        </Link>
      </header>

      {data.notes.length > 0 && (
        <NoteList notes={data.notes} onDelete={deleteMutation.mutate} />
      )}
    </div>
  );
}
