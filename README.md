# OM Lab

A minimal Next.js App Router project for learning GA4, GTM and consent management.

## Run locally

Use Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. The home page links to `/contact` using client-side
navigation. The demo form uses browser validation and simulates submission
locally. It has no backend or persistence; use fictional details only.
Do not treat its simulation as a confirmed lead in a production implementation.

## Validate

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push this project to your GitHub repository.
2. In https://vercel.com/new, import the repository.
3. Keep the detected Next.js preset and default build settings.
4. Deploy; no environment variables are needed at this stage.
5. Use the resulting public HTTPS URL to create a GA4 Web data stream.

Use one stable deployment domain for the lab rather than a different preview URL
for each lesson. Public access is needed to open the site without a Vercel login.
The pages request no search indexing through robots metadata; this is not access
control.

## Next learning steps

1. Create a test GA4 property and Web data stream (`G-...`).
2. Create a GTM Web container (`GTM-...`).
3. Choose a CMP and configure the consent strategy.
4. Install GTM and configure GA4 through it, not a second standalone snippet.
5. Verify initial and client-side page views without duplicates.
6. Implement confirmed form submission before tracking `generate_lead`.

## GTM and consent

The root layout loads the public lab container `GTM-K3BCCRXR` once using
`next/script` with `afterInteractive`. There are no separate GA4 or Cookiebot
loaders in the application. GTM itself loads before consent; the Basic setup
blocks Google measurement tags, not the GTM container or CMP.

Before publishing the container, configure and verify:

- Cookiebot CMP on `Consent Initialization - All Pages`, with global default
  consent denied for statistics, preferences and marketing.
- The Google tag on the custom event `cookie_consent_update`, requiring additional
  consent `analytics_storage`, with `Once per page` firing.
- A working way to reopen the Cookiebot banner and withdraw consent.

The no-JavaScript GTM iframe is deliberately omitted: this lab relies on a
JavaScript CMP to establish consent and must not introduce a fallback that can
run tags without it.

Deploy the loader, then use GTM Preview against the Vercel domain before
publishing. Without Preview, only published container versions run.
Use a clean browser session to verify:

1. Before a choice and after rejecting: no GA4 collection requests or GA cookies.
2. After accepting statistics: the Google tag fires and a page view reaches GA4.
3. Reloading restores the choice; client-side navigation has no duplicate views.
4. Withdrawing statistics stops subsequent measurement. A tag firing condition
   alone does not prove an already loaded Google tag stops sending requests.

The application does not track the demo form as a real lead.
No custom domain, Google Ads account or payment integration is required.
