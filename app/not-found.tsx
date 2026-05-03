import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page not found",
  description: "This page does not exist or has been moved.",

  openGraph: {
    title: "404 - Page not found",
    description: "This page does not exist or has been moved.",
    url: "https://notehub.com/not-found",
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "404 Not Found",
      },
    ],
    type: "website",
  },
};

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
