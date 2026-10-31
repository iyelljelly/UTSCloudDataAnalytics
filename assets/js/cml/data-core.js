/*
 * Data inti mata kuliah Cloud Machine Learning (AWS Academy Machine Learning Foundations).
 * Sumber: (1) Rangkuman Super Singkat + Jawaban Quiz ML Foundations Modul 1-3,
 *         (2) Catatan Lengkap & Pembahasan UTS Cloud Machine Learning,
 *         (3) Catatan Lengkap & Kunci Jawaban Dosen: Latihan UTS Cloud Machine Learning,
 *         (4) Buku Catatan Belajar: 15 Soal Quiz ALS + 10 Soal Latihan UTS.
 * Format teks sama dengan mata kuliah lain: ==stabilo==, {{layanan}}, **tebal**, [[cloze]].
 */
window.UTS = window.UTS || {};

UTS.meta = {
  course: 'cml',
  name: 'Cloud Machine Learning',
  title: 'Belajar UTS Cloud Machine Learning',
  eyebrow: 'AWS Academy Machine Learning Foundations · Session 1-14',
  heroLead: 'Soal latihan UTS dan quiz dari dosen dipecah jadi pertanyaan kecil yang rinci, lengkap dengan latihan menulis jawaban, cek kata kunci otomatis, drill, flashcard, kamus istilah ML, dan contekan layanan AWS.',
  pipeTitle: 'ML itu seperti anak yang belajar dari contoh 🧒 klik tiap tahap',
  storageKey: 'utsCML.v1',
  moduleKey: 'ml',
  glossaryFromContent: true,
  glossaryExcludeShared: ['inti', 'kursus'],
  regionOrder: ['KMG', 'ALS'],
  regions: [
    { id: 'KMG', label: 'KMG · Latihan UTS (kunci dosen)' },
    { id: 'ALS', label: 'ALS · Quiz' }
  ],
  hotRegion: 'KMG',
  hotTitle: 'Soal Latihan UTS dengan kunci jawaban dosen',
  kisiWord: 'Topik',
  kisiShort: 'Topik',
  kisiHead: 'Kisi-kisi dari dosen hanya menyebut cakupan <b>Session 1–14</b> dan format <b>3 soal</b>: 2 esai (bobot 40%) dan 1 studi kasus (bobot 60%). Kartu di bawah adalah <b>peta topik</b> yang dikelompokkan dari soal-soal dosen. Klik kartu untuk menyaring soal.',
  soalTitle: '🔥 Soal Dosen: pecah jadi pertanyaan rinci',
  soalDesc: 'Soal <b>KMG</b> adalah 10 soal <i>Latihan UTS</i> beserta kunci jawaban dosen, termasuk studi kasus <b>QuickShip Logistics</b> (soal 5-8) yang mirip format studi kasus UTS. Soal <b>ALS</b> adalah 15 soal <i>Quiz ALS</i> dengan konsep yang beririsan.',
  filledNote: 'Label <span class="filled-badge">Dilengkapi dari rangkuman</span> berarti bagian itu tidak ada di kunci jawaban soal tersebut, jadi isinya diambil dari file rangkuman atau pembahasan lain milikmu.',
  filledTitle: 'Bagian ini tidak ada di kunci jawaban soal ini, jadi diambil dari file rangkuman/pembahasan lain',
  materiTitle: '📚 Materi ringkas Modul 1-7',
  sources: 'Sumber materi: Rangkuman Super Singkat + Jawaban Quiz AWS Academy ML Foundations Modul 1-3, Catatan Lengkap & Pembahasan UTS Cloud Machine Learning, Kunci Jawaban Dosen Latihan UTS Cloud Machine Learning, dan Buku Catatan Belajar (15 Soal Quiz ALS + 10 Soal Latihan UTS).',
  exam: {
    at: '2026-11-02T10:00:00+07:00',
    label: 'Senin, 2 November 2026 · 10.00–12.00 WIB',
    format: '3 soal: 2 esai (40%) + 1 studi kasus (60%)',
    scope: 'Session 1–14'
  }
};

