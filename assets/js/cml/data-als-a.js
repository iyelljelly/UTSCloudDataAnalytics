/* ALS · Quiz Cloud Machine Learning, soal 1-8. Kunci dari "Buku Catatan Belajar (15 Soal Quiz ALS)" dan "Rangkuman + Jawaban Quiz". */
window.UTS = window.UTS || {};
UTS.essays = UTS.essays || [];

UTS.essays.push(
  {
    id: 'als1', region: 'ALS', no: 1, kisi: [1], modul: 'Module 2 & 7 · PPT Session 1-2',
    title: 'Hubungan AI, Machine Learning, Deep Learning, dan Generative AI',
    question: 'Jelaskanlah hubungan artificial intelligence (AI), machine learning (ML), deep learning (DL), dan generative AI (Gen AI)! Berikan contohnya!',
    rinci: [
      { q: 'Bagaimana bentuk hubungan keempatnya?', a: '==Hierarkis (subset), seperti lingkaran di dalam lingkaran==: AI paling luas ⊃ ML ⊃ Deep Learning ⊃ Generative AI. Makin ke dalam, makin khusus.' },
      { q: 'Apa itu AI? Contohnya?', a: 'Bidang ilmu komputer yang membangun mesin yang dapat ==meniru fungsi mental, kognisi, dan tugas manusia== (penalaran, keputusan, menyelesaikan masalah). Mencakup aturan if-then sampai ML. Contoh: sistem pakar medis berbasis aturan, bot catur klasik, asisten pintar.' },
      { q: 'Apa itu ML? Contohnya?', a: 'Cabang AI yang memakai ==data historis untuk melatih model statistik== sehingga bisa mengenali pola dan ==membuat prediksi tanpa diprogram eksplisit==. Contoh: deteksi email spam, prediksi harga properti, rekomendasi produk ({{Amazon Personalize}}).' },
      { q: 'Apa itu Deep Learning? Contohnya?', a: 'Teknik khusus di dalam ML yang memakai ==Artificial Neural Networks berlapis banyak== untuk mengekstraksi fitur otomatis pada data tidak terstruktur yang kompleks. Contoh: pengenalan wajah/objek ({{Amazon Rekognition}}), ucapan ke teks ({{Amazon Transcribe}}), mobil otonom.' },
      { q: 'Apa itu Generative AI? Contohnya?', a: 'Bagian dari DL yang memakai model raksasa pre-trained, yaitu ==Foundation Models (FMs) / Large Language Models (LLMs)==, untuk ==menciptakan konten baru== (teks, gambar, kode, audio, video). Contoh: {{Amazon Bedrock}}, {{Amazon Q Developer}}, ChatGPT.' },
      { q: 'Jelaskan ChatGPT dalam hierarki ini.', a: 'ChatGPT termasuk ==Gen AI== karena menulis teks baru; dibangun dengan ==deep learning (transformer)==; termasuk ==ML== karena belajar dari data; dan ML adalah cabang ==AI==.' },
      { q: 'Apakah setiap AI pasti memakai ML?', a: 'Tidak. Hubungannya ==satu arah==: setiap Gen AI pasti AI, tetapi tidak setiap AI memakai ML. Contoh: ==mesin catur berbasis aturan==.' }
    ],
    keys: [
      { label: 'Hierarki / subset / lingkaran', kw: ['hierarki', 'subset', 'lingkaran', 'bagian dari'] },
      { label: 'AI meniru kecerdasan manusia', kw: ['meniru', 'kecerdasan', 'kognisi'] },
      { label: 'ML belajar dari data', kw: ['belajar dari data', 'data historis', 'pola'] },
      { label: 'DL neural network berlapis', kw: ['neural network', 'jaringan saraf', 'berlapis'] },
      { label: 'Gen AI membuat konten baru', kw: ['konten baru', 'membuat', 'menciptakan'] },
      { label: 'Foundation model / LLM', kw: ['foundation model', 'llm', 'large language'] },
      { label: 'Contoh ChatGPT / Bedrock', kw: ['chatgpt', 'bedrock'] },
      { label: 'Contoh DL (Rekognition / wajah)', kw: ['rekognition', 'wajah', 'transcribe'] },
      { label: 'Tidak semua AI pakai ML', kw: ['tidak semua', 'satu arah', 'catur'] }
    ],
    tip: 'Mulai dengan ==diagram lingkaran bertingkat== (AI ⊃ ML ⊃ DL ⊃ Gen AI). Untuk tiap lapisan: definisi + 1-2 contoh. Tutup dengan contoh ChatGPT yang menelusuri keempat lapisan, dan catatan "tidak semua AI memakai ML".',
    a: [
      { h: 'Hubungan hierarkis', b: 'Keempatnya memiliki ==hubungan hierarkis (subset / lingkaran di dalam lingkaran)==: Generative AI bagian dari Deep Learning, Deep Learning bagian dari Machine Learning, dan Machine Learning bagian dari payung besar AI.<div class="rings"><div><b>AI</b> mesin peniru kognisi & tugas manusia<div><b>ML</b> belajar pola dari data<div><b>Deep Learning</b> neural network berlapis<div><b>Gen AI</b> membuat konten baru (FM/LLM)</div></div></div></div></div>' },
      { h: '1. Artificial Intelligence (lingkup paling luas)', b: 'Bidang ilmu komputer yang membangun mesin/program yang dapat ==meniru fungsi mental, kognisi, dan tugas manusia== (penalaran logika, mengambil keputusan, menyelesaikan masalah). AI mencakup aturan sederhana (if-then rules), pohon keputusan, hingga ML.<br>**Contoh:** sistem pakar medis berbasis aturan, bot catur komputer klasik, asisten pintar.' },
      { h: '2. Machine Learning (subset dari AI)', b: 'Cabang AI yang memakai ==data historis untuk melatih model statistik== sehingga sistem mengenali pola dan ==membuat prediksi tanpa diprogram secara eksplisit== untuk setiap skenario.<br>**Contoh:** deteksi email spam, prediksi harga properti, rekomendasi produk e-commerce ({{Amazon Personalize}}).' },
      { h: '3. Deep Learning (subdomain dari ML)', b: 'Teknik khusus dalam ML yang terinspirasi otak manusia, memakai ==Artificial Neural Networks berlapis banyak== untuk mengekstraksi fitur otomatis dan memecahkan masalah pada data tidak terstruktur yang kompleks.<br>**Contoh:** pengenalan wajah dan deteksi objek ({{Amazon Rekognition}}), ucapan ke teks ({{Amazon Transcribe}}), mobil otonom.' },
      { h: '4. Generative AI (subset dari Deep Learning)', b: 'Memakai model raksasa yang sudah dilatih (pretrained) pada data berskala besar, yaitu ==Foundation Models (FMs)== atau ==Large Language Models (LLMs)==, untuk ==menciptakan konten baru yang orisinal== (teks, gambar, kode, audio, video).<br>**Contoh:** membuat aplikasi Gen AI dengan {{Amazon Bedrock}}, asisten kode {{Amazon Q Developer}}, ChatGPT.' },
      { h: 'Contoh menelusuri hierarki & catatan', b: '<ul><li>**ChatGPT** termasuk Gen AI karena bisa menulis teks baru. Ia dibangun dengan deep learning (==transformer==), yang termasuk ML karena belajar dari data, dan ML adalah cabang dari AI.</li><li>Hubungannya ==satu arah==: setiap Gen AI pasti AI, tetapi tidak setiap AI memakai ML, misalnya mesin catur berbasis aturan.</li></ul>' }
    ]
  },

  {
    id: 'als2', region: 'ALS', no: 2, kisi: [1], modul: 'Module 2 · PPT Session 1-2',
    title: 'Traditional programming vs Machine Learning',
    question: 'Jelaskan perbedaan cara kerja dari Traditional Programming dengan Machine Learning. Berikanlah contohnya!',
    rinci: [
      { q: 'Di mana letak perbedaan paling mendasar?', a: 'Pada ==komponen input yang dimasukkan dan output yang dihasilkan==, serta bagaimana aturan keputusan (rules) dibentuk.' },
      { q: 'Apa input dan output traditional programming?', a: 'Input: ==Data + Aturan (rules)== yang ditulis manual. Output: ==Jawaban (answers)==.' },
      { q: 'Apa input dan output machine learning?', a: 'Input: ==Data + Jawaban/Label historis==. Output: ==Model prediktif (aturan/pola yang dipelajari)==.' },
      { q: 'Bagaimana kemampuan adaptasinya?', a: 'Traditional: ==kaku dan statis==; jika kondisi bisnis berubah, programmer wajib menulis ulang aturan. ML: ==dinamis dan adaptif==; diperbarui lewat ==retraining== dengan data baru.' },
      { q: 'Contoh traditional programming?', a: 'Notifikasi stok: <code>IF stok &lt; 20 THEN kirim_notifikasi</code>. Filter spam manual: blokir email hanya jika ada kata "hadiah gratis".' },
      { q: 'Contoh machine learning?', a: 'Rekomendasi produk dari histori transaksi (pembeli sepatu olahraga cenderung beli kaus kaki). Filter spam ML yang ==belajar dari ribuan/100.000 email berlabel== spam dan non-spam.' },
      { q: 'Apa perumpamaan Celsius ke Fahrenheit?', a: 'Cara biasa: kita tulis rumusnya, ==F = C × 1,8 + 32==. Cara ML: komputer diberi ==contoh pasangan suhu==, lalu menemukan rumusnya sendiri.' }
    ],
    keys: [
      { label: 'Traditional: manusia menulis aturan', kw: ['menulis aturan', 'aturan manual', 'programmer', 'rules'] },
      { label: 'ML: belajar aturan dari data', kw: ['belajar', 'dari data', 'pola'] },
      { label: 'Input data + aturan → jawaban', kw: ['data dan aturan', 'jawaban', 'answers'] },
      { label: 'Input data + jawaban/label → model', kw: ['label', 'model'] },
      { label: 'Kaku vs adaptif (retraining)', kw: ['kaku', 'statis', 'adaptif', 'retraining'] },
      { label: 'Contoh if-else / stok', kw: ['if', 'stok', 'kata hadiah', 'hadiah'] },
      { label: 'Contoh spam ML / email berlabel', kw: ['spam', 'email'] },
      { label: 'Celsius-Fahrenheit (opsional)', kw: ['celsius', 'fahrenheit'] }
    ],
    tip: 'Gambarkan dua alur: ==Data + Rules → Program → Jawaban== vs ==Data + Jawaban → Algoritma training → Model==. Lalu **tabel 4 aspek** (dasar keputusan, input & output, adaptasi, contoh). Contoh paling aman: filter spam dengan aturan vs filter spam ML.',
    a: [
      { h: 'Perbedaan mendasar', b: 'Perbedaan paling mendasar terletak pada ==komponen input yang dimasukkan== dan ==output yang dihasilkan==, serta bagaimana aturan keputusan dibentuk.<div class="flow"><span>Data</span><i>+</i><span>Rules (manual)</span><i>→</i><span>Program</span><i>→</i><span>Jawaban<small>Traditional programming</small></span></div><div class="flow"><span>Data</span><i>+</i><span>Jawaban / label</span><i>→</i><span>Algoritma training</span><i>→</i><span>Model / aturan pola<small>Machine learning</small></span></div>' },
      { h: 'Tabel perbandingan', b: '<table class="tbl"><tr><th>Aspek</th><th>Traditional programming (rule-based)</th><th>Machine learning (data-driven)</th></tr><tr><td>Dasar keputusan</td><td>Aturan logika eksplisit (if-else) yang ditulis manual oleh programmer</td><td>Pola statistik yang dipelajari mandiri oleh algoritma dari data historis</td></tr><tr><td>Input & output</td><td>Input: data + aturan. Output: jawaban</td><td>Input: data + jawaban/label. Output: model prediktif (learned rules)</td></tr><tr><td>Kemampuan adaptasi</td><td>Kaku dan statis; jika kondisi berubah, programmer wajib menulis ulang kode</td><td>Dinamis dan adaptif; diperbarui lewat pelatihan ulang (retraining) dengan data baru</td></tr><tr><td>Contoh</td><td>1) Notifikasi stok: <code>IF stok &lt; 20 THEN kirim_notifikasi</code><br>2) Filter spam manual: blokir jika ada kata "hadiah gratis"</td><td>1) Rekomendasi produk dari histori transaksi (sepatu olahraga → kaus kaki)<br>2) Filter spam ML yang belajar dari 100.000 email berlabel spam & non-spam</td></tr></table>' },
      { h: 'Perumpamaan', b: 'Mengubah Celsius ke Fahrenheit. Cara biasa: kita tulis rumusnya, ==F = C × 1,8 + 32==. Cara ML: komputer diberi contoh pasangan suhu, lalu ==menemukan rumusnya sendiri==.', filled: true }
    ]
  },

  {
    id: 'als3', region: 'ALS', no: 3, kisi: [1], modul: 'Module 2 · PPT Session 1-4',
    title: 'Supervised, unsupervised, dan reinforcement learning',
    question: 'Jelaskan perbedaan dari Supervised Learning, Unsupervised Learning, dan Reinforcement Learning! Berikan contoh pada masing-masing jenis pembelajarannya!',
    rinci: [
      { q: 'Apa dasar pembeda ketiga jenis pembelajaran?', a: '==Ketersediaan label (target jawaban) pada data pelatihan== dan ==mekanisme umpan balik pembelajarannya==.' },
      { q: 'Apa itu supervised learning? Tugasnya apa?', a: 'Dilatih dengan ==data berlabel== (input sudah punya target output benar); belajar memetakan input ke output dengan meminimalkan loss. Tugas: ==classification== (kategori: spam vs bukan spam, tumor ganas/jinak, fraud vs valid) dan ==regression== (angka: harga rumah, total penjualan).' },
      { q: 'Apa itu unsupervised learning? Tugasnya apa?', a: 'Dilatih dengan ==data tidak berlabel==; sistem mencari sendiri pola tersembunyi/kemiripan. Tugas: ==clustering== (segmentasi pelanggan telekomunikasi dengan ==K-Means==), ==association== (market basket analysis), ==dimensionality reduction== (PCA).' },
      { q: 'Apa itu reinforcement learning?', a: 'Sebuah ==agent== mengambil tindakan di ==environment== lewat ==trial and error==, menerima ==reward== jika benar dan ==penalty== jika salah, untuk membentuk ==optimal policy== yang memaksimalkan total reward jangka panjang.' },
      { q: 'Contoh reinforcement learning?', a: '{{AWS DeepRacer}} (mobil balap otonom belajar mengemudi di sirkuit), mobil tanpa sopir, AI bermain game/catur/Go (Q-Learning), pelatihan anjing robot.' },
      { q: 'Sebutkan algoritma populer tiap jenis.', a: 'Supervised: ==Linear/Logistic Regression, SVM, Decision Tree, Random Forest, XGBoost==. Unsupervised: ==K-Means, DBSCAN, Hierarchical Clustering, PCA==. Reinforcement: ==Q-Learning, SARSA, Deep Q-Network (DQN), Monte Carlo==.' },
      { q: 'Apa perumpamaan ketiganya?', a: 'Supervised = belajar dengan ==kunci jawaban==; unsupervised = ==mengelompokkan mainan sendiri== tanpa diberi tahu caranya; reinforcement = ==melatih anjing dengan camilan==.' }
    ],
    keys: [
      { label: 'Supervised: data berlabel', kw: ['berlabel', 'labeled', 'label'] },
      { label: 'Unsupervised: tanpa label', kw: ['tanpa label', 'tidak berlabel', 'unlabeled'] },
      { label: 'Reinforcement: reward & penalty', kw: ['reward', 'hadiah', 'penalty', 'hukuman'] },
      { label: 'Agent & environment / trial and error', kw: ['agent', 'agen', 'environment', 'trial', 'coba coba'] },
      { label: 'Classification & regression', kw: ['classification', 'klasifikasi', 'regression', 'regresi'] },
      { label: 'Clustering / pola tersembunyi', kw: ['clustering', 'klaster', 'pola', 'kelompok'] },
      { label: 'Contoh supervised (fraud/spam)', kw: ['fraud', 'penipuan', 'spam'] },
      { label: 'Contoh unsupervised (segmentasi)', kw: ['segmentasi', 'mengelompokkan pelanggan', 'k means'] },
      { label: 'Contoh reinforcement (DeepRacer)', kw: ['deepracer', 'game', 'catur', 'mobil'] }
    ],
    tip: 'Buka dengan dasar pembeda (label + umpan balik). Lalu **tabel 3 kolom** (kebutuhan data, proses belajar, contoh/algoritma). Satu contoh nyata per jenis: fraud/spam (supervised), segmentasi pelanggan (unsupervised), AWS DeepRacer (reinforcement).',
    a: [
      { h: 'Dasar pembeda', b: 'Ketiga kategori dibedakan berdasarkan ==ketersediaan label (target jawaban) pada data pelatihan== serta ==mekanisme umpan balik pembelajarannya==.' },
      { h: '1. Supervised learning', b: 'Model dilatih dengan ==data berlabel (labeled data)==: setiap input sudah diketahui target output yang benar. Algoritma belajar memetakan input ke output dengan meminimalkan kesalahan (loss). Dua tugas utama:<ul><li>**Classification:** memprediksi label kategori diskrit. Contoh: email spam vs bukan spam, tumor ganas atau jinak, transaksi fraud vs valid.</li><li>**Regression:** memprediksi angka kontinu. Contoh: harga jual rumah dari luas dan lokasi, total penjualan kuartal depan.</li></ul>' },
      { h: '2. Unsupervised learning', b: 'Model dilatih dengan ==data tidak berlabel (unlabeled data)==. Sistem tidak diberi kunci jawaban, tetapi mencari sendiri pola tersembunyi, struktur, atau kemiripan antar data.<ul><li>**Clustering:** mengelompokkan data berkarakteristik serupa. Contoh: segmentasi pelanggan telekomunikasi berdasarkan pemakaian kuota dan durasi telepon dengan ==K-Means==.</li><li>**Association & dimensionality reduction:** aturan asosiasi barang belanjaan (market basket analysis) atau mereduksi dimensi fitur dengan PCA.</li></ul>' },
      { h: '3. Reinforcement learning', b: 'Pembelajaran berbasis interaksi: sebuah ==agent== mengambil tindakan di dalam ==environment== melalui trial and error, menerima ==reward== (positif) jika tindakannya benar dan ==penalty== (negatif) jika salah, untuk membentuk kebijakan optimal (optimal policy) yang memaksimalkan total reward jangka panjang.<br>**Contoh:** {{AWS DeepRacer}} yang belajar mengemudi di sirkuit, pelatihan anjing robot, AI permainan catur/Go (Q-Learning).' },
      { h: 'Tabel ringkasan', b: '<table class="tbl"><tr><th>Karakteristik</th><th>Supervised</th><th>Unsupervised</th><th>Reinforcement</th></tr><tr><td>Kebutuhan data</td><td>Data berlabel (input + target diketahui)</td><td>Data tanpa label (hanya fitur input)</td><td>Tanpa label awal; data dari interaksi agent & environment</td></tr><tr><td>Proses belajar</td><td>Memetakan input ke label & meminimalkan loss</td><td>Mencari kemiripan & struktur kelompok alami</td><td>Trial and error berbasis reward & penalty</td></tr><tr><td>Algoritma populer</td><td>Linear/Logistic Regression, SVM, Decision Tree, Random Forest, XGBoost</td><td>K-Means, DBSCAN, Hierarchical Clustering, PCA</td><td>Q-Learning, SARSA, Deep Q-Network (DQN), Monte Carlo</td></tr><tr><td>Contoh</td><td>Deteksi penipuan kartu kredit, filter spam, prediksi cuaca</td><td>Mengelompokkan pelanggan berdasarkan kebiasaan belanja</td><td>AWS DeepRacer, mobil tanpa sopir, AI bermain game</td></tr></table>' },
      { h: 'Perumpamaan', filled: true, b: 'Supervised seperti ==belajar dengan kunci jawaban==, unsupervised seperti ==mengelompokkan mainan sendiri== tanpa diberi tahu caranya, reinforcement seperti ==melatih anjing dengan camilan==.' }
    ]
  },

  {
    id: 'als4', region: 'ALS', no: 4, kisi: [1], modul: 'Module 2 · PPT Session 1-2',
    title: '5 keuntungan dan 5 kelemahan machine learning',
    question: 'Jelaskan 5 keuntungan dan kelemahan menggunakan machine learning!',
    rinci: [
      { q: 'Keuntungan 1-2?', a: '1) ==Menganalisis data masif & kompleks==: mengekstraksi pola dari jutaan baris data yang mustahil dianalisis manual. 2) ==Otomatisasi tanpa pemrograman eksplisit==: menyelesaikan masalah rumit (suara, wajah) tanpa ribuan aturan if-else.' },
      { q: 'Keuntungan 3-5?', a: '3) ==Adaptif & meningkat seiring waktu== lewat retraining (makin banyak data, makin akurat). 4) ==Cepat & skalabel==: ribuan prediksi real-time (fraud, rekomendasi). 5) ==Mengolah data tidak terstruktur==: gambar, video, teks (NLP), sinyal IoT.' },
      { q: 'Kelemahan 1-2?', a: '1) ==Bergantung pada kualitas data==: butuh data banyak, bersih, bebas bias (garbage in, garbage out). 2) ==Biaya infrastruktur & komputasi tinggi==: GPU/RAM besar dan waktu training panjang.' },
      { q: 'Kelemahan 3-5?', a: '3) ==Black box / sulit dijelaskan==: model kompleks sulit diterangkan alasan keputusannya. 4) ==Rentan overfitting & underfitting==. 5) ==Butuh keahlian & pemeliharaan==: data scientist/ML engineer dan pemantauan model drift.' },
      { q: 'Apa versi singkat dari rangkuman?', a: 'Untung: ==otomatis, data besar, pola tersembunyi, makin akurat, bantu keputusan==. Rugi: ==butuh data bagus, mahal, bias, black box, overfitting==.' },
      { q: 'Tantangan ML apa saja yang disebut di Modul 2?', a: '==Data jelek, kurang ahli, model sulit dijelaskan, biaya, dan privasi==.' }
    ],
    keys: [
      { label: 'Untung: data besar/kompleks', kw: ['data besar', 'masif', 'jumlah sangat besar', 'jutaan'] },
      { label: 'Untung: otomatis', kw: ['otomatis', 'otomatisasi'] },
      { label: 'Untung: pola tersembunyi', kw: ['pola', 'tersembunyi'] },
      { label: 'Untung: makin akurat/adaptif', kw: ['akurat', 'adaptif', 'retraining'] },
      { label: 'Untung: bantu keputusan/real-time', kw: ['keputusan', 'rekomendasi', 'real time', 'prediksi'] },
      { label: 'Rugi: butuh data berkualitas', kw: ['kualitas data', 'berkualitas', 'data yang banyak', 'garbage'] },
      { label: 'Rugi: biaya/komputasi', kw: ['biaya', 'mahal', 'komputasi', 'gpu'] },
      { label: 'Rugi: bias', kw: ['bias'] },
      { label: 'Rugi: black box', kw: ['black box', 'sulit dijelaskan', 'interpretabilitas'] },
      { label: 'Rugi: overfitting / perlu dilatih ulang', kw: ['overfitting', 'underfitting', 'drift', 'dilatih ulang'] }
    ],
    tip: 'Buat **tabel 5 baris** dengan dua kolom (keuntungan | kelemahan). Tiap poin: nama singkat + 1 kalimat penjelasan. Hafalkan versi singkat: untung = otomatis, data besar, pola tersembunyi, makin akurat, bantu keputusan; rugi = data bagus, mahal, bias, black box, overfitting.',
    a: [
      { h: 'Tabel 5 keuntungan dan 5 kelemahan', b: '<table class="tbl"><tr><th>No</th><th>Keuntungan</th><th>Kelemahan & tantangan</th></tr><tr><td>1</td><td>**Menganalisis data masif & kompleks:** mengekstraksi pola dan tren dari jutaan baris data berdimensi tinggi yang tidak mungkin dianalisis manual.</td><td>**Bergantung pada kualitas data:** butuh data banyak, bersih, bebas bias (garbage in, garbage out).</td></tr><tr><td>2</td><td>**Otomatisasi tanpa pemrograman eksplisit:** menyelesaikan masalah rumit (pengenalan suara/wajah) tanpa menulis ribuan aturan if-else.</td><td>**Biaya infrastruktur & komputasi tinggi:** pelatihan skala besar butuh GPU/RAM besar dan waktu panjang.</td></tr><tr><td>3</td><td>**Adaptif & meningkat seiring waktu:** akurasi terus naik lewat retraining dengan data terbaru.</td><td>**Kurang interpretabilitas (black box):** model kompleks seperti deep neural network sulit dijelaskan alasan keputusannya.</td></tr><tr><td>4</td><td>**Cepat & skalabel:** melayani ribuan prediksi real-time (deteksi fraud, rekomendasi) dalam milidetik.</td><td>**Rentan overfitting & underfitting:** model bisa menghafal noise sehingga gagal di data nyata.</td></tr><tr><td>5</td><td>**Mengolah data tidak terstruktur:** gambar, video, teks bahasa alami (NLP), sinyal sensor IoT.</td><td>**Tantangan keahlian & pemeliharaan:** butuh data scientist/ML engineer dan pemantauan model drift terus-menerus.</td></tr></table>' },
      { h: 'Versi singkat (rangkuman)', filled: true, b: '<table class="tbl"><tr><th>No</th><th>Keuntungan</th><th>Kelemahan</th></tr><tr><td>1</td><td>Otomatis, kerja lebih cepat dan hemat tenaga</td><td>Butuh data yang banyak dan berkualitas</td></tr><tr><td>2</td><td>Bisa mengolah data dalam jumlah sangat besar</td><td>Biaya dan waktu pelatihannya besar</td></tr><tr><td>3</td><td>Menemukan pola yang sulit dilihat manusia</td><td>Bisa bias kalau datanya bias</td></tr><tr><td>4</td><td>Makin banyak data, makin akurat</td><td>Sulit dijelaskan kenapa model memutuskan sesuatu (black box)</td></tr><tr><td>5</td><td>Membantu keputusan, misalnya prediksi dan rekomendasi</td><td>Bisa overfitting dan perlu dilatih ulang saat pola data berubah</td></tr></table>Tantangan ML di Modul 2: data jelek, kurang ahli, model sulit dijelaskan, biaya, dan privasi.' }
    ]
  },

  {
    id: 'als5', region: 'ALS', no: 5, kisi: [3], modul: 'Module 2-3',
    title: 'Gambar & jelaskan tahapan machine learning pipeline',
    question: 'Gambarkan machine learning pipeline dan jelaskan tahapannya!',
    rinci: [
      { q: 'Apa itu ML pipeline?', a: 'Rangkaian tahapan ==terstruktur dan iteratif (berulang)== untuk mengubah masalah bisnis menjadi model ML yang siap menghasilkan prediksi di produksi.' },
      { q: 'Sebutkan urutan tahapan (versi rangkuman).', a: '1) ==Problem formulation== → 2) ==Collect and label data== → 3) ==Evaluate data== → 4) ==Feature engineering== → 5) ==Select and train model== → 6) ==Evaluate model== → 7) ==Meets business goal?== → deploy.' },
      { q: 'Apa yang terjadi jika model belum memenuhi business goal?', a: 'Ulangi (iteratif) lewat ==tune model== (atur ulang hyperparameter), ==feature augmentation== (tambah/perbaiki fitur), atau ==data augmentation== (tambah data).' },
      { q: 'Apa isi tahap problem formulation dan collect data?', a: 'Problem formulation: ubah masalah bisnis jadi masalah ML (jenis tugas, target, metrik sukses). Collect: kumpulkan data dari database, sensor, log ke {{Amazon S3}}, amankan akses, beri label (untuk supervised).' },
      { q: 'Apa isi evaluate data dan feature engineering?', a: 'Evaluate: cek kualitas (data kosong, outlier, kelengkapan) dengan statistik deskriptif & visualisasi di Jupyter Notebook, lalu bersihkan. Feature engineering: pilih fitur relevan & buat fitur baru; data dibagi ==training ~80%, validation ~10%, test ~10%==.' },
      { q: 'Apa isi select & train dan evaluate model?', a: 'Pilih algoritma (misal ==XGBoost==), latih dengan training data, lakukan ==hyperparameter tuning==. Evaluasi akurasi di test data, misal dengan ==accuracy atau F1 score==.' },
      { q: 'Apa isi deploy & monitoring?', a: 'Jika memenuhi target, model di-deploy ke ==endpoint produksi (SageMaker Hosting)== untuk inference, dipantau untuk ==data drift==, dan di-retraining dengan data baru.' }
    ],
    keys: [
      { label: 'Problem formulation', kw: ['problem formulation', 'formulasi masalah', 'business problem'] },
      { label: 'Collect & label data', kw: ['collect', 'label data', 'mengumpulkan'] },
      { label: 'Evaluate data', kw: ['evaluate data', 'kualitas data', 'evaluasi data'] },
      { label: 'Feature engineering', kw: ['feature engineering', 'fitur'] },
      { label: 'Select & train model', kw: ['train', 'latih', 'algoritma'] },
      { label: 'Evaluate model', kw: ['evaluate model', 'evaluasi model', 'accuracy', 'f1'] },
      { label: 'Meets business goal?', kw: ['business goal', 'tujuan bisnis'] },
      { label: 'Tune model / augmentation', kw: ['tune', 'augmentation', 'hyperparameter'] },
      { label: 'Deploy / monitoring', kw: ['deploy', 'endpoint', 'monitoring'] },
      { label: 'Iteratif', kw: ['iteratif', 'berulang'] }
    ],
    tip: 'Soal minta **gambar**: buat diagram kotak-panah 1 → 7 dengan cabang "Meets business goal?" (Ya → deploy, Tidak → tune model / feature augmentation / data augmentation, kembali ke feature engineering). Lalu jelaskan tiap tahap 1 kalimat. Tegaskan prosesnya ==iteratif==.',
    a: [
      { h: 'Pengertian', b: '==Machine Learning Pipeline== adalah rangkaian tahapan terstruktur dan bersifat ==iteratif (berulang)== untuk mengubah permasalahan bisnis menjadi model ML yang siap digunakan untuk menghasilkan prediksi di lingkungan produksi.' },
      { h: 'Gambar pipeline', b: '<div class="flow"><span>1. Problem formulation<small>masalah bisnis → masalah ML</small></span><i>→</i><span>2. Collect & label data<small>kumpulkan + beri label</small></span><i>→</i><span>3. Evaluate data<small>cek kualitas</small></span><i>→</i><span>4. Feature engineering<small>pilih & buat fitur</small></span><i>→</i><span>5. Select & train model<small>pilih algoritma, latih</small></span><i>→</i><span>6. Evaluate model<small>ukur performa</small></span><i>→</i><span>7. Meets business goal?</span></div><div class="flow"><span>✅ Ya → 8. Deploy model<small>model siap dipakai</small></span><span>❌ Tidak → tune model / feature augmentation / data augmentation<small>kembali ke tahap 4-5</small></span></div>' },
      { h: 'Penjelasan tiap tahap (versi rangkuman)', b: '<ol><li>==Problem formulation==: ubah masalah bisnis jadi masalah ML.</li><li>==Collect and label data==: kumpulkan data dan beri label (jawaban).</li><li>==Evaluate data==: cek kualitas data, seperti data kosong, outlier, dan kelengkapannya.</li><li>==Feature engineering==: pilih dan buat fitur yang berguna untuk model.</li><li>==Select and train model==: pilih algoritma lalu latih model dengan data.</li><li>==Evaluate model==: ukur performa model, misalnya dengan accuracy atau F1 score.</li><li>==Meets business goal?== Kalau ya, model siap dipakai (deploy). Kalau belum, ulangi lewat ==tune model== (atur ulang hyperparameter), ==feature augmentation== (tambah atau perbaiki fitur), atau ==data augmentation== (tambah data).</li></ol>' },
      { h: 'Penjelasan detail (versi buku catatan)', b: '<ol><li>**Business problem & problem formulation:** identifikasi tujuan bisnis, target yang diprediksi, jenis tugas ML (klasifikasi, regresi, klasterisasi), dan metrik sukses.</li><li>**Collect, label, and secure data:** kumpulkan dataset dari database, sensor, log ke {{Amazon S3}}, atur keamanan akses, beri label untuk supervised learning.</li><li>**Evaluate & preprocess data:** periksa kualitas lewat statistik deskriptif & visualisasi (Jupyter Notebook), lalu tangani missing values, outliers, ubah kategori jadi angka, dan scaling.</li><li>**Feature engineering & data splitting:** pilih fitur relevan dan buat fitur baru; bagi data jadi ==training (~80%), validation (~10%), test (~10%)==.</li><li>**Select, train, and tune model:** pilih algoritma (misal ==XGBoost==), latih, lalu ==hyperparameter tuning== iteratif.</li><li>**Evaluate model:** uji di test data apakah sudah memenuhi target bisnis; jika belum, kembali ke tune model / feature augmentation / data augmentation.</li><li>**Deploy model & monitoring:** deploy ke endpoint produksi (SageMaker Hosting) untuk inference, pantau ==data drift==, dan lakukan retraining dengan data baru.</li></ol>' }
    ]
  },

  {
    id: 'als6', region: 'ALS', no: 6, kisi: [3], modul: 'Module 3 · PPT Session 3-4',
    title: '5 teknik preprocessing data beserta contohnya',
    question: 'Jelaskan 5 teknik preprocessing data dan berikan contohnya!',
    rinci: [
      { q: 'Teknik 1: imputation / handling missing values?', a: 'Mengatasi sel kosong (NULL/NaN) dengan ==menghapus== baris/kolom atau ==mengisi (imputasi)== dengan mean, median, atau mode. Contoh: Distance D003 = NULL diisi mean ==13,75 km==; umur kosong diisi rata-rata.' },
      { q: 'Teknik 2: categorical encoding?', a: 'Mengubah kategori/teks jadi angka. ==One-Hot Encoding== (kategori nominal) dan ==Label/Ordinal Encoding== (kategori bertingkat). Contoh: Weather "Rainy"/"Sunny" → kolom Weather_Rainy & Weather_Sunny (1/0); jenis kelamin → 0 dan 1.' },
      { q: 'Teknik 3: feature scaling?', a: 'Menyetarakan rentang skala fitur numerik. ==Normalization (Min-Max)== → 0 sampai 1; ==Standardization (Z-score)== → mean 0, std 1. Contoh: menyetarakan Gaji_Tahunan (puluhan juta) dengan Usia (puluhan tahun).' },
      { q: 'Teknik 4: data cleaning & format standardization?', a: 'Memperbaiki ketidakkonsistenan huruf, menghapus satuan teks di kolom angka, membuang duplikat. Contoh: "Express", "express", "REGULAR" diseragamkan; "12 km" & "15km" → 12 dan 15.' },
      { q: 'Teknik 5: outlier treatment & binning?', a: 'Menangani nilai ekstrem dengan ==trimming== atau ==capping==, dan mengelompokkan angka kontinu ke rentang (==binning==). Contoh: gaji Rp500 juta di antara rata-rata Rp5 juta; jam 09:00/14:00/16:00 → Pagi, Siang, Sore.' },
      { q: 'Apa dua teknik lain yang ada di rangkuman?', a: '==Seleksi fitur==: pilih kolom penting saja (buang kolom nomor telepon). ==Membuat fitur baru==: pecah/gabung kolom (tanggal lahir → usia, bulan, hari). Versi rangkuman: data hilang, outlier, encoding, seleksi fitur, membuat fitur baru.' }
    ],
    keys: [
      { label: 'Missing value / imputasi', kw: ['missing', 'imputasi', 'imputation', 'data hilang', 'kosong'] },
      { label: 'Encoding (one-hot/label)', kw: ['encoding', 'one hot', 'label encoding', 'ordinal'] },
      { label: 'Feature scaling (normalisasi/standarisasi)', kw: ['scaling', 'normalisasi', 'normalization', 'standardization', 'standarisasi'] },
      { label: 'Data cleaning / format', kw: ['cleaning', 'format', 'duplikat', 'konsisten'] },
      { label: 'Outlier', kw: ['outlier', 'ekstrem', 'pencilan'] },
      { label: 'Seleksi fitur / fitur baru / binning', kw: ['seleksi fitur', 'feature selection', 'fitur baru', 'binning'] },
      { label: 'Contoh konkret tiap teknik', kw: ['contoh', 'misalnya'] }
    ],
    tip: 'Untuk tiap teknik tulis: **nama → apa yang dilakukan → contoh konkret**. Dua versi daftar sama-sama sah; paling aman pilih: missing value, encoding, scaling, cleaning/format, outlier. Pakai contoh dataset QuickShip (13,75 km; Rainy/RAINY; 12 km) supaya nyambung dengan studi kasus.',
    a: [
      { h: 'Pembuka', b: 'Data dunia nyata sering kotor, tidak lengkap, dan tidak konsisten. Berikut ==5 teknik utama data preprocessing== agar data mentah dapat dipelajari optimal oleh algoritma ML.' },
      { h: '1. Imputation / handling missing values', b: 'Mengatasi sel kosong (NULL/NaN) dengan menghapus baris/kolom atau mengisi nilainya (==imputation==) memakai mean, median, atau mode.<br>**Contoh:** nilai kosong kolom jarak pengiriman (D003 = NULL) diisi mean dari data jarak lainnya, yaitu ==13,75 km==.' },
      { h: '2. Categorical encoding', b: 'Mengonversi kategori/teks menjadi angka karena algoritma ML butuh input numerik. Teknik: ==One-Hot Encoding== (kategori nominal) dan ==Label/Ordinal Encoding== (kategori bertingkat).<br>**Contoh:** kolom Weather "Rainy" dan "Sunny" diubah menjadi kolom biner Weather_Rainy (1/0) dan Weather_Sunny (0/1).' },
      { h: '3. Feature scaling', b: 'Menyetarakan rentang skala antar fitur numerik agar fitur bernilai besar tidak mendominasi.<ul><li>==Normalization (Min-Max Scaling)==: mengubah ke skala 0 sampai 1.</li><li>==Standardization (Z-Score)==: mengubah agar mean = 0 dan standard deviation = 1.</li></ul>**Contoh:** menyetarakan skala Gaji_Tahunan (puluhan juta rupiah) dengan Usia (puluhan tahun).' },
      { h: '4. Data cleaning & formatting standardization', b: 'Memperbaiki ketidakkonsistenan huruf (case sensitivity), menghapus simbol/satuan teks pada kolom angka, dan membuang duplikasi.<br>**Contoh:** menyeragamkan "Express", "express", dan "REGULAR", serta menghapus "km" pada "12 km" dan "15km" menjadi angka 12 dan 15.' },
      { h: '5. Outlier treatment & feature binning', b: 'Mendeteksi dan menangani nilai ekstrem (==outlier==) dengan trimming atau ==capping==, serta mengelompokkan angka kontinu ke kategori rentang (==binning==).<br>**Contoh:** jam keberangkatan 09:00, 14:00, 16:00 diubah menjadi kategori Pagi, Siang, Sore.' },
      { h: 'Versi lain di rangkuman (juga benar)', filled: true, b: '<ol><li>==Menangani data hilang==: hapus barisnya atau isi nilai pengganti. Contoh: umur kosong diisi rata-rata.</li><li>==Menangani outlier==: hapus, ubah, atau ganti nilai ekstrem. Contoh: gaji Rp500 juta di antara rata-rata Rp5 juta.</li><li>==Encoding==: teks jadi angka. Contoh: jenis kelamin jadi 0 dan 1, warna dipecah jadi kolom Red, Blue, Green (one-hot).</li><li>==Seleksi fitur==: pilih kolom penting saja. Contoh: buang kolom nomor telepon karena tidak membantu prediksi.</li><li>==Membuat fitur baru==: pecah atau gabung kolom. Contoh: tanggal lahir dipecah jadi usia, bulan, dan hari.</li></ol>' }
    ]
  },

  {
    id: 'als7', region: 'ALS', no: 7, kisi: [4], modul: 'Module 3 · PPT Session 3-4',
    title: 'Overfitting vs underfitting dan cara mengatasinya',
    question: 'Jelaskan perbedaan dari Overfitting dan Underfitting! Bagaimana cara mengatasinya?',
    rinci: [
      { q: 'Apa itu overfitting?', a: 'Model ==terlalu menyesuaikan diri (menghafal)== detail dan noise data training sehingga gagal mengenali pola umum pada data baru. Disebut ==high variance, low bias==.' },
      { q: 'Apa itu underfitting?', a: 'Model ==terlalu sederhana== sehingga belum mampu mempelajari pola dasar antara fitur dan target. Disebut ==high bias, low variance==.' },
      { q: 'Bagaimana performa training vs validation/test?', a: 'Overfitting: training ==sangat tinggi== (misal 98%), validation/test ==turun drastis== (65-67%). Underfitting: training ==rendah== (misal 55%) dan validation/test ==sama-sama rendah== (53%).' },
      { q: 'Apa penyebab masing-masing?', a: 'Overfitting: model terlalu kompleks, data training sedikit, banyak fitur noise, ==overtraining (terlalu banyak epochs)==. Underfitting: model terlalu simpel (linear untuk data non-linear), fitur kurang informatif, training terlalu singkat, regularisasi terlalu besar.' },
      { q: 'Cara mengatasi overfitting?', a: '==Tambah data training==, ==regularization (L1/L2) & dropout==, ==early stopping==, ==feature selection==, ==model simplification/pruning & cross-validation==.' },
      { q: 'Cara mengatasi underfitting?', a: '==Model lebih kompleks== (algoritma lebih kuat / tambah layer/neuron), ==feature engineering== (tambah fitur relevan), ==latih lebih lama== (tambah epochs), ==kurangi regularisasi==.' },
      { q: 'Perumpamaan keduanya?', a: 'Overfitting = ==murid hafal soal latihan== tapi bingung saat soal diganti. Underfitting = ==murid yang belum cukup belajar==.' }
    ],
    keys: [
      { label: 'Overfitting: menghafal data training', kw: ['menghafal', 'terlalu menyesuaikan', 'overfitting'] },
      { label: 'Underfitting: model terlalu sederhana', kw: ['terlalu sederhana', 'underfitting', 'simpel'] },
      { label: 'Training tinggi, test rendah', kw: ['training tinggi', 'data baru', 'data latihan', 'tinggi'] },
      { label: 'Jelek di semua data (underfitting)', kw: ['sama sama rendah', 'semua', 'rendah'] },
      { label: 'Variance & bias', kw: ['variance', 'bias'] },
      { label: 'Tambah data', kw: ['tambah data', 'menambah data'] },
      { label: 'Regularisasi / dropout', kw: ['regularisasi', 'regularization', 'dropout'] },
      { label: 'Early stopping / cross-validation', kw: ['early stopping', 'cross validation'] },
      { label: 'Model lebih kompleks / tambah fitur', kw: ['lebih kompleks', 'tambah fitur', 'feature engineering'] },
      { label: 'Latih lebih lama', kw: ['lebih lama', 'epoch', 'durasi'] }
    ],
    tip: 'Paling aman pakai **tabel**: pengertian, performa training, performa validation/test, penyebab, cara mengatasi (kolom overfitting vs underfitting). Tambahkan perumpamaan murid supaya jelas.',
    a: [
      { h: 'Tabel perbedaan', b: '==Overfitting== dan ==underfitting== adalah dua masalah utama yang membuat model gagal melakukan generalisasi pada data baru.<table class="tbl"><tr><th>Aspek</th><th>Overfitting (high variance, low bias)</th><th>Underfitting (high bias, low variance)</th></tr><tr><td>Pengertian</td><td>Model terlalu menyesuaikan diri (menghafal) detail spesifik dan noise data training, gagal mengenali pola umum pada data baru</td><td>Model terlalu sederhana, belum mampu mempelajari pola dasar antara fitur input dan target</td></tr><tr><td>Performa training</td><td>Sangat tinggi (misal akurasi 98%)</td><td>Rendah (misal 55%)</td></tr><tr><td>Performa validation/test</td><td>Turun drastis (misal 65%-67%)</td><td>Sama-sama rendah (misal 53%)</td></tr><tr><td>Penyebab utama</td><td>Model terlalu kompleks, data training terlalu sedikit, terlalu banyak fitur tidak relevan (noise), overtraining (terlalu banyak epochs)</td><td>Model terlalu simpel (linear untuk data non-linear), fitur kurang informatif, training terlalu singkat, regularisasi terlalu besar</td></tr></table>' },
      { h: 'Cara mengatasi', b: '<table class="tbl"><tr><th>Overfitting</th><th>Underfitting</th></tr><tr><td><ol><li>Menambah data training yang representatif</li><li>Regularization (L1/L2) & dropout untuk memberi penalti kompleksitas</li><li>Early stopping (berhenti saat validation error mulai naik)</li><li>Feature selection (buang fitur noise)</li><li>Model simplification / pruning & cross-validation</li></ol></td><td><ol><li>Meningkatkan kompleksitas model (algoritma lebih kuat, tambah layer/neuron)</li><li>Feature engineering (tambah fitur relevan)</li><li>Menambah durasi training (iterasi/epochs)</li><li>Mengurangi parameter regularisasi</li></ol></td></tr></table>' },
      { h: 'Perumpamaan', filled: true, b: 'Overfitting seperti ==murid yang hafal soal latihan==, tetapi bingung saat soalnya diganti. Underfitting seperti ==murid yang belum cukup belajar==, jadi jelek di soal latihan maupun soal baru.' }
    ]
  },

  {
    id: 'als8', region: 'ALS', no: 8, kisi: [4], modul: 'Module 3 · PPT Session 3-4',
    title: 'Accuracy, precision, recall, F1 score, dan ROC curve',
    question: 'Jelaskan apa itu accuracy, recall, precision, F1 score, dan ROC curve pada classification metrics!',
    rinci: [
      { q: 'Apa 4 komponen confusion matrix?', a: '==TP== (prediksi positif, kenyataan positif), ==TN== (prediksi negatif, kenyataan negatif), ==FP== (prediksi positif padahal negatif, false alarm), ==FN== (prediksi negatif padahal positif, gagal deteksi).' },
      { q: 'Apa itu accuracy dan rumusnya?', a: 'Rasio prediksi benar dari semua data. ==Accuracy = (TP + TN) / (TP + TN + FP + FN)==. Bagus jika kelas seimbang, bisa ==menyesatkan pada imbalanced data==.' },
      { q: 'Apa itu precision dan rumusnya?', a: 'Dari semua yang ditebak positif, berapa yang benar positif. ==Precision = TP / (TP + FP)==. Penting untuk ==menghindari false positive== (email penting jangan masuk spam).' },
      { q: 'Apa itu recall dan rumusnya?', a: 'Dari semua yang benar-benar positif, berapa yang tertangkap. ==Recall (TPR/sensitivity) = TP / (TP + FN)==. Krusial ketika ==false negative berbahaya== (kanker, fraud).' },
      { q: 'Apa itu F1 score dan rumusnya?', a: '==Rata-rata harmonik== precision dan recall. ==F1 = 2 × (Precision × Recall) / (Precision + Recall)==. Dipakai saat kelas ==tidak seimbang==.' },
      { q: 'Apa itu ROC curve?', a: 'Grafik ==True Positive Rate (recall) di sumbu Y terhadap False Positive Rate [FPR = FP / (FP + TN)] di sumbu X== pada berbagai ==threshold== klasifikasi.' },
      { q: 'Apa itu AUC dan cara membacanya?', a: '==Luas area di bawah kurva ROC== (0 sampai 1). Mendekati ==1 = sempurna== memisahkan kelas; ==0,5 = sama dengan menebak acak==.' }
    ],
    keys: [
      { label: 'Confusion matrix (TP/TN/FP/FN)', kw: ['confusion matrix', 'tp', 'fn', 'fp'] },
      { label: 'Accuracy: benar dari semua', kw: ['accuracy', 'akurasi'] },
      { label: 'Rumus accuracy (TP+TN)/semua', kw: ['tp tn', 'semua data'] },
      { label: 'Precision: TP/(TP+FP)', kw: ['precision', 'presisi'] },
      { label: 'Recall: TP/(TP+FN)', kw: ['recall', 'sensitivity', 'tpr'] },
      { label: 'F1: gabungan precision & recall', kw: ['f1', 'harmonik', 'gabungan'] },
      { label: 'ROC: TPR vs FPR', kw: ['roc', 'fpr', 'false positive rate'] },
      { label: 'AUC: 1 sempurna, 0,5 acak', kw: ['auc', 'acak', '0 5'] },
      { label: 'Threshold', kw: ['threshold', 'ambang'] }
    ],
    tip: 'Mulai dari ==confusion matrix (TP, TN, FP, FN)==, lalu **tabel metrik | arti | rumus**. Tambahkan kapan dipakai: precision (hindari FP), recall (hindari FN), F1 (kelas timpang). ROC = TPR vs FPR; AUC 1 = sempurna, 0,5 = acak.',
    a: [
      { h: 'Confusion matrix sebagai dasar', b: 'Metrik klasifikasi dihitung dari ==confusion matrix==:<table class="tbl"><tr><th></th><th>Kenyataan positif</th><th>Kenyataan negatif</th></tr><tr><td>**Prediksi positif**</td><td>TP (True Positive)</td><td>FP (False Positive, false alarm)</td></tr><tr><td>**Prediksi negatif**</td><td>FN (False Negative, gagal deteksi)</td><td>TN (True Negative)</td></tr></table>' },
      { h: 'Tabel metrik, arti & rumus', b: '<table class="tbl"><tr><th>Metrik</th><th>Artinya</th><th>Rumus</th></tr><tr><td>==Accuracy==</td><td>Persentase tebakan yang benar dari semua data. Bagus jika kelas seimbang, bisa menyesatkan pada imbalanced data.</td><td>(TP + TN) / (TP + TN + FP + FN)</td></tr><tr><td>==Precision==</td><td>Dari semua yang ditebak positif, berapa yang benar-benar positif. Penting untuk menghindari false positive (email penting jangan masuk spam).</td><td>TP / (TP + FP)</td></tr><tr><td>==Recall== (sensitivity, TPR)</td><td>Dari semua yang benar-benar positif, berapa yang berhasil ditebak. Krusial saat false negative berbahaya (kanker, fraud).</td><td>TP / (TP + FN)</td></tr><tr><td>==F1 score==</td><td>Rata-rata harmonik precision dan recall supaya keduanya seimbang; wajib saat kelas timpang.</td><td>2 × (P × R) / (P + R)</td></tr><tr><td>==ROC curve==</td><td>Grafik kemampuan model membedakan positif dan negatif di berbagai threshold.</td><td>TPR (sumbu Y) vs FPR = FP / (FP + TN) (sumbu X)</td></tr></table>' },
      { h: 'ROC & AUC', b: '<ul><li>**ROC curve (Receiver Operating Characteristic)** memplot True Positive Rate (recall) pada sumbu Y terhadap False Positive Rate pada sumbu X di berbagai nilai ambang probabilitas (classification thresholds).</li><li>**AUC-ROC (Area Under the Curve)** mengukur luas area di bawah kurva (0,0 sampai 1,0). Makin mendekati ==1,0== makin unggul model memisahkan kelas; ==0,5== berarti tidak lebih baik dari tebakan acak.</li></ul>' }
    ]
  }
);
