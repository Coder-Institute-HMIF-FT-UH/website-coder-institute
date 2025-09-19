# 🛠️ Panduan Development Workflow

Dokumen ini menjelaskan cara kerja tim developer di proyek **Website Coder Institute**. Mulai dari setup sampai deploy, semuanya ada di sini dengan bahasa yang mudah dipahami.

---

## 🎯 Overview Workflow

Workflow kita dirancang supaya:

- **Code quality** selalu terjaga otomatis
- **Kolaborasi** tim lebih terstruktur
- **Bug** minim sampai ke production
- **Review process** lebih efisien

**Tools yang kita pakai:**

- ✅ **Git** - Version control
- ✅ **GitHub** - Code hosting + issue tracking
- ✅ **Husky** - Git hooks otomatis
- ✅ **Prettier** - Auto formatting
- ✅ **ESLint** - Code linting
- ✅ **Commitlint** - Validasi format commit

---

## 🚀 Getting Started

### 1. Clone & Setup Project

```bash
# Clone repository
git clone https://github.com/Coder-Institute-HMIF-FT-UH/website-coder-institute
cd website-coder-institute

# Install dependencies
pnpm install

# Jalankan development server
pnpm dev
```

### 2. Cek Apakah Git Hooks Sudah Aktif

```bash
# Cek apakah folder .husky sudah ada
ls -la .husky/

# Pastikan ada file: pre-commit, commit-msg, pre-push
```

Kalau belum ada, jalankan:

```bash
pnpm run prepare
```

---

## 📋 Sistem Issue Tracking

Kita pakai **GitHub Issues** untuk tracking semua task. Setiap pekerjaan harus ada issue-nya dulu.

### 🎫 Cara Menggunakan GitHub Issues

#### **1. Membuat Issue Baru**

**Langkah-langkah:**

1. Buka halaman repository di GitHub
2. Klik tab **"Issues"**
3. Klik tombol **"New Issue"**
4. Isi informasi issue:

**Format Title:**

```
[Tag] Deskripsi singkat task
```

**Contoh title yang baik:**

- `[Feature] Tambahkan komponen ProfileCard di halaman pengurus`
- `[Fix] Button submit tidak berfungsi di form kontak`
- `[Bug] Gambar logo tidak tampil di Safari browser`
- `[Refactor] Pisahkan logic API ke file utils terpisah`

**Format Description:**

```markdown
## 📝 Deskripsi

Jelaskan apa yang ingin dikerjakan atau masalah yang ditemukan.

## 🎯 Acceptance Criteria

- [ ] Kriteria 1
- [ ] Kriteria 2
- [ ] Kriteria 3

## 📸 Screenshot/Mockup (jika ada)

Lampirkan screenshot atau mockup untuk task UI

## 🔗 Related Issues (jika ada)

- Relates to #123
- Depends on #456
```

#### **2. Label dan Assignment**

**Labels yang tersedia:**

- `feature` - Fitur baru
- `bug` - Ada error/tidak berfungsi
- `fix` - Perbaikan minor
- `refactor` - Restructure code
- `docs` - Dokumentasi
- `chore` - Task teknis
- `priority: high` - Urgent
- `priority: low` - Bisa ditunda

**Assignment:**

- Assign ke developer yang akan mengerjakan
- Kalau belum tau siapa, biarkan kosong dulu

#### **3. Project Board**

Kita pakai **GitHub Projects** untuk visual tracking:

**Kolom yang ada:**

- 📝 **Backlog** - Issue baru belum dikerjakan
- 🔄 **In Progress** - Sedang dikerjakan
- 👀 **In Review** - Waiting for PR review
- ✅ **Done** - Sudah selesai dan merged

**Cara pindah kolom:**

- Otomatis pindah kalau ada PR yang linked ke issue
- Manual drag & drop di project board

#### **4. Linking Issue ke Pull Request**

