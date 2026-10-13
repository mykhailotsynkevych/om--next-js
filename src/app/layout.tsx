import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OM Lab",
    template: "%s | OM Lab",
  },
  description: "A learning playground for GA4, GTM and consent.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav aria-label="Main navigation">
            <Link href="/" className="brand">OM Lab</Link>
            <Link href="/contact">Demo form</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          Learning project. No analytics or advertising tags are installed.
        </footer>
      </body>
    </html>
  );
}
