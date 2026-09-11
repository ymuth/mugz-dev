# mugz.dev

The official website for **MUGZ Development**, a software and web development service focused on building modern, responsive and efficient websites for businesses.

Unlike some of my more backend-focused projects, this site was developed with a stronger emphasis on **frontend design, user experience, performance and professional presentation** while still including secure server-side functionality for handling enquiries.

## Features

* Modern responsive website built with **Next.js**
* Fully responsive layout across desktop, tablet and mobile devices
* Custom UI built with **Tailwind CSS**
* Server-side contact and enquiry forms
* Transactional email delivery using **Resend**
* Custom domain and professional email integration
* Spam and bot protection using hidden honeypot fields
* Server-side form validation
* Secure handling of API keys and environment variables
* Reusable React components
* SEO-friendly page structure and metadata
* Optimised assets and Next.js image handling
* Production deployment with a custom domain

## Tech Stack

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Resend**
* **Vercel**
* **PostgreSQL**
* **Prisma ORM**
* **Better Auth**

Public enquiries continue to be processed directly through the existing server-side Resend integration. PostgreSQL is used only by the private admin system for authentication, leads and supporting evidence.

## Contact Form & Email Integration

The website includes custom enquiry forms designed to allow potential clients to contact MUGZ Development directly.

Form submissions are processed on the server before being sent using **Resend**, preventing sensitive email credentials from being exposed to the browser.

Emails are integrated with the project's custom domain, including the professional contact address:

```text
hello@mugz.dev
```

This provides a complete enquiry workflow without requiring a separate database or third-party form builder.

## Spam Protection

The contact forms include several measures designed to reduce automated and malicious submissions.

These include:

* Hidden **honeypot fields** which legitimate users do not interact with
* Server-side input validation
* Validation of required fields and email addresses
* Rejection of suspicious or invalid submissions
* API credentials stored securely through environment variables

The honeypot approach provides lightweight bot protection without requiring users to complete a CAPTCHA.

## Design & Frontend

A major focus of this project was creating a clean, professional interface suitable for a real software and web development business.

The site was designed around:

* Clear visual hierarchy
* Responsive layouts
* Consistent spacing and typography
* Reusable UI components
* Simple navigation
* Clear calls to action
* Mobile usability
* Fast page loading

The interface was built from scratch using **React and Tailwind CSS** rather than relying on a pre-built website template.

## Project Structure

The project uses the **Next.js App Router**, allowing pages, layouts, components and server-side functionality to remain organised within a single application.

Reusable components are used throughout the site to reduce duplicated code and maintain consistent styling.

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Copy `.env.example` to `.env` and provide the required environment variables:

```env
DATABASE_URL=postgresql://...
BETTER_AUTH_SECRET=...
BETTER_AUTH_URL=http://localhost:3000
RESEND_API_KEY=
```

Generate a Better Auth secret with `npx auth secret`. Never commit the resulting value.

Create a PostgreSQL database, apply the included migrations, then generate the Prisma client:

```bash
npm run db:deploy
npm run db:generate
```

For future schema changes in development, create a reviewed migration with:

```bash
npm run db:migrate -- --name descriptive_change_name
```

Use `npm run db:deploy` to apply reviewed migrations in existing or production environments. Never run a destructive reset against production data.

Create the first administrator interactively. The CLI prompts for any omitted email or password and will warn before creating another admin:

```bash
npm run admin:create -- --email you@example.com --name "Admin"
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

The private login is available at:

```text
http://localhost:3000/admin/login
```

## Production

The application is deployed as a production website using a custom domain:

**[mugz.dev](https://www.mugz.dev)**

The production deployment demonstrates the full process of taking a web application from local development through to a publicly accessible website with a custom domain and professional email infrastructure.

## Purpose

This project was created both as the website for **MUGZ Development** and as a demonstration of my frontend and full-stack web development skills.

The project particularly demonstrates experience with:

* Building production websites using Next.js and TypeScript
* Responsive frontend development
* Designing user interfaces with Tailwind CSS
* Creating reusable React components
* Building server-side form functionality
* Integrating external APIs such as Resend
* Implementing basic anti-spam and security measures
* Managing environment variables and sensitive credentials
* Configuring custom domains and production deployments

The public site continues to showcase frontend quality and usability, while the private admin area provides the secure foundation for MUGZ's internal lead-management workflow.
