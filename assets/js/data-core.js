/*
 * Data inti website belajar UTS Cloud Data Analytics.
 * Sumber: (1) Rangkuman Super Singkat AWS Academy Data Engineering Modul 1-8,
 *         (2) Soal Latihan UTS Cloud Data Analytics (dosen),
 *         (3) Master Guide & Pembahasan Quiz Sebelum UTS (KMG & ALSUT).
 *
 * Format teks yang dipakai di semua file data:
 *   ==teks==   -> stabilo kuning (istilah wajib diingat)
 *   {{teks}}   -> chip layanan AWS
 *   **teks**   -> tebal
 *   [[teks]]   -> istilah yang bisa disembunyikan untuk tebak-tebakan (cloze)
 */
window.UTS = window.UTS || {};

UTS.kisi = [
  {
    id: 1,
    title: 'Data Analytics, Strategi & Modern Data, Data Security',
    modul: 'Modul 2, 4, 5, 8',
    konsep: '4 tipe analitik, Analytics vs AI/ML, Modernize-Unify-Innovate, IAM, KMS, Lake Formation, CloudTrail, CloudWatch',
    soal: ['alsut1', 'alsut2', 'alsut3', 'alsut7', 'kmg1', 'kmg2']
  },
  {
    id: 2,
    title: 'Kasus 5V, Big Data, Data Quality & Governance',
    modul: 'Modul 3, 4, 6, 8',
    konsep: 'Volume, Velocity, Variety, Veracity, Value, 3 tipe data, data profiling/cleaning/validation, Glue Data Catalog',
    soal: ['alsut5', 'alsut6', 'alsut8', 'kmg3', 'kmg4']
  },
  {
    id: 3,
    title: 'Data Ingestion & Tahapan Data Pipeline',
    modul: 'Modul 2, 4, 6, 7, 8',
    konsep: 'Batch vs stream, ETL vs ELT, 4 layer pipeline, 6 langkah wrangling, zona S3 (landing-raw-trusted-curated)',
    soal: ['alsut4', 'alsut8', 'alsut9', 'alsut10', 'kmg5', 'kmg6']
  }
];

UTS.pipeline = [
  {
    icon: '🚰', name: 'Ingestion', air: 'air masuk',
    desc: 'Pintu masuk. Menarik data dari sumber (database, aplikasi SaaS, file, sensor IoT) secara ==batch== atau ==streaming==.',
    svc: ['Amazon AppFlow', 'AWS DMS', 'AWS DataSync', 'Amazon Kinesis', 'AWS IoT Core']
  },
  {
    icon: '🪣', name: 'Storage', air: 'ditampung',
    desc: 'Menampung data dengan aman, awet, dan bisa membesar. ==Data lake di Amazon S3== jadi pusatnya, Redshift untuk data rapi.',
    svc: ['Amazon S3', 'Amazon Redshift', 'Glue Data Catalog', 'Lake Formation']
  },
  {
    icon: '🧪', name: 'Processing', air: 'disaring',
    desc: 'Membersihkan, merapikan, dan memperkaya data (==data wrangling== / transformasi) sampai siap dipakai.',
    svc: ['AWS Glue', 'Amazon EMR', 'Kinesis Data Analytics']
  },
  {
    icon: '📊', name: 'Analysis & Visualization', air: 'dipakai',
    desc: 'Mengubah data jadi insight lewat query SQL, dashboard BI, dan ML untuk mengambil keputusan.',
    svc: ['Amazon Athena', 'Amazon Redshift', 'Amazon QuickSight', 'Amazon SageMaker']
  }
];

UTS.plan = [
  {
    title: 'Kerjakan 10 soal ALSUT (prioritas utama)',
    desc: 'Soal ALSUT sama persis dengan file Soal Latihan UTS dari dosen. Buka Pertanyaan Rinci, tulis jawaban, lalu cek kata kunci.',
    href: '#soal', cta: 'Ke Soal Dosen'
  },
  {
    title: 'Kerjakan 6 soal Quiz KMG',
    desc: 'Konsepnya sama dengan ALSUT tapi kasusnya beda (food delivery, bank, rumah sakit, taksi online, universitas).',
    href: '#soal', cta: 'Ke Soal Dosen'
  },
  {
    title: 'Drill cepat sampai skor 80% atau lebih',
    desc: 'Pilihan ganda singkat per modul. Fokus dulu ke filter "Pola soal ujian".',
    href: '#drill', cta: 'Ke Drill'
  },
  {
    title: 'Hafalkan istilah dan layanan AWS',
    desc: 'Flashcard istilah, Contekan Kilat "butuh apa, pakai apa", dan Kamus untuk kepanjangan serta fungsi tiap layanan AWS.',
    href: '#flash', cta: 'Ke Flashcard'
  },
  {
    title: 'Baca ulang Materi Ringkas Modul 1-8',
    desc: 'Nyalakan Mode Tebak supaya istilah penting tersembunyi, lalu coba ingat sebelum diklik.',
    href: '#materi', cta: 'Ke Materi'
  }
];

UTS.contekan = [
  ['Menyimpan semua jenis data (data lake)', 'Amazon S3'],
  ['Query interaktif langsung ke data lake', 'Amazon Athena'],
  ['Query file S3 dari Redshift tanpa memuatnya', 'Redshift Spectrum'],
  ['Data warehouse', 'Amazon Redshift'],
  ['Mengolah big data', 'Amazon EMR'],
  ['Mencari dan menganalisis log secara real-time', 'Amazon OpenSearch Service'],
  ['Database relasional', 'Amazon Aurora / RDS'],
  ['Database non-relasional yang cepat', 'Amazon DynamoDB'],
  ['Memindahkan dan mengolah data (ETL)', 'AWS Glue'],
  ['Mengelola dan mengamankan data lake', 'AWS Lake Formation'],
  ['Ambil data dari aplikasi SaaS', 'Amazon AppFlow'],
  ['Pindahkan data dari database', 'AWS DMS'],
  ['Pindahkan data dari sistem file', 'AWS DataSync'],
  ['Menampung data streaming', 'Kinesis Data Streams'],
  ['Kirim data stream langsung ke S3 atau Redshift', 'Kinesis Data Firehose'],
  ['Menghubungkan perangkat IoT', 'AWS IoT Core'],
  ['Dashboard BI', 'Amazon QuickSight'],
  ['Membuat, melatih, dan menjalankan model ML', 'Amazon SageMaker'],
  ['Mengatur hak akses', 'AWS IAM'],
  ['Mengelola kunci enkripsi', 'AWS KMS'],
  ['Mencatat semua aksi untuk audit', 'AWS CloudTrail'],
  ['Memantau metrik dan log', 'Amazon CloudWatch'],
  ['Menemukan data sensitif', 'Amazon Macie'],
  ['Scaling EMR, Lambda, atau endpoint SageMaker', 'Application Auto Scaling'],
  ['Menulis infrastruktur sebagai kode', 'CloudFormation / CDK']
].map(function (r) { return { need: r[0], use: r[1] }; });
