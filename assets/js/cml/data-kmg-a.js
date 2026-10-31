/* KMG · Latihan UTS Cloud Machine Learning, soal 1-5. Kunci dari "Kunci Jawaban Dosen" dan "Catatan Lengkap & Pembahasan UTS". */
window.UTS = window.UTS || {};
UTS.essays = UTS.essays || [];

UTS.caseQuickShip = '**Studi kasus QuickShip Logistics (soal 5-8).** QuickShip Logistics merupakan perusahaan jasa pengiriman barang yang mengalami peningkatan jumlah keterlambatan pengiriman. Perusahaan ingin memanfaatkan data operasional untuk mengidentifikasi faktor yang berhubungan dengan keterlambatan serta meningkatkan ketepatan waktu pengiriman. Perusahaan memiliki data jarak pengiriman, jenis layanan, kondisi cuaca, jadwal pengiriman, dan waktu barang tiba di tujuan. Sebagian data masih memiliki format yang tidak konsisten dan terdapat beberapa nilai yang belum lengkap.';

UTS.essays.push(
  {
    id: 'kmg1', region: 'KMG', no: 1, kisi: [1], modul: 'PPT Session 1-2 · Module 2',
    title: 'Rule-based system vs Machine Learning (notifikasi stok & rekomendasi)',
    question: 'Sebuah perusahaan menggunakan dua sistem untuk mendukung operasional bisnisnya. Sistem pertama memberikan notifikasi otomatis ketika stok produk berada di bawah batas minimum yang telah ditentukan. Sistem kedua mempelajari pola transaksi pelanggan untuk memberikan rekomendasi produk yang sesuai dengan kebiasaan pembelian mereka. Analisis perbedaan cara kerja kedua sistem tersebut. Jelaskan bagaimana konsep Artificial Intelligence (AI) dan Machine Learning (ML) dapat dikaitkan dengan penerapan kedua sistem tersebut.',
    rinci: [
      { q: 'Sistem pertama (notifikasi stok minimum) termasuk sistem jenis apa?', a: '==Rule-based system==: bekerja berdasarkan ==aturan yang ditentukan sebelumnya secara eksplisit oleh manusia== (programmer). Contoh: ketika stok kurang dari 20 unit, sistem otomatis mengirim notifikasi ke pengelola.' },
      { q: 'Sistem kedua (rekomendasi produk) memakai pendekatan apa?', a: '==Machine Learning==: mempelajari ==pola dari data historis pelanggan==, lalu menghasilkan rekomendasi berdasarkan karakteristik dan perilaku pembelian.' },
      { q: 'Apa beda dasar keputusan dan cara kerja keduanya?', a: 'Dasar keputusan: rule-based = aturan dari programmer, ML = pola yang dipelajari dari data. Cara kerja: rule-based = mengikuti kondisi tertentu, ML = memakai ==model hasil pelatihan==.' },
      { q: 'Bagaimana kemampuan adaptasi keduanya?', a: 'Rule-based perlu ==perubahan aturan secara manual==. ML dapat diperbarui melalui ==pelatihan ulang (retraining)==.' },
      { q: 'Bagaimana hubungan AI dan ML?', a: '==ML merupakan salah satu pendekatan dalam AI==. AI cakupannya lebih luas (membangun sistem yang menunjukkan kemampuan cerdas), ML fokus khusus pada pembelajaran pola dari data.' },
      { q: 'Apakah sistem "IF stock < 20 THEN notify" otomatis termasuk AI?', a: 'Tidak otomatis. Itu ==otomatisasi berbasis aturan (rule-based automation)==; tidak ada proses belajar di dalamnya, jadi tidak otomatis dikategorikan sebagai AI.' },
      { q: 'Beri contoh pola yang bisa dipelajari sistem rekomendasi.', a: 'Pelanggan yang sering membeli ==sepatu olahraga== juga cenderung membeli ==kaus kaki olahraga==. Model mempelajari hubungan antarvariabel tanpa diberi aturan eksplisit untuk setiap kemungkinan.' }
    ],
    keys: [
      { label: 'Rule-based system', kw: ['rule based', 'berbasis aturan', 'aturan'] },
      { label: 'Aturan dibuat programmer/manusia', kw: ['programmer', 'ditentukan manusia', 'eksplisit', 'manual'] },
      { label: 'Machine learning', kw: ['machine learning', 'ml'] },
      { label: 'Belajar pola dari data historis', kw: ['pola', 'data historis', 'belajar dari data'] },
      { label: 'Model hasil pelatihan', kw: ['model', 'pelatihan', 'training'] },
      { label: 'Retraining / adaptasi', kw: ['retraining', 'pelatihan ulang', 'adaptasi'] },
      { label: 'ML bagian/pendekatan dari AI', kw: ['bagian dari ai', 'pendekatan dalam ai', 'cabang', 'subset'] },
      { label: 'AI cakupan lebih luas', kw: ['lebih luas', 'cakupan', 'kemampuan cerdas'] },
      { label: 'Rule-based belum tentu AI', kw: ['tidak otomatis', 'bukan ai', 'otomatisasi', 'tidak ada proses belajar'] },
      { label: 'Contoh rekomendasi (sepatu & kaus kaki)', kw: ['sepatu', 'kaus kaki', 'rekomendasi'] }
    ],
    tip: '(1) Identifikasi: sistem 1 = ==rule-based==, sistem 2 = ==ML==. (2) Tabel perbandingan 4 aspek: dasar keputusan, cara kerja, adaptasi, contoh. (3) Hubungan AI & ML: ML pendekatan dalam AI; rule-based sederhana tidak otomatis AI. (4) Contoh pola sepatu → kaus kaki.',
    a: [
      { h: 'Perbedaan cara kerja kedua sistem', b: '<ul><li>**Sistem pertama** merupakan ==rule-based system==, yaitu sistem yang bekerja berdasarkan aturan yang telah ditentukan sebelumnya secara eksplisit oleh manusia. Contohnya, ketika stok produk kurang dari 20 unit, sistem otomatis mengirimkan notifikasi kepada pengelola.</li><li>**Sistem kedua** menggunakan ==Machine Learning== untuk mempelajari pola dari data historis pelanggan, kemudian menghasilkan rekomendasi produk berdasarkan karakteristik dan perilaku pembelian mereka.</li></ul>' },
      { h: 'Tabel perbandingan', b: '<table class="tbl"><tr><th>Aspek</th><th>Rule-Based System</th><th>Machine Learning</th></tr><tr><td>Dasar keputusan</td><td>Aturan yang ditentukan programmer</td><td>Pola yang dipelajari dari data</td></tr><tr><td>Cara kerja</td><td>Mengikuti kondisi tertentu</td><td>Menggunakan model hasil pelatihan</td></tr><tr><td>Kemampuan adaptasi</td><td>Memerlukan perubahan aturan secara manual</td><td>Dapat diperbarui melalui pelatihan ulang (retraining)</td></tr><tr><td>Contoh</td><td>Notifikasi stok minimum</td><td>Rekomendasi produk pelanggan</td></tr></table>' },
      { h: 'Hubungan AI dan ML', b: '==ML merupakan salah satu pendekatan dalam AI==. AI memiliki cakupan yang lebih luas untuk membangun sistem yang menunjukkan kemampuan cerdas layaknya manusia, sedangkan ML berfokus secara spesifik pada pembelajaran pola dari data.' },
      { h: 'Penjelasan detail', b: '<ul><li>Tidak semua sistem otomatis termasuk AI. Sistem yang hanya menjalankan aturan sederhana seperti <code>IF stock &lt; 20 THEN notify</code> merupakan ==otomatisasi berbasis aturan (rule-based automation)== dan tidak otomatis dapat dikategorikan sebagai AI karena tidak ada proses belajar di dalamnya.</li><li>Sebaliknya, ML dapat mempelajari hubungan antarvariabel secara mandiri tanpa harus diberikan aturan keputusan secara eksplisit untuk setiap kemungkinan.</li><li>Misalnya, sistem rekomendasi mempelajari dari data transaksi bahwa pelanggan yang sering membeli sepatu olahraga juga cenderung membeli kaus kaki olahraga. Pola itu dimanfaatkan untuk menghasilkan rekomendasi yang relevan secara otomatis.</li></ul>' }
    ]
  },

  {
    id: 'kmg2', region: 'KMG', no: 2, kisi: [1], modul: 'PPT Session 1-4 · Module 2',
    title: 'Memilih jenis tugas ML untuk 4 kebutuhan bisnis',
    question: 'Perhatikan beberapa kebutuhan bisnis berikut:<ul><li>Perusahaan properti ingin memperkirakan harga rumah berdasarkan luas bangunan dan lokasi.</li><li>Penyedia layanan email ingin mengidentifikasi pesan yang termasuk spam.</li><li>Perusahaan telekomunikasi ingin mengelompokkan pelanggan berdasarkan pola penggunaan layanan.</li><li>Bank ingin menemukan transaksi yang memiliki pola tidak biasa.</li></ul>Identifikasi jenis tugas Machine Learning yang sesuai untuk setiap kebutuhan tersebut. Jelaskan alasan pemilihan dan bentuk hasil yang diharapkan dari masing-masing penerapan.',
    rinci: [
      { q: 'Memperkirakan harga rumah → tugas ML apa? Hasilnya berbentuk apa?', a: '==Regression==, karena variabel target berupa ==nilai kontinu== (angka). Hasil: prediksi harga numerik, misalnya luas bangunan, lokasi, dan jumlah kamar dipakai untuk memperkirakan harga ==Rp850.000.000==.' },
      { q: 'Mengidentifikasi email spam → tugas ML apa?', a: '==Classification==, karena hasil prediksi berupa ==label kategori diskrit==. Model belajar dari data historis yang sudah diberi label spam / non-spam. Hasil: spam atau bukan spam.' },
      { q: 'Mengelompokkan pelanggan telekomunikasi → tugas ML apa?', a: '==Clustering==: menemukan kelompok alami (natural groupings) berdasarkan kemiripan karakteristik ==tanpa label kelompok== yang ditentukan sebelumnya (unsupervised). Contoh fitur: frekuensi penggunaan internet, konsumsi data, pengeluaran bulanan. Hasil: kelompok pelanggan dengan karakteristik serupa.' },
      { q: 'Menemukan transaksi tidak biasa di bank → tugas ML apa?', a: '==Anomaly detection==: mengidentifikasi pola yang menyimpang signifikan dari pola umum. Contoh: transaksi bernilai sangat besar dari lokasi geografis yang tidak biasa ditandai untuk diperiksa. Hasil: identifikasi transaksi yang menyimpang dari pola normal.' },
      { q: 'Apakah transaksi tidak biasa pasti penipuan (fraud)?', a: 'Belum tentu. Transaksi tidak biasa ==belum tentu fraud==, tetapi memerlukan ==verifikasi== lebih lanjut.' },
      { q: 'Kenapa keempat kebutuhan memakai tugas ML yang berbeda?', a: 'Karena ==tujuan akhir dan struktur target== tiap kebutuhan berbeda: angka (regresi), kategori (klasifikasi), kelompok tanpa label (clustering), dan pola menyimpang (anomaly detection).' }
    ],
    keys: [
      { label: 'Regression', kw: ['regression', 'regresi'] },
      { label: 'Classification', kw: ['classification', 'klasifikasi'] },
      { label: 'Clustering', kw: ['clustering', 'klasterisasi', 'cluster'] },
      { label: 'Anomaly detection', kw: ['anomaly', 'anomali'] },
      { label: 'Nilai numerik/kontinu', kw: ['numerik', 'kontinu', 'angka'] },
      { label: 'Label kategori (spam/non-spam)', kw: ['kategori', 'label', 'spam'] },
      { label: 'Tanpa label / unsupervised', kw: ['tanpa label', 'unsupervised'] },
      { label: 'Kemiripan karakteristik', kw: ['kemiripan', 'serupa', 'mirip'] },
      { label: 'Menyimpang dari pola normal', kw: ['menyimpang', 'tidak biasa', 'pola normal'] },
      { label: 'Bentuk hasil tiap tugas', kw: ['hasil', 'output', 'bentuk'] }
    ],
    tip: 'Paling aman buat **tabel 3 kolom**: Kebutuhan bisnis | Jenis tugas ML | Bentuk hasil. Lalu jelaskan **alasan** tiap tugas (target angka → regresi, kategori → klasifikasi, tanpa label → clustering, pola menyimpang → anomaly detection) beserta contoh fiturnya.',
    a: [
      { h: 'Pembuka', b: 'Keempat kebutuhan bisnis memiliki ==tujuan akhir dan struktur target yang berbeda==, sehingga diselesaikan dengan jenis tugas (task) Machine Learning yang berbeda pula.' },
      { h: 'Tabel identifikasi jenis tugas ML', b: '<table class="tbl"><tr><th>Kebutuhan bisnis</th><th>Jenis tugas ML</th><th>Bentuk hasil</th></tr><tr><td>Memperkirakan harga rumah</td><td>**Regression**</td><td>Prediksi harga numerik</td></tr><tr><td>Mengidentifikasi email spam</td><td>**Classification**</td><td>Spam atau bukan spam (kategori/label)</td></tr><tr><td>Mengelompokkan pelanggan telekomunikasi</td><td>**Clustering**</td><td>Kelompok pelanggan dengan karakteristik serupa</td></tr><tr><td>Menemukan transaksi tidak biasa</td><td>**Anomaly Detection**</td><td>Identifikasi transaksi yang menyimpang dari pola normal</td></tr></table>' },
      { h: 'Penjelasan rinci tiap tugas', b: '<ul><li>**Regression (regresi):** dipakai ketika variabel target merupakan ==nilai kontinu== (angka yang bisa diukur besarannya). Contoh: fitur luas bangunan, lokasi, dan jumlah kamar dipakai model untuk memperkirakan harga rumah sebesar Rp850.000.000.</li><li>**Classification (klasifikasi):** dipakai ketika hasil prediksi berupa ==label kategori diskrit==. Pada penyaring email, model mempelajari karakteristik pesan dari data historis yang sudah diberi label spam atau non-spam, lalu mengklasifikasikan pesan baru ke salah satu kategori.</li><li>**Clustering (klasterisasi):** menemukan ==kelompok alami (natural groupings)== berdasarkan kemiripan karakteristik ==tanpa label kelompok== yang ditentukan sebelumnya (unsupervised). Contoh: pelanggan dikelompokkan berdasarkan frekuensi penggunaan internet, konsumsi data, dan pengeluaran bulanan.</li><li>**Anomaly Detection (deteksi anomali):** mengidentifikasi pola atau titik data yang ==menyimpang signifikan dari pola umum==. Contoh: transaksi bernilai sangat besar dari lokasi geografis yang tidak biasa bagi nasabah ditandai untuk pemeriksaan lebih lanjut. Transaksi tidak biasa ==belum tentu fraud==, tetapi perlu verifikasi.</li></ul>' }
    ]
  },

  {
    id: 'kmg3', region: 'KMG', no: 3, kisi: [2], modul: 'PPT Session 5-6 · Module 2',
    title: 'Deep Learning (CNN) vs ML konvensional untuk deteksi kerusakan produk',
    question: 'Sebuah perusahaan manufaktur ingin mengembangkan sistem yang dapat mengidentifikasi kerusakan produk secara otomatis melalui gambar yang diambil menggunakan kamera produksi. Analisis bagaimana Deep Learning dapat dimanfaatkan untuk menyelesaikan permasalahan tersebut. Bandingkan pendekatannya dengan Machine Learning konvensional, serta jelaskan kondisi yang perlu dipertimbangkan sebelum memilih Deep Learning.',
    rinci: [
      { q: 'Apa itu Deep Learning?', a: 'Bagian (==subset==) dari Machine Learning yang memakai ==neural network dengan beberapa lapisan (hidden layers / multilayer)== untuk mempelajari representasi data yang kompleks secara bertahap.' },
      { q: 'Bagaimana DL dipakai di kasus manufaktur ini?', a: 'Menganalisis gambar produk dari kamera produksi dan mendeteksi kerusakan visual secara otomatis, seperti ==retakan, goresan, atau perubahan bentuk==.' },
      { q: 'Arsitektur DL apa yang paling sesuai? Kenapa?', a: '==Convolutional Neural Network (CNN)==, karena dirancang khusus untuk ==mempelajari fitur spasial pada gambar== secara otomatis.' },
      { q: 'Sebutkan alur umum pemrosesan gambar pada CNN.', a: '1) ==Input image== (gambar dari kamera) → 2) ==Convolutional & pooling layers== (ekstraksi fitur bertahap: tepi, tekstur, bentuk kerusakan) → 3) ==Fully connected layer== (menggabungkan fitur untuk keputusan) → 4) ==Output prediction== (produk normal vs rusak/cacat).' },
      { q: 'Apa beda ekstraksi fitur ML konvensional dan DL?', a: 'ML konvensional sering butuh fitur yang dirancang ==manual (handcrafted / manual feature engineering)==, misalnya tingkat kecerahan, bentuk geometri, tekstur. DL/CNN mempelajari fitur ==langsung dari piksel gambar secara otomatis==, dari garis/tepi sampai karakteristik kerusakan yang kompleks.' },
      { q: 'Bandingkan struktur model, kebutuhan data, dan contohnya.', a: 'ML konvensional: model relatif sederhana, bisa dengan dataset lebih kecil, contoh ==SVM dengan fitur tekstur/tepi==. DL: struktur lebih kompleks, umumnya butuh ==lebih banyak data dan komputasi tinggi (GPU)==, contoh ==CNN==.' },
      { q: 'Kondisi apa yang perlu dipertimbangkan sebelum memilih DL?', a: 'DL tidak selalu terbaik. Jika ==dataset terbatas==, ==biaya komputasi tinggi==, atau kerusakan ==sudah bisa diidentifikasi dengan aturan visual sederhana==, ML konvensional mungkin jauh lebih efisien dan ekonomis.' },
      { q: 'Solusi alternatif agar tidak melatih dari nol?', a: '==Transfer learning==: memanfaatkan ==pre-trained model== (model yang sudah dilatih sebelumnya), sehingga tidak perlu membangun seluruh kemampuan pengenalan gambar dari awal dengan data masif.' }
    ],
    keys: [
      { label: 'Deep learning subset ML', kw: ['deep learning', 'subset', 'bagian dari machine learning'] },
      { label: 'Neural network berlapis / hidden layer', kw: ['neural network', 'hidden layer', 'lapisan', 'multilayer'] },
      { label: 'CNN', kw: ['cnn', 'convolutional'] },
      { label: 'Fitur spasial / ekstraksi otomatis', kw: ['spasial', 'otomatis'] },
      { label: 'Fitur manual (ML konvensional)', kw: ['manual', 'handcrafted', 'feature engineering'] },
      { label: 'Contoh SVM', kw: ['svm'] },
      { label: 'Data banyak & komputasi (GPU)', kw: ['gpu', 'komputasi', 'data yang banyak', 'lebih banyak data'] },
      { label: 'Kerusakan: retakan/goresan', kw: ['retak', 'gores', 'cacat', 'rusak'] },
      { label: 'Kondisi: dataset terbatas / aturan sederhana', kw: ['terbatas', 'aturan sederhana', 'biaya'] },
      { label: 'Transfer learning / pre-trained', kw: ['transfer learning', 'pre trained', 'pretrained'] }
    ],
    tip: '(1) Definisi DL + kenapa ==CNN== cocok untuk gambar. (2) Alur CNN 4 langkah. (3) Tabel ML konvensional vs DL: ekstraksi fitur, struktur, data & komputasi, contoh (SVM vs CNN). (4) Kondisi sebelum memilih DL (data terbatas, biaya, aturan sederhana) + ==transfer learning==.',
    a: [
      { h: 'Pemanfaatan Deep Learning', b: '<ul><li>==Deep Learning== merupakan bagian (subset) dari ML yang memakai jaringan saraf tiruan (neural network) dengan beberapa lapisan (multilayer) untuk mempelajari representasi data yang kompleks secara bertahap.</li><li>Di kasus manufaktur, DL efektif untuk menganalisis gambar produk dari kamera produksi dan mendeteksi kerusakan visual secara otomatis, seperti retakan, goresan, atau perubahan bentuk.</li><li>Arsitektur yang paling sesuai adalah ==Convolutional Neural Network (CNN)== karena dirancang khusus untuk mempelajari fitur spasial pada gambar.</li></ul>' },
      { h: 'Alur pemrosesan gambar pada CNN', b: '<div class="flow"><span>1. Input Image<small>gambar dari kamera produksi</small></span><i>→</i><span>2. Convolutional & Pooling<small>ekstraksi tepi, tekstur, bentuk kerusakan</small></span><i>→</i><span>3. Fully Connected<small>gabungkan fitur untuk klasifikasi</small></span><i>→</i><span>4. Output<small>Normal vs Rusak/Cacat</small></span></div>' },
      { h: 'Perbandingan ML konvensional vs Deep Learning', b: '<table class="tbl"><tr><th>Aspek</th><th>ML konvensional</th><th>Deep Learning (CNN)</th></tr><tr><td>Ekstraksi fitur</td><td>Sering memerlukan fitur yang dirancang manual (handcrafted / manual feature engineering)</td><td>Dapat mempelajari fitur langsung dari gambar secara otomatis (automatic feature extraction)</td></tr><tr><td>Struktur model</td><td>Relatif lebih sederhana</td><td>Dapat memiliki struktur jaringan yang lebih kompleks</td></tr><tr><td>Kebutuhan data & komputasi</td><td>Bisa dipakai pada dataset yang lebih kecil</td><td>Umumnya butuh lebih banyak data dan daya komputasi tinggi (GPU)</td></tr><tr><td>Contoh</td><td>SVM dengan fitur tekstur/tepi</td><td>CNN</td></tr></table>' },
      { h: 'Penjelasan detail & kondisi pertimbangan', b: '<ul><li>Pada ML konvensional, pengembang harus menentukan dan mengekstrak fitur gambar secara manual dulu (tingkat kecerahan, bentuk geometri, karakteristik tekstur) sebelum dimasukkan ke model seperti SVM.</li><li>CNN mempelajari fitur itu secara otomatis dan bertahap langsung dari piksel gambar, mulai dari pola sederhana (garis/tepi) hingga karakteristik kerusakan yang jauh lebih kompleks.</li><li>**Kondisi yang perlu dipertimbangkan:** DL tidak selalu pilihan terbaik. Jika ==dataset terbatas==, ==biaya komputasi tinggi==, atau ==kerusakan bisa diidentifikasi lewat aturan visual sederhana==, ML konvensional mungkin jauh lebih efisien dan ekonomis.</li><li>Alternatifnya, ==transfer learning== memanfaatkan model yang sudah dilatih sebelumnya (pre-trained model), sehingga perusahaan tidak perlu melatih seluruh kemampuan pengenalan gambar dari awal dengan data masif.</li></ul>' }
    ]
  },

  {
    id: 'kmg4', region: 'KMG', no: 4, kisi: [2], modul: 'PPT Session 5-6',
    title: 'Cara kerja Artificial Neural Network untuk risiko kerusakan mesin',
    question: 'Sebuah perusahaan menggunakan Artificial Neural Network untuk memperkirakan risiko kerusakan mesin berdasarkan suhu, tingkat getaran, dan usia penggunaan mesin. Jelaskan bagaimana data tersebut diproses di dalam Neural Network hingga menghasilkan prediksi. Analisis fungsi setiap komponen utama dalam jaringan serta bagaimana proses pembelajaran dapat meningkatkan kemampuan prediksi model.',
    rinci: [
      { q: 'Apa itu Artificial Neural Network (ANN)?', a: 'Model ML yang ==terinspirasi dari jaringan neuron biologis==, terdiri dari neuron-neuron yang saling terhubung dan diorganisasikan dalam beberapa ==lapisan (layers)==.' },
      { q: 'Apa fungsi input layer di kasus ini?', a: '==Input layer== menerima data masukan awal: ==suhu, tingkat getaran, dan usia mesin== dari sensor atau catatan operasional.' },
      { q: 'Apa yang terjadi di hidden layer?', a: '==Hidden layer== mengolah kombinasi input memakai ==bobot (weight), bias, dan activation function== untuk menangkap pola rumit dan ==non-linear==. Setiap nilai dikalikan bobot, ditambah bias, lalu diproses fungsi aktivasi.' },
      { q: 'Apa yang dihasilkan output layer?', a: '==Output layer== menghasilkan prediksi akhir risiko kerusakan, misalnya ==skor probabilitas kerusakan mesin==.' },
      { q: 'Apa itu loss calculation?', a: 'Mengukur ==selisih (error) antara prediksi model dan target sebenarnya== (data historis kerusakan aktual).' },
      { q: 'Apa fungsi backpropagation?', a: 'Menghitung ==kontribusi setiap bobot terhadap kesalahan== dengan mengalirkan informasi error ==mundur dari output ke input layer==.' },
      { q: 'Apa fungsi optimization (misal gradient descent)?', a: '==Memperbarui bobot dan bias== secara bertahap untuk ==memperkecil loss== pada iterasi berikutnya.' },
      { q: 'Bagaimana proses belajar meningkatkan prediksi?', a: 'Lewat ==siklus berulang==: prediksi → loss calculation → backpropagation → optimization, terus mengoreksi bobot & bias sampai error minimal. Contoh pola non-linear: ==suhu panas + getaran tinggi pada mesin tua== memicu risiko kerusakan tinggi.' }
    ],
    keys: [
      { label: 'Input layer (suhu, getaran, usia)', kw: ['input layer', 'lapisan input', 'suhu'] },
      { label: 'Hidden layer', kw: ['hidden layer', 'lapisan tersembunyi'] },
      { label: 'Output layer / probabilitas', kw: ['output layer', 'lapisan output', 'probabilitas'] },
      { label: 'Weight / bobot', kw: ['weight', 'bobot'] },
      { label: 'Bias', kw: ['bias'] },
      { label: 'Activation function', kw: ['activation', 'aktivasi'] },
      { label: 'Non-linear', kw: ['non linear', 'nonlinear'] },
      { label: 'Loss calculation', kw: ['loss', 'error', 'selisih'] },
      { label: 'Backpropagation', kw: ['backpropagation', 'propagasi balik'] },
      { label: 'Optimization / gradient descent', kw: ['optimization', 'optimisasi', 'gradient descent'] },
      { label: 'Iterasi berulang', kw: ['iterasi', 'berulang', 'siklus'] }
    ],
    tip: '(1) Definisi ANN. (2) Alur maju: ==Input → Hidden (weight, bias, activation) → Output==. (3) Proses belajar: ==Loss → Backpropagation → Optimization==, diulang. Paling aman dibuat **tabel 6 komponen** + satu contoh pola non-linear dari kasus mesin.',
    a: [
      { h: 'Pengertian ANN dan data kasus', b: '==Artificial Neural Network (ANN)== merupakan model ML yang terinspirasi dari cara kerja jaringan neuron biologis manusia. Model ini terdiri dari beberapa lapisan (layers) yang saling terhubung untuk mengolah sinyal input hingga menghasilkan prediksi. Pada kasus ini, input-nya adalah tiga variabel: **suhu**, **tingkat getaran**, dan **usia penggunaan mesin**.' },
      { h: 'Diagram alur', b: '<div class="flow"><span>Input Layer<small>suhu, getaran, usia mesin</small></span><i>→</i><span>Hidden Layer<small>weight, bias, activation function</small></span><i>→</i><span>Output Layer<small>prediksi risiko kerusakan</small></span></div><div class="flow back"><span>Loss calculation</span><i>→</i><span>Backpropagation</span><i>→</i><span>Optimization (update bobot)</span><i>↺</i></div>' },
      { h: 'Fungsi komponen utama & proses pembelajaran', b: '<table class="tbl"><tr><th>Komponen / tahapan</th><th>Fungsi</th></tr><tr><td>Input Layer</td><td>Menerima data masukan awal berupa suhu, getaran, dan usia mesin.</td></tr><tr><td>Hidden Layer</td><td>Mengolah kombinasi input memakai bobot (weight), bias, dan activation function untuk mengenali pola kompleks antarvariabel mesin.</td></tr><tr><td>Output Layer</td><td>Menghasilkan hasil akhir berupa prediksi risiko kerusakan (misalnya skor probabilitas).</td></tr><tr><td>Loss Calculation</td><td>Mengukur seberapa besar perbedaan (error) antara prediksi model dan target sebenarnya (kondisi kerusakan aktual).</td></tr><tr><td>Backpropagation</td><td>Menghitung kontribusi setiap bobot terhadap kesalahan prediksi dengan mengalirkan informasi error kembali ke lapisan belakang.</td></tr><tr><td>Optimization (misal Gradient Descent)</td><td>Memperbarui bobot dan bias secara bertahap untuk mengurangi kesalahan pada iterasi berikutnya.</td></tr></table>' },
      { h: 'Penjelasan detail alur pemrosesan dan pembelajaran', b: '<ul><li>Saat data masuk melalui **Input Layer**, nilai suhu, getaran, dan usia mesin diteruskan ke **Hidden Layer**. Di sana setiap nilai dikalikan bobot, ditambahkan bias, dan diproses fungsi aktivasi agar jaringan mampu mempelajari ==hubungan non-linear== yang rumit (misalnya kombinasi suhu panas dan getaran tinggi pada mesin tua memicu risiko kerusakan tinggi), lalu hasilnya dikeluarkan oleh **Output Layer**.</li><li>Kemampuan prediksi meningkat melalui ==siklus pembelajaran berulang==: setiap prediksi dicek dengan **Loss Calculation**, lalu lewat **Backpropagation** dan **Optimization** jaringan terus mengoreksi bobot dan bias sampai error minimal dan akurasi prediksi meningkat.</li></ul>' }
    ]
  },

  {
    id: 'kmg5', region: 'KMG', no: 5, kisi: [3], modul: 'PPT Session 1-4 · Module 2-3',
    case: UTS.caseQuickShip,
    title: 'QuickShip: tujuan terukur, hasil prediksi & manfaat ML',
    question: 'Berdasarkan kasus QuickShip Logistics, analisis bagaimana Machine Learning dapat membantu perusahaan meningkatkan kualitas layanan pengiriman. Rumuskan tujuan analisis yang dapat diukur, tentukan hasil prediksi yang dibutuhkan, dan jelaskan manfaat hasil tersebut bagi pengambilan keputusan operasional.',
    rinci: [
      { q: 'Apa masalah bisnis utama QuickShip?', a: '==Meningkatnya keterlambatan pengiriman== yang dapat menurunkan kualitas layanan dan kepuasan pelanggan.' },
      { q: 'Bagaimana ML membantu?', a: 'Membangun model untuk ==memprediksi kemungkinan keterlambatan suatu pengiriman sebelum proses pengiriman dilakukan==.' },
      { q: 'Apa business objective dan ML objective-nya?', a: '==Business objective==: mengurangi tingkat keterlambatan pengiriman. ==ML objective==: memprediksi kemungkinan keterlambatan berdasarkan karakteristik pengiriman.' },
      { q: 'Apa input data dan target/label-nya?', a: 'Input: ==jarak pengiriman, cuaca, jenis layanan, jadwal pengiriman==. Target: ==status keterlambatan (Terlambat = 1, Tepat Waktu = 0)==.' },
      { q: 'Apa ML task, learning type, dan output-nya?', a: 'ML task: ==Binary Classification==. Learning type: ==Supervised Learning== (butuh data historis berlabel keterlambatan). Output: kategori label atau ==probabilitas keterlambatan (%)==.' },
      { q: 'Apa manfaat hasil prediksi bagi keputusan operasional?', a: 'Misal model memprediksi ==probabilitas keterlambatan 85%==. Perusahaan bisa mengambil ==tindakan pencegahan==: menyesuaikan rute, mengevaluasi jadwal keberangkatan, atau memprioritaskan paket berisiko tinggi.' },
      { q: 'Apa yang perlu diingat tentang probabilitas prediksi?', a: 'Probabilitas adalah ==estimasi prediktif, bukan jaminan mutlak== bahwa pengiriman pasti terlambat.' },
      { q: 'Bagaimana tujuan dibuat dapat diukur (measurable)?', a: 'Membandingkan ==tingkat keterlambatan operasional dan metrik kinerja model sebelum dan sesudah== penerapan sistem.' }
    ],
    keys: [
      { label: 'Business objective (kurangi keterlambatan)', kw: ['business objective', 'tujuan bisnis', 'mengurangi keterlambatan'] },
      { label: 'ML objective (prediksi keterlambatan)', kw: ['ml objective', 'tujuan ml', 'memprediksi'] },
      { label: 'Input: jarak, cuaca, layanan, jadwal', kw: ['jarak', 'cuaca', 'jenis layanan', 'jadwal', 'distance', 'weather'] },
      { label: 'Target: terlambat / tepat waktu', kw: ['terlambat', 'tepat waktu', 'target', 'label'] },
      { label: 'Binary classification', kw: ['binary classification', 'klasifikasi biner', 'classification', 'klasifikasi'] },
      { label: 'Supervised learning', kw: ['supervised'] },
      { label: 'Probabilitas (misal 85%)', kw: ['probabilitas', '85'] },
      { label: 'Tindakan pencegahan (rute, jadwal, prioritas)', kw: ['rute', 'prioritas', 'pencegahan', 'jadwal'] },
      { label: 'Bukan jaminan mutlak', kw: ['bukan jaminan', 'estimasi'] },
      { label: 'Terukur: bandingkan sebelum & sesudah', kw: ['diukur', 'measurable', 'sebelum dan sesudah', 'metrik'] }
    ],
    tip: 'Buat **tabel rumusan masalah 7 baris**: business objective, ML objective, input, target, ML task, learning type, output. Lalu jelaskan manfaat (probabilitas 85% → tindakan pencegahan), catatan "bukan jaminan mutlak", dan cara mengukur keberhasilan (sebelum vs sesudah).',
    a: [
      { h: 'Masalah bisnis dan peran ML', b: 'QuickShip Logistics menghadapi masalah bisnis utama yaitu ==meningkatnya keterlambatan pengiriman== yang dapat menurunkan kualitas layanan dan kepuasan pelanggan. Masalah ini dapat diselesaikan dengan ==Machine Learning== dengan mengembangkan model untuk **memprediksi kemungkinan keterlambatan suatu pengiriman sebelum proses pengiriman dilakukan**.' },
      { h: 'Tabel rumusan masalah ML', b: '<table class="tbl"><tr><th>Komponen</th><th>Deskripsi</th></tr><tr><td>Tujuan bisnis (business objective)</td><td>Mengurangi tingkat keterlambatan pengiriman</td></tr><tr><td>Tujuan ML (ML objective)</td><td>Memprediksi kemungkinan keterlambatan berdasarkan karakteristik pengiriman</td></tr><tr><td>Input data</td><td>Jarak pengiriman, cuaca, jenis layanan, jadwal pengiriman</td></tr><tr><td>Target / label</td><td>Status terlambat atau tepat waktu (Terlambat = 1, Tepat Waktu = 0)</td></tr><tr><td>ML task</td><td>Binary Classification</td></tr><tr><td>Learning type</td><td>Supervised Learning</td></tr><tr><td>Output</td><td>Kategori atau probabilitas keterlambatan (%)</td></tr></table>Model memakai ==Supervised Learning== karena membutuhkan data historis yang sudah memiliki label keterlambatan untuk mempelajari hubungan antara karakteristik pengiriman dan hasil akhirnya.' },
      { h: 'Manfaat operasional', b: '<ul><li>Model dapat memprediksi secara spesifik bahwa pengiriman tertentu memiliki ==probabilitas keterlambatan 85%==.</li><li>Hasil itu membantu perusahaan menentukan ==tindakan pencegahan operasional==: menyesuaikan rute, mengevaluasi jadwal keberangkatan, atau memprioritaskan penanganan pengiriman berisiko tinggi.</li><li>Probabilitas tersebut adalah estimasi prediktif dan ==bukan jaminan mutlak== bahwa pengiriman pasti terlambat.</li></ul>' },
      { h: 'Tujuan harus terukur & bedakan dua jenis tujuan', b: '<ul><li>Tujuan ML harus ==dapat diukur (measurable)==: keberhasilan diukur dengan membandingkan tingkat keterlambatan operasional dan metrik kinerja model ==sebelum dan sesudah== penerapan sistem.</li><li>Selalu bedakan ==business objective== (dampak bisnis: mengurangi keterlambatan) dan ==ML objective== (kinerja teknis: menghasilkan prediksi keterlambatan yang akurat dan bermanfaat secara operasional).</li></ul>' }
    ]
  }
);
