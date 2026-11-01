/* Flashcard + materi ringkas AWS Academy ML Foundations Modul 1-7.
 * Modul 1-3 dari "Rangkuman Super Singkat"; detail tambahan dan Modul 4-7 dari jawaban quiz & kunci dosen. */
window.UTS = window.UTS || {};

UTS.flash = [
  { m: 2, f: 'Hierarki AI', b: 'AI ⊃ ML ⊃ Deep Learning ⊃ Generative AI, seperti lingkaran di dalam lingkaran. Setiap Gen AI pasti AI, tetapi tidak setiap AI memakai ML.' },
  { m: 2, f: 'Artificial Intelligence', b: 'Bidang paling luas: mesin yang meniru kecerdasan, kognisi, dan tugas manusia. Bisa berupa aturan if-then sampai ML.' },
  { m: 2, f: 'Machine Learning', b: 'Bagian dari AI yang belajar pola dari data untuk membuat prediksi tanpa aturan ditulis satu per satu.' },
  { m: 2, f: 'Deep Learning', b: 'Bagian dari ML yang memakai neural network berlapis banyak; mengekstraksi fitur otomatis dari data tidak terstruktur.' },
  { m: 7, f: 'Generative AI', b: 'Bagian dari deep learning yang membuat konten baru (teks, gambar, kode). Memakai foundation model / LLM. Contoh: ChatGPT, Amazon Bedrock.' },
  { m: 2, f: 'Rule-based system', b: 'Sistem yang mengikuti aturan eksplisit dari programmer (IF stock < 20 THEN notify). Adaptasi harus manual; tidak otomatis termasuk AI.' },
  { m: 2, f: 'Traditional programming vs ML', b: 'Traditional: data + aturan → jawaban. ML: data + jawaban (label) → aturan/model.' },
  { m: 2, f: 'Supervised learning', b: 'Belajar dari data berlabel (ada kunci jawaban). Tugas: classification dan regression. Contoh: deteksi fraud, filter spam.' },
  { m: 2, f: 'Unsupervised learning', b: 'Belajar dari data tanpa label, mencari pola sendiri. Contoh: clustering/segmentasi pelanggan dengan K-Means.' },
  { m: 2, f: 'Reinforcement learning', b: 'Agent belajar lewat trial and error di environment dengan reward dan penalty. Contoh: AWS DeepRacer.' },
  { m: 2, f: 'Regression', b: 'Menebak angka kontinu. Contoh: harga rumah Rp850.000.000.' },
  { m: 2, f: 'Classification', b: 'Menebak kategori/label diskrit. Contoh: spam vs bukan spam, terlambat vs tepat waktu (binary classification).' },
  { m: 2, f: 'Clustering', b: 'Mengelompokkan data berdasarkan kemiripan tanpa label. Contoh: segmentasi pelanggan telekomunikasi. Output: Cluster 0, 1, 2.' },
  { m: 2, f: 'Anomaly detection', b: 'Menemukan pola yang menyimpang dari normal. Contoh: transaksi besar dari lokasi tidak biasa (belum tentu fraud, perlu verifikasi).' },
  { m: 2, f: 'Black box', b: 'Kelemahan ML: model kompleks sulit dijelaskan alasan keputusannya.' },
  { m: 2, f: 'Neural network: 3 layer', b: 'Input layer (terima data) → hidden layer (olah dengan weight, bias, activation) → output layer (hasil prediksi).' },
  { m: 2, f: 'Backpropagation', b: 'Menghitung kontribusi tiap bobot terhadap error dengan mengalirkan error mundur dari output ke input; lalu optimization (gradient descent) memperbarui bobot & bias.' },
  { m: 2, f: 'Loss calculation', b: 'Mengukur selisih antara prediksi model dan target sebenarnya.' },
  { m: 3, f: 'Business objective vs ML objective', b: 'Business: dampak bisnis (kurangi keterlambatan). ML: kinerja teknis (prediksi keterlambatan yang akurat). Wajib dibedakan tegas.' },
  { m: 3, f: 'ML pipeline (7 langkah rangkuman)', b: 'Problem formulation → collect & label data → evaluate data → feature engineering → select & train → evaluate model → meets business goal? (ya: deploy, tidak: tune/augment). Iteratif.' },
  { m: 3, f: 'ML pipeline (8 tahap kunci dosen)', b: 'Business understanding → data collection → preprocessing → splitting → training → evaluation → deployment → monitoring.' },
  { m: 3, f: 'Data splitting', b: 'Membagi data jadi training (~80%), validation (~10%), test (~10%). Jika salah: evaluasi bias atau data leakage.' },
  { m: 3, f: 'Missing value', b: 'Nilai kosong (NULL/NaN). Hapus dengan dropna() atau isi dengan fillna(): mean (numerik normal), median (ada outlier), modus (kategori).' },
  { m: 3, f: 'Outlier', b: 'Nilai jauh berbeda dari data lain. Temukan: box plot, IQR, z-score. Atasi: hapus, capping, transformasi log, ganti median, atau biarkan jika valid (fraud).' },
  { m: 3, f: 'Metode IQR', b: 'IQR = Q3 − Q1. Outlier jika < Q1 − 1,5×IQR atau > Q3 + 1,5×IQR.' },
  { m: 3, f: 'Z-score', b: 'Z = (X − mean) / std. Outlier jika |Z| > 3.' },
  { m: 3, f: 'One-hot encoding', b: 'Kategori nominal dipecah jadi kolom 1/0. Contoh: Weather → Weather_Rainy, Weather_Sunny.' },
  { m: 3, f: 'Ordinal / label encoding', b: 'Kategori diubah jadi angka berurutan; cocok untuk kategori bertingkat.' },
  { m: 3, f: 'Feature scaling', b: 'Menyetarakan skala fitur numerik. Normalization (min-max) → 0 sampai 1. Standardization (StandardScaler) → mean 0, std 1.' },
  { m: 3, f: 'Feature engineering', b: 'Membuat/mengubah fitur agar model mudah belajar. Contoh: Scheduled Time → Scheduled_Hour, Scheduled_Period (pagi/siang/sore).' },
  { m: 3, f: 'Feature selection', b: 'Memilih atribut yang relevan dan valid. Mengurangi noise, mempercepat training, meningkatkan generalisasi. Contoh: buang Order ID.' },
  { m: 3, f: 'Data leakage', b: 'Model memakai informasi yang belum tersedia saat prediksi nyata (contoh: Arrival Time). Evaluasi terlalu bagus, performa nyata anjlok.' },
  { m: 3, f: 'Data cleaning vs feature extraction', b: 'Cleaning memperbaiki kualitas data (RAINY → Rainy). Extraction membuat representasi baru (One-Hot, Time_Difference).' },
  { m: 3, f: 'Overfitting', b: 'Model menghafal data training: training tinggi, data baru rendah (98% vs 67%/65%). High variance. Atasi: tambah data, regularization, dropout, early stopping, cross-validation, sederhanakan model.' },
  { m: 3, f: 'Underfitting', b: 'Model terlalu sederhana: jelek di training dan data baru. High bias. Atasi: model lebih kompleks, tambah fitur, latih lebih lama, kurangi regularisasi.' },
  { m: 3, f: 'Confusion matrix', b: 'TP (positif benar), TN (negatif benar), FP (false alarm: negatif ditebak positif), FN (gagal deteksi: positif ditebak negatif).' },
  { m: 3, f: 'Accuracy', b: '(TP + TN) / semua data. Menyesatkan pada imbalanced data (5% berisiko → tebak semua normal tetap 95%).' },
  { m: 3, f: 'Precision', b: 'TP / (TP + FP). Dari yang ditebak positif, berapa yang benar. Penting untuk menghindari false positive.' },
  { m: 3, f: 'Recall', b: 'TP / (TP + FN). Dari yang benar-benar positif, berapa yang ketemu. Penting saat false negative berbahaya.' },
  { m: 3, f: 'F1 score', b: '2 × (P × R) / (P + R). Rata-rata harmonik precision & recall; dipakai saat kelas tidak seimbang.' },
  { m: 3, f: 'ROC curve & AUC', b: 'ROC: TPR vs FPR di berbagai threshold. AUC: luas di bawah kurva; 1 = sempurna, 0,5 = tebakan acak.' },
  { m: 3, f: 'Bagging', b: 'Banyak model dilatih paralel dengan sampel acak (bootstrap), hasil di-voting/rata-rata. Kurangi overfitting. Contoh: Random Forest.' },
  { m: 3, f: 'Boosting', b: 'Model dilatih berurutan, tiap model memperbaiki kesalahan sebelumnya. Tingkatkan akurasi. Contoh: AdaBoost, Gradient Boosting, XGBoost.' },
  { m: 3, f: 'Amazon SageMaker', b: 'Layanan AWS fully managed untuk build, train, tune, dan deploy model ML tanpa mengatur server sendiri.' },
  { m: 3, f: 'SageMaker Ground Truth / Autopilot / Tuning', b: 'Ground Truth: label data. Autopilot: AutoML. Automatic Model Tuning: cari kombinasi hyperparameter terbaik otomatis.' },
  { m: 3, f: 'AWS Glue (komponen)', b: 'ETL serverless. Komponen: Data Catalog, Crawler, Connection, ETL Job, Trigger (+ Glue Studio, DataBrew).' },
  { m: 4, f: 'SageMaker Canvas', b: 'No-code ML (point-and-click), termasuk time-series forecasting tanpa menulis kode.' },
  { m: 5, f: 'CNN', b: 'Neural network khusus gambar yang belajar fitur spasial otomatis. Tahap: input → convolution → ReLU → pooling → flatten → fully connected → output.' },
  { m: 5, f: 'Convolution & feature map', b: 'Filter/kernel digeser ke seluruh gambar untuk mengambil ciri (tepi, tekstur). Hasilnya feature map.' },
  { m: 5, f: 'Pooling', b: 'Memperkecil ukuran feature map tapi tetap menyimpan ciri penting (umumnya max pooling 2×2).' },
  { m: 5, f: 'ML konvensional vs deep learning (gambar)', b: 'Konvensional: fitur manual, model sederhana, data sedikit, contoh SVM. DL: fitur otomatis, model kompleks, butuh banyak data & GPU, contoh CNN.' },
  { m: 5, f: 'Transfer learning', b: 'Memakai pre-trained model supaya tidak melatih pengenalan gambar dari nol.' },
  { m: 6, f: 'Layanan NLP & suara AWS', b: 'Comprehend (pahami teks/sentimen), Transcribe (suara → teks), Polly (teks → suara), Translate (terjemahan), Lex (chatbot).' }
];

