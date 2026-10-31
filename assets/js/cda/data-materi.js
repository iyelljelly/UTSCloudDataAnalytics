/* Flashcard istilah + materi ringkas Modul 1-8 (dari Rangkuman Super Singkat). */
window.UTS = window.UTS || {};

UTS.flash = [
  { m: 2, f: 'Data pipeline (4 layer)', b: 'Ingestion → Storage → Processing → Analysis & Visualization. Analogi: pipa air dari sumber sampai keran (masuk, ditampung, disaring, dipakai).' },
  { m: 2, f: 'Descriptive analytics', b: '"What happened?" Apa yang sudah terjadi. Contoh: total pesanan bulan lalu.' },
  { m: 2, f: 'Diagnostic analytics', b: '"Why did something happen?" Mencari akar penyebab. Contoh: kenapa pembatalan naik 25%.' },
  { m: 2, f: 'Predictive analytics', b: '"What will happen?" Meramal dengan pola historis dan model statistik/ML. Contoh: prediksi churn.' },
  { m: 2, f: 'Prescriptive analytics', b: '"How can we make it happen / prevent it?" Rekomendasi tindakan optimal. Value tertinggi, paling kompleks.' },
  { m: 2, f: 'Work backwards', b: 'Mulai dari masalah bisnis dulu, lalu rancang pipeline mundur dari sana.' },
  { m: 2, f: 'Data analytics vs AI/ML', b: 'Analytics: manusia membuat aturan, cocok data terstruktur variabel sedikit. AI/ML: model belajar dari contoh data, cocok data rumit/tidak terstruktur.' },
  { m: 2, f: 'Data engineer vs data scientist', b: 'Engineer mengurus datanya (ada di mana, format, ukuran, kecepatan, keamanan). Scientist mengurus artinya (data bilang apa, visualisasi, perlu ML atau tidak).' },
  { m: 2, f: 'Modernize', b: 'Pindah ke cloud dengan layanan khusus (purpose-built). Elastis, murah, tim TI bebas dari server fisik.' },
  { m: 2, f: 'Unify', b: 'Satukan data menjadi satu sumber kebenaran (single source of truth), biasanya di data lake. Break down data silos.' },
  { m: 2, f: 'Innovate', b: 'Cari manfaat baru dari data dengan AI/ML. Dari reaktif menjadi proaktif dan prediktif.' },
  { m: 3, f: 'Volume', b: 'Seberapa banyak datanya? (Berapa ember airnya?)' },
  { m: 3, f: 'Velocity', b: 'Seberapa cepat data datang? (Menetes atau mengalir deras?)' },
  { m: 3, f: 'Variety', b: 'Jenis dan sumbernya apa saja? (Air hujan, sumur, atau sungai?)' },
  { m: 3, f: 'Veracity', b: 'Bisa dipercaya atau tidak? (Bersih atau keruh?) Value rests on veracity.' },
  { m: 3, f: 'Value', b: 'Apa manfaatnya? (Bisa diminum atau tidak?)' },
  { m: 3, f: 'Structured data ("hot")', b: 'Tabel rapi baris & kolom, skema ketat. Paling mudah dicari (SQL), tetapi kaku.' },
  { m: 3, f: 'Semi-structured ("lukewarm")', b: 'Agak rapi tapi fleksibel, self-describing (key-value). Contoh: CSV, JSON, XML.' },
  { m: 3, f: 'Unstructured ("cold")', b: 'Tanpa bentuk tetap: gambar, video, clickstream. Paling susah dicari, paling fleksibel, paling banyak bertambah.' },
  { m: 3, f: 'Data lineage', b: 'Asal-usul data. Lineage yang tidak jelas adalah salah satu masalah veracity.' },
  { m: 3, f: 'Garbage in, garbage out', b: 'Data buruk menghasilkan analisis/prediksi buruk. Data yang buruk lebih berbahaya daripada tidak punya data.' },
  { m: 4, f: 'Well-Architected Framework', b: '6 pilar: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability. Lens = panduan khusus (Data Analytics Lens, ML Lens).' },
  { m: 4, f: 'Lambda architecture', b: 'Menggabungkan batch dan stream supaya hasilnya hampir real-time.' },
  { m: 4, f: 'Zona data di S3', b: 'Landing → Raw → Trusted → Curated (dari mentah sampai siap pakai).' },
  { m: 4, f: 'Outside in / inside out / around the perimeter', b: 'Masuk ke lake / keluar dari lake / antar purpose-built store.' },
  { m: 4, f: 'Data swamp', b: 'Data lake tanpa katalog dan tata kelola, sehingga data sulit ditemukan dan dipercaya.' },
  { m: 5, f: 'Shared responsibility model', b: 'AWS: keamanan OF the cloud (infrastruktur). Pelanggan: keamanan IN the cloud (data, akses, pengaturan). Seperti apartemen: pengelola jaga gedung, kamu kunci kamar.' },
  { m: 5, f: 'Authentication vs authorization', b: 'Authentication: membuktikan kamu siapa (bisa MFA). Authorization: menentukan kamu boleh melakukan apa.' },
  { m: 5, f: 'Least privilege', b: 'Beri akses seperlunya saja.' },
  { m: 5, f: 'Data at rest vs in transit', b: 'At rest (disimpan): enkripsi, kunci di KMS. In transit (dikirim): TLS/HTTPS.' },
  { m: 5, f: 'Horizontal vs vertical scaling', b: 'Horizontal: tambah mesin (tambah kasir), lebih tahan gangguan. Vertical: perbesar satu mesin, tidak menambah ketahanan.' },
  { m: 5, f: 'AWS Auto Scaling vs Application Auto Scaling', b: 'AWS Auto Scaling untuk EC2. Application Auto Scaling untuk EMR, Lambda, endpoint SageMaker.' },
  { m: 5, f: 'CloudFormation vs CDK', b: 'CloudFormation: template JSON/YAML → stack. CDK: bahasa pemrograman (Python, TypeScript, Java) → template CloudFormation.' },
  { m: 6, f: 'ETL', b: 'Extract → Transform → Load. Olah dulu baru simpan; data terstruktur → data warehouse. PII bisa disaring sebelum disimpan, tapi masuknya lebih lama.' },
  { m: 6, f: 'ELT', b: 'Extract → Load → Transform. Simpan dulu, olah belakangan; data tidak terstruktur → data lake. Masuk cepat, data mentah tersimpan.' },
  { m: 6, f: '6 langkah data wrangling', b: 'Discovery, Structuring, Cleaning, Enriching, Validating, Publishing. (Kenali, atur, bersihkan, tambah, cek, bagikan.)' },
  { m: 6, f: 'Cleaning vs validating', b: 'Cleaning membuat data bisa dipakai. Validating memastikan datanya benar (jumlah baris, format, duplikat, PII, outlier).' },
  { m: 7, f: 'Batch ingestion', b: 'Data dikumpulkan lalu diproses sesuai jadwal/permintaan/event. Kuat untuk data besar dan proses rumit, lebih murah. Contoh: ETL tradisional.' },
  { m: 7, f: 'Streaming ingestion', b: 'Producer mengirim terus, consumer membaca dan memproses. Hasil langsung terlihat. Contoh: clickstream, sensor IoT.' },
  { m: 7, f: 'Change Data Capture (CDC)', b: 'Mereplikasi setiap perubahan baris database secara berkelanjutan (AWS DMS), downtime mendekati nol.' },
  { m: 7, f: 'Kinesis Data Streams', b: 'Menampung stream sementara di shard. Retention default 24 jam (maks 8.760 jam). Write: on-demand/provisioned. Read: shared/enhanced fan-out.' },
  { m: 7, f: 'Kinesis Data Firehose', b: 'Mengirim data stream langsung ke S3 atau Redshift. Nama barunya Amazon Data Firehose.' },
  { m: 7, f: 'Kinesis Data Analytics', b: 'Menganalisis data yang sedang mengalir secara real-time, memakai Apache Flink.' },
  { m: 7, f: 'MQTT & AWS IoT Core', b: 'Perangkat IoT pakai publish/subscribe lewat MQTT. IoT Core menghubungkan perangkat; rules engine meneruskan data (misal ke Firehose → S3).' },
  { m: 8, f: 'Schema-on-read vs schema-on-write', b: 'Data lake: skema ditentukan saat dibaca. Data warehouse: skema ditentukan sebelum data dimuat.' },
  { m: 8, f: 'Amazon Redshift (MPP)', b: '1 leader node + beberapa compute node paralel. Node DC2 (penyimpanan lokal) dan RA3 (compute & storage terpisah).' },
  { m: 8, f: 'Redshift Spectrum', b: 'Query data di S3 langsung tanpa memuatnya ke Redshift.' },
  { m: 8, f: 'S3 storage class & lifecycle', b: 'Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier (arsip). Lifecycle policy memindahkan/menghapus data otomatis.' },
  { m: 8, f: 'Purpose-built databases', b: 'Relasional: RDS/Aurora. Key-value: DynamoDB. Dokumen: DocumentDB. In-memory: ElastiCache. Graf: Neptune. Time series: Timestream.' }
];

