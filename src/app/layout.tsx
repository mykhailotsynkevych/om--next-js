import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
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
        <Script id="gtm-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K3BCCRXR');`}
        </Script>
        <header>
          <nav aria-label="Main navigation">
            <Link href="/" className="brand">OM Lab</Link>
            <Link href="/contact">Demo form</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          Learning project. Consent and measurement are managed through Google
          Tag Manager. Use fictional details only.
        </footer>
      </body>
    </html>
  );
}