UTS.materi = [
  {
    no: 1, title: 'Welcome to AWS Academy Machine Learning Foundations',
    intinya: 'Perkenalan kursus.',
    analogi: 'Machine learning itu seperti [[anak yang belajar dari contoh]]. Makin banyak contoh yang bagus, makin pintar ia menebak hal yang belum pernah ia lihat.',
    points: [
      'Bekal: lulus Cloud Foundations, bisa [[Python]] tingkat menengah, dan paham statistik dasar.',
      'Tujuan: paham ML, membuat [[ML pipeline dengan Amazon SageMaker]], memakai layanan ML untuk [[forecasting, computer vision, dan NLP]], serta mengenal [[generative AI]].',
      'Pekerjaan terkait: [[data scientist]] (statistik dan analisis), [[ML engineer]] (membangun sistem ML), applied science researcher (ML di bidang tertentu), dan ML developer (memasang ML ke aplikasi).',
      'Peta kuliah (Session 1-14): **Session 1-2** konsep AI & ML, **Session 3-4** data, preprocessing & evaluasi model, **Session 5-6** deep learning, ANN & CNN.'
    ]
  },
  {
    no: 2, title: 'Introducing Machine Learning',
    intinya: 'ML membuat komputer [[belajar dari data]], tanpa aturan yang ditulis satu per satu.',
    table: '<table class="tbl"><tr><th>Jenis</th><th>Cara belajar</th><th>Contoh</th></tr><tr><td>[[Supervised]]</td><td>Belajar dari data yang sudah ada jawabannya (berlabel)</td><td>Deteksi penipuan kartu kredit, filter spam, prediksi cuaca</td></tr><tr><td>[[Unsupervised]]</td><td>Belajar dari data tanpa jawaban, lalu mencari pola sendiri</td><td>Mengelompokkan pelanggan berdasarkan kebiasaan belanja</td></tr><tr><td>[[Reinforcement]]</td><td>Coba-coba, dapat hadiah kalau benar dan hukuman kalau salah</td><td>AWS DeepRacer, mobil tanpa sopir, AI bermain game</td></tr></table>',
    points: [
      'Bertingkat: AI mencakup ML, ML mencakup [[deep learning]], dan deep learning mencakup [[generative AI]]. Setiap Gen AI pasti AI, tetapi tidak setiap AI memakai ML (contoh: mesin catur berbasis aturan).',
      '**Rule-based system vs ML:** rule-based mengikuti aturan eksplisit dari programmer (IF stock &lt; 20 THEN notify), adaptasinya manual. ML memakai [[model hasil pelatihan]] dari data, adaptasinya lewat [[retraining]].',
      '**Traditional programming:** data + aturan → jawaban. **Machine learning:** data + jawaban (label) → [[aturan/model]]. Perumpamaan: rumus F = C × 1,8 + 32 ditulis manual vs ditemukan komputer dari contoh pasangan suhu.',
      'Perumpamaan 3 jenis ML: supervised = belajar dengan kunci jawaban, unsupervised = mengelompokkan mainan sendiri, reinforcement = melatih anjing dengan camilan.',
      'Jenis tugas ML: [[regression]] (angka, harga rumah), [[classification]] (kategori, spam), [[clustering]] (kelompok tanpa label, segmentasi pelanggan), [[anomaly detection]] (pola menyimpang, transaksi tidak biasa).',
      'Tidak semua masalah butuh ML. ML cocok kalau [[datanya besar, variabelnya banyak, dan aturannya sulit ditulis]].',
      'Layanan siap pakai: [[Rekognition]] (gambar), [[Comprehend]] (teks), [[Polly]] (teks jadi suara), [[Transcribe]] (suara jadi teks), [[Lex]] (chatbot).',
      'Tantangan ML: data jelek, kurang ahli, model sulit dijelaskan ([[black box]]), biaya, dan privasi. Ditambah risiko [[overfitting]] dan [[underfitting]].',
      '**Deep learning & neural network:** 3 layer utama: [[input layer]] (terima data), [[hidden layer]] (olah dengan weight, bias, activation function untuk pola non-linear), [[output layer]] (hasil prediksi; sigmoid/softmax/linear).',
      '**Cara ANN belajar:** prediksi → [[loss calculation]] (selisih dengan target) → [[backpropagation]] (error dialirkan mundur) → [[optimization]] (gradient descent memperbarui bobot & bias). Diulang sampai error minimal.'
    ],
    ingat: 'Sebagian besar masalah bisnis adalah [[supervised learning]], dan proses ML itu [[iteratif]] (diulang-ulang).'
  },
  {
    no: 3, title: 'Implementing a Machine Learning Pipeline with Amazon SageMaker',
    intinya: 'Membangun ML pipeline dari awal sampai akhir dengan [[Amazon SageMaker]].',
    analogi: 'Pipeline seperti memasak: tentukan menu (formulasi masalah), belanja bahan (data), cuci & potong (preprocessing), masak (training), cicipi (evaluasi), lalu sajikan (deploy).',
    table: '<table class="tbl"><tr><th>Tahap (kunci dosen)</th><th>Tujuan</th><th>Risiko jika tidak baik</th></tr><tr><td>1. Business Understanding</td><td>Tentukan tujuan & target bisnis</td><td>Model tidak menyelesaikan masalah bisnis</td></tr><tr><td>2. Data Collection</td><td>Kumpulkan data relevan</td><td>Dataset tidak representatif</td></tr><tr><td>3. Data Preprocessing</td><td>Perbaiki kualitas data</td><td>Kesalahan input merusak prediksi</td></tr><tr><td>4. Data Splitting</td><td>Pisahkan training, validation, test</td><td>Evaluasi bias / [[data leakage]]</td></tr><tr><td>5. Model Training</td><td>Pelajari pola</td><td>Underfitting</td></tr><tr><td>6. Model Evaluation</td><td>Ukur generalisasi</td><td>Model buruk dianggap layak</td></tr><tr><td>7. Model Deployment</td><td>Sediakan prediksi lewat endpoint</td><td>Berhenti di eksperimen</td></tr><tr><td>8. Model Monitoring</td><td>Pantau kualitas dari waktu ke waktu</td><td>Data/concept drift tak terdeteksi</td></tr></table>',
    points: [
      '[[Formulasi masalah]]: ubah masalah bisnis jadi masalah ML. Pisahkan [[business objective]] (misal kurangi keterlambatan) dan [[ML objective]] (prediksi keterlambatan yang akurat), lalu tentukan input, target, ML task, learning type, dan output.',
      'Masalah ML paling sering berupa [[klasifikasi]] (menebak kelas, misalnya fraud atau bukan) atau [[regresi]] (menebak angka).',
      '[[Data]]: kumpulkan (private, commercial, open-source) lewat ETL atau AWS Glue, simpan di S3, amankan dengan IAM, enkripsi, dan CloudTrail, lalu cek dengan statistik dan grafik.',
      '[[Feature engineering]]: ubah teks jadi angka (encoding ordinal atau [[one-hot]]), tangani data hilang dan outlier, samakan skala, buat fitur baru, lalu pilih fitur terbaik.',
      'Missing value: hapus dengan dropna() atau isi dengan fillna() (mean untuk numerik normal, median bila ada outlier, modus untuk kategori). Outlier: temukan dengan box plot, IQR (Q1 − 1,5×IQR / Q3 + 1,5×IQR), z-score (|Z| &gt; 3).',
      '[[Data leakage]]: jangan pakai fitur yang belum diketahui saat prediksi (misal Arrival Time). Semua parameter preprocessing dihitung [[dari data training saja]].',
      '[[Training dan deploy]]: bagi data jadi training (~80%), validation (~10%), test (~10%), latih dengan [[XGBoost]], linear learner, atau k-means, lalu pasang di [[endpoint SageMaker]].',
      '[[Evaluasi dan tuning]]: ukur dengan confusion matrix, accuracy, precision, recall, F1, dan AUC-ROC, lalu atur hyperparameter otomatis atau pakai [[SageMaker Autopilot]].',
      'Overfitting (training 98%, validation 67%) diatasi dengan tambah data, cross-validation, regularization, early stopping, feature selection, model simplification, dropout. Underfitting diatasi dengan model lebih kompleks, tambah fitur, latih lebih lama.',
      'Ensemble: [[bagging]] (paralel, bootstrap, voting, kurangi overfitting: Random Forest) vs [[boosting]] (berurutan, perbaiki kesalahan, tambah akurasi: AdaBoost, Gradient Boosting, XGBoost).',
      'AWS Glue = ETL serverless dengan komponen [[Data Catalog, Crawler, Connection, ETL Job, Trigger]].'
    ],
    ingat: 'Model klasifikasi pada data tidak seimbang: accuracy saja bisa menipu (5% berisiko → tebak semua normal = 95%). Cek juga [[precision, recall, F1, dan confusion matrix]].'
  },
  {
    no: 4, title: 'Introducing Forecasting (sekilas)',
    intinya: 'Forecasting memprediksi nilai di masa depan dari data deret waktu (time series).',
    points: [
      'Forecasting tanpa coding memakai [[SageMaker Canvas]], antarmuka visual point-and-click (no-code ML).',
      'Canvas juga bisa membuat model klasifikasi tabular dan citra tanpa menulis kode.',
      'Contoh kebutuhan forecasting: perkiraan penjualan atau permintaan periode berikutnya.'
    ]
  },
  {
    no: 5, title: 'Introducing Computer Vision',
    intinya: 'Computer vision membuat komputer mengenali isi gambar dan video; arsitektur utamanya [[CNN]].',
    table: '<table class="tbl"><tr><th>Aspek</th><th>ML konvensional</th><th>Deep Learning (CNN)</th></tr><tr><td>Ekstraksi fitur</td><td>Fitur dirancang manual (handcrafted)</td><td>Fitur dipelajari otomatis dari piksel</td></tr><tr><td>Struktur model</td><td>Lebih sederhana</td><td>Lebih kompleks</td></tr><tr><td>Data & komputasi</td><td>Bisa dengan dataset kecil</td><td>Butuh banyak data & komputasi (GPU)</td></tr><tr><td>Contoh</td><td>SVM dengan fitur tekstur/tepi</td><td>CNN</td></tr></table>',
    points: [
      'CNN adalah neural network khusus untuk [[mengolah gambar]], mengenali ciri secara otomatis dari garis dan warna sampai bentuk objek.',
      '1. [[Input image]]: gambar masuk sebagai kumpulan angka piksel (RGB: tinggi × lebar × 3).',
      '2. [[Convolution]]: filter (kernel) digeser ke seluruh gambar untuk mengambil ciri-cirinya. Hasilnya disebut [[feature map]].',
      '3. [[Activation (ReLU)]]: menghapus nilai negatif supaya model bisa mempelajari pola yang rumit.',
      '4. [[Pooling]]: memperkecil ukuran feature map tapi tetap menyimpan ciri paling penting (max pooling).',
      '5. [[Flatten]]: mengubah hasil pooling jadi satu baris angka panjang.',
      '6. [[Fully connected layer]]: menggabungkan semua ciri untuk menentukan jawaban.',
      '7. [[Output]]: prediksi beserta peluangnya (softmax), misalnya kucing 90% dan anjing 10%. Tahap 2-4 biasanya diulang beberapa kali.',
      'Kapan tidak perlu DL: dataset terbatas, biaya komputasi tinggi, atau kerusakan bisa dideteksi aturan sederhana. Alternatif hemat: [[transfer learning]] dengan pre-trained model.',
      'Layanan siap pakai: [[Amazon Rekognition]] (mengenali objek dan wajah) dan [[Amazon Textract]] (mengambil teks dari gambar/dokumen).'
    ],
    ingat: 'Untuk deteksi kerusakan produk dari kamera produksi, jawabannya [[CNN]] karena mampu mempelajari fitur spasial gambar secara otomatis.'
  },
  {
    no: 6, title: 'Introducing Natural Language Processing (sekilas)',
    intinya: 'NLP membuat komputer memahami dan menghasilkan bahasa manusia, baik teks maupun suara.',
    points: [
      '[[Amazon Comprehend]]: memahami teks (NLP, sentimen).',
      '[[Amazon Transcribe]]: mengubah suara jadi teks. [[Amazon Polly]]: mengubah teks jadi suara.',
      '[[Amazon Translate]]: menerjemahkan bahasa. [[Amazon Lex]]: membuat chatbot.'
    ]
  },
  {
    no: 7, title: 'Introducing Generative AI (sekilas)',
    intinya: 'Generative AI adalah bagian dari deep learning yang [[menciptakan konten baru]].',
    points: [
      'Memakai model raksasa pre-trained yang disebut [[Foundation Models (FMs)]] atau [[Large Language Models (LLMs)]].',
      'Konten yang dihasilkan: teks, gambar, kode program, audio, atau video.',
      'Contoh: [[Amazon Bedrock]] (membangun aplikasi Gen AI), [[Amazon Q Developer]] (asisten pembuatan kode), dan ChatGPT (dibangun dengan deep learning transformer).'
    ]
  }
];
