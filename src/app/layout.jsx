import CursorFollower from "@/components/Cursor";
import "./globals.css";

import localFont from "next/font/local";
import Navbar from "@/components/shared/Navbar";
const objectSans = localFont({ src: "../fonts/ObjectSans-Regular.otf" });

export const metadata = {
  title: "GDG Cloud Lahore",
  description:
    "GDG Cloud Lahore, a vibrant community dedicated to exploring and advancing cloud technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${objectSans.className} bg-[#ebebeb]`}>
        <CursorFollower />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
