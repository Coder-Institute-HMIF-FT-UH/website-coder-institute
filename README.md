# 🌐 Coder Institute Website

Website resmi **Coder Institute**, komunitas mahasiswa **Teknik Informatika Universitas Hasanuddin**.  
Website ini dibangun menggunakan **Next.js 15** (App Router) dengan dukungan **Tailwind CSS** untuk styling modern dan responsif.  
Saat ini, website bersifat statis tanpa backend. Seluruh konten disimpan dalam bentuk data statis di folder `src/data/`.

Proyek ini menggunakan **npm** sebagai package manager utama.

Website ini mencakup beberapa halaman penting, yaitu:

- Halaman beranda
- Daftar pengurus aktif
- Daftar proyek komunitas
- Artikel dan blog teknologi
- Prestasi komunitas

Seluruh halaman dikelola di dalam `src/app/`, dengan pendekatan file `page.js` untuk tiap route.

---

## 🎨 Desain UI

Referensi desain utama dapat diakses melalui Figma:  
[Link Figma](https://www.figma.com/design/REKpXv0EohHdnKj4VseKyS/WEB-CODER-INSTITUTE?node-id=7-2&p=f&t=eucx0UJHKZyFFiCM-0)

---

## 🚀 Cara Menjalankan Proyek

Pastikan sudah menginstal:

- Node.js versi 18 atau lebih tinggi
- npm versi 9 atau lebih tinggi

Langkah menjalankan secara lokal:

```bash
git clone https://github.com/Coder-Institute-HMIF-FT-UH/website-coder-institute
cd website-coder-institute
npm install
npm run dev
```

Lalu akses proyek melalui http://localhost:3000

---

## 🔴 Ticketing

Project ini menggunakan fitur **GitHub Issues** sebagai sistem _ticketing_ resmi untuk membagi dan melacak tugas di dalam proyek ini.

Setiap tugas (baik membuat komponen, memperbaiki bug, maupun menulis dokumentasi) akan dibuat dalam bentuk **ticket (issue)** dan diberi label, deskripsi, serta assignee yang bertanggung jawab. Juga pada project menggunakan **GitHub Projects** sebagai sistem manajemen tugas visual, mirip seperti Trello. Di dalamnya kamu akan melihat semua _ticket_ (issue) yang dibagi berdasarkan status pengerjaan.

###🏷️ Format Judul GitHub Issue

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

Gunakan format commit berikut untuk menjaga histori proyek tetap konsisten dan mudah dipahami:

### 📘 Daftar Tag (type) yang Didukung

| Tag (`type`) | Kapan Dipakai                                      | Contoh Penggunaan                                  |
| ------------ | -------------------------------------------------- | -------------------------------------------------- |
| `feat`       | Menambahkan fitur baru atau tampilan baru          | `feat: implementasi halaman detail pengurus`       |
| `fix`        | Memperbaiki bug atau kesalahan logic               | `fix: perbaiki posisi tombol login di layar kecil` |
| `style`      | Perubahan terkait format, spasi, perubahan UI, dsb | `style: rapikan indentasi dan hapus baris kosong`  |
| `refactor`   | Reorganisasi kode tanpa ubah perilaku              | `refactor: pisahkan validasi ke file helper`       |
| `docs`       | Perubahan dokumentasi saja                         | `docs: update README untuk instruksi deploy`       |
| `chore`      | Tugas teknis non-fungsional                        | `chore: setup ESLint dan Prettier`                 |
| `perf`       | Optimasi performa                                  | `perf: optimalkan render daftar projek`            |

### 💡 Tips Tambahan

- Gunakan **bahasa Indonesia** untuk deskripsi agar semua anggota tim paham konteks.
- **Jangan gunakan huruf kapital di awal deskripsi**.
- Hindari commit seperti `update`, `edit`, `fix bug`, karena kurang jelas.
- Commit yang konsisten akan sangat membantu saat review, debug, atau tracking fitur.

### 📌 Format Umum

```
<type>: <deskripsi singkat yang dilakukan dalam bahasa Indonesia>
```

Contoh:

```
feat: tambahkan komponen BlogCard di halaman utama
fix: perbaiki tampilan navbar di mobile
refactor: pisahkan fungsi filter ke utils terpisah
```

Dengan menerapkan ini, projek akan lebih mudah **dimaintain**, **dibaca histori-nya**, dan lebih siap untuk kolaborasi lebih baik lagi! Jika bingung bisa konsultasi ke Gen AI untuk memudahkan pembuatan commit message yang tepat.

---

## 📁 Struktur Folder

```bash
.
├── public/
│   └── Logo-Coder.png
└── src/
    ├── app/
    │   ├── page.js          # Halaman beranda (/)
    │   ├── pengurus/
    │   │   └── page.js      # Halaman /pengurus
    │   ├── projek/
    │   │   └── page.js      # Halaman /projek
    │   ├── blog/
    │   │   └── page.js      # Halaman /blog
    │   └── prestasi/
    │       └── page.js      # Halaman /prestasi
    ├── components/
    ├── data/
    ├── hooks/
    ├── lib/
    ├── styles/
    └── utils/
```

### 📁 public/

Berisi aset publik seperti logo, favicon, dan gambar yang bisa diakses langsung melalui URL.
Contoh: `logo-coder.png` (logo resmi komunitas)

### 📁 src/app/

Ini adalah direktori utama untuk semua halaman website. Next.js 15 menggunakan sistem **App Router**, di mana setiap folder di dalam `src/app/` secara otomatis menjadi **route (URL)** untuk website.

Setiap route wajib memiliki file `page.js` di dalamnya. File inilah yang menjadi entry point dari halaman tersebut.

Berikut struktur hubungan antara **URL**, **nama folder**, dan **file-nya**:

| URL         | Lokasi di folder           | Fungsi Halaman                                  |
| ----------- | -------------------------- | ----------------------------------------------- |
| `/`         | `src/app/page.js`          | Halaman utama (beranda)                         |
| `/pengurus` | `src/app/pengurus/page.js` | Menampilkan daftar pengurus aktif               |
| `/projek`   | `src/app/projek/page.js`   | Menampilkan proyek atau kegiatan komunitas      |
| `/blog`     | `src/app/blog/page.js`     | Artikel, tulisan, atau berita seputar komunitas |
| `/prestasi` | `src/app/prestasi/page.js` | Daftar pencapaian dan prestasi Coder Institute  |

Jadi, jika kamu ingin membuat halaman baru dengan URL `/kegiatan`, maka kamu cukup membuat folder `kegiatan` di dalam `src/app/`, dan menambahkan file `page.js` di dalamnya:

```
src/
└── app/
    └── kegiatan/
        └── page.js  ← file ini otomatis jadi halaman untuk route "/kegiatan"
```

➕ Penting untuk diingat: **nama file-nya wajib `page.js`** agar dikenali oleh sistem routing Next.js (bukan `index.js` atau `home.jsx`).

### 📁 src/components/

Folder ini adalah gudang untuk semua **komponen UI yang dapat digunakan kembali (_reusable_)** di seluruh website Anda. Tujuannya adalah untuk menjaga kode tetap konsisten, modular, dan menghindari pengulangan (_Don't Repeat Yourself - DRY_).

**Struktur Internal `src/components/`:**
Anda mengorganisir komponen-komponen ini ke dalam sub-folder yang **sesuai dengan halaman utama** tempat mereka paling sering digunakan, atau berdasarkan kategori fungsional. Ini membantu dalam navigasi dan pemahaman konteks komponen.

```
# Struktur Folder Komponen – `src/components/`
src/components/
├── beranda/ # Komponen spesifik untuk halaman Beranda
│ ├── HeroSection.js # Bagian hero (banner utama) di halaman beranda
│ └── StatistikKomunitas.js # Menampilkan statistik jumlah anggota, event, dll.
│
├── blog/ # Komponen spesifik untuk halaman Blog
│ ├── BlogCard.js # Komponen kartu untuk menampilkan ringkasan blog
│ └── FilterKategori.js # Komponen untuk filter kategori blog
│
├── pengurus/ # Komponen spesifik untuk halaman Pengurus
│ ├── MemberCard.js # Kartu profil masing-masing pengurus
│ └── ProfilPengurus.js # Detail lebih lanjut mengenai profil pengurus
│
├── prestasi/ # Komponen spesifik untuk halaman Prestasi
│ ├── PrestasiCard.js # Kartu berisi informasi prestasi
│ └── DaftarPenghargaan.js # Daftar penghargaan yang pernah diraih
│
├── projek/ # Komponen spesifik untuk halaman Projek
│ ├── ProjekCard.js # Komponen kartu untuk masing-masing projek
│ └── DetailProjek.js # Detail dari projek tertentu
│
└── common/ # Komponen generik, digunakan di banyak halaman
│ └── Navbar.js # Navigasi utama situs
│ └── Footer.js # Footer situs
```

### 📁 src/data/

Berisi data statis berbasis file JS/JSON. Cocok untuk pengisian konten sementara tanpa backend.

📄 Contoh: `pengurus.js`, `blog.js`, `prestasi.js`

### 📁 src/hooks/

Custom React Hooks untuk pengelolaan logika atau efek tertentu.

📄 Contoh: `useModal.js`, `useScrollPosition.js`

### 📁 src/lib/

Berisi helper function dan konfigurasi global seperti metadata, icon library, dll.

### 📁 src/styles/

File styling global, konfigurasi Tailwind, atau tambahan CSS/SCSS custom.

### 📂 src/utils/

Fungsi bantu umum seperti:

1. Format tanggal
2. Konversi slug
3. Validasi input, dll

---

## 🌍 Routing Halaman

| Route       | Deskripsi Halaman                    |
| ----------- | ------------------------------------ |
| `/`         | Beranda / halaman utama              |
| `/pengurus` | Menampilkan daftar pengurus          |
| `/projek`   | Menampilkan daftar proyek komunitas  |
| `/blog`     | Artikel dan berita komunitas         |
| `/prestasi` | Daftar prestasi/pencapaian komunitas |

---

## 📝 Catatan untuk Tim

- Gunakan folder `src/data/` untuk semua konten selama belum menggunakan _backend_.
- Buat komponen UI _reusable_ di `src/components/` agar kode tetap rapi dan DRY.
- Halaman baru dibuat dalam `src/app/namahalaman/page.js`.
- Semua aset (gambar/logo) simpan di `public/`.

---

## 📮 Kontak

- Jika ada yang ingin ditanyakan silahkan bertanya di grup pengurus website coder.

---

Dokumen ini disusun untuk keperluan internal tim pengembang website Coder Institute.
Silakan update jika ada perubahan struktur proyek atau teknologi yang digunakan.

Semangat🔥
