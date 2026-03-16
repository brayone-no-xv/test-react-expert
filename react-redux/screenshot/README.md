# Screenshot CI/CD

Folder ini berisi screenshot sebagai bukti penerapan CI/CD dan branch protection.

## Screenshot yang diperlukan

| Nama File | Deskripsi |
|-----------|-----------|
| `1_ci_check_error.png` | CI check error — menunjukkan pengujian gagal pada PR |
| `2_ci_check_pass.png` | CI check pass — menunjukkan pengujian lolos pada PR |
| `3_branch_protection.png` | Branch protection — menunjukkan proteksi branch master |

## Cara mendapatkan screenshot

1. Push kode ke branch baru dan buat Pull Request ke `master`
2. **`1_ci_check_error.png`**: Screenshot saat CI gagal
   (contoh: commit kode dengan test yang salah → CI akan fail)
3. **`2_ci_check_pass.png`**: Screenshot saat CI berhasil
   (setelah kode diperbaiki → CI pass)
4. **`3_branch_protection.png`**: Screenshot halaman PR yang menunjukkan
   "Merging is blocked" karena branch protection aktif
