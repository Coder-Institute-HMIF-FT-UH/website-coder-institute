# 🌐 Coder Institute Website

Website resmi **Coder Institute**, komunitas mahasiswa **Teknik Informatika Universitas Hasanuddin**.  
Website ini dibangun menggunakan **Next.js 15** (App Router) dengan **TypeScript** dan dukungan **Tailwind CSS** untuk styling modern dan responsif.  
Saat ini, website bersifat statis tanpa backend. Seluruh konten disimpan dalam bentuk data statis di folder `src/data/`.

Proyek ini menggunakan **pnpm** sebagai package manager utama dan dilengkapi dengan **development workflow** yang komprehensif menggunakan Husky, Prettier, ESLint, dan Commitlint.

Website ini mencakup beberapa halaman penting, yaitu:

- Halaman beranda dengan SEO optimization
- Daftar pengurus aktif
- Daftar proyek komunitas
- Artikel dan blog teknologi
- Prestasi komunitas

Seluruh halaman dikelola di dalam `src/app/`, dengan pendekatan file `page.tsx` untuk tiap route.

---

## 🎨 Desain UI

Referensi desain utama dapat diakses melalui Figma:  
[Link Figma](https://www.figma.com/design/REKpXv0EohHdnKj4VseKyS/WEB-CODER-INSTITUTE?node-id=7-2&p=f&t=eucx0UJHKZyFFiCM-0)

---

## 🚀 Cara Menjalankan Proyek

Pastikan sudah menginstal:

- Node.js versi 18 atau lebih tinggi
- pnpm versi 8 atau lebih tinggi

Langkah menjalankan secara lokal:

```bash
git clone https://github.com/Coder-Institute-HMIF-FT-UH/website-coder-institute
cd website-coder-institute
pnpm install
pnpm run dev
```

Lalu akses proyek melalui http://localhost:3000

---

## 🛠️ Development Workflow

Proyek ini menggunakan development workflow yang komprehensif untuk memastikan kualitas kode dan konsistensi:

### **Tools yang Digunakan:**

- ✅ **Husky** - Git hooks management
- ✅ **Prettier** - Code formatting otomatis
- ✅ **ESLint** - Code linting dengan TypeScript support
- ✅ **Commitlint** - Validasi format commit message
- ✅ **lint-staged** - Menjalankan tools hanya pada staged files

### **Git Hooks yang Aktif:**

#### **Pre-commit Hook:**

```bash
npx lint-staged
```

- Auto-format file dengan Prettier
- Auto-fix ESLint issues
- Type checking dengan TypeScript

#### **Commit-msg Hook:**

```bash
npx commitlint --edit
```

- Validasi format Conventional Commits

#### **Pre-push Hook:**

```bash
pnpm run build
```

- Memastikan project bisa di-build sebelum push

### **Available Scripts:**

```bash
# Development
pnpm dev                # Start development server dengan Turbopack
pnpm build              # Build untuk production
pnpm start              # Start production server

# Code Quality
pnpm lint               # Run ESLint
pnpm lint:fix           # Run ESLint dengan auto-fix
pnpm format             # Format semua file dengan Prettier
pnpm format:check       # Check apakah file sudah ter-format
pnpm type-check         # Run TypeScript type checking
```

---

## 🔴 Ticketing

Project ini menggunakan fitur **GitHub Issues** sebagai sistem _ticketing_ resmi untuk membagi dan melacak tugas di dalam proyek ini.

Setiap tugas (baik membuat komponen, memperbaiki bug, maupun menulis dokumentasi) akan dibuat dalam bentuk **ticket (issue)** dan diberi label, deskripsi, serta assignee yang bertanggung jawab. Juga pada project menggunakan **GitHub Projects** sebagai sistem manajemen tugas visual, mirip seperti Trello. Di dalamnya kamu akan melihat semua _ticket_ (issue) yang dibagi berdasarkan status pengerjaan.

### 🏷️ Format Judul GitHub Issue

Untuk memudahkan tracking, diskusi, dan pengelompokan task, gunakan format tag di awal judul **GitHub Issue**.

| Tag          | Kapan Dipakai                         | Contoh Judul Issue                              |
| ------------ | ------------------------------------- | ----------------------------------------------- |
| `[Feature]`  | Menambahkan fitur atau komponen baru  | `[Feature] Tambahkan BlogCard di halaman utama` |
| `[Fix]`      | Perbaikan minor (UI, logic, typo)     | `[Fix] Warna button tidak konsisten`            |
| `[Bug]`      | Ada error atau fungsi tidak berjalan  | `[Bug] Gambar pengurus tidak tampil di Safari`  |
| `[Refactor]` | Perapihan kode tanpa ubah fungsional  | `[Refactor] Pisahkan logic API ke utils`        |
| `[Docs]`     | Dokumentasi (README, komentar, dsb.)  | `[Docs] Tambahkan instruksi setup project`      |
| `[Chore]`    | Task non-fungsional (config, tooling) | `[Chore] Setup Husky & lint-staged`             |

### 📌 Aturan Tambahan

- Gunakan **bahasa Indonesia yang jelas** untuk judul.
- Judul issue harus langsung menggambarkan _apa yang ingin dilakukan atau diperbaiki_.
- Sertakan deskripsi, screenshot (jika UI), dan checklist tugas bila perlu.

---

## ✅ Format Penulisan Commit (Conventional Commits)

Proyek ini menggunakan **Conventional Commits** dengan validasi otomatis melalui Commitlint. Format commit akan divalidasi secara otomatis saat commit.

### 📘 Daftar Tag (type) yang Didukung

| Tag (`type`) | Kapan Dipakai                                      | Contoh Penggunaan                                        |
| ------------ | -------------------------------------------------- | -------------------------------------------------------- |
| `feat`       | Menambahkan fitur baru atau tampilan baru          | `feat(ui): add blog card component to homepage`          |
| `fix`        | Memperbaiki bug atau kesalahan logic               | `fix(navbar): resolve mobile layout positioning`         |
| `style`      | Perubahan terkait format, spasi, perubahan UI, dsb | `style(ui): format code with prettier and fix spacing`   |
| `refactor`   | Reorganisasi kode tanpa ubah perilaku              | `refactor(utils): extract validation to helper`          |
| `docs`       | Perubahan dokumentasi saja                         | `docs(readme): update deployment instructions`           |
| `chore`      | Tugas teknis non-fungsional                        | `chore(config): setup ESLint and Prettier configuration` |
| `perf`       | Optimasi performa                                  | `perf(components): optimize project list rendering`      |
| `test`       | Menambahkan atau memperbaiki tests                 | `test(utils): add unit tests for date helpers`           |
| `ci`         | Perubahan CI/CD configuration                      | `ci(workflow): update GitHub Actions pipeline`           |
| `build`      | Perubahan build system atau dependencies           | `build(deps): update Next.js to latest version`          |

### 💡 Tips Tambahan

- Gunakan **bahasa Inggris** untuk konsistensi dan standar internasional.
- **Jangan gunakan huruf kapital di awal deskripsi**.
- Gunakan **scope** untuk memberikan konteks lebih jelas (misal: `feat(ui):`, `fix(api):`).
- Hindari commit seperti `update`, `edit`, `fix bug`, karena kurang jelas.
- Commit yang konsisten akan sangat membantu saat review, debug, atau tracking fitur.

### 📌 Format Umum

```
<type>(<scope>): <deskripsi singkat dalam bahasa Inggris>
```

Contoh:

```bash
feat(ui): add blog card component to homepage
fix(navbar): resolve mobile responsive layout issues
refactor(components): separate filter logic to utils
style: format code with prettier
docs: update development workflow documentation
chore(deps): update dependencies to latest versions
```

**Note:** Format commit akan divalidasi otomatis oleh Commitlint. Jika format salah, commit akan ditolak.

---

## 📁 Struktur Folder

```bash
.
├── public/
│   └── Logo-Coder.png
├── src/
│   ├── app/
│   │   ├── page.tsx         # Halaman beranda (/)
│   │   ├── layout.tsx       # Root layout dengan metadata SEO
│   │   ├── globals.css      # Global styles
│   │   ├── sitemap.ts       # Auto-generated sitemap
│   │   ├── robots.ts        # Auto-generated robots.txt
│   │   ├── pengurus/
│   │   │   └── page.tsx     # Halaman /pengurus
│   │   ├── projek/
│   │   │   └── page.tsx     # Halaman /projek
│   │   ├── blog/
│   │   │   └── page.tsx     # Halaman /blog
│   │   └── prestasi/
│   │       └── page.tsx     # Halaman /prestasi
│   ├── components/
│   │   ├── beranda/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── pengurus/
│   │   ├── prestasi/
│   │   └── projek/
│   ├── data/
│   └── types/ (untuk TypeScript interfaces)
├── .husky/                  # Git hooks configuration
├── .prettierrc              # Prettier configuration
├── .lintstagedrc           # Lint-staged configuration
├── commitlint.config.js    # Commitlint configuration
├── eslint.config.mjs       # ESLint configuration
└── tsconfig.json           # TypeScript configuration
```

### 📁 public/

Berisi aset publik seperti logo, favicon, dan gambar yang bisa diakses langsung melalui URL.
Contoh: `logo-coder.png` (logo resmi komunitas)

### 📁 src/app/

Ini adalah direktori utama untuk semua halaman website. Next.js 15 menggunakan sistem **App Router**, di mana setiap folder di dalam `src/app/` secara otomatis menjadi **route (URL)** untuk website.

Setiap route wajib memiliki file `page.tsx` di dalamnya. File inilah yang menjadi entry point dari halaman tersebut.

Berikut struktur hubungan antara **URL**, **nama folder**, dan **file-nya**:

| URL         | Lokasi di folder            | Fungsi Halaman                                  |
| ----------- | --------------------------- | ----------------------------------------------- |
| `/`         | `src/app/page.tsx`          | Halaman utama (beranda) dengan SEO optimization |
| `/pengurus` | `src/app/pengurus/page.tsx` | Menampilkan daftar pengurus aktif               |
| `/projek`   | `src/app/projek/page.tsx`   | Menampilkan proyek atau kegiatan komunitas      |
| `/blog`     | `src/app/blog/page.tsx`     | Artikel, tulisan, atau berita seputar komunitas |
| `/prestasi` | `src/app/prestasi/page.tsx` | Daftar pencapaian dan prestasi Coder Institute  |

**File Khusus di App Directory:**

- `layout.tsx` - Root layout dengan metadata SEO dan font configuration
- `sitemap.ts` - Auto-generated sitemap untuk SEO
- `robots.ts` - Auto-generated robots.txt untuk SEO

### 📁 src/components/

Folder ini adalah gudang untuk semua **komponen UI yang dapat digunakan kembali (_reusable_)** di seluruh website. Semua komponen menggunakan **TypeScript** dan mengikuti **PascalCase naming convention**.

**Struktur Internal `src/components/`:**

```
src/components/
├── beranda/              # Komponen spesifik untuk halaman Beranda
│   └── BerandaSection.tsx
├── blog/                 # Komponen spesifik untuk halaman Blog
│   └── BlogSection.tsx
├── pengurus/             # Komponen spesifik untuk halaman Pengurus
│   └── PengurusSection.tsx
├── prestasi/             # Komponen spesifik untuk halaman Prestasi
│   └── PrestasiSection.tsx
├── projek/               # Komponen spesifik untuk halaman Projek
│   └── ProjekSection.tsx
└── common/               # Komponen generik, digunakan di banyak halaman
    ├── Navbar.tsx
    ├── Footer.tsx
    └── JsonLd.tsx        # Structured data component untuk SEO
```

### 📁 src/data/

Berisi data statis berbasis file TypeScript. Cocok untuk pengisian konten sementara tanpa backend.

**Struktur:**

```
src/data/
├── beranda/
│   ├── apaKataMereka.ts
│   ├── faq.ts
│   ├── misiKami.ts
│   ├── prestasiTerbaru.ts
│   └── projekTerbaru.ts
├── blog/
│   ├── blogLainnya.ts
│   └── blogPreview.ts
├── prestasi/
│   └── prestasi.ts
├── profil/
│   └── profilPengurus.ts
└── projek/
    └── projek.ts
```

---

## 🌍 Routing Halaman

| Route       | Deskripsi Halaman                    | SEO Features       |
| ----------- | ------------------------------------ | ------------------ |
| `/`         | Beranda / halaman utama              | ✅ Structured Data |
| `/pengurus` | Menampilkan daftar pengurus          | ✅ Meta Tags       |
| `/projek`   | Menampilkan daftar proyek komunitas  | ✅ Meta Tags       |
| `/blog`     | Artikel dan berita komunitas         | ✅ Meta Tags       |
| `/prestasi` | Daftar prestasi/pencapaian komunitas | ✅ Meta Tags       |

**SEO Features:**

- Auto-generated sitemap di `/sitemap.xml`
- Auto-generated robots.txt di `/robots.txt`
- Open Graph metadata untuk social sharing
- Structured data (JSON-LD) untuk rich snippets

---

## 🎯 Best Practices

### **Naming Conventions:**

- **Pages**: `page.tsx` (lowercase, required by Next.js)
- **Components**: `PascalCase.tsx` (e.g., `BerandaSection.tsx`)
- **Data files**: `camelCase.ts` (e.g., `apaKataMereka.ts`)
- **Utils/Hooks**: `camelCase.ts` (e.g., `formatDate.ts`)

### **Code Quality:**

- Semua file akan otomatis di-format dengan Prettier saat commit
- ESLint akan otomatis memperbaiki issues yang bisa diperbaiki
- TypeScript type checking untuk mencegah runtime errors
- Conventional Commits untuk histori yang jelas

### **Development Workflow:**

1. Buat branch feature: `git checkout -b feat/nama-fitur`
2. Develop dengan `pnpm dev`
3. Commit dengan format conventional: `git commit -m "feat: tambah komponen baru"`
4. Push: `git push` (otomatis menjalankan build check)

---

## 📝 Catatan untuk Tim

- **TypeScript**: Semua file menggunakan `.tsx` untuk components dan `.ts` untuk utilities
- **Package Manager**: Gunakan `pnpm` konsisten, jangan mix dengan npm/yarn
- **Git Hooks**: Sudah dikonfigurasi otomatis, jangan bypass kecuali emergency
- **SEO**: Setiap page sudah ada metadata, jangan lupa update sesuai konten
- **Data Management**: Gunakan folder `src/data/` sampai ada backend
- **Component Structure**: Ikuti struktur folder berdasarkan halaman untuk organisasi yang baik

---

## 🚀 Deployment

Proyek ini menggunakan **Vercel** sebagai platform deployment utama karena optimized untuk Next.js.

**Setup Deployment:**

1. Connect repository ke Vercel
2. Auto-deploy dari branch `main`
3. Preview deployment untuk setiap PR

Build command: `pnpm run build`

---

## 📮 Kontak

- Jika ada yang ingin ditanyakan silahkan bertanya di grup telah disediakan di whatsapp.
- Untuk development workflow atau Git issues, bisa check `docs/DEVELOPMENT-WORKFLOW.md`

---

Dokumen ini disusun untuk keperluan internal tim pengembang website Coder Institute.
Silakan update jika ada perubahan struktur proyek atau teknologi yang digunakan.

Semangat🔥
