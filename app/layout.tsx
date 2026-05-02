import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Notes app",
  keywords: [
    "notes",
    "notepad",
    "online notes",
    "note-taking app",
    "digital notebook",
    "productivity tool",
    "cloud sync",
    "checklist",
    "markdown",
    "task manager",
    "organization",
    "personal wiki",
    "private notes",
    "заметки",
    "блокнот онлайн",
    "онлайн блокнот",
    "список дел",
    "планировщик",
    "веб-заметки",
  ],
  authors: [{ name: "Harkusha Vladislav" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {modal}
          </main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
