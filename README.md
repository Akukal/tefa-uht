# TEFA UHT Dashboard — Monitoring Produksi

Dashboard statis untuk memantau ringkasan kapasitas produksi, daftar produk susu UHT, dan catatan uji coba TEFA UHT Politeknik Negeri Jember.

**Kapasitas produksi: 1.000 liter per batch (2 batch/hari, 8 jam operasi).**

## Anggota & Peran

| Peran| Nama| Tanggung Jawab|
|---|---|---|
| Ketua / Maintainer| Haikal Idris| Repo, review, merge PR|
| Frontend| Kasih Nehemia| Halaman ringkasan kapasitas|
| Data Produk| Ghaly Lanang| Halaman daftar produk & status uji|
| Dokumentasi & QA| Vini Ksatria| README, testing, Issue bug|
| Reviewer Tambahan| Saleh Omary| Konsistensi data & penamaan branch|

## Aturan Branch
- `feature/<nama-fitur>` — fitur baru
- `fix/<nama-bug>` — perbaikan bug
- `docs/<nama-dokumen>` — dokumentasi

## Aturan Commit
- `feat: ...` — fitur baru
- `fix: ...` — perbaikan
- `docs: ...` — dokumentasi

## Aturan Pull Request
- Minimal **1 reviewer approval**
- Dilarang push langsung ke `main`
- Setiap PR wajib menyertakan `Closes #<nomor-issue>`

## Issue
| **#** | **Judul** | **Label** | **Assignee** |
| --- | --- | --- | --- |
| 1 | Buat struktur awal proyek dan README TEFA UHT | `documentation` | Haikal Idris |
| 2 | Buat halaman ringkasan kapasitas produksi | `enhancement` | Kasih Nehemia |
| 3 | Buat halaman daftar produk dan status uji coba | `enhancement` | Ghaly Lanang |
| 4 | Dokumentasikan cara menjalankan dan aturan kontribusi | `documentation` | Vini Ksatria |
| 5 | Perbaiki tautan rusak dan konsistensi istilah | `bug` | Vini Ksatria |
| 6 | Review dan merge seluruh Pull Request | `documentation` | Haikal Idris |
