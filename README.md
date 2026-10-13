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
locally. It has no backend, persistence or tracking; use fictional details only.
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

No GA4, GTM, advertising scripts or CMP are installed yet. No custom domain,
Google Ads account or payment integration is required for these exercises.
