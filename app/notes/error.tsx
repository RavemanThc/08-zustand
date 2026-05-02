"use client";

import { fetchNoteById } from "@/lib/api";
import { Metadata } from "next";
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const note = await fetchNoteById(id);
  return {
    title: `Note: ${note.title}`,
    description: note.content.slice(0, 30),
  };
}
export default function Error({ error }: { error: Error }) {
  return <p>Could not fetch the list of notes. {error.message}</p>;
}
