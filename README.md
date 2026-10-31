# UTSCloudDataAnalytics

Website belajar interaktif untuk UTS, dengan pemilih mata kuliah di bagian atas:

- 🤖 **Cloud Machine Learning** (AWS Academy Machine Learning Foundations, Session 1-14): 10 soal KMG (Latihan UTS + kunci dosen, termasuk studi kasus QuickShip Logistics) dan 15 soal Quiz ALS.
- ☁️ **Cloud Data Analytics** (AWS Academy Data Engineering Modul 1-8): 10 soal ALSUT dan 6 soal Quiz KMG.

Progres tiap mata kuliah disimpan terpisah. Link langsung ke satu mata kuliah: `index.html?c=cml` atau `index.html?c=cda`.

## Cara membuka

Tidak perlu install apa pun. Unduh/clone repo ini, lalu buka `index.html` di browser (Chrome, Edge, Safari, atau Firefox). Progres belajar tersimpan otomatis di browser yang sama (localStorage).

## Isi website (sama untuk tiap mata kuliah)

| Bagian | Isi |
| --- | --- |
| 🗺️ Rencana | 5 langkah belajar berurutan dengan checklist |
| 🔥 Soal Dosen | 16 soal esai: 10 ALSUT (sama dengan Soal Latihan UTS) + 6 Quiz KMG. Tiap soal punya **Pertanyaan Rinci**, **Latihan Jawab** dengan cek kata kunci otomatis, **Kunci Jawaban** yang dibuka per bagian, dan penilaian kesiapan |
| ⚡ Drill | 113 soal pilihan ganda per modul, filter "pola soal ujian", streak, penjelasan, ulangi yang salah |
| 🃏 Flashcard | 49 istilah dengan kartu flip 3D; kartu "Lupa" muncul lagi lebih cepat |
| 📋 Contekan | Tabel "butuh apa, pakai apa" layanan AWS dengan mode tebak |
| 📚 Materi | Ringkasan Modul 1-8 dengan mode tebak istilah dan kamus istilah per modul |
| 📖 Kamus | 194 istilah, singkatan, dan layanan AWS lengkap dengan kepanjangan, fungsi singkat, dan contoh; bisa dicari |
| 🏆 Progres | Kesiapan total dan per kisi-kisi UTS |

Di seluruh website, istilah bergaris titik-titik bisa diklik untuk melihat kepanjangan dan fungsinya.

## Sumber materi

1. Rangkuman Super Singkat AWS Academy Data Engineering Modul 1-8
2. Soal Latihan UTS Cloud Data Analytics
3. Master Guide & Pembahasan Quiz Sebelum UTS (Region KMG & ALSUT)

Beberapa jawaban di file pembahasan terpotong di PDF. Bagian itu dilengkapi dari rangkuman dan diberi label **"Dilengkapi dari rangkuman"** di website.

## Struktur

```
index.html
assets/css/style.css
assets/js/courses.js        daftar mata kuliah + pemuat data course aktif
assets/js/app.js            semua interaksi (dipakai semua course)
assets/js/cml/              data Cloud Machine Learning (soal KMG & ALS, drill, materi, kamus ML)
assets/js/cda/              data Cloud Data Analytics
assets/js/shared/           kamus umum layanan AWS & konsep data (dipakai bersama)
```

Untuk menambah mata kuliah baru: buat folder data baru dengan `UTS.meta`, lalu daftarkan file-filenya di `courses.js`.