Waktu bikin PR, wajib link ke issue:

```markdown
## 📝 Description

Brief description of changes

## 🎫 Related Issue

Closes #123
```

**Keyword yang bisa dipakai:**

- `Closes #123` - Otomatis close issue kalau PR merged
- `Fixes #123` - Sama seperti closes
- `Resolves #123` - Sama seperti closes
- `Related to #123` - Cuma link, tidak auto-close

---

## 🌿 Git Branching Strategy

### **Branch Naming Convention**

```
<type>/<short-description>
```

**Contoh:**

- `feat/add-profile-card` - Fitur baru
- `fix/navbar-responsive` - Perbaikan bug
- `refactor/api-utils` - Refactor code
- `docs/update-readme` - Update dokumentasi

### **Workflow Branching**

```bash
# 1. Selalu mulai dari main branch terbaru
git checkout main
git pull origin main

# 2. Buat branch baru untuk feature/fix
git checkout -b feat/nama-fitur

# 3. Kerjakan task di branch tersebut
# ... coding ...

# 4. Commit dengan format conventional
git add .
git commit -m "feat(ui): add profile card component"

# 5. Push ke remote
git push origin feat/nama-fitur

# 6. Buat Pull Request di GitHub
```

---

## ✍️ Conventional Commits

Semua commit harus ikuti format **Conventional Commits** dan akan divalidasi otomatis.

### **Format Wajib:**

```
<type>(<scope>): <description>
```

### **Type yang Tersedia:**

| Type       | Kapan Dipakai                   | Contoh                                      |
| ---------- | ------------------------------- | ------------------------------------------- |
| `feat`     | Fitur baru                      | `feat(ui): add blog card component`         |
| `fix`      | Perbaikan bug                   | `fix(navbar): resolve mobile layout`        |
| `style`    | Format/styling                  | `style: format code with prettier`          |
| `refactor` | Restructure tanpa ubah behavior | `refactor(utils): extract validation logic` |
| `docs`     | Update dokumentasi              | `docs: update installation guide`           |
| `chore`    | Task teknis                     | `chore(deps): update dependencies`          |
| `perf`     | Optimasi performance            | `perf(api): improve data fetching`          |
| `test`     | Testing                         | `test(utils): add unit tests`               |

### **Scope (Opsional tapi Recommended):**

| Scope    | Untuk Area                   |
| -------- | ---------------------------- |
| `ui`     | Components, styling          |
| `api`    | Data fetching, backend logic |
| `auth`   | Authentication related       |
| `config` | Configuration files          |
| `deps`   | Dependencies                 |

### **Contoh Commit yang Benar:**

```bash
feat(ui): add responsive navigation component
fix(api): handle empty response from server
style: format all files with prettier
refactor(components): separate blog logic to hooks
docs(readme): update installation instructions
chore(deps): update next.js to v15
```

### **Contoh yang SALAH:**

```bash
❌ Update navbar
❌ Fix bug
❌ Add component
❌ WIP
❌ Minor changes
```

---

## 🪝 Git Hooks Otomatis

Git hooks akan jalan otomatis dan memvalidasi code kamu.

### **Pre-commit Hook**

Jalan setiap kali `git commit`:

```bash
# Yang dilakukan:
1. ✅ Auto-format dengan Prettier
2. ✅ Auto-fix ESLint issues
3. ✅ Type checking TypeScript
4. ✅ Stage formatted files
```

**Kalau ada error:**

- Commit akan dibatalkan
- Fix error dulu baru commit lagi

### **Commit-msg Hook**

Validasi format commit message:

```bash
# Contoh error kalau format salah:
❌ "update navbar" → Format tidak sesuai conventional commits
✅ "feat(ui): update navbar responsive design" → Format benar
```

### **Pre-push Hook**

Jalan setiap kali `git push`:

```bash
# Yang dilakukan:
1. ✅ Build project (`pnpm run build`)
2. ✅ Pastikan tidak ada TypeScript errors
3. ✅ Pastikan build sukses
```

