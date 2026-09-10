# Edward Benedict — Personal Portfolio

Website portofolio profesional milik **Edward Benedict**, dirancang untuk menampilkan rekam jejak, proyek, pengalaman kerja, serta keahlian teknis di bidang *Game Development*, *Software Engineering*, *Web*, dan *Mobile Development*.

---

## 👨‍💻 Tentang Pemilik Portofolio

**Edward Benedict** adalah mahasiswa Teknik Informatika di **Universitas Sam Ratulangi (UNSRAT)** yang berfokus pada pengembangan produk digital interaktif, rekayasa perangkat lunak, dan game development.

- 🏆 **Chairperson** — UNSRAT IT Community (UNITY) (2026 - Sekarang)
- 👨‍🏫 **Teaching Assistant** — Algoritma & Pemrograman serta Teknologi Basis Data di UNSRAT
- 💼 **Engineer Intern** — PT PLN (Persero) (Des 2025 - Feb 2026)
- 🎮 **Game Programmer & Project Manager** — Unity Engine (C#) & ShaderLab

---

## ✨ Fitur & Bagian Portofolio

Website ini dirancang dengan estetika *dark futuristic* dan interaktivitas yang halus:

1. **Hero Section & Interactive 3D Card**
   - Kartu profil 3D interaktif yang merespons pergerakan kursor mouse (*spring physics*) dengan efek *glow ambient*.
   - Badge keahlian *Game & XR Dev* dan identitas akademis *UNSRAT Informatics*.
   - Tombol indikator *Scroll Down* otomatis ke linimasa pengalaman.

2. **Timeline & Experience**
   - Riwayat pekerjaan, asisten dosen, kepengurusan organisasi, dan magang profesional yang terstruktur secara kronologis.
   - Status aktif (*Present indicator* dengan glowing dot) dan label kategori keahlian per posisi.

3. **Academic Background**
   - Informasi latar belakang pendidikan di Fakultas Teknik Universitas Sam Ratulangi serta rekam jejak akademis.

4. **Skills & GitHub Arsenal**
   - Visualisasi statistik bahasa pemrograman yang paling sering digunakan berdasarkan data GitHub.
   - *Tech Arsenal badges* yang dikelompokkan berdasarkan kategori: *Game Engine & 3D, Web Frontend & Backend, Mobile, Database, VCS, serta Data Science & IoT*.

5. **Contact & Social Connect**
   - Akses cepat untuk kolaborasi dan rekrutmen via email langsung (`edwardbene07@gmail.com`).
   - Kartu tautan media sosial dan profesional (LinkedIn, GitHub, Instagram, Twitter) dengan efek border gradient interaktif.

---

## 📁 Struktur Arsitektur Modular

Struktur proyek telah dimodularisasi agar mudah dikelola dan diperbarui:

```text
portofolio/
├── src/
│   ├── app/                      # App Router Next.js
│   │   ├── layout.tsx            # Root layout & font Geist
│   │   ├── page.tsx              # Halaman utama (komposisi modul bersih)
│   │   └── globals.css           # Styling global & efek glow neon
│   ├── components/
│   │   ├── navigation/
│   │   │   └── Navbar.tsx        # Navbar responsif & mobile drawer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Bagian pengantar hero
│   │   │   ├── ProfileCard3D.tsx     # Komponen kartu 3D tilt
│   │   │   ├── ExperienceSection.tsx # Linimasa pengalaman & edukasi
│   │   │   ├── SkillsSection.tsx     # Statistik skill & tech arsenal
│   │   │   ├── ContactSection.tsx    # Bagian kontak & media sosial
│   │   │   └── index.ts              # Barrel export sections
│   │   └── ui/                   # Komponen UI dasar (button, card)
│   ├── data/                     # Sumber data terisolasi (mudah di-edit)
│   │   ├── experience.ts         # Data riwayat kerja & organisasi
│   │   ├── education.ts          # Data pendidikan
│   │   ├── skills.ts              # Data statistik bahasa & arsenal tools
│   │   └── index.ts              # Barrel export data
│   └── lib/                      # Utility functions
├── content/                      # Konten artikel & dokumentasi MDX
└── public/                       # Aset gambar & profil
```

---

## 🚀 Menjalankan Portofolio Secara Lokal

Pastikan [Node.js](https://nodejs.org/) sudah terinstal di komputer Anda.

1. **Clone repository & masuk ke direktori:**
   ```bash
   git clone https://github.com/edwardsajaaa/PRTO.git
   cd portofolio
   ```

2. **Instal seluruh dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server development:**
   ```bash
   npm run dev
   ```

4. **Buka browser:**
   Akses `http://localhost:3000` untuk melihat website secara langsung.

5. **Build untuk produksi:**
   ```bash
   npm run build
   npm run start
   ```

---

## 📬 Kontak & Kolaborasi

- **Email**: [edwardbene07@gmail.com](mailto:edwardbene07@gmail.com)
- **LinkedIn**: [Edward Benedict](https://www.linkedin.com/in/edwardbenedict)
- **GitHub**: [@edwardsajaaa](https://github.com/edwardsajaaa)
- **Instagram**: [@edwardsajaaa](https://instagram.com/edwardsajaaa)
- **WhatsApp**: [+62 895 2917 5850](https://wa.me/6289529175850)

---

&copy; 2026 Edward Benedict. All rights reserved.
