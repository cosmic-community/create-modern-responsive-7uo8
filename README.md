# 🏸 Câu Lạc Bộ Cầu Lông

![App Preview](https://imgix.cosmicjs.com/29a8a1c0-5902-11f1-876b-2597f2099e23-autopilot-photo-1507003211169-0a1dd7228f2d-1779800124878.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

Modern and responsive Vietnamese badminton club website built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🏠 **Homepage** with hero section, latest news, and recent activities
- 📰 **News** listing and detail pages with author and category
- 🏸 **Activities** with status badges (Sắp diễn ra / Đã hoàn thành)
- 📅 **Events & Schedule** with date, time, and venue information
- 🖼️ **Gallery** with beautiful responsive image grid
- 👥 **About Club** page with mission, vision, and members
- ✉️ **Join Request Form** that submits directly to Cosmic CMS
- 📱 **Mobile-first** responsive design
- ⚡ **Server Components** for optimal performance
- 🎨 **Emerald green** (#10b981) theme with sporty design

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a15978ff2c683f5f2b337e8&clone_repository=6a15996af2c683f5f2b33857)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Create a modern and responsive website for a Badminton Club. Website purpose: The website is used to publish and manage content for a badminton club, including news, activities, events, announcements, and club updates. Main requirements: The language of website is vietnamese, Mean color is #10b981. Includes Homepage, News Section, Activities Section, Events/Schedule, Club Introduction, Gallery, and Contact/Join Us pages with CMS structure for News, Activities, Events, Gallery, Club Members, and Join Requests."

### Code Generation Prompt

> Build a Next.js application for a website called "Create modern responsive". The content is managed in Cosmic CMS with the following object types: news, activities, events, gallery, club-members, join-requests. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) - React framework with App Router
- [React 19](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Cosmic SDK](https://www.cosmicjs.com/docs) - Headless CMS

## Getting Started

### Prerequisites

- Bun (or Node.js 18+)
- A Cosmic account with bucket configured

### Installation

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch news
const { objects: news } = await cosmic.objects
  .find({ type: 'news' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Submit join request
await cosmic.objects.insertOne({
  type: 'join-requests',
  title: fullName,
  metadata: {
    full_name: fullName,
    phone,
    email,
    skill_level: 'Beginner',
    message,
    submitted_at: new Date().toISOString()
  }
})
```

## Cosmic CMS Integration

This app uses these content types:
- **news** - News articles
- **activities** - Club activities
- **events** - Events and schedule
- **gallery** - Photo gallery
- **club-members** - Member profiles
- **join-requests** - Membership applications

## Deployment Options

Deploy on [Vercel](https://vercel.com), [Netlify](https://www.netlify.com), or any Node.js host. Set environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`.

<!-- README_END -->