**Kalau build gagal:**

- Push akan dibatalkan
- Fix build errors dulu

### **Bypass Git Hooks (Emergency Only)**

```bash
# Skip pre-commit (TIDAK RECOMMENDED)
git commit --no-verify -m "emergency fix"

# Skip pre-push (TIDAK RECOMMENDED)
git push --no-verify
```

**⚠️ Warning:** Hanya untuk emergency! Normalnya jangan di-bypass.

---

## 🔄 Pull Request Process

### **1. Sebelum Buat PR**

Checklist sebelum submit PR:

- [ ] ✅ Code sudah di-test manual
- [ ] ✅ All git hooks passed
- [ ] ✅ Build berhasil (`pnpm run build`)
- [ ] ✅ No TypeScript errors
- [ ] ✅ Branch sudah up-to-date dengan main

### **2. Format Pull Request**

**Title PR:**

```
[Type] Short description (issue #123)
```

**Contoh:**

- `[Feature] Add profile card component (issue #45)`
- `[Fix] Resolve navbar mobile layout (issue #67)`

**Template PR Description:**

```markdown
## 📝 Description

Brief description of what this PR does.

## 🎫 Related Issue

Closes #123

## 🧪 Testing

- [ ] Tested on desktop browser
- [ ] Tested on mobile device
- [ ] All existing features still work

## 📸 Screenshots

Before/after screenshots for UI changes

## ✅ Checklist

- [ ] Code follows conventional commits
- [ ] All git hooks passed
- [ ] Build passes
- [ ] No TypeScript errors
- [ ] Updated documentation if needed
```

### **3. Review Process**

**Yang Wajib Di-review:**

1. **Code Quality**
   - Readable dan maintainable
   - Mengikuti project conventions
   - No hardcoded values

2. **Functionality**
   - Feature berfungsi sesuai requirements
   - No breaking changes
   - Backward compatible

3. **Performance**
   - No unnecessary re-renders
   - Optimized imports
   - Bundle size impact

**Review Response Time:**

- **Critical fixes:** < 2 hours
- **Features:** < 24 hours
- **Documentation:** < 48 hours

### **4. Merge Requirements**

PR bisa di-merge kalau:

- [ ] ✅ Minimal 1 approval dari maintainer
- [ ] ✅ All checks passed (build, lint, type-check)
- [ ] ✅ No merge conflicts
- [ ] ✅ Issue requirements fulfilled

---

## 🛠️ Development Commands

### **Daily Commands**

```bash
# Start development
pnpm dev

# Check code quality
pnpm lint                # Run ESLint
pnpm lint:fix           # Auto-fix ESLint issues
pnpm type-check         # Check TypeScript
pnpm format            # Format with Prettier
pnpm format:check      # Check formatting

# Build & deploy
pnpm build             # Build for production
pnpm start             # Start production server
```

### **Git Commands**

```bash
# Update main branch
git checkout main
git pull origin main

# Create new feature branch
git checkout -b feat/feature-name

# Commit changes
git add .
git commit -m "feat(ui): add new component"

# Push changes
git push origin feat/feature-name

# Sync with main (jika branch lama)
git checkout main
git pull origin main
git checkout feat/feature-name
git rebase main
```

### **Troubleshooting Commands**

```bash
# Reset git hooks jika bermasalah
rm -rf .husky
pnpm run prepare

# Clear TypeScript cache
rm -rf .next
pnpm dev

# Reset dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Fix formatting issues
pnpm format
git add .
git commit -m "style: format code"
```

---

## 🐛 Common Issues & Solutions

### **1. Commit Ditolak (Format Salah)**

**Error:**

```
❌ subject may not be empty [subject-empty]
❌ type may not be empty [type-empty]
```

**Solution:**

```bash
# Gunakan format conventional commits
git commit -m "feat(ui): add navigation component"
```

