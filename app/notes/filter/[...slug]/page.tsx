import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";
import { Metadata } from "next";

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Filter: ${params.slug?.join(", ") ?? "all"}`,
  };
}

export default async function NotesPage({ params }: Props) {
  const { slug } = params;

  const queryClient = new QueryClient();

  const tag = slug?.[0] ?? "all";

  await queryClient.prefetchQuery({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotes("", 1, tag === "all" ? "" : tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
