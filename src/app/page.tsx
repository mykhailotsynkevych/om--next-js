import Link from "next/link";

export default function Home() {
  return (
    <section className="panel">
      <p className="eyebrow">Online marketing playground</p>
      <h1>Learn tracking by building it.</h1>
      <p>
        A minimal website for practising Google Analytics 4, Google Tag Manager
        and consent management, one step at a time.
      </p>
      <ol>
        <li>Deploy this site to Vercel and get a public URL.</li>
        <li>Create a GA4 Web data stream and a GTM Web container.</li>
        <li>Configure consent before enabling measurement tags.</li>
        <li>Connect tracking and verify page views and lead events.</li>
      </ol>
      <Link href="/contact" className="button">Open demo form</Link>
      <p className="note">
        This page and the demo form let us test client-side navigation.
        Measurement depends on the GTM configuration and your consent.
      </p>
    </section>
  );
}
