# MUGZ Development Guidelines

## Project purpose

MUGZ is a professional web development and business software studio website.

The site should communicate that MUGZ builds:
- professional business websites
- custom web applications
- internal management systems
- business automation and integrations

The target audience is primarily small and medium-sized UK businesses.

The site itself is part of the portfolio, so frontend quality must be high.

## Design direction

MUGZ should feel:
- modern
- premium
- technically capable
- confident
- clean
- distinctive without becoming flashy

Preserve the established purple / teal MUGZ identity, but avoid dated or generic "developer portfolio" styling.

Avoid:
- generic stock developer imagery
- excessive gradient pill buttons
- excessive glassmorphism
- unnecessary rounded cards
- generic SaaS layouts
- repetitive card grids
- decorative elements with no purpose

Prefer:
- strong typography
- clear visual hierarchy
- editorial layouts
- purposeful whitespace
- restrained gradients
- subtle motion
- strong responsive behaviour
- layouts that demonstrate professional frontend capability

Do not visually copy client/demo websites such as the Vortex project. MUGZ should have its own identity.

## Current business positioning

MUGZ is currently offering a limited founding-client offer:

- £150 flat website setup fee
- £20/month hosting and maintenance
- first 5 qualifying business website clients only

Present this as a deliberate limited introductory offer, not as a permanent low-cost price.

Do not use fake crossed-out pricing or invented previous prices.

Custom functionality, applications, databases, dashboards and other advanced work should remain custom-quoted.

## Portfolio / proof

The homepage should prioritize showing actual work or clearly labelled concepts.

Never imply that speculative concepts were commissioned client work.

Where a project is a concept/demo, label it accurately.

Do not invent testimonials, client names, project results or business relationships.

## Copywriting

Customer-facing copy should be:
- concise
- natural
- confident
- understandable by non-technical business owners

Avoid:
- AI-sounding filler
- excessive jargon
- exaggerated claims
- overly corporate language
- promises that cannot be verified

Focus on business outcomes while accurately describing technical capability.

## Development principles

- Use Next.js App Router and TypeScript conventions already present in the project.
- Reuse existing abstractions where sensible.
- Keep components maintainable.
- Prefer semantic HTML and accessible interactions.
- Preserve SEO metadata, structured data, sitemap and robots behaviour.
- Maintain responsive layouts across mobile, tablet and desktop.
- Respect prefers-reduced-motion.
- Do not introduce unnecessary dependencies.
- Do not add backend/database functionality unless required by the requested feature.
- Keep sensitive configuration in environment variables.
- Never commit secrets.

## Forms / email

Existing contact and quote functionality should remain secure and accessible.

Preserve:
- server-side validation
- spam protection
- error handling
- clear success/error states
- privacy handling

Do not accidentally expose API keys or recipient configuration client-side.

## Quality bar

Before completing substantial work, run the project's available checks such as:

- formatting
- lint
- TypeScript type checking
- tests where available
- production build
- npm audit

Do not suppress genuine errors merely to make checks pass.

## Working style

When asked for a focused visual change:
- preserve successful existing work
- avoid unrelated redesigns
- do not refactor large areas without a reason

When performing a larger redesign:
- establish a coherent system first
- keep routes visually related but not repetitive
- ensure the site looks intentional at real-device sizes, not only desktop emulation

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
