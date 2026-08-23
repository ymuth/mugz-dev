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

No database is required for this project, as enquiry information is processed directly through the application's server-side functionality and delivered by email.

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

Create a `.env` file containing the required environment variables:

```env
RESEND_API_KEY=
```

Additional email or deployment-related environment variables may be required depending on the configuration being used.

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
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

While my other projects demonstrate more complex database, authentication and backend functionality, **mugz.dev focuses primarily on frontend quality, usability and delivering a polished production website**.
