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
  const filter = params.slug?.join(", ") ?? "all";

  return {
    title: `Notes filter: ${filter}`,
    description: `Filtered notes by: ${filter}`,

    openGraph: {
      title: `Notes filter: ${filter}`,
      description: `Filtered notes by: ${filter}`,
      url: `https://notehub.com/notes/filter/${params.slug?.join("/") ?? "all"}`,
      siteName: "NoteHub",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/og-meta.jpg",
          width: 1200,
          height: 630,
          alt: `Filter ${filter}`,
        },
      ],
      type: "website",
    },
  };
}

export default async function NotesPage({ params }: Props) {
  const { slug } = params;

  const queryClient = new QueryClient();

  const tag = slug?.[0] ?? "all";
  const page = 1;
  const search = "";
  await queryClient.prefetchQuery({
    queryKey: ["notes", tag, page, search],
    queryFn: () => fetchNotes(search, page, tag === "all" ? "" : tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
