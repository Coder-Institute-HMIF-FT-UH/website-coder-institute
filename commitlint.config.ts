module.exports = {
  // Gunakan aturan dasar dari Conventional Commits
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Daftar type commit yang diperbolehkan
    'type-enum': [
      2,
      'always',
      [
        'feat', // fitur baru
        'fix', // perbaikan bug
        'docs', // perubahan dokumentasi
        'style', // perubahan format/whitespace, tidak ubah logic
        'refactor', // refactor code, bukan bugfix/fitur
        'perf', // peningkatan performa
        'test', // tambah/ubah test
        'chore', // tugas kecil, config, tool
        'ci', // konfigurasi CI/CD
        'build', // build system atau dependency
        'revert', // rollback commit sebelumnya
      ],
    ],

    // Format dasar: type(scope): subject
    'type-case': [2, 'always', 'lower-case'], // type wajib huruf kecil
    'type-empty': [2, 'never'], // type wajib ada
    'scope-empty': [2, 'never'], // scope wajib ada
    'scope-case': [2, 'always', 'lower-case'], // scope huruf kecil

    // Aturan untuk subject (judul commit)
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ], // subject tidak boleh kapitalisasi macam-macam
    'subject-empty': [2, 'never'], // subject wajib ada
    'subject-full-stop': [2, 'never', '.'], // subject tidak boleh diakhiri titik

    // Batasan panjang header (type + scope + subject)
    'header-max-length': [2, 'always', 150],

    // Aturan body (deskripsi commit)
    'body-leading-blank': [1, 'always'], // body harus diawali 1 baris kosong
    'body-max-line-length': [2, 'always', 100], // maksimal 100 karakter per baris

    // Aturan footer (misalnya referensi issue/PR)
    'footer-leading-blank': [1, 'always'], // footer diawali 1 baris kosong
    'footer-max-line-length': [2, 'always', 100], // maksimal 100 karakter per baris
  },
};
