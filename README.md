# UTSCloudDataAnalytics

Website belajar interaktif untuk UTS **Cloud Data Analytics** (AWS Academy Data Engineering Modul 1-8).

## Cara membuka

Tidak perlu install apa pun. Unduh/clone repo ini, lalu buka `index.html` di browser (Chrome, Edge, Safari, atau Firefox). Progres belajar tersimpan otomatis di browser yang sama (localStorage).

## Isi website

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
assets/js/data-core.js     kisi-kisi, pipeline, rencana, contekan
assets/js/data-alsut-a.js  soal ALSUT 1-5
assets/js/data-alsut-b.js  soal ALSUT 6-10
assets/js/data-kmg.js      soal KMG 1-6
assets/js/data-drill.js    soal pilihan ganda
assets/js/data-materi.js   flashcard + materi Modul 1-8
assets/js/data-glosarium-*.js  kamus istilah (kepanjangan, fungsi, contoh)
assets/js/app.js           semua interaksi
```
