import "./styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import { ChatProvider } from "@/context/chatcontext";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ChatProvider>{children}</ChatProvider>
      </body>
    </html>
  );
}
