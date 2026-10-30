/* Soal Quiz Sebelum UTS, Region Kemanggisan (KMG) 1-6. */
window.UTS = window.UTS || {};
UTS.essays = UTS.essays || [];

UTS.essays.push(
  {
    id: 'kmg1', region: 'KMG', no: 1, kisi: [1], modul: 'Modul 2',
    title: '4 jenis analitik di aplikasi food delivery',
    question: 'Sebuah aplikasi food delivery ingin memanfaatkan data untuk mengambil keputusan. Sebutkan empat jenis analitik, lalu tuliskan satu pertanyaan bisnis yang dijawab oleh masing-masing jenis pada aplikasi tersebut!',
    rinci: [
      { q: 'Sebutkan 4 jenis analitik secara berurutan.', a: '==Descriptive → Diagnostic → Predictive → Prescriptive==.' },
      { q: 'Descriptive menjawab apa? Contoh pertanyaan bisnisnya?', a: '**"What happened?"** Contoh: "Berapa total pesanan yang berhasil diantar di Jakarta Barat bulan lalu, dan kategori makanan apa yang paling laris?"' },
      { q: 'Diagnostic menjawab apa? Contoh pertanyaan bisnisnya?', a: '**"Why did something happen?"** Contoh: "Mengapa pembatalan pesanan naik 25% pada Jumat malam kemarin? Karena hujan deras, kurang driver aktif, atau gangguan sistem pembayaran?"' },
      { q: 'Predictive menjawab apa? Contoh pertanyaan bisnisnya?', a: '**"What will happen?"** Contoh: "Berapa perkiraan lonjakan pesanan saat makan siang besok di kawasan perkantoran Sudirman, dan restoran mana yang kemungkinan dipilih?"' },
      { q: 'Prescriptive menjawab apa? Contoh pertanyaan bisnisnya?', a: '**"How can we make something happen or prevent it?"** Contoh: "Berapa tarif dinamis (surge pricing) atau bonus yang harus diberikan sekarang agar driver bergeser ke area yang kekurangan kurir?"' },
      { q: 'Bagaimana hubungan tingkat analitik dengan value dan kesulitan?', a: 'Makin naik ke prescriptive, ==value makin tinggi== untuk keputusan proaktif, tetapi ==kesulitan, kebutuhan komputasi, dan kompleksitas data juga makin besar==.' }
    ],
    keys: [
      { label: 'Descriptive', kw: ['descriptive', 'deskriptif'] },
      { label: 'Diagnostic', kw: ['diagnostic', 'diagnostik'] },
      { label: 'Predictive', kw: ['predictive', 'prediktif'] },
      { label: 'Prescriptive', kw: ['prescriptive', 'preskriptif'] },
      { label: 'Pertanyaan berbentuk kalimat tanya', kw: ['berapa', 'mengapa', 'apa', 'bagaimana'] },
      { label: 'Konteks food delivery (pesanan/driver/restoran)', kw: ['pesanan', 'driver', 'restoran', 'kurir', 'makanan'] }
    ],
    tip: 'Untuk tiap jenis: **nama + pertanyaan kuncinya (What happened / Why / What will happen / How)** → **satu pertanyaan bisnis spesifik** dengan konteks food delivery (angka, lokasi, waktu).',
    a: [
      { h: 'Pembuka', b: 'Modul 2 membagi data analytics menjadi ==empat tingkat analitik==. Semakin naik dari descriptive ke prescriptive, nilai bisnisnya (==value==) semakin tinggi untuk mendukung keputusan proaktif, tetapi tingkat kesulitan, kebutuhan komputasi, dan kompleksitas datanya juga semakin besar.' },
      { h: '1. Descriptive Analytics ("What happened?")', b: 'Apa yang sudah terjadi di masa lalu; paling mudah dihasilkan dari laporan historis.<br>**Pertanyaan bisnis:** "Berapa total pesanan makanan yang berhasil diantar di wilayah Jakarta Barat selama bulan lalu, dan kategori makanan apa yang paling laris?"' },
      { h: '2. Diagnostic Analytics ("Why did something happen?")', b: 'Mencari akar penyebab masalah.<br>**Pertanyaan bisnis:** "Mengapa terjadi lonjakan pembatalan pesanan sebesar 25% pada hari Jumat malam kemarin? Apakah karena hujan deras, kurangnya mitra driver yang aktif, atau gangguan pada sistem pembayaran?"' },
      { h: '3. Predictive Analytics ("What will happen?")', b: 'Memakai pola historis dan model statistik/ML untuk meramal.<br>**Pertanyaan bisnis:** "Berapa perkiraan lonjakan jumlah pesanan yang akan masuk pada jam makan siang besok di kawasan perkantoran Sudirman, dan restoran mana yang kemungkinan besar akan dipilih pelanggan?"' },
      { h: '4. Prescriptive Analytics ("How can we make something happen or prevent something from happening?")', b: 'Memberi rekomendasi tindakan optimal.<br>**Pertanyaan bisnis:** "Berapa besaran tarif dinamis (surge pricing) atau insentif bonus yang harus diberikan kepada driver saat ini juga agar mereka mau bergeser ke area yang kekurangan kurir sehingga keterlambatan pengantaran bisa dicegah?"' }
    ]
  },

  {
    id: 'kmg2', region: 'KMG', no: 2, kisi: [1], modul: 'Modul 2, 4',
    title: 'Modernize, Unify, Innovate di sebuah bank',
    question: 'Sebuah bank memiliki data nasabah yang tersebar di sistem lama, spreadsheet cabang, dan aplikasi mobile banking. Jelaskan arti strategi modernize, unify, dan innovate, lalu berikan satu contoh penerapan untuk masing-masing strategi di bank tersebut!',
    rinci: [
      { q: 'Apa arti Modernize?', a: 'Pindah ke ==cloud dengan layanan khusus (purpose-built)==, meninggalkan sistem lama yang mahal dan kaku, sehingga infrastruktur elastis dan tim TI tidak lagi merawat server fisik.' },
      { q: 'Contoh Modernize di bank?', a: 'Memigrasikan database sistem lama (on-premises) ke {{Amazon Aurora}} / {{Amazon RDS}} memakai {{AWS DMS}}.' },
      { q: 'Apa arti Unify?', a: 'Meruntuhkan sekat data (==break down data silos==), mengumpulkan semua data ke satu data lake terpusat (==single source of truth==), mendemokratisasi akses, dan menerapkan ==unified governance==.' },
      { q: 'Contoh Unify di bank?', a: 'Menyatukan data sistem lama, spreadsheet cabang, dan mobile banking ke {{Amazon S3}} data lake, mencatat skema di {{AWS Glue Data Catalog}}, mengatur izin dengan {{AWS Lake Formation}}.' },
      { q: 'Apa arti Innovate?', a: 'Beralih dari keputusan ==reaktif menjadi proaktif dan prediktif== dengan AI/ML untuk menggali insight baru, terutama dari data tidak terstruktur.' },
      { q: 'Contoh Innovate di bank?', a: '{{Amazon SageMaker}} atau {{Amazon Redshift ML}} untuk ==real-time fraud detection== di mobile banking atau credit scoring otomatis.' }
    ],
    keys: [
      { label: 'Modernize', kw: ['modernize', 'modernisasi'] },
      { label: 'Unify', kw: ['unify'] },
      { label: 'Innovate', kw: ['innovate', 'inovasi'] },
      { label: 'Cloud / purpose-built', kw: ['cloud', 'purpose built', 'migrasi'] },
      { label: 'Data silo / single source of truth', kw: ['silo', 'single source of truth', 'sumber kebenaran'] },
      { label: 'S3 / Glue Data Catalog / Lake Formation', kw: ['s3', 'glue', 'lake formation'] },
      { label: 'AI/ML (SageMaker)', kw: ['sagemaker', 'machine learning', 'ai', 'ml'] },
      { label: 'Contoh bank (fraud / credit scoring)', kw: ['fraud', 'credit', 'kredit', 'nasabah'] }
    ],
    tip: 'Tiga paragraf: **arti strategi → contoh di bank (dengan layanan AWS)**. Urutkan Modernize → Unify → Innovate.',
    a: [
      { h: '1. Modernize (pindah ke cloud dengan layanan purpose-built)', filled: true, b: 'Artinya memigrasikan sistem penyimpanan lama ke ==cloud dengan layanan khusus (purpose-built)== supaya infrastruktur elastis, murah, compute dan storage terpisah (loosely coupled), dan tim TI terbebas dari perawatan server fisik.<br>**Contoh di bank:** memigrasikan database nasabah di sistem lama (on-premises) ke {{Amazon Aurora}} / {{Amazon RDS}} memakai {{AWS DMS}}, sehingga bank tidak perlu lagi merawat server fisiknya sendiri.' },
      { h: '2. Unify (menyatukan data demi single source of truth)', b: 'Artinya meruntuhkan sekat-sekat data yang terisolasi (==break down data silos==) dengan mengumpulkan seluruh data ke satu data lake terpusat, mendemokratisasi akses agar pengguna bisnis bisa langsung mengolah data tanpa birokrasi tim TI, serta menerapkan tata kelola (==unified governance==) yang terpusat.<br>**Contoh di bank:** mengintegrasikan data nasabah dari sistem lama, file spreadsheet seluruh cabang, dan data aktivitas mobile banking ke {{Amazon S3 Data Lake}}, mencatat skemanya di {{AWS Glue Data Catalog}}, dan mengatur izin aksesnya dengan {{AWS Lake Formation}} sehingga seluruh divisi bank mengacu pada satu sumber kebenaran data nasabah yang sama.' },
      { h: '3. Innovate (berinovasi dengan AI/ML)', b: 'Artinya beralih dari keputusan yang reaktif menjadi ==proaktif dan prediktif== dengan menerapkan AI/ML untuk menggali insight baru secara cepat, terutama dari tumpukan data tidak terstruktur.<br>**Contoh di bank:** memanfaatkan {{Amazon SageMaker}} atau {{Amazon Redshift ML}} untuk melatih model pendeteksi transaksi mencurigakan (==real-time fraud detection==) saat nasabah bertransaksi di mobile banking, atau memprediksi kelayakan kredit (credit scoring) secara otomatis.' }
    ]
  },

  {
    id: 'kmg3', region: 'KMG', no: 3, kisi: [2], modul: 'Modul 3',
    title: 'Mengelompokkan data rumah sakit: structured, semi, unstructured',
    question: 'Sebuah rumah sakit menyimpan data rekam medis dalam tabel, hasil pemeriksaan laboratorium dalam format JSON, dan foto rontgen. Kelompokkan ketiganya ke dalam data terstruktur, semi-terstruktur, atau tidak terstruktur, dan jelaskan alasannya!',
    rinci: [
      { q: 'Rekam medis dalam tabel termasuk tipe apa? Kenapa?', a: '==Data terstruktur ("hotter")==: tersusun dalam ==baris dan kolom== dengan skema ketat sejak awal, paling mudah di-query dengan SQL, tetapi paling tidak fleksibel.' },
      { q: 'Hasil lab dalam JSON termasuk tipe apa? Kenapa?', a: '==Data semi-terstruktur ("lukewarm")==: tidak terikat skema tabel kaku, tetapi punya ==struktur yang menjelaskan dirinya sendiri (self-describing)== lewat pasangan key-value. Fleksibel, tetapi perlu parsing.' },
      { q: 'Foto rontgen termasuk tipe apa? Kenapa?', a: '==Data tidak terstruktur ("colder")==: gambar biner ==tanpa struktur internal atau skema terdefinisi==. Paling fleksibel dan kaya insight, tetapi paling sulit di-query; perlu AI/ML seperti computer vision.' },
      { q: 'Apa arti "hot" dan "cold" pada tipe data?', a: '"Hot" = ==paling mudah di-query== (structured). "Cold" = ==paling sulit di-query tetapi paling fleksibel== (unstructured).' },
      { q: 'Contoh lain data semi-terstruktur menurut rangkuman?', a: '==CSV, JSON, dan XML==.' }
    ],
    keys: [
      { label: 'Terstruktur (structured)', kw: ['terstruktur', 'structured'] },
      { label: 'Semi-terstruktur', kw: ['semi'] },
      { label: 'Tidak terstruktur', kw: ['tidak terstruktur', 'unstructured'] },
      { label: 'Baris dan kolom / tabel', kw: ['baris', 'kolom', 'tabel'] },
      { label: 'Skema (schema)', kw: ['skema', 'schema'] },
      { label: 'Key-value / self-describing', kw: ['key', 'self describing', 'menjelaskan dirinya', 'tag'] },
      { label: 'SQL / mudah di-query', kw: ['sql', 'query'] },
      { label: 'AI/ML / computer vision untuk gambar', kw: ['computer vision', 'machine learning', 'ml', 'ai'] }
    ],
    tip: 'Format: **Data → Kategori → Alasan (struktur/skema, kemudahan query, fleksibilitas)**. Tambahkan istilah hot / lukewarm / cold supaya terlihat paham Modul 3.',
    a: [
      { h: 'Dasar pengelompokan (Modul 3, elemen Variety)', b: 'Tipe data dibagi menjadi tiga kategori berdasarkan kekakuan skema, kemudahan query ("hotter"), dan fleksibilitasnya ("colder").' },
      { h: '1. Rekam medis dalam tabel → Data Terstruktur ("Hotter")', b: '**Alasan:** data diorganisasikan rapi ke dalam ==baris dan kolom (format tabular)== dengan skema yang ditentukan ketat sejak awal (well-defined schema). Karena strukturnya baku, data ini paling mudah dan cepat di-query dengan SQL ("hot"), meskipun paling tidak fleksibel jika ada perubahan struktur.' },
      { h: '2. Hasil lab dalam JSON → Data Semi-Terstruktur ("Lukewarm")', b: '**Alasan:** berkas JSON tidak terikat pada skema tabel relasional yang kaku, tetapi memiliki ==struktur yang menjelaskan dirinya sendiri (self-describing structure)== melalui penanda/tag elemen dan atribut (pasangan key-value). Lebih fleksibel bila ada parameter lab baru, tetapi biasanya perlu sedikit proses penguraian (parsing) sebelum dianalisis.' },
      { h: '3. Foto rontgen → Data Tidak Terstruktur ("Colder")', b: '**Alasan:** foto rontgen adalah berkas citra medis (gambar biner) yang ==sama sekali tidak memiliki struktur internal atau skema yang terdefinisi== (no predefined structure). Paling fleksibel dan menyimpan potensi insight medis yang kaya, tetapi paling sulit di-query ("cold") karena harus diolah dengan model AI/ML (seperti computer vision) untuk mengenali pola penyakit.' }
    ]
  },

  {
    id: 'kmg4', region: 'KMG', no: 4, kisi: [2], modul: 'Modul 3',
    title: 'Tabel 5V untuk perusahaan taksi online',
    question: 'Sebuah perusahaan taksi online mengumpulkan jutaan titik lokasi kendaraan setiap jam dari aplikasi pengemudi, data pembayaran dari sistem keuangan, dan ulasan penumpang berupa teks. Petakan kondisi ini ke lima V data (volume, velocity, variety, veracity, value) dalam bentuk tabel!',
    rinci: [
      { q: 'Volume: bagian kasus mana dan apa konsekuensinya?', a: '==Jutaan titik lokasi setiap jam== + riwayat pembayaran + teks ulasan, skala terabyte sampai petabyte, butuh penyimpanan elastis seperti {{Amazon S3}}.' },
      { q: 'Velocity: bagian kasus mana?', a: 'Titik lokasi GPS ==mengalir cepat setiap jam== dari aplikasi pengemudi, ditambah pembayaran dan ulasan yang terus masuk setiap perjalanan selesai.' },
      { q: 'Variety: apa saja 3 sumber dan tipenya?', a: '(1) GPS: koordinat + waktu (==semi-terstruktur==, misal JSON), (2) pembayaran dari sistem keuangan (==terstruktur==, tabel), (3) ulasan teks (==tidak terstruktur==).' },
      { q: 'Veracity: masalah keandalan apa yang mungkin muncul?', a: 'Titik GPS bisa ==melenceng atau hilang sinyal==, transaksi bisa tercatat ganda, ulasan bisa spam atau ambigu. Perlu cleaning dan validating.' },
      { q: 'Value: manfaat apa yang bisa diambil?', a: 'Optimasi rute dan penempatan driver, harga dinamis, deteksi fraud pembayaran, dan perbaikan layanan dari analisis sentimen ulasan.' },
      { q: 'Kolom apa saja yang sebaiknya ada di tabel jawaban?', a: '==Dimensi 5V | Konsep Modul 3 | Pemetaan pada kasus==.' }
    ],
    keys: [
      { label: 'Volume', kw: ['volume'] },
      { label: 'Velocity', kw: ['velocity'] },
      { label: 'Variety', kw: ['variety'] },
      { label: 'Veracity', kw: ['veracity'] },
      { label: 'Value', kw: ['value'] },
      { label: 'GPS / titik lokasi', kw: ['gps', 'lokasi'] },
      { label: 'Pembayaran (terstruktur)', kw: ['pembayaran'] },
      { label: 'Ulasan teks (tidak terstruktur)', kw: ['ulasan', 'teks'] },
      { label: 'Tipe data (structured/semi/unstructured)', kw: ['terstruktur', 'structured'] }
    ],
    tip: 'Soal minta **bentuk tabel**. Buat 3 kolom: Dimensi 5V, Konsep Modul 3, Pemetaan pada kasus. Isi 5 baris.',
    a: [
      { h: 'Tabel 5V (bagian 1): Volume & Velocity', b: '<table class="tbl"><tr><th>Dimensi 5V</th><th>Konsep Modul 3</th><th>Pemetaan pada kasus taksi online</th></tr><tr><td>**1. Volume** (ukuran data)</td><td>Seberapa besar ukuran dataset & berapa banyak data baru yang dihasilkan.</td><td>Akumulasi ==jutaan titik lokasi kendaraan== setiap jam ditambah seluruh riwayat transaksi pembayaran dan teks ulasan penumpang, menghasilkan data raksasa (skala terabyte hingga petabyte), sehingga butuh penyimpanan elastis seperti {{Amazon S3}}.</td></tr><tr><td>**2. Velocity** (kecepatan)</td><td>Seberapa cepat/sering data baru dibuat, masuk, dan harus diproses.</td><td>Data titik lokasi GPS mengalir dan dikumpulkan cepat ==setiap jam== dari aplikasi pengemudi, disertai transaksi pembayaran dan ulasan yang terus masuk setiap kali perjalanan selesai.</td></tr></table>' },
      { h: 'Tabel 5V (bagian 2): Variety, Veracity, Value', filled: true, b: '<table class="tbl"><tr><th>Dimensi 5V</th><th>Konsep Modul 3</th><th>Pemetaan pada kasus taksi online</th></tr><tr><td>**3. Variety** (keberagaman)</td><td>Berapa banyak format, tipe, dan sumber data yang berbeda.</td><td>Menggabungkan ==3 sumber dan format berbeda==: (1) titik lokasi GPS dari aplikasi pengemudi (koordinat + waktu, ==semi-terstruktur== seperti JSON), (2) data pembayaran dari sistem keuangan (==terstruktur==, tabel), (3) ulasan penumpang berupa teks bebas (==tidak terstruktur==).</td></tr><tr><td>**4. Veracity** (keandalan)</td><td>Seberapa akurat dan bisa dipercaya data tersebut.</td><td>Titik GPS bisa melenceng atau hilang saat sinyal lemah, transaksi bisa tercatat ganda, dan ulasan bisa berisi spam atau bahasa yang ambigu. Perlu cleaning (hapus duplikat & anomali) dan validating sebelum dipakai.</td></tr><tr><td>**5. Value** (nilai)</td><td>Manfaat bisnis yang bisa diambil dari data.</td><td>Optimasi rute dan penempatan driver, penentuan harga dinamis, deteksi kecurangan pembayaran, dan perbaikan layanan dari analisis sentimen ulasan penumpang.</td></tr></table>' }
    ]
  },

  {
    id: 'kmg5', region: 'KMG', no: 5, kisi: [3], modul: 'Modul 4, 7',
    title: 'Jenis ingestion untuk 3 sumber data universitas',
    question: 'Sebuah universitas memiliki tiga sumber data: basis data akademik on-premises yang perubahannya harus selalu sinkron dengan cloud, berkas CSV nilai yang diunggah dosen setiap akhir semester, dan log aktivitas mahasiswa di aplikasi kuliah yang masuk terus-menerus dalam jumlah besar. Tentukan jenis ingestion untuk setiap sumber dan jelaskan alasannya!',
    rinci: [
      { q: 'Apa yang menentukan pilihan metode ingestion?', a: 'Kombinasi ==volume, velocity, dan karakteristik sumber data==, serta seberapa cepat data harus tersedia di pipeline.' },
      { q: 'Basis data akademik yang harus selalu sinkron → ingestion apa?', a: '==Continuous replication / Change Data Capture (CDC)== dengan {{AWS DMS}}: mereplikasi setiap perubahan baris secara berkelanjutan dengan downtime mendekati nol.' },
      { q: 'Berkas CSV nilai akhir semester → ingestion apa?', a: '==Batch ingestion==: velocity rendah dan terjadwal (sekali per semester), tidak butuh detik-ke-detik. Pakai {{AWS DataSync}} atau {{AWS Glue}}, lebih hemat biaya.' },
      { q: 'Log aktivitas mahasiswa terus-menerus → ingestion apa?', a: '==Streaming ingestion== dengan {{Kinesis Data Streams}} atau {{Amazon Data Firehose}}: pesan kecil, mengalir terus, velocity & volume tinggi. Stream jadi ==buffer== agar log tidak hilang dan tujuan tidak kewalahan.' },
      { q: 'Kenapa CDC lebih cocok dari batch biasa untuk database akademik?', a: 'Karena syaratnya ==perubahan harus selalu sinkron== tanpa mengganggu sistem utama (OLTP), tidak bisa menunggu jeda berjam-jam seperti batch.' }
    ],
    keys: [
      { label: 'CDC / replikasi berkelanjutan', kw: ['cdc', 'change data capture', 'replikasi', 'sinkron'] },
      { label: 'AWS DMS', kw: ['dms', 'database migration'] },
      { label: 'Batch ingestion', kw: ['batch'] },
      { label: 'DataSync / Glue', kw: ['datasync', 'glue'] },
      { label: 'Streaming ingestion', kw: ['stream'] },
      { label: 'Kinesis / Firehose', kw: ['kinesis', 'firehose'] },
      { label: 'Volume & velocity', kw: ['volume', 'velocity'] },
      { label: 'Alasan', kw: ['karena', 'alasan'] }
    ],
    tip: 'Buka dengan faktor penentu (volume, velocity, karakteristik sumber). Lalu **3 baris: sumber → jenis ingestion → layanan AWS → alasan**.',
    a: [
      { h: 'Faktor penentu', b: 'Pemilihan metode ingestion ditentukan oleh kombinasi ==volume, velocity, dan karakteristik sumber data==, serta seberapa cepat data harus tersedia di pipeline.' },
      { h: '1. Basis data akademik on-premises (harus selalu sinkron) → Continuous Replication / Change Data Capture (CDC) dengan AWS DMS', b: '**Alasan:** sumbernya database relasional operasional (OLTP) yang menyimpan transaksi akademik penting (pengisian KRS, perubahan status mahasiswa). Karena syarat utamanya ==perubahan harus selalu sinkron dengan cloud== tanpa mengganggu kinerja sistem utama, dipakai mekanisme CDC pada {{AWS Database Migration Service (AWS DMS)}} yang mereplikasi setiap perubahan baris data secara berkelanjutan dengan downtime mendekati nol (tidak menunggu jeda berjam-jam seperti batch).' },
      { h: '2. Berkas CSV nilai akhir semester → Batch Ingestion', b: '**Alasan:** data nilai memiliki velocity rendah dan terjadwal periodik, yaitu ==dikumpulkan lalu diunggah sekaligus satu kali setiap akhir semester== dalam bentuk kumpulan rekaman (.csv). Universitas tidak butuh pemrosesan detik demi detik, sehingga batch (misalnya {{AWS DataSync}} atau {{AWS Glue}}) jauh lebih hemat biaya dan efisien untuk memvalidasi serta memuat seluruh nilai sekaligus.' },
      { h: '3. Log aktivitas mahasiswa (terus-menerus, jumlah besar) → Streaming Ingestion dengan Kinesis Data Streams atau Amazon Data Firehose', b: '**Alasan:** log aktivitas (clickstream/event log) menghasilkan pesan kecil yang mengalir ==terus-menerus dengan velocity dan volume sangat tinggi== setiap kali ribuan mahasiswa membuka materi atau mengerjakan kuis. Streaming ingestion diperlukan sebagai ==penyangga (buffer)== yang menangkap aliran event secara real-time agar tidak ada log yang hilang dan penyimpanan tujuan tidak kewalahan.' }
    ]
  },

  {
    id: 'kmg6', region: 'KMG', no: 6, kisi: [3], modul: 'Modul 2, 6, 8',
    title: 'Tahapan pipeline dashboard pendaftar baru pukul 07.00',
    question: 'Sebuah universitas ingin menampilkan dashboard jumlah pendaftar baru pukul 07.00 setiap pagi dari data formulir pendaftaran online yang tersimpan di basis data. Uraikan tahapan data pipeline dari data masuk hingga tampil di dashboard, dengan menyebutkan fungsi tiap tahap!',
    rinci: [
      { q: 'Pipeline seperti apa yang cocok, real-time atau batch? Kenapa?', a: '==Scheduled batch data pipeline== (misal jalan otomatis pukul 05.30), karena dashboard cukup diperbarui sekali tiap pukul 07.00, tidak perlu real-time.' },
      { q: 'Tahap 1 Ingestion: fungsi dan penerapannya?', a: 'Fungsi: menghubungkan pipeline ke sumber dan ==menarik (extract) data baru==. Penerapan: batch job {{AWS Glue}} atau {{AWS DMS}} menarik pendaftar baru sejak kemarin, memakai ==Job Bookmarks== agar data lama tidak ditarik ulang.' },
      { q: 'Tahap 2 Storage: fungsi dan penerapannya?', a: 'Fungsi: menyimpan data dengan aman, ==durable, scalable==, dan mencatat metadata. Penerapan: data mentah ke landing/raw zone {{Amazon S3}}, {{AWS Glue Crawler}} memindai skema ke {{Glue Data Catalog}}.' },
      { q: 'Tahap 3 Processing: fungsi dan penerapannya?', a: 'Fungsi: ==transform, membersihkan, menormalisasi, memperkaya, memvalidasi==. Penerapan: {{AWS Glue (Spark)}}: cleaning (hapus pendaftar dobel klik, seragamkan format tanggal), enriching (kode prodi → nama fakultas, hitung jumlah pendaftar), validating. Hasil ke curated zone.' },
      { q: 'Tahap 4 Analysis & Visualization: fungsi dan penerapannya?', a: 'Fungsi: menyajikan data jadi insight. Penerapan: {{Amazon Athena}} / {{Amazon Redshift}} meng-query data curated, {{Amazon QuickSight}} menampilkan dashboard yang sudah diperbarui sebelum 07.00.' },
      { q: 'Kenapa perlu menghapus duplikat di tahap processing?', a: 'Calon mahasiswa bisa ==mengklik tombol daftar dua kali==, jadi jumlah pendaftar di dashboard akan terlalu besar kalau duplikat tidak dihapus.' }
    ],
    keys: [
      { label: 'Batch terjadwal (bukan real-time)', kw: ['batch', 'terjadwal', 'jadwal', 'scheduled'] },
      { label: 'Ingestion + fungsinya', kw: ['ingestion', 'extract', 'menarik'] },
      { label: 'Storage + fungsinya', kw: ['storage', 'penyimpanan', 's3'] },
      { label: 'Processing + fungsinya', kw: ['processing', 'pengolahan', 'transform'] },
      { label: 'Analysis & visualization', kw: ['analysis', 'visualisasi', 'dashboard'] },
      { label: 'AWS Glue', kw: ['glue'] },
      { label: 'Glue Data Catalog / crawler', kw: ['catalog', 'crawler', 'katalog'] },
      { label: 'Cleaning duplikat', kw: ['duplikat', 'cleaning', 'dobel', 'ganda'] },
      { label: 'Amazon QuickSight', kw: ['quicksight'] }
    ],
    tip: 'Sebut dulu jenis pipeline-nya (batch terjadwal sebelum 07.00). Lalu 4 tahap dengan pola **Fungsi:** ... **Penerapan di kasus:** ... (sebut layanan AWS).',
    a: [
      { h: 'Jenis pipeline', b: 'Karena target bisnisnya menampilkan laporan setiap pukul 07.00 pagi (bukan real-time), universitas dapat merancang ==Scheduled Batch Data Pipeline== (misalnya dijalankan otomatis pukul 05.30) yang melewati ==4 lapisan utama pipeline==.' },
      { h: '1. Tahap Ingestion (pengumpulan & ekstraksi data)', b: '**Fungsi:** menghubungkan pipeline ke sumber data eksternal, menyeleksi, dan menarik (extract) data baru ke dalam pipeline.<br>**Penerapan:** setiap dini hari sebelum 07.00, batch job terjadwal pada {{AWS Glue}} atau {{AWS DMS}} terhubung ke basis data formulir pendaftaran online untuk menarik seluruh baris pendaftar baru sejak hari sebelumnya (memakai fitur ==Job Bookmarks== agar tidak menarik ulang data lama).' },
      { h: '2. Tahap Storage (penyimpanan mentah & katalog)', b: '**Fungsi:** menyediakan penyimpanan yang aman, tahan lama (==durable==), dan terukur (==scalable==) untuk menampung data sebelum dan sesudah diolah, sekaligus mencatat metadatanya.<br>**Penerapan:** data mentah formulir disimpan ke ==landing/raw zone== di {{Amazon S3 Data Lake}}, lalu {{AWS Glue Crawler}} memindai skemanya dan menyimpannya ke {{AWS Glue Data Catalog}}.' },
      { h: '3. Tahap Processing / Data Wrangling', b: '**Fungsi:** mengubah (transform), membersihkan, menormalisasi, memperkaya, dan memvalidasi data mentah agar siap dikonsumsi.<br>**Penerapan:** {{AWS Glue (Spark)}} menjalankan wrangling: ==Cleaning== (menghapus duplikasi jika calon mahasiswa mengklik tombol daftar dua kali, menyeragamkan format tanggal), ==Enriching== (menggabungkan kode prodi dengan nama fakultas serta menghitung agregasi jumlah pendaftar), dan ==Validating== (memastikan data sudah benar).' },
      { h: '3. (lanjutan) Hasil pengolahan', filled: true, b: 'Validating memeriksa jumlah baris, format, dan duplikat sebelum data dipublikasikan. Hasil yang bersih disimpan ke ==curated zone== di Amazon S3 (format Parquet) atau dimuat ke {{Amazon Redshift}} (langkah Publishing).' },
      { h: '4. Tahap Analysis & Visualization', filled: true, b: '**Fungsi:** menyajikan data yang sudah siap menjadi informasi untuk pengambil keputusan.<br>**Penerapan:** {{Amazon Athena}} atau {{Amazon Redshift}} meng-query data curated, lalu dataset {{Amazon QuickSight}} diperbarui (refresh) setelah job selesai sehingga dashboard jumlah pendaftar baru sudah tampil pukul 07.00. Seluruh urutan job dijadwalkan dengan Glue workflow/trigger.' }
    ]
  }
);
