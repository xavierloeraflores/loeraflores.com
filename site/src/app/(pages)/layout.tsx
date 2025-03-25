import "~/styles/globals.css";

import { DotPattern } from "~/components/magicui/dot-pattern";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import Header from "~/components/header";
import Footer from "~/components/footer";
import { ThemeProvider } from "~/providers/theme-provider";
export const metadata: Metadata = {
  title: "Xavier Loera Flores",
  description:
    "Welcome to my website. I'm a software engineer and a full stack developer.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
import { ThemeModeToggle } from "~/components/ui/theme-mode-toggle";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <TRPCReactProvider>{children}</TRPCReactProvider>
          <Footer />
          <DotPattern className="fixed inset-0 h-full w-full" />
          <ThemeModeToggle className="fixed right-4 bottom-4 h-12 w-12" />
        </ThemeProvider>
      </body>
    </html>
  );
}
