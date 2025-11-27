# Personal Brand Blog - Advanced Edition

A professional, feature-rich personal blog platform built with Next.js 14, TypeScript, and Tailwind CSS. Includes advanced features for SEO, engagement, and user experience.

## 🚀 Features

### ✨ **Core Features**
- 📝 MDX support for rich content blog posts
- 🔍 Advanced SEO with meta tags, sitemap, structured data (JSON-LD)
- 📧 Newsletter signup with email validation and provider integration
- 🌙 Dark/Light mode with system preference detection
- 📱 Fully responsive design with mobile-first approach
- ⚡ Optimized performance with Next.js 14 App Router

### 🎯 **Advanced Features**
- 🔎 **Real-time Search**: Instant search across all blog posts
- 💬 **Comments System**: Integrated with GitHub Discussions via Giscus
- 📊 **View Counter**: Track and display post views
- 📑 **Table of Contents**: Auto-generated TOC for blog posts
- 🔗 **Related Posts**: Smart recommendation system
- 📰 **RSS Feed**: Auto-generated RSS feed for subscribers
- 💼 **Portfolio Section**: Showcase projects and work
- 📬 **Contact Form**: Professional contact page with form handling
- 🎨 **About Page**: Detailed personal/professional information
- ⚠️ **Error Boundaries**: Graceful error handling
- 🎭 **Loading Skeletons**: Better perceived performance
- 📱 **PWA Support**: Installable as Progressive Web App

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Your Site

Edit `lib/site-config.ts` with your personal information:
- Site name and description
- Your name and email
- Social media links
- Site URL

### 3. Environment Variables (Optional)

Create a `.env.local` file for:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONVERTKIT_API_KEY=your_api_key
CONVERTKIT_FORM_ID=your_form_id
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your blog.

## Adding Blog Posts

Create new blog posts in `content/posts/` directory as `.mdx` files:

```mdx
---
title: "Your Post Title"
description: "Post description"
date: "2024-11-25"
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Newsletter Integration

The newsletter signup is ready for integration with email services like:
- ConvertKit
- Mailchimp
- SendGrid
- Sendinblue

Update the `/app/api/newsletter/route.ts` file with your provider's API.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Set environment variables
4. Deploy!

### Deploy to Netlify

1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Customization

### Theme Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Typography
Modify `app/globals.css` for custom typography styles.

### Components
All components are in `/components` directory and can be customized.

## SEO Features

- Dynamic meta tags for all pages
- Automatic sitemap generation
- Robots.txt configuration
- JSON-LD structured data
- Open Graph and Twitter cards
- Canonical URLs

## Performance Optimizations

- Image optimization with Next.js Image
- Lazy loading components
- Code splitting
- CSS optimization with Tailwind

## Analytics

Ready for integration with:
- Google Analytics 4
- Vercel Analytics
- Plausible
- Fathom

## License

MIT License - feel free to use this for your personal blog!

## Support

For issues or questions, please open an issue on GitHub.