### **2. Pre-commit Hook Gagal**

**Error:**

```
❌ ESLint found issues in your code
❌ TypeScript compilation failed
```

**Solution:**

```bash
# Fix ESLint issues
pnpm lint:fix

# Fix TypeScript issues
pnpm type-check

# Format code
pnpm format

# Commit lagi
git add .
git commit -m "fix(ui): resolve type errors"
```

### **3. Build Gagal di Pre-push**

**Error:**

```
❌ Build failed - Type errors found
❌ Push rejected
```

**Solution:**

```bash
# Check build locally
pnpm build

# Fix errors yang muncul
# ...

# Push lagi setelah fix
git push origin branch-name
```

### **4. Merge Conflict**

**Solution:**

```bash
# Update branch dengan main terbaru
git checkout main
git pull origin main
git checkout feature-branch
git rebase main

# Resolve conflicts manually
# Edit files yang conflict

git add .
git rebase --continue
git push origin feature-branch --force-with-lease
```

### **5. Git Hooks Tidak Jalan**

**Solution:**

```bash
# Re-install hooks
pnpm run prepare

# Check hooks exists
ls -la .husky/

# Manual test
npx husky add .husky/pre-commit "npx lint-staged"
```

---

## 📚 Resources & References

### **Documentation Links**

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
- [ESLint Rules](https://eslint.org/docs/rules/)

### **Internal Documentation**

- `README.md` - Project overview & setup
- `docs/DEVELOPMENT-WORKFLOW.md` - Ini dokumen yang sedang kamu baca

### **Quick Links**

- [GitHub Repository](https://github.com/Coder-Institute-HMIF-FT-UH/website-coder-institute)
- [GitHub Issues](https://github.com/Coder-Institute-HMIF-FT-UH/website-coder-institute/issues)
- [GitHub Project Board](https://github.com/Coder-Institute-HMIF-FT-UH/website-coder-institute/projects)
- [Vercel Deployment](https://vercel.com)

---

## 🚨 Emergency Procedures

### **Hotfix Process**

Untuk bug critical di production:

```bash
# 1. Buat hotfix branch dari main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug-fix

# 2. Fix bug secepat mungkin
# ... fix code ...

# 3. Test secara manual
pnpm dev
# Test di browser

# 4. Commit & push
git add .
git commit -m "fix(critical): resolve production bug"
git push origin hotfix/critical-bug-fix

# 5. Buat PR dengan label "priority: high"
# 6. Request immediate review
# 7. Merge ASAP setelah approval
```

### **Rollback Deployment**

Jika ada issue di production:

1. **Vercel Dashboard:**
   - Masuk ke Vercel dashboard
   - Pilih deployment sebelumnya yang stabil
   - Klik "Promote to Production"

2. **GitHub:**
   - Revert commit bermasalah
   - Push ke main branch

### **Contact for Help**

- **Technical Issues:** Tanya di grup developer Coder Institute
- **Git/GitHub Issues:** Tag maintainer di issue/PR
- **Emergency:** Contact lead developer langsung

---

## 🎉 Best Practices Summary

### **✅ DO:**

- Selalu buat issue dulu sebelum coding
- Gunakan conventional commits format
- Test di local sebelum push
- Write descriptive PR descriptions
- Review code dengan teliti
- Keep branches focused (1 feature = 1 branch)
- Update documentation kalau perlu

### **❌ DON'T:**

- Skip git hooks (kecuali emergency)
- Commit langsung ke main branch
- Push code yang belum di-test
- Gunakan generic commit messages
- Buat PR untuk multiple unrelated changes
- Ignore TypeScript/ESLint errors
- Bypass review process

---

**Happy Coding! 🚀**

_Dokumen ini akan di-update seiring perkembangan project. Jika ada pertanyaan atau saran, buat issue atau diskusi di grup yang telah disediakan di whatsapp._
