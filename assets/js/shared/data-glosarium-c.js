/* Kamus istilah (bagian C): konsep inti yang sering ditulis di jawaban esai. */
window.UTS = window.UTS || {};
UTS.glosariumKategori = UTS.glosariumKategori || {};
UTS.glosariumKategori.inti = '🎯 Konsep inti jawaban esai';
UTS.glosariumKategori.kursus = '🎓 Istilah kursus';
UTS.glosarium = (UTS.glosarium || []).concat([
  // 4 jenis analitik
  { t: 'Descriptive analytics', a: ['Descriptive Analytics', 'Descriptive'], k: 'inti', m: [2],
    f: 'Analitik yang menjawab "What happened?": merangkum apa yang sudah terjadi dari data historis (laporan, dashboard).', c: 'Total pesanan bulan lalu per wilayah.' },
  { t: 'Diagnostic analytics', a: ['Diagnostic Analytics', 'Diagnostic'], k: 'inti', m: [2],
    f: 'Analitik yang menjawab "Why did it happen?": mencari akar penyebab lewat drill-down dan korelasi data.', c: 'Kenapa pembatalan pesanan naik 25% Jumat malam.' },
  { t: 'Predictive analytics', a: ['Predictive Analytics', 'Predictive'], k: 'inti', m: [2],
    f: 'Analitik yang menjawab "What will happen?": meramal masa depan dari pola historis memakai statistik/ML.', c: 'Prediksi jumlah pesanan besok siang, prediksi churn.' },
  { t: 'Prescriptive analytics', a: ['Prescriptive Analytics', 'Prescriptive'], k: 'inti', m: [2],
    f: 'Analitik yang menjawab "How can we make it happen / prevent it?": merekomendasikan tindakan terbaik. Value tertinggi, paling kompleks.', c: 'Besaran bonus driver agar keterlambatan dicegah.' },
  // Strategi data modern
  { t: 'Modernize', a: [], k: 'inti', m: [2],
    f: 'Strategi data modern pertama: pindah dari sistem lama ke cloud dengan layanan purpose-built supaya elastis, murah, dan bebas merawat server fisik.' },
  { t: 'Unify', a: [], k: 'inti', m: [2],
    f: 'Strategi kedua: menyatukan data yang tersebar (silo) ke satu data lake sebagai single source of truth, dengan katalog dan tata kelola terpusat.' },
  { t: 'Innovate', a: [], k: 'inti', m: [2],
    f: 'Strategi ketiga: memakai AI/ML pada data yang sudah rapi untuk menghasilkan insight dan prediksi baru (dari reaktif menjadi proaktif).' },
  // 5V
  { t: 'Volume', a: [], k: 'inti', m: [3], f: 'Salah satu 5V: seberapa besar jumlah datanya (GB, TB, PB) dan seberapa banyak data baru yang dihasilkan.' },
  { t: 'Velocity', a: [], k: 'inti', m: [3], f: 'Salah satu 5V: seberapa cepat data dibuat, masuk, dan harus diproses (menentukan batch atau streaming).' },
  { t: 'Variety', a: [], k: 'inti', m: [3], f: 'Salah satu 5V: keberagaman jenis, format, dan sumber data (terstruktur, semi, tidak terstruktur).' },
  { t: 'Veracity', a: [], k: 'inti', m: [3], f: 'Salah satu 5V: seberapa akurat dan bisa dipercaya datanya (lengkap, konsisten, tidak bias). Value rests on veracity.' },
  { t: 'Value', a: [], k: 'inti', m: [3], f: 'Salah satu 5V: manfaat bisnis yang bisa dihasilkan dari data.' },
  // 3 tipe data
  { t: 'Structured data', a: ['Structured', 'Data terstruktur', 'terstruktur'], k: 'inti', m: [3],
    f: 'Data rapi dalam baris dan kolom dengan skema tetap (tabel database). Paling mudah di-query ("hot"), tetapi kaku.' },
  { t: 'Semi-structured data', a: ['Semi-structured', 'Semistructured', 'semi-terstruktur', 'Semi-Terstruktur'], k: 'inti', m: [3],
    f: 'Data yang punya penanda struktur sendiri (key-value/tag) tanpa skema tabel kaku, misalnya JSON, XML, CSV. "Lukewarm".' },
  { t: 'Unstructured data', a: ['Unstructured', 'tidak terstruktur', 'Tidak Terstruktur'], k: 'inti', m: [3],
    f: 'Data tanpa struktur atau skema tetap, misalnya gambar, video, audio, teks bebas. Paling sulit di-query ("cold"), paling fleksibel.' },
  // 6 langkah wrangling
  { t: 'Discovery', a: [], k: 'inti', m: [6], f: 'Langkah 1 wrangling: mengenali data dulu (hubungan antar sumber/field, format, cara menyaring) sebelum mengubah apa pun.' },
  { t: 'Structuring', a: [], k: 'inti', m: [6], f: 'Langkah 2 wrangling: mengatur bentuk data supaya bisa digabung, misalnya memetakan field dan mengatur folder.' },
  { t: 'Cleaning', a: ['Data Cleaning', 'data cleaning'], k: 'inti', m: [6], f: 'Langkah 3 wrangling: membersihkan data (hapus duplikat, perbaiki nilai salah, tangani nilai kosong) agar bisa dipakai.' },
  { t: 'Enriching', a: [], k: 'inti', m: [6], f: 'Langkah 4 wrangling: menambah nilai data dengan menggabungkan data lain atau membuat kolom baru.' },
  { t: 'Validating', a: ['Data Validating', 'data validation', 'Data Validation'], k: 'inti', m: [6], f: 'Langkah 5 wrangling: memastikan data sudah benar (jumlah baris, format, duplikat, PII, outlier).' },
  { t: 'Publishing', a: [], k: 'inti', m: [6], f: 'Langkah 6 wrangling: menyimpan data hasil olahan secara permanen dan membuka aksesnya untuk pengguna.' },
  // Pilar Well-Architected
  { t: 'Operational Excellence', a: [], k: 'scale', m: [4], f: 'Pilar Well-Architected: menjalankan dan memantau sistem dengan baik serta terus memperbaiki prosesnya.' },
  { t: 'Security', a: [], k: 'scale', m: [4], cs: true, nolink: true, f: 'Pilar Well-Architected: melindungi data, sistem, dan aset (akses, enkripsi, deteksi).' },
  { t: 'Reliability', a: [], k: 'scale', m: [4], f: 'Pilar Well-Architected: sistem tetap berjalan benar dan cepat pulih saat terjadi gangguan.' },
  { t: 'Performance Efficiency', a: [], k: 'scale', m: [4], f: 'Pilar Well-Architected: memakai resource komputasi secara efisien sesuai kebutuhan.' },
  { t: 'Cost Optimization', a: [], k: 'scale', m: [4], f: 'Pilar Well-Architected: menghindari biaya yang tidak perlu dan membayar sesuai yang dipakai.' },
  { t: 'Sustainability', a: [], k: 'scale', m: [4], f: 'Pilar Well-Architected: mengurangi dampak lingkungan dari beban kerja cloud.' },
  // Istilah kursus (Modul 1)
  { t: 'AWS Academy Cloud Foundations', a: [], k: 'kursus', m: [1], f: 'Kursus dasar cloud AWS yang menjadi prasyarat sebelum ikut AWS Academy Data Engineering.' },
  { t: 'Knowledge Check', a: [], k: 'kursus', m: [1], f: 'Kuis singkat di akhir modul 2 sampai 12 untuk mengecek pemahaman.' },
  { t: 'Course Assessment', a: [], k: 'kursus', m: [1], f: 'Ujian akhir kursus berisi 25 soal acak.' },
  { t: 'Capstone Project', a: [], k: 'kursus', m: [1], f: 'Proyek akhir yang menggabungkan semua materi kursus dalam satu kasus nyata.' },
  { t: 'Bridging to Certification', a: [], k: 'kursus', m: [1], f: 'Modul tambahan untuk persiapan ujian sertifikasi AWS, karena kursus ini sendiri belum cukup.' },
  // Singkatan tambahan
  { t: 'TI', a: [], l: 'Teknologi Informasi', k: 'singkat', cs: true, f: 'Bidang/tim yang mengurus sistem komputer, jaringan, dan aplikasi perusahaan (IT).' },
  { t: 'UI', a: [], l: 'User Interface', k: 'singkat', cs: true, f: 'Tampilan aplikasi yang dilihat dan dipakai pengguna.' },
  { t: 'KRS', a: [], l: 'Kartu Rencana Studi', k: 'singkat', cs: true, f: 'Daftar mata kuliah yang diambil mahasiswa dalam satu semester.' },
  { t: 'Key-value', a: ['key-value', 'Key-value store'], k: 'konsep', m: [3, 8],
    f: 'Model penyimpanan berupa pasangan kunci (key) dan nilai (value), misalnya "id_user" → data user. Dipakai DynamoDB dan juga format JSON.' },
  { t: 'RAM', a: [], l: 'Random Access Memory', k: 'singkat', cs: true, f: 'Memori kerja komputer yang sangat cepat tetapi sementara. Database in-memory seperti ElastiCache menyimpan data di RAM.' },
  { t: 'AWS Academy Data Engineering', a: [], k: 'kursus', m: [1], nolink: true, f: 'Nama kursus AWS yang menjadi dasar materi UTS ini (Modul 1-8: dari data-driven organizations sampai storing and organizing data).' },
  { t: 'ALSUT', a: [], l: 'Region Alam Sutera', k: 'kursus', cs: true, nolink: true, f: 'Kode kelas/region kampus. Soal ALSUT 1-10 sama dengan file Soal Latihan UTS dari dosen.' },
  { t: 'KMG', a: [], l: 'Region Kemanggisan', k: 'kursus', cs: true, nolink: true, f: 'Kode kelas/region kampus. Soal KMG 1-6 adalah quiz sebelum UTS.' },
  { t: 'DB', a: [], l: 'Database', k: 'singkat', cs: true, f: 'Basis data: tempat menyimpan data secara terstruktur agar mudah dicari dan diolah.' },
  { t: 'Drill-down', a: ['drill-down'], k: 'konsep', m: [2], f: 'Menggali data dari ringkasan ke rincian yang lebih detail, misalnya dari total nasional → per kota → per toko, untuk mencari penyebab masalah.' },
  { t: 'Customer churn', a: [], k: 'konsep', m: [2], f: 'Pelanggan yang berhenti belanja atau berlangganan. Biasanya diprediksi dengan predictive analytics/ML.' },
  { t: 'Fraud detection', a: ['real-time fraud detection'], k: 'konsep', m: [2], f: 'Mendeteksi transaksi curang atau mencurigakan, biasanya dengan model ML secara real-time.' },
  { t: 'Credit scoring', a: [], k: 'konsep', m: [2], f: 'Penilaian kelayakan kredit nasabah secara otomatis, biasanya memakai model ML.' }
]);
