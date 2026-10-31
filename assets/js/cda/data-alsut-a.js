/* Soal ALSUT 1-5 (sama dengan Soal Latihan UTS dosen). Kunci jawaban dari "Master Guide & Pembahasan Quiz".
 * Bagian dengan filled: true terpotong di PDF pembahasan, jadi dilengkapi dari Rangkuman Modul 1-8. */
window.UTS = window.UTS || {};
UTS.essays = UTS.essays || [];

UTS.essays.push(
  {
    id: 'alsut1', region: 'ALSUT', no: 1, kisi: [1], modul: 'Modul 2',
    title: '4 jenis analitik untuk e-commerce yang penjualannya turun',
    question: 'Sebuah perusahaan e-commerce mengalami penurunan penjualan selama tiga bulan terakhir. Manajemen ingin memahami kondisi bisnis saat ini, mengidentifikasi faktor penyebab penurunan, memperkirakan perkembangan penjualan, dan menentukan strategi untuk meningkatkan kinerja perusahaan. Analisis bagaimana perusahaan dapat memanfaatkan berbagai pendekatan analitik untuk memenuhi kebutuhan tersebut. Tentukan jenis analitik yang sesuai untuk setiap kebutuhan manajemen dan jelaskan alasan pemilihannya!',
    rinci: [
      { q: 'Kebutuhan "memahami kondisi bisnis saat ini" cocok dengan jenis analitik apa? Pertanyaan apa yang dijawabnya?', a: '==Descriptive analytics==, menjawab **"What happened?"** (apa yang sudah terjadi). Contoh: total pendapatan, jumlah transaksi harian, dan kategori produk yang turun selama 3 bulan terakhir.' },
      { q: 'Kebutuhan "mengidentifikasi faktor penyebab penurunan" cocok dengan analitik apa?', a: '==Diagnostic analytics==, menjawab **"Why did something happen?"**. Caranya drill-down dan korelasi data historis (trafik web, cart abandonment, waktu muat aplikasi, harga kompetitor) untuk menghasilkan ==hipotesis akar masalah== yang berbasis bukti.' },
      { q: 'Kebutuhan "memperkirakan perkembangan penjualan" cocok dengan analitik apa?', a: '==Predictive analytics==, menjawab **"What will happen?"**. Memakai model statistik atau ML ({{Amazon SageMaker}} / {{Redshift ML}}) untuk meramal penjualan kuartal berikutnya dan memprediksi pelanggan yang berisiko berhenti (==customer churn==).' },
      { q: 'Kebutuhan "menentukan strategi meningkatkan kinerja" cocok dengan analitik apa?', a: '==Prescriptive analytics==, menjawab **"How can we make something happen?"**. Memberi saran tindakan optimal lewat simulasi optimasi dan sistem rekomendasi AI/ML, misalnya promo terpersonalisasi untuk pelanggan yang hampir churn atau penyesuaian stok.' },
      { q: 'Prinsip Modul 2 apa yang dipakai untuk membuka jawaban soal ini?', a: '==Work Backwards==: bekerja mundur dari masalah bisnis ke data. Langkah pertama saat penjualan turun adalah memahami data historis dengan alat ==BI== sebelum melompat ke solusi teknis.' },
      { q: 'Apa yang berubah ketika naik dari descriptive ke prescriptive?', a: '==Nilai bisnis (value) makin tinggi==, tetapi tingkat kesulitan, kebutuhan komputasi, dan kompleksitas datanya juga makin besar.' },
      { q: 'Kenapa prescriptive analytics dianggap memberi nilai bisnis tertinggi?', a: 'Karena prescriptive langsung ==mengarahkan tindakan optimal== untuk membalikkan keadaan penjualan, tidak berhenti di laporan atau prediksi.' }
    ],
    keys: [
      { label: 'Descriptive analytics', kw: ['descriptive', 'deskriptif'] },
      { label: 'Diagnostic analytics', kw: ['diagnostic', 'diagnostik'] },
      { label: 'Predictive analytics', kw: ['predictive', 'prediktif'] },
      { label: 'Prescriptive analytics', kw: ['prescriptive', 'preskriptif'] },
      { label: '"What happened?" / apa yang terjadi', kw: ['what happened', 'apa yang terjadi', 'apa yang sudah terjadi'] },
      { label: '"Why?" / mengapa terjadi', kw: ['why', 'mengapa', 'kenapa', 'penyebab'] },
      { label: 'Work backwards / mulai dari masalah bisnis', kw: ['work backward', 'masalah bisnis', 'bekerja mundur'] },
      { label: 'Alat BI (QuickSight)', kw: ['quicksight', 'business intelligence', 'bi', 'dashboard'] },
      { label: 'Model ML untuk prediksi (SageMaker)', kw: ['sagemaker', 'machine learning', 'redshift ml', 'ml', 'model'] },
      { label: 'Churn / promo / rekomendasi', kw: ['churn', 'promo', 'rekomendasi', 'diskon'] },
      { label: 'Alasan pemilihan', kw: ['karena', 'alasan', 'sebab'] }
    ],
    tip: '(1) Buka dengan prinsip ==Work Backwards== + 4 tingkat analitik. (2) Untuk tiap kebutuhan tulis: jenis analitik → pertanyaan kuncinya → cara pemanfaatan (alat/layanan) → alasan. (3) Tutup: makin ke prescriptive, value makin tinggi tetapi makin kompleks.',
    a: [
      { h: 'Pembuka: prinsip Modul 2', b: 'Modul 2 menjelaskan prinsip ==Work Backwards== (bekerja mundur dari masalah bisnis ke data) dan ==4 tingkatan analitik== yang saling berkesinambungan. Sesuai pola soal ujian Modul 2, langkah pertama yang tepat saat penjualan turun adalah memahami data historis dengan BI sebelum melompat ke solusi teknis.' },
      { h: 'Kebutuhan 1: Memahami kondisi bisnis saat ini → Descriptive Analytics ("What happened?")', b: 'Pakai alat Business Intelligence seperti {{Amazon QuickSight}} untuk merangkum metrik penjualan 3 bulan terakhir: total pendapatan, jumlah transaksi harian, dan kategori produk yang turun.<br>**Alasan:** manajemen butuh potret faktual tentang seberapa besar penurunan yang terjadi dan di bagian mana penurunan itu terkonsentrasi sebelum bisa menyusun hipotesis.' },
      { h: 'Kebutuhan 2: Mengidentifikasi faktor penyebab → Diagnostic Analytics ("Why did something happen?")', b: 'Lakukan drill-down dan korelasi data historis, misalnya membandingkan trafik web, tingkat keranjang belanja yang ditinggalkan (cart abandonment), waktu muat aplikasi, atau harga kompetitor.<br>**Alasan:** analisis diagnostik dengan alat BI dilakukan untuk ==menghasilkan hipotesis akar masalah== yang berbasis bukti (apakah karena UI aplikasi rumit, stok habis, atau pelanggan tidak puas) agar perusahaan tidak salah mengambil langkah perbaikan.' },
      { h: 'Kebutuhan 3: Memperkirakan perkembangan penjualan → Predictive Analytics ("What will happen?")', b: 'Manfaatkan model statistik atau Machine Learning ({{Amazon SageMaker}} / {{Redshift ML}}) pada data tren historis dan perilaku pelanggan untuk meramal penjualan kuartal berikutnya serta memprediksi pelanggan yang berisiko berhenti belanja (==customer churn==).<br>**Alasan:** membantu manajemen mengantisipasi potensi kerugian lebih lanjut secara proaktif sebelum benar-benar terjadi.' },
      { h: 'Kebutuhan 4: Menentukan strategi → Prescriptive Analytics ("How can we make something happen?")', b: 'Gunakan simulasi optimasi dan sistem rekomendasi AI/ML untuk memberi saran tindakan spesifik, misalnya promo diskon terpersonalisasi untuk segmen pelanggan yang hampir churn atau penyesuaian stok barang.<br>**Alasan:** analitik preskriptif memberi ==nilai bisnis tertinggi== karena langsung mengarahkan tindakan optimal untuk membalikkan keadaan penjualan.' }
    ]
  },

  {
    id: 'alsut2', region: 'ALSUT', no: 2, kisi: [1], modul: 'Modul 2',
    title: 'Data Analytics vs AI/ML untuk pengambilan keputusan',
    question: 'Jelaskan perbedaan pendekatan Data Analytics dan Artificial Intelligence/Machine Learning (AI/ML) dalam menghasilkan informasi untuk pengambilan keputusan. Berikan contoh kebutuhan bisnis yang sesuai untuk masing-masing pendekatan dan jelaskan alasannya!',
    rinci: [
      { q: 'Apa persamaan Data Analytics dan AI/ML?', a: 'Keduanya sama-sama cabang ==data science== yang mendukung pengambilan keputusan dan prediksi.' },
      { q: 'Perbedaan utama keduanya terletak di dua hal. Apa saja?', a: '(1) ==Cara menghasilkan kesimpulan== dan (2) ==karakteristik data yang diolah==.' },
      { q: 'Bagaimana cara kerja Data Analytics?', a: 'Memakai logika pemrograman dan ==aturan yang ditentukan manusia== (programmed rules / rule-based logic) serta metode statistik untuk menemukan pola dan menjawab pertanyaan bisnis.' },
      { q: 'Data Analytics cocok untuk data seperti apa?', a: '==Data terstruktur== dengan jumlah variabel yang terbatas dan jelas.' },
      { q: 'Bagaimana cara kerja AI/ML?', a: '==Model belajar sendiri dari contoh data== (training) untuk menemukan pola dan membuat prediksi, tanpa manusia menulis aturannya satu per satu.' },
      { q: 'AI/ML cocok untuk data seperti apa?', a: 'Data yang ==rumit atau tidak terstruktur== (teks, gambar, clickstream) dengan banyak variabel.' },
      { q: 'Contoh kebutuhan bisnis untuk Data Analytics?', a: 'Segmentasi pelanggan ritel berdasarkan ==total belanja tahunan== untuk menentukan penerima layanan VIP. Aturannya jelas (misal belanja > Rp10 juta = Gold), data rapi di tabel transaksi, cukup diolah dengan SQL/BI.' },
      { q: 'Contoh kebutuhan bisnis untuk AI/ML?', a: 'Menebak pelanggan yang akan berhenti (==churn==) atau mendeteksi transaksi mencurigakan (fraud). Polanya terlalu rumit untuk ditulis sebagai aturan manual.' }
    ],
    keys: [
      { label: 'Data analytics', kw: ['data analytics', 'analitik'] },
      { label: 'AI/ML', kw: ['machine learning', 'ai', 'ml', 'kecerdasan buatan'] },
      { label: 'Aturan dibuat manusia (rule-based)', kw: ['aturan', 'rule', 'programmed'] },
      { label: 'Model belajar dari contoh data', kw: ['belajar', 'training', 'dilatih', 'contoh data'] },
      { label: 'Data terstruktur', kw: ['terstruktur', 'structured'] },
      { label: 'Data tidak terstruktur / rumit', kw: ['tidak terstruktur', 'unstructured', 'rumit', 'kompleks'] },
      { label: 'Contoh analytics (segmentasi/total belanja)', kw: ['segmentasi', 'total belanja', 'vip', 'laporan'] },
      { label: 'Contoh AI/ML (churn/fraud/prediksi)', kw: ['churn', 'fraud', 'prediksi', 'menebak'] },
      { label: 'Alasan', kw: ['karena', 'alasan', 'sebab'] }
    ],
    tip: '(1) Persamaan: dua-duanya cabang data science. (2) Bedakan dari ==cara kerja== dan ==jenis data==. (3) Satu contoh bisnis + alasan untuk masing-masing. Tabel perbandingan kecil membuat jawabanmu lebih rapi.',
    a: [
      { h: 'Pembuka: persamaan dan titik beda', b: 'Keduanya sama-sama cabang ==data science== yang mendukung keputusan dan prediksi. Perbedaan utamanya terletak pada ==cara menghasilkan kesimpulan== dan ==karakteristik data yang diolah==.' },
      { h: '1. Pendekatan Data Analytics (analitik konvensional)', b: '**Cara kerja:** bekerja sistematis memakai ==logika pemrograman dan aturan yang ditentukan manusia (programmed rules / rule-based logic)== serta metode statistik untuk menemukan pola dan menjawab pertanyaan bisnis. Sangat cocok untuk ==data terstruktur== dengan jumlah variabel yang terbatas dan jelas.<br>**Contoh kebutuhan bisnis:** segmentasi pelanggan ritel berdasarkan total nilai belanja tahunan untuk menentukan penerima layanan VIP (Slide 11 Modul 2).<br>**Alasan:** aturannya sudah jelas dan pasti (misal belanja > Rp10 juta masuk kategori Gold), datanya terstruktur rapi di tabel transaksi, dan variabelnya terbatas, jadi cukup diolah dengan query SQL/BI tanpa perlu melatih model ML.' },
      { h: '2. Pendekatan AI/ML', filled: true, b: '**Cara kerja:** ==model belajar sendiri dari contoh data== untuk menebak (prediksi). Manusia tidak menulis aturannya satu per satu; model menemukan polanya dari data latih. Cocok untuk ==data rumit atau tidak terstruktur== dengan banyak variabel.<br>**Contoh kebutuhan bisnis:** menebak pelanggan yang akan berhenti berlangganan (==churn==) dari riwayat transaksi, aktivitas di aplikasi, dan ulasan, memakai {{Amazon SageMaker}}.<br>**Alasan:** polanya terlalu rumit dan variabelnya terlalu banyak untuk dirumuskan sebagai aturan manual. Model bisa dilatih ulang saat ada data baru.' },
      { h: 'Ringkasan perbandingan', filled: true, b: '<table class="tbl"><tr><th></th><th>Data Analytics</th><th>AI/ML</th></tr><tr><td>Cara kerja</td><td>Manusia membuat aturan untuk menganalisis data</td><td>Model belajar sendiri dari contoh data untuk menebak (prediksi)</td></tr><tr><td>Cocok untuk</td><td>Data rapi (terstruktur) dengan variabel sedikit</td><td>Data rumit atau tidak terstruktur</td></tr><tr><td>Contoh</td><td>Mengelompokkan pelanggan dari total belanja</td><td>Menebak pelanggan yang akan berhenti (churn)</td></tr></table>' }
    ]
  },

  {
    id: 'alsut3', region: 'ALSUT', no: 3, kisi: [1], modul: 'Modul 2, 3, 4',
    title: 'Prioritas Modernize, Unify, Innovate sebelum memakai AI',
    question: 'Sebuah perusahaan masih menggunakan sistem penyimpanan data tradisional, memiliki data yang tersebar di berbagai aplikasi, dan ingin mulai memanfaatkan teknologi AI untuk mendukung kegiatan bisnisnya. Berdasarkan strategi Modernize, Unify, dan Innovate, analisis bagaimana perusahaan sebaiknya menentukan prioritas pengembangan infrastruktur data. Jelaskan hubungan antara ketiga strategi tersebut dan dampaknya jika perusahaan langsung menerapkan AI tanpa mempersiapkan infrastruktur data yang memadai!',
    rinci: [
      { q: 'Bagaimana urutan prioritas pengembangan infrastruktur datanya?', a: '==Modernize → Unify → Innovate==. Perusahaan tidak boleh langsung melompat ke AI.' },
      { q: 'Apa isi tahap Modernize?', a: 'Memigrasikan sistem penyimpanan tradisional ke ==cloud== ({{Amazon S3}}, purpose-built databases) supaya infrastruktur elastis, murah, compute dan storage terpisah (==loosely coupled==), dan tim TI bebas dari merawat server fisik.' },
      { q: 'Apa isi tahap Unify?', a: 'Mengumpulkan data yang tersebar (==siloed data==) ke satu data lake terpusat untuk menciptakan ==single source of truth==, dilengkapi katalog {{AWS Glue Data Catalog}} dan tata kelola {{AWS Lake Formation}}.' },
      { q: 'Apa isi tahap Innovate?', a: 'Setelah data terkumpul, bersih, dan mudah diakses, barulah menerapkan AI/ML ({{Amazon SageMaker}} atau {{Redshift ML}}) untuk ==prediksi proaktif==.' },
      { q: 'Bagaimana hubungan ketiga strategi?', a: 'Seperti ==piramida==: Modernize menyediakan infrastruktur yang lentur dan hemat biaya; di atasnya Unify menyediakan bahan baku data yang utuh, terintegrasi, dan terpercaya; dari bahan baku itu Innovate (AI/ML) menghasilkan prediksi yang akurat.' },
      { q: 'Dampak 1 jika langsung menerapkan AI?', a: '==Garbage in, garbage out==: model belajar dari data yang terpecah, tidak lengkap, dan tidak standar, sehingga prediksinya bias dan menyesatkan. Ingat Modul 3: keputusan dari data buruk lebih berbahaya daripada tanpa data.' },
      { q: 'Dampak 2 jika langsung menerapkan AI?', a: '==Bottleneck performa & biaya membengkak==: sistem tradisional tidak dirancang untuk horizontal scaling beban pelatihan AI/ML dengan data tidak terstruktur bervolume besar, sehingga lambat atau crash.' },
      { q: 'Dampak 3 jika langsung menerapkan AI?', a: '==Data swamp & kebocoran keamanan==: mengumpulkan banyak data tanpa katalog dan tata kelola hanya menciptakan "tumpukan kardus tak bernama di garasi" dan menaikkan risiko kebocoran data sensitif.' }
    ],
    keys: [
      { label: 'Modernize', kw: ['modernize', 'modernisasi'] },
      { label: 'Unify', kw: ['unify', 'menyatukan', 'penyatuan'] },
      { label: 'Innovate', kw: ['innovate', 'inovasi'] },
      { label: 'Urutan Modernize → Unify → Innovate', kw: ['urutan', 'prioritas', 'bertahap', 'tahap'] },
      { label: 'Migrasi ke cloud', kw: ['cloud', 'migrasi'] },
      { label: 'Single source of truth / data lake', kw: ['single source of truth', 'sumber kebenaran', 'data lake'] },
      { label: 'Glue Data Catalog / Lake Formation', kw: ['glue', 'lake formation', 'katalog'] },
      { label: 'Data silo / data tersebar', kw: ['silo', 'tersebar'] },
      { label: 'Garbage in, garbage out', kw: ['garbage', 'bias', 'menyesatkan'] },
      { label: 'Data swamp', kw: ['swamp'] },
      { label: 'Hubungan (piramida/fondasi)', kw: ['piramida', 'fondasi', 'menopang', 'hubungan'] }
    ],
    tip: 'Jawab dalam 3 bagian sesuai perintah soal: **A.** urutan prioritas (Modernize → Unify → Innovate) + isi tiap tahap, **B.** hubungan (piramida), **C.** 3 dampak (garbage in garbage out, bottleneck & biaya, data swamp & kebocoran).',
    a: [
      { h: 'A. Urutan prioritas: Modernize → Unify → Innovate', b: 'Perusahaan tidak boleh langsung melompat ke AI, tetapi harus membangun fondasi secara bertahap: ==Modernize → Unify → Innovate==.<ol><li>**Prioritas 1, Modernize (fondasi komputasi & storage):** memigrasikan sistem penyimpanan tradisional ke cloud (seperti {{Amazon S3}} dan purpose-built databases) agar infrastruktur elastis, murah, terpisah antara komputasi dan penyimpanan (loosely coupled), serta membebaskan tim TI dari perawatan server fisik.</li><li>**Prioritas 2, Unify (penyatuan & tata kelola data):** mengumpulkan data yang tersebar di berbagai aplikasi (siloed data) ke satu data lake terpusat untuk menciptakan ==single source of truth==, dilengkapi katalog metadata ({{AWS Glue Data Catalog}}) dan kontrol akses terpusat ({{AWS Lake Formation}}).</li><li>**Prioritas 3, Innovate (penerapan AI/ML):** setelah data terkumpul, bersih, dan mudah diakses, barulah menerapkan AI/ML ({{Amazon SageMaker}} atau {{Redshift ML}}) untuk melahirkan prediksi proaktif.</li></ol>' },
      { h: 'B. Hubungan ketiga strategi', b: 'Ketiganya saling menopang seperti ==piramida==: Modernize menyediakan **infrastruktur yang lentur dan hemat biaya**; di atasnya, Unify menyediakan **bahan baku data yang utuh, terintegrasi, dan terpercaya**; dan dari bahan baku berkualitas itulah Innovate (AI/ML) dapat **menghasilkan prediksi yang akurat**.' },
      { h: 'C. Dampak jika langsung menerapkan AI tanpa infrastruktur', b: '<ol><li>==Garbage In, Garbage Out== (prediksi bias & menyesatkan): model AI/ML belajar dari contoh data (Modul 2). Jika data masih terpecah (siloed), tidak lengkap, dan tidak standar, model hanya melihat sebagian kecil realitas bisnis sehingga prediksinya salah dan berbahaya bagi keputusan manajemen (Modul 3: keputusan dari data buruk lebih berbahaya daripada tanpa data).</li><li>==Bottleneck performa & biaya membengkak==: sistem tradisional tidak dirancang untuk horizontal scaling beban pelatihan AI/ML yang memproses data tidak terstruktur bervolume besar, sehingga sistem lambat atau crash (Modul 4).</li><li>==Risiko data swamp & kebocoran keamanan==: mengumpulkan banyak data demi AI tanpa katalog dan tata kelola hanya menciptakan "tumpukan kardus tak bernama di garasi" (Slide 15 Modul 2 / data swamp di Modul 4) serta menaikkan risiko kebocoran data sensitif.</li></ol>' }
    ]
  },

  {
    id: 'alsut4', region: 'ALSUT', no: 4, kisi: [3], modul: 'Modul 2, 4',
    title: '4 layer data pipeline dan dampak jika satu layer gagal',
    question: 'Jelaskan empat layer utama dalam data pipeline, yaitu data ingestion, storage, processing, serta analysis and visualization. Analisis bagaimana setiap layer saling berhubungan dan apa dampaknya terhadap hasil analisis apabila salah satu lapisan tidak berjalan dengan baik!',
    rinci: [
      { q: 'Sebutkan 4 layer data pipeline secara berurutan.', a: '==Ingestion → Storage → Processing → Analysis & Visualization==. Analogi air: masuk → ditampung → disaring → dipakai.' },
      { q: 'Apa fungsi Ingestion layer?', a: '==Pintu masuk==: terhubung ke sumber data (database, SaaS, sensor IoT) dan menarik data ke pipeline secara batch maupun streaming.' },
      { q: 'Apa fungsi Storage layer?', a: 'Tempat penyimpanan yang ==tahan lama (durable) dan skalabel== ({{Amazon S3}} data lake, {{Amazon Redshift}} data warehouse) plus katalog metadata ({{Glue Data Catalog}}) agar data mudah ditemukan.' },
      { q: 'Apa fungsi Processing layer?', a: 'Tempat data mentah ==dibersihkan, dinormalisasi, distrukturkan, dan diperkaya== (data wrangling/transformasi) memakai {{AWS Glue}}, {{Amazon EMR}}, atau Apache Flink.' },
      { q: 'Apa fungsi Analysis & Visualization layer?', a: 'Lapisan ==konsumsi data==: query SQL ({{Amazon Athena}}, {{Amazon Redshift}}), dashboard BI ({{Amazon QuickSight}}), dan ML ({{Amazon SageMaker}}) untuk mengambil keputusan.' },
      { q: 'Bagaimana layer-layer itu saling berhubungan?', a: 'Berurutan dan saling bergantung: ==output satu layer menjadi input layer berikutnya==. Prosesnya juga ==iteratif==: hasil analisis bisa memicu penambahan sumber data atau perbaikan proses.' },
      { q: 'Apa dampaknya jika Processing tidak berjalan baik?', a: 'Duplikat, nilai kosong, dan format tidak konsisten lolos ke dashboard: ==garbage in, garbage out==. Insight jadi salah walaupun dashboard-nya bagus.' },
      { q: 'Apa dampaknya jika Ingestion atau Storage gagal?', a: 'Ingestion gagal → data ==tidak lengkap atau terlambat==, keputusan memakai data basi. Storage buruk → data hilang, sulit ditemukan (==data swamp==), biaya naik, risiko bocor.' }
    ],
    keys: [
      { label: 'Ingestion', kw: ['ingestion', 'pengumpulan'] },
      { label: 'Storage', kw: ['storage', 'penyimpanan'] },
      { label: 'Processing', kw: ['processing', 'pengolahan', 'pemrosesan'] },
      { label: 'Analysis & visualization', kw: ['analysis', 'visualization', 'visualisasi', 'analisis'] },
      { label: 'Batch / streaming', kw: ['batch', 'stream'] },
      { label: 'Contoh layanan AWS (S3, Glue, QuickSight, dll.)', kw: ['s3', 'glue', 'quicksight', 'athena', 'redshift', 'emr', 'kinesis'] },
      { label: 'Saling berhubungan / output jadi input', kw: ['berhubungan', 'input', 'output', 'bergantung', 'berurutan'] },
      { label: 'Dampak: data tidak lengkap / terlambat', kw: ['tidak lengkap', 'terlambat', 'basi', 'hilang'] },
      { label: 'Garbage in, garbage out', kw: ['garbage', 'kotor', 'salah'] },
      { label: 'Data cleaning / wrangling', kw: ['cleaning', 'dibersihkan', 'wrangling', 'transformasi'] }
    ],
    tip: '**A.** Jelaskan 4 layer (fungsi + contoh layanan). **B.** Hubungan: berurutan, output jadi input, iteratif. **C.** Dampak kegagalan per layer (paling aman dibuat tabel 4 baris).',
    a: [
      { h: 'A. 1. Ingestion Layer', b: 'Lapisan ==pintu masuk== yang terhubung ke berbagai sumber data eksternal (database, SaaS, sensor IoT) dan menarik data ke dalam pipeline, baik secara ==batch== maupun ==streaming==.' },
      { h: 'A. 2. Storage Layer', b: 'Lapisan penyimpanan yang menyediakan tempat penampungan data yang ==tahan lama (durable) dan skalabel== (seperti {{Amazon S3}} data lake dan {{Amazon Redshift}} data warehouse), beserta sub-lapisan katalog metadata ({{Glue Data Catalog}}) agar data mudah ditemukan.' },
      { h: 'A. 3. Processing Layer', b: 'Lapisan pengolahan tempat data mentah ==dibersihkan, dinormalisasi, distrukturkan, dan diperkaya== (data wrangling / transformasi) memakai mesin komputasi seperti {{AWS Glue}}, {{Amazon EMR}}, atau Apache Flink hingga siap dikonsumsi.' },
      { h: 'A. 4. Analysis & Visualization Layer', filled: true, b: 'Lapisan ==konsumsi data==. Data yang sudah siap dianalisis lewat query SQL ({{Amazon Athena}}, {{Amazon Redshift}}), disajikan di dashboard BI ({{Amazon QuickSight}}), atau dipakai untuk ML ({{Amazon SageMaker}}) sehingga menjadi insight untuk keputusan bisnis.' },
      { h: 'B. Bagaimana layer saling berhubungan', filled: true, b: 'Keempat layer berjalan ==berurutan dan saling bergantung==: output satu layer menjadi input layer berikutnya, seperti pipa air (masuk → ditampung → disaring → dipakai). Ingestion menentukan data apa yang tersedia, storage menjaga data tetap aman dan mudah ditemukan lewat katalog, processing menentukan kualitas data, dan analysis mengubah data menjadi insight. Prosesnya ==iteratif==: hasil awal analisis sering membuat tim menambah sumber data atau memperbaiki proses. Keamanan (IAM, enkripsi) dan katalog berlaku di semua layer.' },
      { h: 'C. Dampak jika salah satu layer tidak berjalan baik', filled: true, b: '<table class="tbl"><tr><th>Layer bermasalah</th><th>Dampak ke hasil analisis</th></tr><tr><td>Ingestion</td><td>Data tidak lengkap atau terlambat masuk, dashboard menampilkan angka basi, keputusan terlambat.</td></tr><tr><td>Storage</td><td>Data hilang, tidak aman, atau sulit ditemukan karena tanpa katalog (==data swamp==); biaya penyimpanan membengkak.</td></tr><tr><td>Processing</td><td>Duplikat, nilai kosong, dan format tidak konsisten lolos ke analisis: ==garbage in, garbage out==.</td></tr><tr><td>Analysis & Visualization</td><td>Data sudah benar tetapi insight salah ditafsirkan atau tidak sampai ke pengambil keputusan, jadi value tidak tercapai.</td></tr></table>Kesimpulan: kualitas hasil analisis ditentukan oleh ==lapisan yang paling lemah==.' }
    ]
  },

  {
    id: 'alsut5', region: 'ALSUT', no: 5, kisi: [2], modul: 'Modul 3',
    title: 'Analisis 5V data e-commerce dan kualitas informasi',
    question: 'Sebuah perusahaan e-commerce mengumpulkan jutaan transaksi setiap hari, menerima aktivitas pelanggan secara terus-menerus, serta menyimpan data produk, ulasan pelanggan, dan riwayat pembelian. Beberapa data ditemukan tidak lengkap dan memiliki informasi yang tidak konsisten. Analisis karakteristik data perusahaan tersebut berdasarkan konsep 5Vs of Data (Volume, Velocity, Variety, Veracity, dan Value). Jelaskan bagaimana karakteristik tersebut memengaruhi keputusan perusahaan dalam mengelola data dan menghasilkan informasi yang berkualitas!',
    rinci: [
      { q: 'Bagian kasus mana yang menunjukkan Volume? Apa pengaruhnya?', a: '==Jutaan transaksi setiap hari== + riwayat pembelian + katalog produk. Pengaruh: tidak cukup satu server database (vertical scaling); butuh penyimpanan objek elastis {{Amazon S3}} dan pemrosesan terdistribusi ({{Amazon EMR}} / {{AWS Glue}}).' },
      { q: 'Bagian kasus mana yang menunjukkan Velocity? Apa pengaruhnya?', a: '==Aktivitas pelanggan (clickstream) terus-menerus==. Pengaruh: pisahkan jalur pipeline, ==streaming ingestion== ({{Kinesis Data Streams}} / {{Firehose}}) untuk klik real-time dan ==batch ingestion== untuk rekap transaksi harian.' },
      { q: 'Bagian kasus mana yang menunjukkan Variety? Apa pengaruhnya?', a: 'Data produk & riwayat pembelian (==structured==), log aktivitas (==semi/unstructured== clickstream), ulasan (==unstructured== teks/gambar). Pengaruh: pakai data lake S3 (==schema-on-read==) dan data wrangling untuk menyeragamkan skema.' },
      { q: 'Bagian kasus mana yang menunjukkan Veracity? Apa pengaruhnya?', a: 'Data ==tidak lengkap dan tidak konsisten==. Pengaruh: titik kritis karena ==Value rests on Veracity==. Wajib ada data cleaning & validating (imputasi nilai kosong, seragamkan format, hapus duplikat, lacak error ke sumber) dan simpan raw data immutable dengan timestamp.' },
      { q: 'Apa Value yang ingin dicapai?', a: 'Personalisasi rekomendasi produk, kepuasan pelanggan dari analisis sentimen ulasan, optimasi stok. Pengaruh: menyeimbangkan ==trade-off biaya, kecepatan, dan akurasi== serta katalog metadata ({{Glue Data Catalog}}) agar analis mudah menemukan data.' },
      { q: 'Apa arti "Value rests on Veracity"?', a: 'Nilai bisnis bergantung penuh pada ==kebenaran data==. Data yang buruk lebih berbahaya daripada tidak punya data sama sekali.' }
    ],
    keys: [
      { label: 'Volume', kw: ['volume'] },
      { label: 'Velocity', kw: ['velocity', 'kecepatan'] },
      { label: 'Variety', kw: ['variety', 'keberagaman', 'keragaman'] },
      { label: 'Veracity', kw: ['veracity', 'keakuratan', 'keandalan'] },
      { label: 'Value', kw: ['value', 'nilai bisnis', 'manfaat'] },
      { label: 'Streaming vs batch', kw: ['stream', 'batch', 'real time'] },
      { label: 'Structured / semi / unstructured', kw: ['terstruktur', 'structured'] },
      { label: 'Data lake S3 / schema-on-read', kw: ['data lake', 's3', 'schema on read'] },
      { label: 'Cleaning & validating', kw: ['cleaning', 'validat', 'validasi', 'membersihkan'] },
      { label: 'Duplikat / missing / tidak konsisten', kw: ['duplikat', 'tidak lengkap', 'konsisten', 'missing', 'kosong'] }
    ],
    tip: 'Buat per V: **(a)** bukti dari kasus → **(b)** pengaruh ke cara mengelola data (layanan/teknik). Tekankan Veracity sebagai titik kritis karena soal menyebut data tidak lengkap dan tidak konsisten.',
    a: [
      { h: '1. Volume (ukuran data)', b: 'Tercermin dari ==jutaan transaksi setiap hari== ditambah akumulasi riwayat pembelian dan katalog produk.<br>**Pengaruh:** perusahaan tidak bisa lagi mengandalkan satu server database konvensional (vertical scaling), tetapi harus memilih penyimpanan objek yang elastis dan terpisah dari komputasi seperti {{Amazon S3}} serta pemrosesan terdistribusi (big data processing seperti {{Amazon EMR}} / {{AWS Glue}}).' },
      { h: '2. Velocity (kecepatan data)', b: 'Tercermin dari ==aktivitas pelanggan (clickstream) yang diterima terus-menerus== setiap detik.<br>**Pengaruh:** perusahaan harus memisahkan jalur pipeline: ==Streaming Ingestion== ({{Kinesis Data Streams}} / {{Firehose}}) untuk menangkap aktivitas klik secara real-time (misal rekomendasi produk instan saat pelanggan sedang belanja), dan ==Batch Ingestion== untuk rekap laporan transaksi harian.' },
      { h: '3. Variety (keberagaman data)', b: 'Tercermin dari kombinasi **data produk & riwayat pembelian** (structured data di tabel database), **log aktivitas pelanggan** (semi-structured/unstructured clickstream), dan **ulasan pelanggan** (unstructured teks/gambar).<br>**Pengaruh:** perusahaan wajib mengadopsi arsitektur ==Data Lake (S3)== yang mampu menampung segala format data (==schema-on-read==) sekaligus menyiapkan proses data wrangling untuk menyeragamkan skema sebelum digabungkan.' },
      { h: '4. Veracity (keakuratan & keandalan data)', b: 'Tercermin langsung dari temuan bahwa beberapa data ==tidak lengkap (missing data) dan tidak konsisten==.<br>**Pengaruh:** ini titik kritis karena ==Value rests on Veracity== (nilai bisnis bergantung penuh pada kebenaran data). Perusahaan wajib menyisipkan tahap ==Data Cleaning dan Data Validating== di pipeline (mengisi nilai kosong/imputasi, menyeragamkan format yang tidak konsisten, menghapus duplikat, melacak akar error ke sumbernya), serta menyimpan raw data yang ==immutable== (lengkap dengan timestamp) agar mudah diaudit.' },
      { h: '5. Value (nilai bisnis)', b: 'Hasil akhir yang ingin dicapai dari keempat V di atas, seperti personalisasi rekomendasi produk, kepuasan pelanggan dari analisis sentimen ulasan, dan optimasi stok.<br>**Pengaruh:** memaksa perusahaan menyeimbangkan trade-off antara ==biaya, kecepatan, dan akurasi== serta menerapkan katalog metadata ({{Glue Data Catalog}}) agar analis mudah menemukan data dan mengubahnya menjadi keputusan bisnis.' }
    ]
  }
);