UTS.materi = [
  {
    no: 1, title: 'Welcome to AWS Academy Data Engineering',
    intinya: 'Modul perkenalan: apa yang dipelajari, siapa yang cocok, dan bagaimana kamu dinilai.',
    points: [
      'Bekal sebelum ikut: sudah lulus [[AWS Academy Cloud Foundations]], pernah memakai SQL dan database, paham jaringan dasar, serta matematika dan statistik dasar.',
      'Pekerjaan yang cocok: [[data engineer]] (paling cocok), data analyst, data scientist, ETL developer, dan praktisi ML.',
      'Cara belajar: slide (cara utama), aktivitas, demo, lab, dan [[Capstone Project]].',
      'Penilaian: [[Knowledge Check]] di modul 2 sampai 12, dan [[Course Assessment]] berisi [[25]] soal acak.',
      'Kursus ini belum cukup untuk lulus sertifikasi AWS. Persiapan tambahannya ada di modul [[Bridging to Certification]].'
    ]
  },
  {
    no: 2, title: 'Data-Driven Organizations',
    intinya: 'Organisasi data-driven mengambil keputusan dengan melihat data. Data engineer membangun pipanya supaya data siap dipakai.',
    analogi: 'Data engineer menyiapkan bahan dan dapurnya, data scientist yang memasak dan menilai rasanya.',
    table: '<table class="tbl"><tr><th></th><th>Data analytics</th><th>AI/ML</th></tr><tr><td>Cara kerja</td><td>Manusia membuat [[aturan]] untuk menganalisis data</td><td>Model [[belajar sendiri dari contoh data]] untuk menebak (prediksi)</td></tr><tr><td>Cocok untuk</td><td>Data rapi ([[terstruktur]]) dengan variabel sedikit</td><td>Data rumit atau [[tidak terstruktur]]</td></tr><tr><td>Contoh</td><td>Mengelompokkan pelanggan dari total belanja</td><td>Menebak pelanggan yang akan berhenti ([[churn]])</td></tr></table>',
    points: [
      '4 jenis analitik: [[Descriptive]] (What happened?), [[Diagnostic]] (Why?), [[Predictive]] (What will happen?), [[Prescriptive]] (How can we make it happen?). Makin ke prescriptive, value makin tinggi tapi makin kompleks.',
      'Data makin banyak [[belum tentu makin berguna]]: biaya naik, risiko keamanan membesar, dan query jadi lambat.',
      'Pipeline punya [[4 layer]]: ingestion (masuk), storage (simpan), processing (olah), serta analysis and visualization (lihat hasil).',
      'Mulai dari [[masalah bisnis]] dulu, baru rancang pipeline-nya mundur dari sana (work backwards).',
      'Prosesnya [[iteratif]] (berulang): hasil awal sering membuat tim memperbaiki model atau menambah sumber data.',
      '[[Data engineer]] mengurus datanya: ada atau tidak, di mana, formatnya apa, seberapa besar dan cepat datangnya, dan keamanannya.',
      '[[Data scientist]] mengurus artinya: data bilang apa, cara menilai hasil, visualisasinya apa, dan perlu ML atau tidak.',
      'Strategi data modern: [[Modernize]] (pindah ke cloud dengan layanan purpose-built), [[Unify]] (satukan data menjadi [[satu sumber kebenaran]] / single source of truth, biasanya di data lake), [[Innovate]] (cari manfaat baru dari data dengan AI/ML).'
    ]
  },
  {
    no: 3, title: 'The Elements of Data',
    intinya: 'Sebelum membangun pipa, kenali dulu datanya lewat 5V.',
    table: '<table class="tbl"><tr><th>V</th><th>Pertanyaannya</th><th>Perumpamaan air</th></tr><tr><td>[[Volume]]</td><td>Seberapa banyak datanya?</td><td>Berapa ember airnya?</td></tr><tr><td>[[Velocity]]</td><td>Seberapa cepat data datang?</td><td>Menetes atau mengalir deras?</td></tr><tr><td>[[Variety]]</td><td>Jenis dan sumbernya apa saja?</td><td>Air hujan, sumur, atau sungai?</td></tr><tr><td>[[Veracity]]</td><td>Bisa dipercaya atau tidak?</td><td>Bersih atau keruh?</td></tr><tr><td>[[Value]]</td><td>Apa manfaatnya?</td><td>Bisa diminum atau tidak?</td></tr></table>',
    points: [
      'Volume dan velocity menentukan ukuran pipa: data dikirim berkelompok ([[batch]]) atau mengalir terus ([[streaming]]).',
      '[[Structured]]: tabel rapi berisi baris dan kolom. Paling mudah dicari, tapi kaku.',
      '[[Semi-structured]]: agak rapi tapi fleksibel, misalnya CSV, JSON, dan XML.',
      '[[Unstructured]]: tanpa bentuk tetap, misalnya gambar, video, dan clickstream. Paling susah dicari, paling fleksibel, dan paling banyak bertambah.',
      'Sumber data: database milik perusahaan (on-premises), dataset publik, serta event, perangkat IoT, dan sensor.',
      '[[Data yang buruk lebih berbahaya daripada tidak punya data sama sekali.]]',
      'Temukan masalahnya: data hilang, ambigu, asal-usulnya ([[lineage]]) tidak jelas, atau bias. Bersihkan: duplikat, anomali, dan perbedaan antar sumber. Cegah: bug, perubahan data tanpa izin, dan salah input manusia.',
      'Tips: [[NULL belum tentu nol]], simpan data per kejadian ([[immutable]]) daripada totalnya saja, dan beri akses seperlunya ([[least privilege]]).'
    ]
  },
  {
    no: 4, title: 'Design Principles and Patterns for Data Pipelines',
    intinya: 'AWS punya buku panduan untuk membangun pipeline yang baik, dan data lake di Amazon S3 menjadi pusatnya.',
    analogi: 'S3 seperti waduk besar di tengah kota. Semua air ditampung di sana, lalu dialirkan ke tempat yang membutuhkan.',
    points: [
      '[[Well-Architected Framework]] punya [[6 pilar]]: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, dan Sustainability.',
      '[[Lens]] adalah panduan khusus: Data Analytics Lens untuk analitik dan Machine Learning Lens untuk ML.',
      'Perkembangan penyimpanan: database relasional → non-relasional → data warehouse → data lake → [[purpose-built data stores]].',
      '[[Lambda architecture]] menggabungkan batch dan stream supaya hasilnya hampir real-time.',
      'Data bergerak 3 arah: masuk ke lake ([[outside in]]), keluar dari lake ([[inside out]]), dan antar store ([[around the perimeter]]).',
      'Ingestion: [[AppFlow]] untuk SaaS seperti Salesforce, [[DMS]] untuk database, [[DataSync]] untuk file, dan [[Kinesis]] untuk streaming.',
      'Penyimpanan: [[Redshift]] (data warehouse) untuk data rapi, [[S3]] (data lake) untuk semua jenis data.',
      'Zona di S3, dari mentah sampai siap pakai: [[landing, raw, trusted, curated]].',
      'Katalog: [[Glue Data Catalog]] dan [[Lake Formation]] menyimpan info tentang data dan izin aksesnya.',
      'Cara memakai data: SQL (Athena, Redshift), dashboard BI ([[QuickSight]]), dan ML (SageMaker).',
      'Streaming: [[producer]] mengirim data, stream (Kinesis Data Streams) menampung sementara, lalu [[consumer]] membaca dan mengolahnya.'
    ]
  },
  {
    no: 5, title: 'Securing and Scaling the Data Pipeline',
    intinya: 'Pipeline harus aman dan bisa membesar atau mengecil sesuai kebutuhan.',
    analogi: 'Seperti tinggal di apartemen. Pengelola menjaga gedungnya (AWS), dan kamu yang mengunci pintu kamarmu sendiri (pelanggan).',
    table: '<table class="tbl"><tr><th>Layanan</th><th>Gunanya</th></tr><tr><td>[[AWS IAM]]</td><td>Mengatur siapa boleh mengakses apa</td></tr><tr><td>[[AWS KMS]]</td><td>Membuat dan mengelola kunci enkripsi</td></tr><tr><td>[[AWS CloudTrail]]</td><td>Mencatat semua aksi di akun, seperti CCTV</td></tr><tr><td>[[Amazon CloudWatch]]</td><td>Memantau metrik, log, dan event</td></tr><tr><td>[[Amazon Macie]]</td><td>Menemukan data sensitif</td></tr><tr><td>[[GuardDuty dan AWS Config]]</td><td>Memantau perubahan dan aktivitas yang mencurigakan</td></tr></table>',
    points: [
      '[[Shared responsibility model]]: AWS menjaga keamanan cloud-nya (infrastruktur), pelanggan menjaga keamanan di dalam cloud (data, akses, dan pengaturan).',
      '[[Authentication]]: membuktikan kamu siapa (bisa pakai MFA). [[Authorization]]: menentukan kamu boleh melakukan apa.',
      'Data yang disimpan ([[at rest]]) dilindungi enkripsi. Data yang dikirim ([[in transit]]) dilindungi [[TLS/HTTPS]].',
      'Keamanan ML dijaga di setiap tahap, misalnya mencegah data training dicemari ([[data injection]]) dan membatasi akses ke endpoint model.',
      '[[Horizontal scaling]]: menambah jumlah mesin (menambah kasir), lebih tahan gangguan. [[Vertical scaling]]: memperbesar satu mesin, tidak menambah ketahanan.',
      '[[AWS Auto Scaling]] untuk EC2. [[Application Auto Scaling]] untuk EMR, Lambda, dan endpoint SageMaker.',
      'IaC: [[CloudFormation]] memakai template JSON atau YAML yang menghasilkan sebuah [[stack]]. [[CDK]] memakai bahasa pemrograman (Python, TypeScript, Java) lalu diubah menjadi template CloudFormation.'
    ],
    ingat: 'Agar cluster Amazon EMR tetap stabil saat beban naik turun, jawabannya [[AWS Application Auto Scaling]].'
  },
  {
    no: 6, title: 'Ingesting and Preparing Data',
    intinya: 'Data mentah itu berantakan, jadi harus dirapikan dulu sebelum dipakai. Proses merapikannya disebut data wrangling.',
    analogi: 'ETL itu sayur dicuci dan dipotong dulu, baru masuk kulkas. ELT itu sayur langsung masuk kulkas, dicuci nanti saat mau dimasak.',
    table: '<table class="tbl"><tr><th></th><th>ETL</th><th>ELT</th></tr><tr><td>Urutan</td><td>[[Olah dulu, baru simpan]]</td><td>[[Simpan dulu, olah belakangan]]</td></tr><tr><td>Cocok untuk</td><td>Data terstruktur, tujuannya [[data warehouse]]</td><td>Data tidak terstruktur, tujuannya [[data lake]]</td></tr><tr><td>Kelebihan</td><td>Data langsung siap dan query cepat. PII bisa disaring sebelum disimpan</td><td>Data masuk lebih cepat dan data mentahnya tetap tersimpan</td></tr><tr><td>Kekurangan</td><td>Proses masuknya lebih lama</td><td>Butuh waktu mengolah saat data mau dipakai</td></tr></table>',
    points: [
      'Data wrangling lebih dekat dengan alur [[ELT]].',
      '1. [[Discovery]]: kenali datanya dulu, seperti hubungan antar sumber, formatnya, dan cara menyaringnya.',
      '2. [[Structuring]]: atur bentuk data supaya bisa digabung, seperti memetakan field dan mengatur folder.',
      '3. [[Cleaning]]: bersihkan data, misalnya menghapus duplikat dan memperbaiki nilai yang salah.',
      '4. [[Enriching]]: gabungkan dengan data lain atau tambah kolom baru.',
      '5. [[Validating]]: cek apakah data sudah benar, seperti jumlah baris, format, duplikat, PII, dan outlier.',
      '6. [[Publishing]]: simpan permanen dan buka aksesnya supaya bisa dipakai.',
      'Cara mengingat: **kenali, atur, bersihkan, tambah, cek, bagikan.** Cleaning membuat data bisa dipakai, validating memastikan datanya benar.'
    ],
    ingat: 'Kalau data engineer belum tahu hubungan antar field di beberapa sistem, langkah pertamanya [[Discovery]] (cari hubungan antar field). Jangan langsung menggabungkan file.'
  },
  {
    no: 7, title: 'Ingesting by Batch or by Stream',
    intinya: 'Data bisa masuk berkelompok sekaligus (batch) atau mengalir terus-menerus (stream).',
    analogi: 'Batch seperti mencuci baju seminggu sekali sekaligus. Stream seperti air keran yang mengalir terus.',
    table: '<table class="tbl"><tr><th></th><th>Batch</th><th>Stream</th></tr><tr><td>Cara kerja</td><td>Data dikumpulkan lalu diproses sesuai jadwal, permintaan, atau event</td><td>Producer mengirim data terus, consumer membaca dan memprosesnya</td></tr><tr><td>Kelebihan</td><td>Kuat untuk data besar dan proses rumit, lebih murah kalau tidak mendesak</td><td>Hasil langsung terlihat, jedanya sangat kecil</td></tr><tr><td>Contoh</td><td>[[ETL tradisional]]</td><td>[[Clickstream, sensor IoT]]</td></tr></table>',
    points: [
      '[[AppFlow]]: ambil data dari aplikasi SaaS seperti Salesforce dan Zendesk. [[DMS]]: pindahkan data dari database. [[DataSync]]: pindahkan data dari sistem file. [[Data Exchange]]: ambil dataset dari pihak ketiga.',
      '[[AWS Glue]]: alat ETL lengkap, ada [[crawler]] (mencari skema otomatis), Glue Studio (membuat job secara visual), Spark serverless, dan workflow.',
      'Glue bisa diperbesar horizontal (tambah worker) atau vertikal (worker lebih besar). Pakai format yang bisa dipecah seperti [[Parquet]] supaya bisa diproses paralel.',
      '[[Kinesis Data Streams]]: menampung data stream sementara. Datanya disimpan di [[shard]].',
      '[[Kinesis Data Firehose]]: mengirim data stream langsung ke S3 atau Redshift.',
      '[[Kinesis Data Analytics]]: menganalisis data yang sedang mengalir secara real-time (memakai Apache Flink).',
      'Pengaturan Kinesis Data Streams: [[retention period]] (default [[24 jam]], maksimal 8.760 jam), [[write capacity]] (jumlah shard, on-demand atau provisioned), dan [[read capacity]] (shared atau enhanced fan-out).',
      'Perangkat IoT berkirim pesan dengan model [[publish/subscribe]] lewat protokol [[MQTT]] yang ringan. [[AWS IoT Core]] menghubungkan perangkat; rules engine-nya meneruskan data, misalnya ke Firehose lalu ke S3. AWS IoT Analytics menyediakan pipeline lengkap sampai visualisasi di QuickSight.'
    ]
  },
  {
    no: 8, title: 'Storing and Organizing Data',
    intinya: 'Pilih tempat simpan yang cocok. Data lake untuk semua jenis data mentah, data warehouse untuk data rapi yang siap dianalisis.',
    analogi: 'Data lake seperti gudang besar yang menampung barang apa adanya. Data warehouse seperti lemari rapi yang semua isinya sudah berlabel.',
    table: '<table class="tbl"><tr><th></th><th>Data lake</th><th>Data warehouse</th></tr><tr><td>Jenis data</td><td>Semua jenis: terstruktur, semi, dan tidak terstruktur</td><td>Terstruktur saja</td></tr><tr><td>Layanan</td><td>[[Amazon S3 + Lake Formation]]</td><td>[[Amazon Redshift]]</td></tr><tr><td>Skema</td><td>[[Ditentukan saat data dibaca]]</td><td>[[Ditentukan sebelum data dimuat]]</td></tr><tr><td>Cocok untuk</td><td>[[ELT]]</td><td>[[ETL]]</td></tr></table>',
    points: [
      'Amazon S3: penyimpanan objek yang awet, bisa membesar, dan murah. Data disimpan di dalam [[bucket]].',
      'Ada beberapa [[storage class]] sesuai seberapa sering data dipakai: Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, dan [[Glacier]] untuk arsip.',
      '[[Lifecycle policy]] memindahkan atau menghapus data secara otomatis seiring waktu.',
      'Amazon Redshift: data warehouse dengan arsitektur [[MPP]]: 1 leader node dan beberapa compute node yang bekerja paralel.',
      'Tipe node: DC2 (penyimpanan lokal) dan [[RA3]] (compute dan storage bisa diperbesar terpisah).',
      '[[Redshift Spectrum]] bisa meng-query data di S3 langsung, tanpa memuatnya ke Redshift.',
      'Purpose-built databases (database yang dibuat khusus untuk satu jenis kebutuhan):<div class="tbl-scroll"><table class="tbl"><tr><th>Jenis</th><th>Layanan</th><th>Fungsi singkat</th><th>Contoh</th></tr><tr><td>Relasional</td><td>[[Amazon RDS]] (Relational Database Service) dan [[Amazon Aurora]]</td><td>RDS: database relasional terkelola (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server); AWS mengurus patch dan backup. Aurora: database relasional buatan AWS yang kompatibel MySQL/PostgreSQL, lebih cepat, datanya disalin 6x di 3 Availability Zone.</td><td>Transaksi kasir, KRS, core banking</td></tr><tr><td>Key-value</td><td>[[Amazon DynamoDB]]</td><td>NoSQL serverless, respons milidetik di skala berapa pun</td><td>Keranjang belanja, sesi login</td></tr><tr><td>Dokumen</td><td>[[Amazon DocumentDB]]</td><td>Menyimpan dokumen mirip JSON, kompatibel MongoDB</td><td>Katalog produk dengan atribut berbeda-beda</td></tr><tr><td>In-memory</td><td>[[Amazon ElastiCache]]</td><td>Data di RAM (Redis/Memcached), respons mikrodetik, biasanya sebagai cache</td><td>Cache hasil query, papan peringkat</td></tr><tr><td>Graf</td><td>[[Amazon Neptune]]</td><td>Data yang saling terhubung (node dan relasi); data harus dimuat dulu</td><td>Jejaring sosial, deteksi jaringan fraud</td></tr><tr><td>Time series</td><td>[[Amazon Timestream]]</td><td>Data berurutan waktu</td><td>Metrik sensor IoT per detik</td></tr></table></div>',
      'Keamanan data lake: Lake Formation dan IAM, termasuk [[tag-based access control (TBAC)]]. Redshift: VPC, security group, enkripsi, SSL, dan pembatasan akses sampai tingkat kolom dan baris.'
    ],
    ingat: 'Untuk query data langsung dari file di data lake S3, jawabannya [[Amazon Redshift Spectrum]]. Pilihan lain salah: Lake Formation hanya untuk tata kelola, Glue crawler hanya mengisi Data Catalog, dan Neptune harus memuat data dulu.'
  }
];
