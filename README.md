# Portfolio — Hastantio Ridhwandi Adam

Website portofolio pribadi dibangun dengan **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**, sesuai brief: dark-mode cybersecurity theme, glassmorphism, blog berbasis Markdown, dan sistem project dinamis — siap deploy ke Vercel.

---

## 1. Struktur Folder Penting

```
.
├── content/
│   ├── blog/            ← setiap file .md = 1 artikel blog
│   └── projects/        ← setiap file .md = 1 project
├── public/
│   ├── images/          ← placeholder SVG (avatar, blog, projects, achievements)
│   └── resume.pdf        ← (belum ada — tambahkan CV asli Anda di sini)
├── src/
│   ├── app/             ← routing (Next.js App Router)
│   │   ├── page.tsx          → Homepage
│   │   ├── projects/page.tsx → /projects
│   │   ├── blog/page.tsx     → /blog
│   │   └── blog/[slug]/      → /blog/nama-artikel
│   ├── components/      ← semua React component (layout, section, ui)
│   ├── data/site.ts     ← data statis: profil, skill, experience, achievement, social
│   └── lib/              ← logic baca file Markdown (blog.ts, projects.ts)
└── package.json
```

Semua warna, font, dan radius diatur terpusat di `tailwind.config.ts` dan `src/app/globals.css` (CSS variables) — termasuk untuk dark/light mode toggle.

---

## 2. Menjalankan di Komputer Lokal (VS Code)

**Prasyarat:** Node.js versi 18.18 atau lebih baru. Cek dengan:

```bash
node -v
```

Kalau belum ada / versinya terlalu lama, install dulu dari [nodejs.org](https://nodejs.org) (pilih versi LTS).

**Langkah-langkah:**

1. Extract file `.zip` ini, lalu buka foldernya di VS Code:
   ```bash
   cd portfolio-website
   code .
   ```

2. Install semua dependency (butuh koneksi internet, sekali saja):
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```

4. Buka browser ke **http://localhost:3000** — situs akan langsung tampil dengan live-reload (setiap kali file disimpan, browser otomatis refresh).

5. Untuk berhenti, tekan `Ctrl + C` di terminal.

---

## 3. Mengedit Konten (tanpa coding)

### Mengganti data pribadi (nama, skill, experience, achievement, social link)
Edit langsung file:
```
src/data/site.ts
```
Semua teks di section About, Skills, Experience, Achievements, dan Contact diambil dari file ini.

### Menambah artikel blog baru
Buat 1 file `.md` baru di `content/blog/`, misalnya `judul-artikel-baru.md`:

```markdown
---
title: "Judul Artikel"
description: "Ringkasan singkat 1 kalimat."
date: "2026-07-01"
tags: ["Cybersecurity"]
cover: "/images/blog/judul-artikel-baru.svg"
slug: "judul-artikel-baru"
---

Isi artikel di sini, mendukung **Markdown** penuh: heading, list,
` ```code block``` `, gambar, dan link internal.
```

Artikel otomatis muncul di `/blog` dan di 3 artikel terbaru di homepage — **tidak perlu ubah kode apapun**.

### Menambah project baru
Sama caranya, buat file `.md` baru di `content/projects/`. Field `featured: true` akan menampilkannya di homepage (maksimal 3 yang tampil), dan field `order` menentukan urutannya. Lihat contoh di file project yang sudah ada untuk semua field yang tersedia (technology, images, github, documents, dst).

### Mengganti gambar placeholder dengan foto asli
Semua gambar sekarang adalah placeholder SVG bertema dark-cyber supaya situs tetap rapi sebelum Anda upload foto asli. Ganti dengan cara menimpa file di path yang sama (format JPG/PNG/WEBP juga didukung, tinggal update ekstensi pada `cover` / `images` di file Markdown terkait):

- `public/images/avatar/profile.svg` → foto profil di Hero
- `public/images/projects/*.svg` → foto tiap project
- `public/images/achievements/*.svg` → foto piagam/lomba
- `public/images/blog/*.svg` → cover artikel

### Menambah CV / Resume
Tambahkan file PDF asli Anda sebagai `public/resume.pdf` — tombol **Download CV** di halaman `/resume` akan otomatis mengarah ke file itu.

---

## 4. Build untuk Produksi (cek sebelum deploy)

```bash
npm run build
npm run start
```
Buka `http://localhost:3000` — ini menjalankan versi production (bukan dev mode), berguna untuk memastikan tidak ada error sebelum deploy.

---

## 5. Deploy ke Vercel dengan Domain Sendiri (sesuai brief)

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: personal portfolio"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```

2. **Import ke Vercel**
   - Buka [vercel.com](https://vercel.com) → New Project → pilih repo GitHub Anda.
   - Framework Preset akan otomatis terdeteksi sebagai **Next.js** — tidak perlu ubah build command (`npm install` & `npm run build` sudah default).
   - Klik **Deploy**.

3. **Hubungkan domain `.my.id`**
   - Di dashboard project Vercel → tab **Settings → Domains** → tambahkan domain Anda (misalnya `adam.my.id`).
   - Vercel akan memberi instruksi DNS (biasanya CNAME / A record) — masukkan ke panel domain Anda.
   - HTTPS otomatis aktif setelah DNS terverifikasi (gratis, dikelola Vercel).

4. **Auto-deploy**
   Setiap `git push` ke branch `main` setelah ini akan otomatis trigger deploy baru di Vercel — termasuk setiap kali Anda menambah artikel blog atau project baru.

> Catatan: ganti `https://adam.my.id` di `src/app/layout.tsx`, `src/app/sitemap.ts`, dan `src/app/robots.ts` dengan domain final Anda sebelum deploy, supaya metadata SEO dan sitemap akurat.

---

## 6. Checklist Sebelum Go-Live

- [ ] Ganti semua placeholder SVG dengan foto asli
- [ ] Tambahkan `public/resume.pdf`
- [ ] Update domain di `layout.tsx`, `sitemap.ts`, `robots.ts`
- [ ] Cek ulang link GitHub/LinkedIn/Instagram di `src/data/site.ts`
- [ ] `npm run build` lokal tanpa error sebelum push ke GitHub

---

## 7. Stack & Alasan Pemilihan

| Bagian | Teknologi | Alasan |
|---|---|---|
| Framework | Next.js 14 (App Router) | Static generation, cocok & direkomendasikan untuk Vercel |
| Bahasa | TypeScript | Sesuai requirement "Use TypeScript interfaces for data" |
| Styling | Tailwind CSS + CSS variables | Tema gelap/terang bisa di-toggle runtime tanpa rebuild |
| Animasi | Framer Motion | Scroll-reveal & micro-interaction halus, sesuai brief "no excessive animation" |
| Konten Blog/Project | Markdown + gray-matter + remark/rehype | Sesuai requirement: "Adding a new article should only require creating one new Markdown file" |
| Icon | lucide-react | Icon set ringan, konsisten, monoline (cocok tema developer/cybersecurity) |

Selamat menggunakan dan mengembangkan portofolionya! 🚀
