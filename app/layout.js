
import localFont from "next/font/local";
import "@/styles/main.scss";
import { Toaster } from "react-hot-toast";
import SessionWrapper from "@/context/SessionWrapper";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Inventory Management System",
  description: "Inventory Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionWrapper>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
