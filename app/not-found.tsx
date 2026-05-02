import { fetchNoteById } from "@/lib/api";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  try {
    const note = await fetchNoteById(id);

    return {
      title: `Note: ${note.title}`,
      description: note.content.slice(0, 30),
      openGraph: {
        title: `Note: ${note.title}`,
        description: note.content.slice(0, 100),
        url: `https://notehub.com/notes/${id}`,
        images: [
          {
            url: "https://ac.goit.global/fullstack/react/og-meta.jpg",
            width: 1200,
            height: 630,
            alt: note.title,
          },
        ],
        type: "article",
      },
    };
  } catch {
    return {
      title: "Note not found",
      description: "This note does not exist",
    };
  }
}
const NotFound = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