UTS.kisi = [
  {
    id: 1,
    title: 'Konsep AI, ML & jenis pembelajaran',
    modul: 'PPT Session 1-2 · Module 2',
    konsep: 'Rule-based vs ML, hierarki AI ⊃ ML ⊃ DL ⊃ Gen AI, traditional programming vs ML, supervised/unsupervised/reinforcement, regression/classification/clustering/anomaly detection, keuntungan & kelemahan ML',
    soal: ['kmg1', 'kmg2', 'kmg6', 'als1', 'als2', 'als3', 'als4']
  },
  {
    id: 2,
    title: 'Deep Learning, ANN & CNN',
    modul: 'PPT Session 5-6 · Module 2 & 5',
    konsep: 'DL vs ML konvensional, CNN untuk gambar, transfer learning, input/hidden/output layer, weight, bias, activation function, loss, backpropagation, optimization',
    soal: ['kmg3', 'kmg4', 'als10', 'als11']
  },
  {
    id: 3,
    title: 'Studi kasus: ML pipeline & persiapan data',
    modul: 'PPT Session 1-4 · Module 2-3',
    konsep: 'Business vs ML objective, problem formulation, ML pipeline SageMaker, preprocessing, missing value, outlier, encoding, feature engineering & selection, data leakage, AWS Glue, SageMaker',
    soal: ['kmg5', 'kmg6', 'kmg7', 'kmg8', 'kmg9', 'als5', 'als6', 'als12', 'als13', 'als14', 'als15']
  },
  {
    id: 4,
    title: 'Evaluasi & perbaikan model',
    modul: 'PPT Session 3-4 · Module 3',
    konsep: 'Overfitting vs underfitting, strategi perbaikan, accuracy, precision, recall, F1, ROC/AUC, confusion matrix, imbalanced data, bagging vs boosting',
    soal: ['kmg10', 'als7', 'als8', 'als9']
  }
];

UTS.pipeline = [
  {
    icon: '🎯', name: 'Problem formulation', air: 'tentukan tujuan',
    desc: 'Ubah masalah bisnis jadi masalah ML: pisahkan ==business objective== dan ==ML objective==, tentukan target/label, jenis tugas (klasifikasi, regresi, clustering), dan metrik sukses.',
    svc: ['Business objective', 'ML objective', 'Classification', 'Regression']
  },
  {
    icon: '🗂️', name: 'Collect & evaluate data', air: 'kumpulkan bahan',
    desc: 'Kumpulkan data (private, commercial, open-source) ke {{Amazon S3}} lewat ETL/{{AWS Glue}}, beri label, amankan dengan IAM, enkripsi & CloudTrail, lalu cek kualitasnya dengan statistik dan grafik.',
    svc: ['Amazon S3', 'AWS Glue', 'SageMaker Ground Truth', 'AWS IAM']
  },
  {
    icon: '🧹', name: 'Feature engineering', air: 'rapikan bahan',
    desc: 'Tangani ==missing value== dan ==outlier==, ubah teks jadi angka (==encoding==), samakan skala, pilih fitur penting, buat fitur baru. Hindari ==data leakage==.',
    svc: ['Missing value', 'Outlier', 'One-hot encoding', 'Feature selection']
  },
  {
    icon: '🏋️', name: 'Train & tune', air: 'latihan',
    desc: 'Bagi data jadi ==training, validation, test==, latih algoritma (misal ==XGBoost==), lalu atur hyperparameter otomatis atau pakai SageMaker Autopilot.',
    svc: ['XGBoost', 'SageMaker Autopilot', 'Hyperparameter tuning']
  },
  {
    icon: '🚀', name: 'Evaluate & deploy', air: 'dipakai',
    desc: 'Ukur dengan confusion matrix, accuracy, precision, recall, F1, AUC. ==Meets business goal?== Kalau belum, ulangi (tune model, feature/data augmentation). Kalau ya, deploy ke endpoint SageMaker lalu pantau (monitoring).',
    svc: ['Confusion matrix', 'F1 score', 'Endpoint SageMaker', 'Model monitoring']
  }
];

