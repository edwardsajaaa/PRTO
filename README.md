# Portfolio Modern

Portfolio website profesional yang dibangun dengan tech stack modern untuk menunjukkan skill development yang robust.

## 🚀 Tech Stack

| Kategori | Technology | Alasan Pemilihan |
|----------|-----------|------------------|
| **Framework** | Next.js 14+ (App Router) | Menunjukkan penguasaan React modern & SSR |
| **Bahasa** | TypeScript | Validasi kode yang robust & skala besar |
| **Styling** | Tailwind CSS | Standar kecepatan development modern |
| **UI Kit** | Shadcn/ui | Component system yang bersih & accessible |
| **Animasi** | Framer Motion | Detail UX yang membedakan junior vs senior |
| **Content** | MDX | Integrasi API/CMS yang fleksibel |

## 📦 Fitur

- ✅ Server-Side Rendering (SSR)
- ✅ TypeScript untuk type safety
- ✅ Responsive design dengan Tailwind CSS
- ✅ Komponen UI yang reusable dengan Shadcn/ui
- ✅ Animasi smooth dengan Framer Motion
- ✅ Content management dengan MDX
- ✅ Dark mode support
- ✅ SEO optimized
- ✅ Path aliases (@/ imports)

## 🛠️ Development

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📁 Struktur Project

```
portofolio/
├── src/
│   ├── app/              # App Router pages
│   ├── components/       # React components
│   │   └── ui/          # Shadcn/ui components
│   └── lib/             # Utility functions
├── content/             # MDX content
│   ├── blog/           # Blog posts
│   └── projects/       # Project details
├── public/             # Static assets
└── .github/            # GitHub configs
```

## 🎨 Customization

### Menambah Komponen Shadcn/ui

```bash
npx shadcn@latest add [component-name]
```

### Menambah Content MDX

Buat file `.mdx` baru di folder `content/blog` atau `content/projects` dengan frontmatter:

```mdx
---
title: "Judul Content"
description: "Deskripsi singkat"
date: "2026-01-08"
---

# Konten Anda
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

Additional resources:
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [MDX Documentation](https://mdxjs.com)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 License

MIT License - bebas digunakan untuk portfolio pribadi Anda.

