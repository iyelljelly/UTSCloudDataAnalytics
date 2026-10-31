/* ALS · Quiz Cloud Machine Learning, soal 9-15. */
window.UTS = window.UTS || {};
UTS.essays = UTS.essays || [];

UTS.essays.push(
  {
    id: 'als9', region: 'ALS', no: 9, kisi: [4], modul: 'Module 3 · PPT Session 3-4',
    title: 'Bagging vs boosting pada ensemble methods',
    question: 'Jelaskan apa perbedaan bagging dan boosting pada ensemble methods dan berikan contohnya!',
    rinci: [
      { q: 'Apa itu ensemble methods?', a: 'Teknik ML yang ==menggabungkan beberapa model dasar (weak learners)==, umumnya decision tree, menjadi satu model gabungan yang lebih kuat dan akurat.' },
      { q: 'Bagaimana alur pelatihan bagging vs boosting?', a: 'Bagging: banyak model dilatih ==paralel dan independen== (terpisah, bersamaan). Boosting: model dilatih ==sekuensial (satu per satu)==, setiap model baru ==memperbaiki kesalahan model sebelumnya==.' },
      { q: 'Bagaimana cara pengambilan sampel datanya?', a: 'Bagging: ==sampel acak dengan pengembalian (bootstrap sampling)==, setiap baris peluangnya sama. Boosting: baris yang salah diprediksi model sebelumnya diberi ==bobot perhatian lebih besar==.' },
      { q: 'Apa tujuan utama masing-masing?', a: 'Bagging: ==menurunkan variance / mengurangi overfitting== (prediksi lebih stabil). Boosting: ==menurunkan bias / meningkatkan akurasi== (mengatasi underfitting).' },
      { q: 'Bagaimana keputusan akhir digabung?', a: 'Bagging: ==rata-rata (averaging) atau suara terbanyak (majority voting)== dengan bobot setara. Boosting: ==penjumlahan berbobot (weighted voting)==, model lebih akurat bobotnya lebih besar.' },
      { q: 'Contoh algoritma masing-masing?', a: 'Bagging: ==Random Forest==, bagged decision trees. Boosting: ==AdaBoost, Gradient Boosting (GBM), XGBoost==, LightGBM.' },
      { q: 'Perumpamaan keduanya?', a: 'Bagging = ==bertanya ke banyak teman sekaligus lalu ambil suara terbanyak==. Boosting = ==belajar dari kesalahan ujian sebelumnya==.' }
    ],
    keys: [
      { label: 'Ensemble: gabung banyak model', kw: ['ensemble', 'menggabungkan', 'weak learner', 'gabungan'] },
      { label: 'Bagging paralel / independen', kw: ['paralel', 'bersamaan', 'independen', 'terpisah'] },
      { label: 'Boosting berurutan / sekuensial', kw: ['berurutan', 'sekuensial', 'satu per satu'] },
      { label: 'Boosting memperbaiki kesalahan sebelumnya', kw: ['kesalahan', 'error', 'memperbaiki'] },
      { label: 'Bootstrap / sampel acak', kw: ['bootstrap', 'sampel acak', 'acak'] },
      { label: 'Voting / rata-rata', kw: ['voting', 'rata rata', 'suara terbanyak'] },
      { label: 'Bagging kurangi overfitting/variance', kw: ['overfitting', 'variance'] },
      { label: 'Boosting tingkatkan akurasi/kurangi bias', kw: ['akurasi', 'bias'] },
      { label: 'Random Forest', kw: ['random forest'] },
      { label: 'AdaBoost / XGBoost / Gradient Boosting', kw: ['adaboost', 'xgboost', 'gradient boosting'] }
    ],
    tip: 'Definisikan ensemble dulu, lalu **tabel 5 aspek**: alur pelatihan, pengambilan sampel, tujuan, penggabungan keputusan, contoh algoritma. Tutup dengan perumpamaan (banyak teman vs belajar dari kesalahan).',
    a: [
      { h: 'Pengertian ensemble methods', b: '==Ensemble Methods== adalah teknik ML yang menggabungkan beberapa model pembelajar dasar (==weak learners==, umumnya ==decision tree==) untuk menghasilkan satu model gabungan yang jauh lebih kuat dan akurat.' },
      { h: 'Diagram', b: '<div class="flow"><span>Dataset<small>bootstrap</small></span><i>→</i><span>Tree 1 · Tree 2 · Tree 3<small>dilatih paralel</small></span><i>→</i><span>Voting / rata-rata<small>BAGGING</small></span></div><div class="flow"><span>Data</span><i>→</i><span>Tree 1</span><i>→</i><span>Tree 2<small>koreksi error tree 1</small></span><i>→</i><span>Tree 3<small>koreksi error tree 2</small></span><i>→</i><span>Weighted sum<small>BOOSTING</small></span></div>' },
      { h: 'Tabel perbedaan', b: '<table class="tbl"><tr><th>Aspek</th><th>Bagging (Bootstrap Aggregating)</th><th>Boosting</th></tr><tr><td>Alur pelatihan</td><td>==Paralel dan independen==: setiap pohon dibangun terpisah dan bersamaan</td><td>==Sekuensial (berurutan)==: setiap pohon baru dibangun untuk memperbaiki kesalahan (error/residual) pohon sebelumnya</td></tr><tr><td>Pengambilan sampel</td><td>Sub-sampel acak dengan pengembalian (bootstrap sampling); peluang tiap baris sama</td><td>Baris yang salah diprediksi diberi bobot perhatian lebih besar pada iterasi berikutnya</td></tr><tr><td>Tujuan utama</td><td>Menurunkan ==variance== dan mencegah ==overfitting== (prediksi lebih stabil)</td><td>Menurunkan ==bias== (mengatasi underfitting) dan ==meningkatkan akurasi==</td></tr><tr><td>Penggabungan keputusan</td><td>Rata-rata (averaging) atau suara terbanyak (majority voting) dengan bobot setara</td><td>Penjumlahan berbobot (weighted voting); pohon lebih akurat berpengaruh lebih besar</td></tr><tr><td>Contoh algoritma</td><td>==Random Forest==, bagged decision trees</td><td>==XGBoost==, ==AdaBoost==, ==Gradient Boosting (GBM)==, LightGBM</td></tr></table>' },
      { h: 'Perumpamaan', filled: true, b: 'Bagging seperti ==bertanya ke banyak teman sekaligus lalu ambil suara terbanyak==. Boosting seperti ==belajar dari kesalahan ujian sebelumnya==.' }
    ]
  },

  {
    id: 'als10', region: 'ALS', no: 10, kisi: [2], modul: 'Module 2 · PPT Session 5-6',
    title: '3 layer utama pada neural network',
    question: 'Jelaskan 3 layer utama pada neural network!',
    rinci: [
      { q: 'Apa itu Artificial Neural Network?', a: 'Model komputasi yang ==terinspirasi dari jaringan saraf biologis otak manusia==, terdiri dari 3 lapisan utama yang saling terhubung.' },
      { q: 'Apa fungsi input layer?', a: 'Lapisan paling depan yang ==menerima data masukan (fitur mentah)== dan meneruskannya. Jumlah neuron = jumlah fitur (misal 3 neuron untuk suhu, getaran, usia mesin; atau nilai piksel gambar).' },
      { q: 'Apa fungsi hidden layer?', a: 'Lapisan di tengah yang ==mengolah data dan mempelajari pola==: setiap neuron mengalikan input dengan ==weight==, menambah ==bias==, lalu mengolah lewat ==activation function== (ReLU, tanh) untuk menangkap pola ==non-linear==. Jumlahnya bisa satu atau banyak.' },
      { q: 'Kapan jaringan disebut deep neural network?', a: 'Apabila memiliki ==banyak hidden layers==.' },
      { q: 'Apa fungsi output layer?', a: 'Lapisan terakhir yang ==menghasilkan nilai prediksi akhir==, misalnya "kucing" atau "anjing", atau probabilitas risiko.' },
      { q: 'Activation apa yang dipakai di output layer?', a: '==Sigmoid== (1 neuron) untuk klasifikasi biner (probabilitas 0-1), ==Softmax== (beberapa neuron) untuk multi-kelas, ==Linear== untuk regresi.' },
      { q: 'Apa perumpamaannya?', a: 'Seperti ==pabrik==: bahan masuk (input), diolah di mesin-mesin (hidden), barang jadi keluar (output).' }
    ],
    keys: [
      { label: 'Input layer: menerima data', kw: ['input layer', 'menerima data', 'lapisan input', 'lapisan masukan'] },
      { label: 'Hidden layer: olah & pelajari pola', kw: ['hidden layer', 'lapisan tersembunyi', 'mengolah'] },
      { label: 'Output layer: hasil prediksi', kw: ['output layer', 'hasil prediksi', 'lapisan keluaran', 'lapisan output'] },
      { label: 'Weight & bias', kw: ['weight', 'bobot', 'bias'] },
      { label: 'Activation function', kw: ['activation', 'aktivasi', 'relu'] },
      { label: 'Sigmoid / softmax', kw: ['sigmoid', 'softmax'] },
      { label: 'Contoh (piksel / kucing-anjing / suhu)', kw: ['piksel', 'kucing', 'suhu', 'fitur'] }
    ],
    tip: 'Tulis 3 poin berurutan: ==input → hidden → output==. Tiap poin: fungsi + contoh. Untuk hidden layer sebut weight, bias, activation function. Untuk output sebut sigmoid/softmax/linear. Tutup dengan perumpamaan pabrik.',
    a: [
      { h: 'Pengertian & diagram', b: '==Artificial Neural Network (ANN)== adalah model komputasi yang terinspirasi dari jaringan saraf biologis otak manusia, dengan ==3 lapisan (layer) utama== yang saling terhubung.<div class="flow"><span>Input layer<small>suhu, getaran, usia mesin</small></span><i>→</i><span>Hidden layer(s)<small>z = W·X + b → f(z)</small></span><i>→</i><span>Output layer<small>prediksi risiko</small></span></div>' },
      { h: '1. Input layer (lapisan masukan)', b: 'Lapisan paling depan yang bertugas ==menerima data masukan (fitur mentah)== dari dataset dan meneruskannya ke lapisan berikutnya. Jumlah neuron disesuaikan dengan jumlah fitur, misalnya 3 neuron untuk suhu, tingkat getaran, dan usia mesin, atau nilai piksel gambar.' },
      { h: '2. Hidden layer (lapisan tersembunyi)', b: 'Lapisan pemrosesan di antara input dan output. Setiap neuron mengalikan input dengan ==bobot (weight)==, menjumlahkannya dengan ==bias==, lalu mengolahnya melalui ==activation function== (misal ReLU atau tanh) untuk ==mengekstraksi pola interaksi non-linear yang kompleks== antar variabel. Jumlahnya bisa satu atau banyak; jaringan dengan banyak hidden layer disebut ==deep neural network==.' },
      { h: '3. Output layer (lapisan keluaran)', b: 'Lapisan paling akhir yang menerima sinyal dari hidden layer terakhir dan ==menghasilkan nilai prediksi akhir== (misal "kucing" atau "anjing"). Konfigurasinya tergantung tugas: 1 neuron dengan ==Sigmoid== untuk klasifikasi biner (probabilitas 0-1), beberapa neuron dengan ==Softmax== untuk multi-kelas, atau aktivasi ==Linear== untuk regresi.' },
      { h: 'Perumpamaan', filled: true, b: 'Seperti ==pabrik==: bahan masuk (input), diolah di mesin-mesin (hidden), lalu barang jadi keluar (output).' }
    ]
  },

  {
    id: 'als11', region: 'ALS', no: 11, kisi: [2], modul: 'Module 5 · PPT Session 5-6',
    title: 'Convolutional Neural Network (CNN) dan tahapan pengolahan gambar',
    question: 'Jelaskan apa itu Convolutional Neural Network? Kemudian jelaskan setiap tahapan proses pengolahan gambar untuk diprediksi pada CNN!',
    rinci: [
      { q: 'Apa itu CNN?', a: 'Arsitektur ==deep learning khusus untuk mengolah gambar/video== (data grid 2D/3D). Keunggulannya: ==ekstraksi fitur spasial otomatis dan bertahap langsung dari piksel==, dari garis tepi, tekstur, sampai bentuk objek, tanpa perancangan fitur manual.' },
      { q: 'Tahap 1: input image?', a: 'Gambar direpresentasikan sebagai ==matriks angka piksel (0-255)==. Gambar RGB berukuran ==tinggi × lebar × 3 channel==.' },
      { q: 'Tahap 2: convolution?', a: '==Filter/kernel== kecil (misal 3×3) ==digeser ke seluruh gambar== (dot product) untuk mengambil ciri-ciri seperti tepi, sudut, goresan, tekstur. Hasilnya disebut ==feature map==.' },
      { q: 'Tahap 3: activation (ReLU)?', a: '==ReLU menghapus nilai negatif (jadi nol)== supaya model bisa mempelajari pola yang rumit (non-linear).' },
      { q: 'Tahap 4: pooling?', a: '==Memperkecil ukuran feature map== tapi tetap menyimpan ciri terpenting, umumnya ==max pooling== (ambil nilai maksimum tiap petak 2×2). Mengurangi parameter & komputasi, mencegah overfitting, tahan pergeseran posisi objek.' },
      { q: 'Tahap 5-6: flatten dan fully connected?', a: '==Flatten==: mengubah hasil pooling jadi ==satu baris angka panjang (vektor 1D)==. ==Fully connected layer==: menggabungkan semua ciri untuk menentukan jawaban (klasifikasi).' },
      { q: 'Tahap 7: output?', a: 'Memberi prediksi beserta peluangnya lewat ==softmax/sigmoid==, misalnya kucing 90% & anjing 10%, atau produk rusak 96% vs normal 4%.' },
      { q: 'Tahap mana yang biasanya diulang?', a: 'Tahap ==convolution, ReLU, dan pooling (2-4) diulang beberapa kali== sebelum masuk ke flatten.' }
    ],
    keys: [
      { label: 'CNN khusus gambar', kw: ['gambar', 'citra', 'image'] },
      { label: 'Ekstraksi fitur otomatis', kw: ['otomatis', 'ekstraksi fitur'] },
      { label: 'Input image / piksel', kw: ['input image', 'piksel', 'pixel'] },
      { label: 'Convolution / filter / kernel', kw: ['convolution', 'konvolusi', 'filter', 'kernel'] },
      { label: 'Feature map', kw: ['feature map'] },
      { label: 'ReLU', kw: ['relu'] },
      { label: 'Pooling', kw: ['pooling'] },
      { label: 'Flatten', kw: ['flatten', 'vektor'] },
      { label: 'Fully connected', kw: ['fully connected', 'dense'] },
      { label: 'Output / softmax / probabilitas', kw: ['softmax', 'probabilitas', 'peluang', 'output'] }
    ],
    tip: 'Definisi CNN (khusus gambar, fitur otomatis), lalu urutan **7 tahap**: ==input → convolution → ReLU → pooling → flatten → fully connected → output==. Sebut "feature map", "max pooling", dan bahwa tahap 2-4 diulang.',
    a: [
      { h: 'Pengertian CNN', b: '==Convolutional Neural Network (CNN)== adalah arsitektur deep learning khusus untuk mengolah dan mengenali pola pada data berformat grid seperti ==citra digital (gambar) dan video==. Keunggulannya dibanding ML konvensional adalah ==ekstraksi fitur spasial secara otomatis dan bertahap langsung dari piksel gambar== (dari garis tepi, tekstur, hingga bentuk objek utuh) tanpa perancangan fitur manual.' },
      { h: 'Alur tahapan', b: '<div class="flow"><span>1. Input image<small>matriks piksel</small></span><i>→</i><span>2. Convolution<small>filter → feature map</small></span><i>→</i><span>3. ReLU</span><i>→</i><span>4. Pooling<small>perkecil dimensi</small></span><i>→</i><span>5. Flatten<small>vektor 1D</small></span><i>→</i><span>6. Fully connected</span><i>→</i><span>7. Output<small>softmax/sigmoid</small></span></div>Tahap 2 sampai 4 biasanya ==diulang beberapa kali== sebelum masuk ke flatten.' },
      { h: 'Penjelasan tiap tahap', b: '<ol><li>**Input image:** gambar direpresentasikan sebagai matriks angka intensitas piksel (0-255). Untuk RGB berukuran tinggi × lebar × 3 channel.</li><li>**Convolution:** matriks filter kecil (==kernel==, misal 3×3) digeser menyapu seluruh gambar (dot product) untuk mengambil ciri visual seperti tepi, sudut, goresan, tekstur. Hasilnya disebut ==feature map==.</li><li>**Activation (ReLU):** mengubah nilai negatif menjadi nol supaya jaringan mampu menangkap pola non-linear yang rumit.</li><li>**Pooling:** memperkecil ukuran feature map tapi tetap menyimpan ciri paling penting (umumnya ==max pooling==, nilai maksimum tiap petak 2×2). Mengurangi parameter dan beban komputasi, mencegah overfitting, dan membuat deteksi tetap akurat walau posisi objek sedikit bergeser.</li><li>**Flatten:** mengubah feature map multidimensi menjadi satu deret vektor 1D.</li><li>**Fully connected layer (dense):** menggabungkan semua ciri visual untuk mengambil keputusan klasifikasi.</li><li>**Output:** ==Softmax== atau ==Sigmoid== menghasilkan probabilitas kelas, misalnya kucing 90% dan anjing 10%, atau produk rusak 96% vs normal 4%.</li></ol>' }
    ]
  },

  {
    id: 'als12', region: 'ALS', no: 12, kisi: [3], modul: 'Module 2-4 · Amazon SageMaker',
    title: 'Amazon SageMaker dan 3 dari 5 tools/fiturnya',
    question: 'Apa itu Amazon Sagemaker? Terdapat 5 tools/fitur yang ditawarkan oleh Amazon Sagemaker, sebutkan dan jelaskan 3 saja!',
    rinci: [
      { q: 'Apa itu Amazon SageMaker?', a: 'Layanan cloud AWS yang ==dikelola sepenuhnya (fully managed)== untuk ==mempersiapkan data, membangun (build), melatih (train), tuning, dan men-deploy model ML== dalam satu tempat, tanpa mengatur server sendiri.' },
      { q: 'Tool 1: SageMaker Studio / Notebook Instances?', a: '==IDE berbasis web dan Jupyter Notebook terkelola== untuk menulis kode Python, eksplorasi & visualisasi data dari S3, serta menjalankan training dan hosting model.' },
      { q: 'Tool 2: SageMaker Canvas?', a: 'Antarmuka visual ==no-code (point-and-click)== untuk membuat model prediksi (termasuk ==time-series forecasting==, klasifikasi tabular, citra) tanpa menulis kode.' },
      { q: 'Tool 3: SageMaker Autopilot?', a: '==AutoML==: otomatis memeriksa dataset tabular, preprocessing, memilih algoritma, melatih, dan tuning banyak model untuk ==mencari model terbaik==; tetap transparan karena menghasilkan notebook-nya.' },
      { q: 'Tool 4: Automatic Model Tuning?', a: '==Hyperparameter tuning otomatis==: menjalankan banyak training job dengan berbagai kombinasi hyperparameter (Bayesian optimization) untuk menemukan model dengan akurasi tertinggi.' },
      { q: 'Tool 5: Ground Truth & Data Wrangler?', a: '==Ground Truth==: membuat dataset berlabel berkualitas dengan kombinasi pekerja manusia dan pelabelan otomatis. ==Data Wrangler==: mengimpor, membersihkan, dan mengekstraksi fitur data dengan cepat.' },
      { q: 'Tiga tools yang dipakai di kunci rangkuman?', a: '==SageMaker Ground Truth== (label data), ==SageMaker Autopilot== (AutoML), ==automatic hyperparameter tuning==. Fitur lain yang boleh disebut: notebook Jupyter, training job, endpoint untuk deploy, SageMaker Canvas.' }
    ],
    keys: [
      { label: 'Layanan AWS fully managed', kw: ['fully managed', 'dikelola', 'layanan aws', 'tanpa server', 'tanpa perlu mengatur server'] },
      { label: 'Build, train, deploy model', kw: ['build', 'membangun', 'train', 'melatih', 'deploy'] },
      { label: 'Ground Truth (label data)', kw: ['ground truth', 'label'] },
      { label: 'Autopilot (AutoML)', kw: ['autopilot', 'automl'] },
      { label: 'Hyperparameter tuning otomatis', kw: ['hyperparameter', 'tuning'] },
      { label: 'Canvas (no-code)', kw: ['canvas', 'no code', 'tanpa coding'] },
      { label: 'Studio / Jupyter Notebook', kw: ['studio', 'notebook', 'jupyter'] },
      { label: 'Data Wrangler / endpoint (opsional)', kw: ['data wrangler', 'endpoint'] }
    ],
    tip: 'Definisi singkat: SageMaker = layanan AWS fully managed untuk ==build, train, deploy== model ML. Soal hanya minta **3 dari 5** tools; pilih yang paling mudah dijelaskan: ==Ground Truth== (label), ==Autopilot== (AutoML), ==Automatic Model Tuning== (hyperparameter). Boleh tambah Canvas/Studio sebagai cadangan.',
    a: [
      { h: 'Pengertian Amazon SageMaker', b: '{{Amazon SageMaker}} adalah layanan cloud yang ==dikelola sepenuhnya (fully managed service)== oleh AWS untuk data scientist, developer, dan analis bisnis agar dapat ==mempersiapkan data, membangun (build), melatih (train), melakukan tuning, dan men-deploy model ML== dengan cepat dalam skala besar, tanpa repot menyiapkan dan mengelola infrastruktur server secara manual.' },
      { h: '5 tools/fitur utama SageMaker', b: '<ol><li>**SageMaker Studio / Notebook Instances (Jupyter Notebooks):** lingkungan pengembangan terpadu (IDE berbasis web) dan Jupyter Notebook terkelola untuk menulis kode Python, mengeksplorasi dan memvisualisasikan data dari Amazon S3, serta menjalankan pelatihan dan hosting model.</li><li>**SageMaker Canvas:** antarmuka visual point-and-click (==no-code ML==) untuk membuat model prediksi, termasuk time-series forecasting, klasifikasi tabular, dan citra, tanpa menulis kode.</li><li>**SageMaker Autopilot:** fitur ==AutoML== yang otomatis memeriksa dataset tabular, melakukan preprocessing, memilih algoritma terbaik, melatih, dan tuning banyak model sekaligus, namun tetap transparan karena menghasilkan kode Jupyter Notebook-nya.</li><li>**SageMaker Automatic Model Tuning (hyperparameter tuning):** otomatis mengoptimalkan performa dengan menjalankan banyak training job dengan berbagai kombinasi hyperparameter (Bayesian optimization) untuk menemukan model dengan akurasi tertinggi.</li><li>**SageMaker Ground Truth & Data Wrangler:** Ground Truth mempercepat pembuatan dataset berlabel berkualitas dengan kombinasi pekerja manusia dan pelabelan otomatis; Data Wrangler mengimpor, membersihkan, dan mengekstraksi fitur data dengan cepat.</li></ol>' },
      { h: 'Jawaban singkat 3 tools (versi rangkuman)', filled: true, b: '<ol><li>==SageMaker Ground Truth==: alat untuk memberi label pada data, dengan bantuan manusia maupun otomatis.</li><li>==SageMaker Autopilot==: AutoML yang otomatis menganalisis data, memilih fitur, melatih, dan mencari model terbaik.</li><li>==Automatic hyperparameter tuning==: mencoba banyak kombinasi hyperparameter secara otomatis untuk mencari model terbaik.</li></ol>Fitur lain yang juga bisa disebut: notebook Jupyter, training job, endpoint untuk deploy, dan SageMaker Canvas.' }
    ]
  },

  {
    id: 'als13', region: 'ALS', no: 13, kisi: [3], modul: 'Module 3',
    title: '2 cara mengatasi missing value dengan Python',
    question: 'Jelaskan 2 cara mengatasi data yang hilang (missing value) menggunakan python!',
    rinci: [
      { q: 'Library Python apa yang dipakai?', a: 'Pustaka open-source ==Pandas== dan ==Scikit-Learn== di Jupyter Notebook. Nilai hilang ditandai NULL / ==NaN==.' },
      { q: 'Cara 1: apa itu dropping?', a: 'Menghapus baris (==axis=0==) atau kolom (==axis=1==) yang kosong dengan fungsi ==dropna()==.' },
      { q: 'Kapan dropping cocok dipakai?', a: 'Saat baris kosong ==sangat sedikit==, saat sebuah kolom ==kosongnya terlalu parah== (misal >50-70%), atau saat yang hilang adalah ==label target pada data training==.' },
      { q: 'Cara 2: apa itu imputation?', a: 'Mengisi sel kosong dengan nilai statistik memakai ==fillna()== atau ==SimpleImputer==, supaya informasi di baris lain tidak hilang.' },
      { q: 'Kapan pakai mean, median, dan modus?', a: '==Mean== untuk numerik berdistribusi normal, ==median== untuk numerik yang punya outlier/miring, ==modus (mode)== untuk data kategorikal.' },
      { q: 'Tuliskan contoh kodenya.', a: '<code>df.dropna(axis=0)</code> · <code>df[\'Distance\'].fillna(df[\'Distance\'].mean())</code> · <code>df[\'Age\'].fillna(df[\'Age\'].median())</code> · <code>df[\'Weather\'].fillna(df[\'Weather\'].mode()[0])</code>' }
    ],
    keys: [
      { label: 'dropna() / menghapus', kw: ['dropna', 'menghapus', 'hapus', 'drop'] },
      { label: 'fillna() / imputasi', kw: ['fillna', 'imputasi', 'impute', 'mengisi', 'simpleimputer'] },
      { label: 'Mean / rata-rata', kw: ['mean', 'rata rata'] },
      { label: 'Median', kw: ['median'] },
      { label: 'Modus untuk kategori', kw: ['modus', 'mode'] },
      { label: 'Pandas / Python', kw: ['pandas', 'python'] },
      { label: 'Kapan dipakai (data kosong sedikit)', kw: ['sedikit', 'cocok', 'kategorikal', 'outlier'] }
    ],
    tip: 'Dua poin saja: **(1) hapus** dengan <code>dropna()</code> (kapan cocok) dan **(2) isi/imputasi** dengan <code>fillna()</code> (mean/median untuk angka, modus untuk kategori). Satu baris contoh kode untuk masing-masing sudah cukup meyakinkan.',
    a: [
      { h: 'Pembuka', b: 'Dengan Python (pustaka open-source ==Pandas== dan ==Scikit-Learn== di Jupyter Notebook), ada ==2 pendekatan utama== untuk menangani nilai yang hilang (NULL / NaN).' },
      { h: '1. Menghapus baris atau kolom yang kosong (dropping, dropna())', b: 'Membuang baris observasi (axis=0) atau kolom atribut (axis=1) yang mengandung nilai kosong. Dipakai apabila jumlah baris kosong ==sangat sedikit== sehingga tidak memengaruhi ukuran sampel, ketika sebuah kolom ==kosongnya terlalu parah== (misal lebih dari 50-70% datanya kosong), atau ketika yang hilang adalah ==label target== pada data training.' },
      { h: '2. Mengisi nilai yang hilang (imputation, fillna() / SimpleImputer)', b: 'Mengganti sel kosong dengan nilai statistik kolom tersebut agar informasi baris lain tidak hilang. Aturan: ==mean== untuk numerik berdistribusi normal, ==median== untuk numerik yang punya outlier/miring, ==modus (mode)== untuk data kategorikal.' },
      { h: 'Contoh kode', b: '<pre><code>import pandas as pd\n\n# CARA 1: MENGHAPUS DATA YANG HILANG (DROPPING)\ndf_clean_rows = df.dropna(axis=0)   # hapus baris yang punya NaN\ndf_clean_cols = df.dropna(axis=1)   # hapus kolom yang punya NaN\n\n# CARA 2: MENGISI NILAI YANG HILANG (IMPUTATION)\ndf[\'Distance\'] = df[\'Distance\'].fillna(df[\'Distance\'].mean())    # numerik: mean\ndf[\'Age\']      = df[\'Age\'].fillna(df[\'Age\'].median())             # numerik: median\ndf[\'Weather\']  = df[\'Weather\'].fillna(df[\'Weather\'].mode()[0])    # kategorikal: modus</code></pre>' }
    ]
  },

  {
    id: 'als14', region: 'ALS', no: 14, kisi: [3], modul: 'Module 3 (collecting & preprocessing data / ETL)',
    title: 'Komponen AWS Glue dan apa saja yang bisa dilakukan',
    question: 'Jelaskan komponen apa saja yang dimiliki oleh AWS Glue dan apa saja yang dapat dilakukan oleh AWS Glue?',
    rinci: [
      { q: 'Apa itu AWS Glue?', a: 'Layanan integrasi data dan ==ETL (extract, transform, load) yang serverless== (tanpa server) dan dikelola penuh AWS untuk mengambil, mengolah, dan memindahkan data untuk analitik dan ML.' },
      { q: 'Apa fungsi Data Catalog?', a: '==Repositori metadata terpusat==: menyimpan info lokasi data, nama tabel, skema kolom, dan tipe data dari berbagai sumber (S3, RDS, Redshift).' },
      { q: 'Apa fungsi Crawler (& Classifier)?', a: '==Crawler memindai sumber data otomatis==, memakai ==classifier== untuk mengenali format (CSV, JSON, Parquet), menebak skema, lalu ==mencatat strukturnya ke Data Catalog==.' },
      { q: 'Apa fungsi Connection dan ETL Job?', a: '==Connection==: pengaturan koneksi ke sumber data, misalnya database. ==ETL Job==: skrip (Python/PySpark atau Scala, di atas Apache Spark serverless) yang mengambil, mengolah, dan memindahkan data.' },
      { q: 'Apa fungsi Trigger (& Workflow)?', a: '==Trigger mengatur kapan job dijalankan== (jadwal cron, misal setiap hari, atau pemicu event). Workflow mengorkestrasi urutan crawler dan job.' },
      { q: 'Komponen visual apa yang ada?', a: '==Glue Studio==: desain alur ETL drag-and-drop. ==Glue DataBrew==: persiapan data visual no-code dengan 250+ transformasi siap pakai.' },
      { q: 'Apa saja yang bisa dilakukan AWS Glue?', a: '==Menemukan & mencatat data otomatis==, ==membersihkan & mengubah format data== (hapus duplikat, join, CSV → Parquet), ==memindahkan data ke S3 atau Redshift==, ==menjadwalkan proses ETL==, dan ==menyiapkan data untuk ML== (dilatih di SageMaker).' }
    ],
    keys: [
      { label: 'ETL serverless', kw: ['etl', 'serverless', 'tanpa server'] },
      { label: 'Data Catalog', kw: ['data catalog', 'katalog', 'metadata'] },
      { label: 'Crawler', kw: ['crawler'] },
      { label: 'Connection', kw: ['connection', 'koneksi'] },
      { label: 'ETL Job', kw: ['etl job', 'job', 'skrip'] },
      { label: 'Trigger / jadwal', kw: ['trigger', 'jadwal', 'workflow'] },
      { label: 'Temukan & catat data otomatis', kw: ['otomatis', 'menemukan', 'mencatat'] },
      { label: 'Bersihkan / ubah format', kw: ['membersihkan', 'format', 'transform', 'parquet'] },
      { label: 'Pindahkan ke S3/Redshift', kw: ['s3', 'redshift', 'memindahkan'] },
      { label: 'Siapkan data untuk ML', kw: ['machine learning', 'ml', 'sagemaker'] }
    ],
    tip: 'Definisi: AWS Glue = ==ETL serverless==. Lalu **tabel komponen**: Data Catalog, Crawler, Connection, ETL Job, Trigger (boleh tambah Studio & DataBrew). Tutup dengan 5 hal yang bisa dilakukan: temukan & catat data, bersihkan & ubah format, pindahkan ke S3/Redshift, jadwalkan ETL, siapkan data untuk ML.',
    a: [
      { h: 'Pengertian', b: '{{AWS Glue}} adalah layanan integrasi data dan ==ETL (Extract, Transform, Load) yang serverless== (tanpa server) serta dikelola sepenuhnya oleh AWS untuk memudahkan penemuan, penyiapan, dan penggabungan data guna kebutuhan analitik dan Machine Learning.' },
      { h: 'Komponen (versi rangkuman)', b: '<table class="tbl"><tr><th>Komponen</th><th>Gunanya</th></tr><tr><td>==Data Catalog==</td><td>Tempat menyimpan info tentang data, seperti nama tabel, kolom, dan lokasinya</td></tr><tr><td>==Crawler==</td><td>Memindai data otomatis lalu mencatat strukturnya ke Data Catalog</td></tr><tr><td>==Connection==</td><td>Pengaturan koneksi ke sumber data, misalnya database</td></tr><tr><td>==ETL Job==</td><td>Skrip yang mengambil, mengolah, dan memindahkan data</td></tr><tr><td>==Trigger==</td><td>Mengatur kapan job dijalankan, misalnya setiap hari</td></tr></table>' },
      { h: 'Komponen (versi buku catatan, lebih detail)', b: '<table class="tbl"><tr><th>Komponen</th><th>Penjelasan</th></tr><tr><td>AWS Glue Data Catalog</td><td>Repositori metadata terpusat dan persisten: lokasi data, definisi tabel, skema kolom, dan tipe data dari berbagai penyimpanan (S3, RDS, Redshift)</td></tr><tr><td>Crawlers & Classifiers</td><td>Crawler memindai sumber data, classifier mengenali format file (CSV, JSON, Parquet), skema ditebak otomatis lalu didaftarkan ke Data Catalog</td></tr><tr><td>ETL Jobs & Spark Engine</td><td>Skrip pemrosesan (Python/PySpark atau Scala) yang dibuat otomatis atau kustom untuk mengekstrak, membersihkan, dan memuat data di atas Apache Spark serverless</td></tr><tr><td>Glue Studio & Glue DataBrew</td><td>Glue Studio: antarmuka drag-and-drop untuk merancang alur ETL. DataBrew: persiapan data visual (no-code) dengan 250+ transformasi untuk membersihkan data ML</td></tr><tr><td>Triggers & Workflows</td><td>Orkestrasi dan penjadwalan otomatis kapan crawler dan ETL job dijalankan (jadwal cron atau event)</td></tr></table>' },
      { h: 'Apa saja yang dapat dilakukan AWS Glue', b: '<ul><li>**Automated data discovery & cataloging:** ==menemukan dan mencatat data otomatis== yang tersebar di berbagai layanan penyimpanan dan menyatukannya dalam satu katalog.</li><li>**Data cleaning, transformation & format conversion:** membersihkan data rusak, menghapus duplikasi, menggabungkan (join) tabel, dan mengubah format menjadi format optimal untuk ML (misal CSV → Apache Parquet).</li><li>**Memindahkan data ke Amazon S3 atau Redshift**, misalnya ke S3 untuk dilatih di Amazon SageMaker.</li><li>**Menjadwalkan proses ETL** dan menjalankan pipeline integrasi data berskala besar secara otomatis tanpa mengelola server.</li><li>**Menyiapkan data untuk ML.**</li></ul>' }
    ]
  },

  {
    id: 'als15', region: 'ALS', no: 15, kisi: [3], modul: 'Module 3 · PPT Session 3-4',
    title: 'Outlier: pengertian, cara menemukan, dan cara mengatasi',
    question: 'Apa itu Outlier? Jelaskan bagaimana cara menemukan dan mengatasi Outlier?',
    rinci: [
      { q: 'Apa itu outlier?', a: 'Data yang ==nilainya jauh berbeda / sangat ekstrem== dari mayoritas data lain. Contoh: ==gaji Rp500 juta== di antara gaji yang rata-rata Rp5 juta.' },
      { q: 'Apa penyebab outlier dan kenapa mengganggu?', a: 'Penyebab: ==salah input (typo)==, ==malfungsi sensor==, atau ==kejadian ekstrem yang nyata==. Mengganggu karena menggeser rata-rata (mean) dan menarik garis batas prediksi sehingga akurasi turun.' },
      { q: 'Cara menemukan secara visual?', a: '==Box plot== (titik di luar garis kumis/whiskers), ==scatter plot== dan ==histogram== (titik terpisah jauh dari kerumunan).' },
      { q: 'Cara menemukan dengan metode IQR?', a: '==IQR = Q3 − Q1==. Outlier jika ==di bawah Q1 − 1,5 × IQR== atau ==di atas Q3 + 1,5 × IQR==.' },
      { q: 'Cara menemukan dengan z-score?', a: '==Z = (X − mean) / std==. Outlier jika ==|Z| > 3== (lebih dari 3 atau kurang dari −3).' },
      { q: 'Cara mengatasi outlier?', a: '==Hapus== kalau salah input dan jumlahnya sedikit; ==capping/winsorizing== (ganti dengan batas wajar, misal persentil ke-99 atau Q3 + 1,5 × IQR); ==transformasi== (misal logaritma); ==ganti dengan median/mean==; pakai algoritma tahan outlier (Random Forest).' },
      { q: 'Kapan outlier justru dibiarkan?', a: '==Biarkan kalau datanya asli dan penting==, misalnya pada ==deteksi penipuan==.' }
    ],
    keys: [
      { label: 'Nilai jauh berbeda / ekstrem', kw: ['jauh berbeda', 'ekstrem', 'menyimpang'] },
      { label: 'Penyebab (salah input/sensor/kejadian ekstrem)', kw: ['salah input', 'typo', 'sensor', 'kejadian'] },
      { label: 'Box plot / scatter plot', kw: ['box plot', 'boxplot', 'scatter', 'histogram'] },
      { label: 'IQR (Q1, Q3, 1,5)', kw: ['iqr', 'q1', 'q3', '1 5'] },
      { label: 'Z-score (|Z| > 3)', kw: ['z score', 'zscore'] },
      { label: 'Hapus', kw: ['hapus', 'menghapus', 'trimming', 'drop'] },
      { label: 'Capping', kw: ['capping', 'winsor', 'batas wajar'] },
      { label: 'Transformasi (log)', kw: ['transformasi', 'log'] },
      { label: 'Ganti dengan mean/median', kw: ['median', 'mean', 'rata rata'] },
      { label: 'Biarkan jika valid (fraud)', kw: ['biarkan', 'valid', 'penipuan', 'fraud'] }
    ],
    tip: 'Tiga bagian: **(1) definisi** + contoh gaji Rp500 juta, **(2) cara menemukan**: box plot/scatter, IQR (Q1 − 1,5×IQR, Q3 + 1,5×IQR), z-score (|Z| > 3), **(3) cara mengatasi**: hapus, capping, transformasi log, ganti median, biarkan jika valid (fraud). Tabel 2 kolom memudahkan.',
    a: [
      { h: 'Pengertian outlier', b: '==Outlier (pencilan)== adalah titik data yang memiliki ==nilai sangat ekstrem atau menyimpang jauh dari mayoritas data lainnya==. Outlier bisa muncul akibat kesalahan input manusia (typo), malfungsi sensor, atau memang kejadian langka yang nyata. Contoh: gaji Rp500 juta di antara gaji yang rata-rata Rp5 juta. Outlier mengganggu pelatihan karena dapat menggeser nilai rata-rata (mean) dan menarik garis batas prediksi sehingga akurasi turun.' },
      { h: 'Cara menemukan & cara mengatasi', b: '<table class="tbl"><tr><th>Cara menemukan (mendeteksi)</th><th>Cara mengatasi (menangani)</th></tr><tr><td>**1. Visualisasi:** ==box plot== (titik di luar garis kumis/whiskers teridentifikasi sebagai outlier), ==scatter plot & histogram== (titik terpisah jauh dari kerumunan atau ekor distribusi ekstrem).</td><td>**1. Menghapus/memangkas (trimming/dropping):** buang baris outlier jika terbukti salah input dan jumlahnya sedikit.</td></tr><tr><td>**2. Metode IQR:** IQR = Q3 − Q1. Outlier jika di bawah ==Q1 − 1,5 × IQR== atau di atas ==Q3 + 1,5 × IQR==.</td><td>**2. Capping/winsorizing:** ganti nilai yang melewati batas dengan ambang wajar (misal persentil ke-99 atau Q3 + 1,5 × IQR).</td></tr><tr><td>**3. Metode z-score:** Z = (X − mean) / std. Jika ==|Z| &gt; 3==, titik itu outlier.</td><td>**3. Transformasi & imputasi median:** log transformation untuk meredam kemiringan, ganti outlier dengan median, atau pakai algoritma tahan outlier (Random Forest).</td></tr></table>' },
      { h: 'Kapan outlier dibiarkan', filled: true, b: '==Biarkan== outlier kalau datanya asli dan penting, misalnya pada ==deteksi penipuan== (transaksi ekstrem justru yang ingin ditemukan).' }
    ]
  }
);