UTS.plan = [
  {
    title: 'Kerjakan studi kasus QuickShip (KMG #5-8) dulu',
    desc: 'Studi kasus berbobot 60% di UTS. Latih alurnya: business vs ML objective → dua pendekatan ML → preprocessing tabel data → pemilihan fitur & data leakage.',
    href: '#soal', cta: 'Ke Soal Dosen'
  },
  {
    title: 'Selesaikan 6 soal KMG lainnya (esai)',
    desc: 'KMG #1-4, #9, #10: rule-based vs ML, jenis tugas ML, deep learning & CNN, ANN, ML pipeline SageMaker, overfitting.',
    href: '#soal', cta: 'Ke Soal Dosen'
  },
  {
    title: 'Kerjakan 15 soal Quiz ALS',
    desc: 'Konsepnya beririsan dengan latihan UTS dan berguna untuk esai: metrik evaluasi, bagging vs boosting, CNN, SageMaker, AWS Glue, outlier, missing value di Python.',
    href: '#soal', cta: 'Ke Soal Dosen'
  },
  {
    title: 'Drill cepat sampai skor 80% atau lebih',
    desc: 'Pilihan ganda per modul. Mulai dari filter "Pola soal ujian".',
    href: '#drill', cta: 'Ke Drill'
  },
  {
    title: 'Hafalkan istilah, rumus metrik & layanan AWS',
    desc: 'Flashcard, Kamus istilah ML (rumus precision/recall/F1 ada di sini), dan Contekan Kilat "butuh apa, pakai apa".',
    href: '#flash', cta: 'Ke Flashcard'
  },
  {
    title: 'Baca ulang Materi Ringkas Modul 1-7',
    desc: 'Nyalakan Mode Tebak supaya istilah penting tersembunyi, lalu coba ingat sebelum diklik.',
    href: '#materi', cta: 'Ke Materi'
  }
];

UTS.contekan = [
  ['Membuat, melatih, dan menjalankan model ML', 'Amazon SageMaker'],
  ['Menulis kode Python & eksplorasi data di notebook', 'SageMaker Studio'],
  ['Memberi label pada data', 'SageMaker Ground Truth'],
  ['Membersihkan data & ekstraksi fitur secara visual', 'SageMaker Data Wrangler'],
  ['Membuat model otomatis (AutoML)', 'SageMaker Autopilot'],
  ['Mencari kombinasi hyperparameter terbaik otomatis', 'SageMaker Automatic Model Tuning'],
  ['Forecasting / prediksi tanpa coding', 'SageMaker Canvas'],
  ['Menyajikan model sebagai endpoint prediksi', 'Endpoint SageMaker'],
  ['Mengenali objek dan wajah di gambar', 'Amazon Rekognition'],
  ['Mengambil teks dari gambar atau dokumen', 'Amazon Textract'],
  ['Mengubah teks jadi suara', 'Amazon Polly'],
  ['Mengubah suara jadi teks', 'Amazon Transcribe'],
  ['Memahami teks (NLP, sentimen)', 'Amazon Comprehend'],
  ['Menerjemahkan bahasa', 'Amazon Translate'],
  ['Membuat chatbot', 'Amazon Lex'],
  ['Rekomendasi produk', 'Amazon Personalize'],
  ['Membangun aplikasi Gen AI dengan foundation model', 'Amazon Bedrock'],
  ['Asisten pembuatan kode berbasis Gen AI', 'Amazon Q Developer'],
  ['Belajar reinforcement learning dengan mobil balap', 'AWS DeepRacer'],
  ['Mengumpulkan dan mengolah data (ETL)', 'AWS Glue'],
  ['Menyimpan data / dataset', 'Amazon S3'],
  ['Mengatur hak akses', 'AWS IAM'],
  ['Mencatat aktivitas untuk audit', 'AWS CloudTrail']
].map(function (r) { return { need: r[0], use: r[1] }; });
