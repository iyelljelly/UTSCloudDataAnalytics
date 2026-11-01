/* KMG · Latihan UTS Cloud Machine Learning, soal 6-10. */
window.UTS = window.UTS || {};
UTS.essays = UTS.essays || [];

UTS.datasetQuickShip = '<div class="tbl-scroll"><table class="tbl"><tr><th>Order ID</th><th>Distance</th><th>Weather</th><th>Service Type</th><th>Scheduled Time</th><th>Arrival Time</th></tr>' +
  '<tr><td>D001</td><td>12 km</td><td>Rainy</td><td>Express</td><td>09:00</td><td>09:40</td></tr>' +
  '<tr><td>D002</td><td>8</td><td>Sunny</td><td>regular</td><td>14:00</td><td>13:50</td></tr>' +
  '<tr><td>D003</td><td>NULL</td><td>RAINY</td><td>express</td><td>10:30</td><td>11:20</td></tr>' +
  '<tr><td>D004</td><td>15km</td><td>sunny</td><td>REGULAR</td><td>16:00</td><td>16:10</td></tr>' +
  '<tr><td>D005</td><td>20</td><td>Rainy</td><td>Express</td><td>11:00</td><td>NULL</td></tr></table></div>';

UTS.essays.push(
  {
    id: 'kmg6', region: 'KMG', no: 6, kisi: [1, 3], modul: 'PPT Session 1-4 · Module 2',
    case: UTS.caseQuickShip,
    title: 'QuickShip: prediksi keterlambatan vs pengelompokan pengiriman',
    question: 'QuickShip Logistics mempertimbangkan dua pendekatan analisis. Pendekatan pertama bertujuan memprediksi kemungkinan keterlambatan suatu pengiriman. Pendekatan kedua bertujuan menemukan kelompok pengiriman yang memiliki karakteristik operasional serupa. Bandingkan pendekatan Machine Learning yang tepat untuk kedua tujuan tersebut. Jelaskan perbedaan kebutuhan data, proses pembelajaran, dan hasil yang dapat diperoleh.',
    rinci: [
      { q: 'Pendekatan 1 (prediksi keterlambatan) memakai learning type dan tugas apa?', a: '==Supervised Learning== dengan tugas ==Classification==.' },
      { q: 'Pendekatan 2 (kelompok pengiriman serupa) memakai learning type dan tugas apa?', a: '==Unsupervised Learning== dengan tugas ==Clustering==.' },
      { q: 'Apa beda kebutuhan data/label-nya?', a: 'Pendekatan 1 ==memerlukan label keterlambatan== (Terlambat / Tepat Waktu). Pendekatan 2 ==tidak memerlukan label kelompok== sebelumnya.' },
      { q: 'Apa beda proses pembelajarannya?', a: 'Pendekatan 1: algoritma belajar dari data historis berlabel untuk mengenali pola yang membedakan pengiriman tepat waktu dan terlambat. Pendekatan 2: algoritma bekerja mandiri tanpa label, mencari ==kemiripan karakteristik operasional== (jarak, cuaca, layanan) untuk membagi data ke segmen.' },
      { q: 'Contoh algoritma masing-masing?', a: 'Pendekatan 1: ==Logistic Regression, Decision Tree, Random Forest==. Pendekatan 2: ==K-Means, Hierarchical Clustering==.' },
      { q: 'Apa output masing-masing?', a: 'Pendekatan 1: label ==Terlambat / Tidak Terlambat== per pengiriman. Pendekatan 2: ==Cluster 0, Cluster 1, Cluster 2== (segmentasi).' },
      { q: 'Bagaimana kedua pendekatan bisa saling melengkapi?', a: '==Sinergi==: clustering membantu manajemen memahami segmentasi operasional rute/wilayah secara menyeluruh, classification membantu memperkirakan hasil setiap paket yang akan dikirim.' },
      { q: 'Catatan dosen soal business objective vs ML objective?', a: 'Bedakan tegas: ==business objective== = mengurangi keterlambatan pengiriman; ==ML objective== = menghasilkan prediksi keterlambatan yang akurat dan bermanfaat secara operasional.' }
    ],
    keys: [
      { label: 'Supervised learning', kw: ['supervised'] },
      { label: 'Unsupervised learning', kw: ['unsupervised'] },
      { label: 'Classification', kw: ['classification', 'klasifikasi'] },
      { label: 'Clustering', kw: ['clustering', 'klasterisasi', 'cluster'] },
      { label: 'Butuh label vs tanpa label', kw: ['label', 'tanpa label'] },
      { label: 'Algoritma klasifikasi (Logistic Regression/Decision Tree/Random Forest)', kw: ['logistic regression', 'decision tree', 'random forest'] },
      { label: 'Algoritma clustering (K-Means/Hierarchical)', kw: ['k means', 'kmeans', 'hierarchical'] },
      { label: 'Output: terlambat/tidak vs cluster', kw: ['terlambat', 'cluster 0', 'segmen'] },
      { label: 'Kemiripan karakteristik', kw: ['kemiripan', 'serupa', 'mirip'] },
      { label: 'Sinergi kedua pendekatan', kw: ['sinergi', 'bersama', 'melengkapi'] }
    ],
    tip: 'Buat **tabel perbandingan 6 baris**: learning type, jenis tugas, kebutuhan label, tujuan, contoh algoritma, output. Tambahkan penjelasan proses belajar masing-masing dan **sinergi** keduanya.',
    a: [
      { h: 'Pembuka', b: 'QuickShip memiliki dua kebutuhan analisis berbeda yang diselesaikan dengan dua pendekatan ML berbeda: ==Supervised Learning (klasifikasi)== dan ==Unsupervised Learning (klasterisasi)==.' },
      { h: 'Tabel perbandingan', b: '<table class="tbl"><tr><th>Aspek</th><th>Pendekatan 1: Prediksi keterlambatan</th><th>Pendekatan 2: Pengelompokan pengiriman</th></tr><tr><td>Learning type</td><td>Supervised Learning</td><td>Unsupervised Learning</td></tr><tr><td>Jenis tugas</td><td>Classification</td><td>Clustering</td></tr><tr><td>Kebutuhan label</td><td>Memerlukan label keterlambatan (Terlambat / Tepat Waktu)</td><td>Tidak memerlukan label kelompok sebelumnya</td></tr><tr><td>Tujuan</td><td>Memprediksi risiko keterlambatan pengiriman</td><td>Menemukan kelompok pengiriman serupa (segmentasi)</td></tr><tr><td>Contoh algoritma</td><td>Logistic Regression, Decision Tree, Random Forest</td><td>K-Means, Hierarchical Clustering</td></tr><tr><td>Output</td><td>Terlambat / Tidak Terlambat</td><td>Cluster 0, Cluster 1, Cluster 2</td></tr></table>' },
      { h: 'Penjelasan proses pembelajaran', b: '<ul><li>**Pendekatan pertama:** proses belajar membutuhkan data historis yang sudah memiliki label (Terlambat / Tidak Terlambat) agar algoritma klasifikasi seperti Logistic Regression, Decision Tree, atau Random Forest dapat mempelajari pola yang membedakan pengiriman tepat waktu dan terlambat.</li><li>**Pendekatan kedua:** algoritma seperti K-Means atau Hierarchical Clustering bekerja mandiri tanpa label target, mencari kemiripan karakteristik operasional (jarak, cuaca, layanan) untuk membagi data ke segmen (Cluster 0, 1, 2).</li></ul>' },
      { h: 'Sinergi & catatan dosen', b: '<ul><li>**Sinergi:** keduanya bisa dipakai bersama. ==Clustering== membantu manajemen memahami segmentasi operasional pengiriman (rute/wilayah) secara menyeluruh, sedangkan ==classification== membantu memperkirakan kemungkinan hasil setiap paket yang akan dikirim.</li><li>**Catatan dosen:** bedakan tegas ==business objective== (mengurangi keterlambatan pengiriman) dan ==ML objective== (menghasilkan prediksi keterlambatan yang akurat dan bermanfaat secara operasional).</li></ul>' }
    ]
  },

  {
    id: 'kmg7', region: 'KMG', no: 7, kisi: [3], modul: 'PPT Session 3-4 · Module 3',
    case: UTS.caseQuickShip,
    title: 'QuickShip: analisis kualitas data & langkah preprocessing',
    question: 'Berikut sebagian data operasional QuickShip Logistics:' + UTS.datasetQuickShip + 'Analisis permasalahan kualitas dan format data pada tabel tersebut. Tentukan langkah-langkah preprocessing yang diperlukan agar data dapat digunakan dalam Machine Learning, termasuk bagaimana mengubah atribut kategorikal dan menghasilkan fitur baru yang relevan.',
    rinci: [
      { q: 'Masalah apa di kolom Distance?', a: '==Missing value== (D003 = NULL) dan ==format tidak konsisten== ("12 km", "8", "15km"). Solusi: hapus satuan "km", ubah ke numerik, imputasi D003 dengan ==mean atau median==.' },
      { q: 'Berapa nilai imputasi mean untuk Distance D003?', a: 'Mean = (12 + 8 + 15 + 20) / 4 = ==13,75==. Median (8, 12, 15, 20) = (12 + 15) / 2 = 13,5. Median lebih tahan terhadap ==outlier==.' },
      { q: 'Masalah apa di kolom Weather dan Service Type?', a: '==Kategori tidak konsisten / variasi kapitalisasi==: "Rainy" vs "RAINY", "sunny"; "Express", "express", "regular", "REGULAR". Solusi: ==standarisasi huruf (case)== menjadi satu format baku, misal "Rainy", "Sunny", "Express", "Regular".' },
      { q: 'Bagaimana menangani Arrival Time D005 = NULL?', a: 'Jangan langsung diisi rata-rata. ==Periksa dulu status pengiriman== (masih in-transit atau memang tidak tercatat). Karena ini ==missing value pada target==, jika dipakai untuk training supervised learning, baris tanpa target valid ==dihapus==.' },
      { q: 'Bagaimana mengubah atribut kategorikal?', a: '==Categorical encoding==, misalnya ==One-Hot Encoding==: Weather → kolom Weather_Rainy dan Weather_Sunny berisi 1/0. Service Type juga bisa dipetakan ke representasi biner/numerik (atau Label Encoding).' },
      { q: 'Fitur baru apa yang bisa diekstrak dari kolom waktu?', a: '==Scheduled_Hour== (jam, misal 9, 14), ==Scheduled_Period== (pagi/siang/sore), ==Time_Difference== (selisih kedatangan dan jadwal: D001 = +40 menit, D002 = -10 menit).' },
      { q: 'Kenapa Time_Difference perlu hati-hati?', a: 'Jika dipakai untuk menentukan label terlambat, Time_Difference dan Arrival Time adalah ==komponen pembentuk target==, jadi ==tidak boleh jadi fitur input== saat memprediksi sebelum barang dikirim. Status terlambat juga baru bisa ditentukan setelah ==definisi jadwal dan toleransi keterlambatan== ditetapkan; jika Scheduled Time adalah waktu keberangkatan, selisih itu bukan ukuran keterlambatan.' },
      { q: 'Apa itu feature scaling di kasus ini?', a: 'Fitur numerik seperti Distance di-==normalisasi atau distandardisasi==. Contoh ==Standardization (StandardScaler)==: nilai diubah agar mean = 0 dan standard deviation = 1.' },
      { q: 'Apa beda data cleaning dan feature extraction?', a: '==Data cleaning== memperbaiki kualitas data yang ada (misal "RAINY" → "Rainy"). ==Feature extraction== membuat representasi informasi baru (misal One-Hot Encoding, kolom selisih waktu).' },
      { q: 'Aturan penting apa untuk parameter preprocessing?', a: 'Semua parameter (median imputasi, mean/std scaling) ==dihitung dari data training saja==, lalu diterapkan konsisten ke validation & testing agar tidak terjadi ==data leakage==. Order ID umumnya tidak dipakai karena hanya identifier.' }
    ],
    keys: [
      { label: 'Missing value (Distance & Arrival Time)', kw: ['missing', 'null', 'kosong'] },
      { label: 'Imputasi mean/median (13,75)', kw: ['imputasi', 'mean', 'median', '13 75', 'rata rata'] },
      { label: 'Hapus satuan km → numerik', kw: ['km', 'numerik', 'satuan'] },
      { label: 'Standarisasi huruf/kategori', kw: ['standarisasi', 'kapital', 'huruf', 'case', 'konsisten'] },
      { label: 'D005: cek status / hapus baris', kw: ['in transit', 'status pengiriman', 'hapus baris', 'dihapus'] },
      { label: 'One-hot / categorical encoding', kw: ['one hot', 'encoding'] },
      { label: 'Fitur waktu (hour/period/time difference)', kw: ['scheduled hour', 'period', 'time difference', 'pagi', 'selisih'] },
      { label: 'Feature scaling / standardization', kw: ['scaling', 'standardization', 'standardscaler', 'normalisasi'] },
      { label: 'Data cleaning vs feature extraction', kw: ['data cleaning', 'feature extraction', 'ekstraksi fitur'] },
      { label: 'Parameter dari data training / leakage', kw: ['data training', 'leakage'] }
    ],
    tip: '(1) **Tabel masalah**: masalah | contoh data | teknik preprocessing. (2) Langkah berurutan: ==Data cleaning== → ==Categorical encoding== → ==Feature extraction== → ==Feature scaling==. (3) Sebut angka konkret (13,75; +40; -10 menit) dan catatan kritis (target D005, Time_Difference bocor, parameter dari training).',
    a: [
      { h: 'Masalah kualitas & format data', b: 'Data belum bisa langsung dipakai untuk training karena ada masalah kualitas dan ketidakseragaman format:<table class="tbl"><tr><th>Permasalahan</th><th>Contoh data</th><th>Teknik preprocessing</th></tr><tr><td>Missing value (atribut)</td><td>Distance D003 = NULL</td><td>Imputasi mean atau median (atau hapus baris jika tidak relevan)</td></tr><tr><td>Missing value (target)</td><td>Arrival Time D005 = NULL</td><td>Periksa status pengiriman sebelum menetapkan label, atau hapus baris</td></tr><tr><td>Format tidak konsisten</td><td>12 km, 8, 15km</td><td>Hapus satuan "km" dan konversi ke numerik</td></tr><tr><td>Kategori tidak konsisten</td><td>Rainy dan RAINY; sunny</td><td>Standarisasi huruf (case)</td></tr><tr><td>Variasi kapitalisasi</td><td>Express, express, REGULAR</td><td>Normalisasi teks ke satu format baku</td></tr><tr><td>Format waktu</td><td>09:00, 14:00</td><td>Konversi tipe waktu dan ekstraksi fitur</td></tr><tr><td>Atribut kategorikal</td><td>Weather, Service Type</td><td>Categorical encoding (One-Hot atau Label Encoding)</td></tr></table>' },
      { h: '1. Data cleaning', b: 'Menyeragamkan format dan menangani missing values.<ul><li>"12 km" → 12, "15km" → 15, "RAINY" → "Rainy".</li><li>**Distance D003 (NULL):** imputasi dengan ==mean== dari data yang tersedia, (12 + 8 + 15 + 20) / 4 = ==13,75==, atau ==median== agar tidak terlalu dipengaruhi outlier. Idealnya dihitung dari data training yang relevan.</li><li>**Arrival Time D005 (NULL):** ==tidak boleh langsung diisi rata-rata== karena barang mungkin belum selesai dikirim. Periksa dulu apakah masih in-transit atau tidak tercatat. Jika baris dipakai untuk training supervised learning yang butuh label waktu tiba, baris tanpa target valid harus dihapus.</li></ul>' },
      { h: '2. Categorical encoding', b: 'Mengubah atribut kategorikal menjadi angka agar bisa diproses algoritma ML. Contoh ==One-Hot Encoding== pada Weather:<table class="tbl"><tr><th>Weather</th><th>Weather_Rainy</th><th>Weather_Sunny</th></tr><tr><td>Rainy</td><td>1</td><td>0</td></tr><tr><td>Sunny</td><td>0</td><td>1</td></tr><tr><td>Rainy</td><td>1</td><td>0</td></tr></table>Teknik serupa diterapkan pada Service Type (Express dan Regular dipetakan ke representasi biner/numerik).' },
      { h: '3. Feature extraction / feature engineering', b: '<table class="tbl"><tr><th>Fitur asli</th><th>Fitur hasil ekstraksi</th><th>Keterangan</th></tr><tr><td>Scheduled Time</td><td>Scheduled_Hour</td><td>Jam yang dijadwalkan (misal 9, 14)</td></tr><tr><td>Scheduled Time</td><td>Scheduled_Period</td><td>Kategori pagi, siang, sore/malam</td></tr><tr><td>Scheduled Time & Arrival Time</td><td>Time_Difference</td><td>Selisih waktu kedatangan dan jadwal</td></tr></table><ul><li>Jika Scheduled Time adalah waktu kedatangan yang dijanjikan: D001 selisih ==+40 menit==, D002 selisih ==-10 menit==.</li><li>Status terlambat baru bisa ditentukan setelah ==definisi jadwal dan toleransi keterlambatan== ditetapkan. Jika Scheduled Time ternyata waktu keberangkatan, selisih itu bukan ukuran keterlambatan.</li><li>**Catatan kritis:** jika selisih dipakai untuk membentuk label Late vs On-Time, maka Time_Difference dan Arrival Time adalah ==komponen pembentuk target== sehingga ==tidak boleh dijadikan fitur input== saat memprediksi pengiriman baru sebelum barang dikirim.</li></ul>' },
      { h: '4. Feature scaling', b: 'Fitur numerik seperti Distance dinormalisasi atau distandardisasi sesuai kebutuhan algoritma. Contoh ==Standardization (StandardScaler)==: mengubah nilai jarak agar ==mean = 0 dan standard deviation = 1==, berdasarkan rata-rata dan simpangan baku data training, sehingga skalanya seimbang dengan fitur lain.' },
      { h: 'Penjelasan tambahan', b: '<ul><li>Preprocessing bertujuan meningkatkan konsistensi dan kualitas data sehingga algoritma dapat mempelajari pola secara efektif.</li><li>==Data cleaning== memperbaiki kualitas dan kerapian data, sedangkan ==feature extraction== membentuk representasi informasi baru yang lebih bermakna.</li><li>==Order ID== adalah unique identifier sehingga umumnya tidak dipakai sebagai fitur karena tidak mencerminkan karakteristik pengiriman dan bisa menimbulkan noise.</li><li>Semua parameter preprocessing (mean/median imputasi, parameter scaling) ==harus dihitung dari data training saja==, lalu diterapkan konsisten ke data validation dan testing agar tidak terjadi ==data leakage==.</li></ul>' }
    ]
  },

  {
    id: 'kmg8', region: 'KMG', no: 8, kisi: [3], modul: 'PPT Session 3-4 · Module 3',
    case: UTS.caseQuickShip,
    title: 'QuickShip: pemilihan fitur & pencegahan data leakage',
    question: 'QuickShip Logistics berencana menggunakan data historis untuk memprediksi kemungkinan keterlambatan sebelum barang dikirim. Tentukan atribut yang relevan sebagai input model serta atribut yang sebaiknya tidak digunakan. Jelaskan bagaimana pemilihan fitur dan proses feature engineering dapat memengaruhi kualitas hasil prediksi.',
    rinci: [
      { q: 'Apa itu feature selection?', a: 'Proses ==memilih atribut yang relevan dan valid== untuk dipakai sebagai input model ML.' },
      { q: 'Atribut mana yang dipakai sebagai input? Kenapa?', a: '==Distance== (jarak berkaitan langsung dengan durasi), ==Weather== (cuaca memengaruhi kelancaran perjalanan), ==Service Type== (Express vs Regular punya ketentuan & prioritas berbeda), ==Scheduled Time== (jadwal menunjukkan variasi kondisi, misal jam sibuk).' },
      { q: 'Kenapa Order ID umumnya tidak dipakai?', a: 'Hanya ==identifier (pengenal unik)==, bukan karakteristik pengiriman; bisa menimbulkan ==noise==.' },
      { q: 'Kenapa Arrival Time tidak boleh dipakai?', a: 'Untuk prediksi sebelum pengiriman, Arrival Time ==belum diketahui== saat prediksi dilakukan (baru ada setelah barang tiba). Memasukkannya menyebabkan ==data leakage==.' },
      { q: 'Apa itu data leakage dan dampaknya?', a: 'Kondisi ketika model memakai ==informasi yang tidak seharusnya tersedia saat prediksi==. Akibatnya evaluasi terlihat sangat baik (==overly optimistic==, bahkan mendekati sempurna), tetapi performa ==turun drastis== saat dipakai pada data operasional sebenarnya.' },
      { q: 'Fitur tambahan apa yang bisa dikembangkan?', a: '==Jam pengiriman, hari dalam minggu, kategori jarak, indikator jam sibuk==, asalkan datanya tersedia dan ==sudah diketahui sebelum prediksi==.' },
      { q: 'Bagaimana feature engineering membantu model?', a: 'Membuat/mengubah fitur agar model lebih mudah mempelajari pola. Contoh: Scheduled Time diubah jadi ==periode pagi, siang, atau malam==, sehingga model bisa mempelajari hubungan periode dengan risiko keterlambatan.' },
      { q: 'Apa manfaat feature selection yang tepat?', a: '==Mengurangi noise==, ==meningkatkan efisiensi pelatihan==, dan membantu prediksi lebih akurat serta ==dapat digeneralisasi (generalizable)==.' }
    ],
    keys: [
      { label: 'Feature selection', kw: ['feature selection', 'seleksi fitur', 'pemilihan fitur'] },
      { label: 'Distance, Weather, Service Type, Scheduled Time dipakai', kw: ['distance', 'weather', 'service type', 'scheduled time', 'jarak', 'cuaca'] },
      { label: 'Order ID tidak dipakai (identifier)', kw: ['order id', 'identifier', 'pengenal unik'] },
      { label: 'Arrival Time tidak dipakai', kw: ['arrival time', 'waktu tiba', 'waktu kedatangan'] },
      { label: 'Data leakage', kw: ['data leakage', 'leakage', 'kebocoran'] },
      { label: 'Belum diketahui saat prediksi', kw: ['belum diketahui', 'sebelum pengiriman', 'tidak tersedia'] },
      { label: 'Evaluasi terlalu optimis lalu turun', kw: ['optimis', 'sempurna', 'menurun', 'turun drastis'] },
      { label: 'Feature engineering (periode waktu)', kw: ['feature engineering', 'pagi', 'periode'] },
      { label: 'Fitur tambahan (hari, kategori jarak, jam sibuk)', kw: ['hari', 'kategori jarak', 'jam sibuk'] },
      { label: 'Kurangi noise / generalisasi', kw: ['noise', 'generalisasi', 'generalizable', 'efisien'] }
    ],
    tip: 'Paling aman pakai **tabel atribut**: Atribut | Dipakai sebagai input? | Alasan (6 baris). Lalu jelaskan fitur tambahan, peran feature engineering, definisi & dampak ==data leakage==, dan manfaat feature selection.',
    a: [
      { h: 'Tabel seleksi atribut', b: '==Feature selection== adalah proses memilih atribut yang relevan dan valid untuk input model. Untuk prediksi keterlambatan ==sebelum barang dikirim==:<table class="tbl"><tr><th>Atribut</th><th>Dipakai sebagai input?</th><th>Alasan</th></tr><tr><td>Distance</td><td>**Ya**</td><td>Jarak dapat berkaitan langsung dengan durasi pengiriman</td></tr><tr><td>Weather</td><td>**Ya**</td><td>Kondisi cuaca dapat memengaruhi kelancaran perjalanan</td></tr><tr><td>Service Type</td><td>**Ya**</td><td>Layanan memiliki ketentuan operasional dan prioritas berbeda (Express vs Regular)</td></tr><tr><td>Scheduled Time</td><td>**Ya**</td><td>Jadwal dapat menunjukkan variasi kondisi operasional (misal jam sibuk)</td></tr><tr><td>Order ID</td><td>Umumnya tidak</td><td>Hanya identifier (pengenal unik), bukan karakteristik pengiriman</td></tr><tr><td>Arrival Time</td><td>**Tidak**, untuk prediksi sebelum pengiriman</td><td>Belum diketahui ketika prediksi dilakukan (baru ada setelah barang tiba), menyebabkan data leakage</td></tr></table>' },
      { h: 'Fitur tambahan (feature engineering)', b: 'Fitur yang bisa dikembangkan dari data historis: ==jam pengiriman==, ==hari dalam minggu==, ==kategori jarak==, atau ==indikator jam sibuk==, apabila datanya tersedia dan sudah dapat diketahui sebelum prediksi dilakukan.<br>**Peran feature engineering:** membuat atau mengubah fitur agar model lebih mudah mempelajari pola. Contoh: Scheduled Time dikonversi menjadi kategori ==pagi, siang, atau malam==, sehingga model dapat mempelajari hubungan periode pengiriman dengan tinggi-rendahnya risiko keterlambatan.' },
      { h: 'Bahaya data leakage', b: '<ul><li>Memasukkan ==Arrival Time== sebagai input model yang memprediksi keterlambatan sebelum pengiriman akan menyebabkan ==data leakage==, karena waktu kedatangan aktual baru diketahui setelah pengiriman selesai.</li><li>**Data leakage** adalah kondisi ketika model memakai informasi yang tidak seharusnya tersedia pada saat prediksi nyata. Akibatnya hasil evaluasi terlihat sangat baik (overly optimistic, bahkan mendekati sempurna), tetapi performanya ==menurun drastis== ketika dipakai pada data operasional sebenarnya.</li></ul>' },
      { h: 'Manfaat feature selection yang tepat', b: 'Pemilihan fitur yang tepat dapat ==mengurangi noise== (gangguan data tidak relevan seperti Order ID), ==meningkatkan efisiensi waktu pelatihan==, dan membantu model menghasilkan prediksi yang lebih akurat dan ==dapat digeneralisasi (generalizable)==.' }
    ]
  },

  {
    id: 'kmg9', region: 'KMG', no: 9, kisi: [3], modul: 'Module 3 (ML Pipeline with SageMaker)',
    title: 'Merancang ML pipeline end-to-end dengan Amazon SageMaker',
    question: 'Sebuah perusahaan memiliki dataset yang telah dikumpulkan dari berbagai sumber dan ingin mengembangkan model Machine Learning menggunakan Amazon SageMaker. Rancang tahapan Machine Learning pipeline mulai dari persiapan data hingga model dapat digunakan untuk menghasilkan prediksi. Jelaskan tujuan setiap tahapan dan risiko yang dapat terjadi apabila salah satu tahapan tidak dilakukan dengan baik.',
    rinci: [
      { q: 'Apa itu ML pipeline?', a: 'Rangkaian proses ==terstruktur dan berkesinambungan== untuk mengembangkan model ML dari identifikasi masalah bisnis sampai model siap dipakai untuk prediksi di produksi.' },
      { q: 'Apa peran Amazon S3 dan Amazon SageMaker?', a: '{{Amazon S3}}: ==penyimpanan terpusat dataset==. {{Amazon SageMaker}}: memfasilitasi ==persiapan data (Jupyter Notebook), training, evaluasi, deployment, dan monitoring== model.' },
      { q: 'Sebutkan 8 tahapan pipeline secara berurutan.', a: '==Business Understanding → Data Collection → Data Preprocessing → Data Splitting → Model Training → Model Evaluation → Model Deployment → Model Monitoring==.' },
      { q: 'Tujuan & risiko Business Understanding dan Data Collection?', a: 'Business Understanding: menentukan tujuan bisnis & target. Risiko: ==model tidak menyelesaikan masalah bisnis yang sebenarnya==. Data Collection: mengumpulkan data relevan. Risiko: ==dataset tidak representatif== atau tidak lengkap.' },
      { q: 'Tujuan & risiko Data Preprocessing dan Data Splitting?', a: 'Preprocessing: memperbaiki kualitas data & menyiapkan fitur. Risiko: ==kesalahan input memengaruhi akurasi prediksi==. Splitting: memisahkan training, validation, testing. Risiko: ==evaluasi bias atau terjadi data leakage==.' },
      { q: 'Tujuan & risiko Model Training dan Model Evaluation?', a: 'Training: mempelajari pola dari data. Risiko: model ==tidak mampu menangkap hubungan antarvariabel (underfitting)==. Evaluation: mengukur ==kemampuan generalisasi== pada data uji. Risiko: ==model buruk dianggap layak deploy/rilis==.' },
      { q: 'Tujuan & risiko Model Deployment dan Model Monitoring?', a: 'Deployment: menyediakan prediksi lewat ==endpoint== agar bisa diakses aplikasi. Risiko: model ==berhenti di tahap eksperimen==, tidak dipakai operasional. Monitoring: memantau kualitas prediksi & pergeseran data. Risiko: ==penurunan performa (data drift / concept drift) tidak terdeteksi==.' },
      { q: 'Bagaimana alur integrasinya di AWS?', a: 'Rumuskan masalah → satukan data ke ==S3== → bersihkan & bagi data di ==SageMaker Notebook== → latih & uji model → deploy jadi ==endpoint prediksi== → pantau akurasi secara berkala. Setiap tahap ==saling bergantung==.' }
    ],
    keys: [
      { label: 'Business understanding', kw: ['business understanding', 'tujuan bisnis', 'pemahaman bisnis'] },
      { label: 'Data collection', kw: ['data collection', 'pengumpulan data', 'mengumpulkan data'] },
      { label: 'Data preprocessing', kw: ['preprocessing'] },
      { label: 'Data splitting (train/validation/test)', kw: ['splitting', 'validation', 'testing', 'test'] },
      { label: 'Model training', kw: ['training', 'pelatihan'] },
      { label: 'Model evaluation', kw: ['evaluation', 'evaluasi'] },
      { label: 'Model deployment / endpoint', kw: ['deploy', 'endpoint'] },
      { label: 'Model monitoring / drift', kw: ['monitoring', 'drift', 'pemantauan'] },
      { label: 'Amazon S3 & SageMaker', kw: ['s3', 'sagemaker'] },
      { label: 'Risiko tiap tahap', kw: ['risiko', 'bias', 'leakage', 'tidak representatif'] }
    ],
    tip: 'Jawab dengan **tabel 8 tahap**: Tahapan | Tujuan | Risiko jika tidak dilakukan dengan baik. Buka dengan definisi ML pipeline + peran S3 & SageMaker, tutup dengan alur integrasi di AWS.',
    a: [
      { h: 'Pengertian & peran layanan AWS', b: '==Machine Learning pipeline== merupakan rangkaian proses terstruktur dan berkesinambungan untuk mengembangkan model ML mulai dari identifikasi masalah bisnis hingga model siap dipakai di lingkungan produksi. Di AWS, {{Amazon S3}} menjadi tempat penyimpanan terpusat dataset, sedangkan {{Amazon SageMaker}} memfasilitasi persiapan data (Jupyter Notebook), training, evaluasi, deployment, hingga monitoring model.' },
      { h: 'Tabel tahapan, tujuan, dan risiko', b: '<table class="tbl"><tr><th>Tahapan</th><th>Tujuan</th><th>Risiko jika tidak dilakukan dengan baik</th></tr><tr><td>1. Business Understanding</td><td>Menentukan tujuan bisnis dan target pemodelan</td><td>Model tidak menyelesaikan masalah bisnis yang sebenarnya</td></tr><tr><td>2. Data Collection</td><td>Mengumpulkan data relevan dari berbagai sumber</td><td>Dataset tidak representatif atau tidak lengkap</td></tr><tr><td>3. Data Preprocessing</td><td>Memperbaiki kualitas data dan menyiapkan fitur</td><td>Kesalahan/ketidakkonsistenan input memengaruhi akurasi prediksi</td></tr><tr><td>4. Data Splitting</td><td>Memisahkan data menjadi training, validation, testing</td><td>Evaluasi bias/tidak valid (berisiko data leakage)</td></tr><tr><td>5. Model Training</td><td>Mempelajari pola dari data pelatihan</td><td>Model tidak mampu menangkap hubungan antarvariabel (underfitting)</td></tr><tr><td>6. Model Evaluation</td><td>Mengukur kemampuan generalisasi model pada data uji</td><td>Model yang buruk dianggap layak deploy/rilis</td></tr><tr><td>7. Model Deployment</td><td>Menyediakan prediksi (endpoint) agar dapat diakses aplikasi</td><td>Model berhenti di tahap eksperimen, tidak dapat dipakai operasional</td></tr><tr><td>8. Model Monitoring</td><td>Memantau kualitas prediksi dan pergeseran data (data drift) dari waktu ke waktu</td><td>Penurunan performa (data drift / concept drift) tidak terdeteksi</td></tr></table>' },
      { h: 'Alur integrasi di AWS', b: '<div class="flow"><span>Business Understanding</span><i>→</i><span>Data ke Amazon S3</span><i>→</i><span>Preprocessing & splitting di SageMaker Notebook</span><i>→</i><span>Training & evaluation</span><i>→</i><span>Deploy ke endpoint</span><i>→</i><span>Monitoring</span></div>Setiap tahap ==saling bergantung==: kesalahan di awal (misal data tidak representatif) akan terbawa sampai hasil prediksi. Monitoring berkala memastikan kualitas keputusan bisnis tetap terjaga.' }
    ]
  },

  {
    id: 'kmg10', region: 'KMG', no: 10, kisi: [4], modul: 'PPT Session 3-4 · Module 2-3',
    title: 'Model transaksi berisiko: training 98%, validation 67%, testing 65%',
    question: 'Sebuah tim Data Science mengembangkan model klasifikasi untuk mengidentifikasi transaksi berisiko. Setelah model dilatih, diperoleh hasil sebagai berikut:<div class="tbl-scroll"><table class="tbl"><tr><th>Model evaluation</th><th>Accuracy</th></tr><tr><td>Training data</td><td>98%</td></tr><tr><td>Validation data</td><td>67%</td></tr><tr><td>Testing data</td><td>65%</td></tr></table></div>Analisis kondisi yang kemungkinan terjadi pada model tersebut serta faktor-faktor penyebabnya. Jelaskan beberapa pendekatan yang dapat diterapkan untuk meningkatkan kemampuan model dalam memprediksi data baru.',
    rinci: [
      { q: 'Kondisi apa yang terjadi pada model?', a: '==Overfitting==: performa sangat tinggi di data training, tetapi menurun signifikan pada data baru (validation & testing).' },
      { q: 'Berapa selisih akurasinya?', a: 'Training vs validation: 98% − 67% = ==31 poin persentase==. Training vs testing: 98% − 65% = ==33 poin persentase==. Model belum punya ==kemampuan generalisasi== yang baik.' },
      { q: 'Apa kemungkinan penyebabnya?', a: '==Model terlalu kompleks==, ==jumlah data training terbatas==, ==noise di data== ikut terpelajari, atau ==proses training berlebihan (overtraining)==.' },
      { q: 'Sebutkan strategi perbaikan overfitting.', a: '==Menambah data training==, ==cross-validation (K-Fold)==, ==regularization (L1/L2)==, ==early stopping==, ==feature selection==, ==model simplification== (batasi kedalaman/layer), dan ==dropout== (neural network).' },
      { q: 'Apa manfaat cross-validation dan regularization?', a: 'Cross-validation: estimasi performa ==lebih stabil dan objektif==. Regularization: penalti pada kompleksitas, ==mengurangi kecenderungan mempelajari noise==.' },
      { q: 'Apa manfaat early stopping dan dropout?', a: 'Early stopping: menghentikan training saat validation tidak membaik, ==mengurangi overtraining==. Dropout: menonaktifkan neuron acak saat training, ==mengurangi ketergantungan berlebihan pada neuron tertentu==.' },
      { q: 'Apa beda overfitting dengan underfitting?', a: 'Overfitting: training tinggi (98%), validation/testing jauh lebih rendah; penyebab kompleksitas berlebihan. Underfitting: ==training rendah dan validation/testing juga rendah==; penyebab model terlalu sederhana.' },
      { q: 'Apa yang perlu diperiksa selain kompleksitas model?', a: '==Kualitas data==, ==proses splitting==, dan kemungkinan ==data leakage==.' },
      { q: 'Kenapa accuracy saja tidak cukup untuk transaksi berisiko?', a: 'Karena data sering ==tidak seimbang (imbalanced)==. Jika hanya 5% transaksi berisiko, model yang selalu menebak "normal" tetap ==akurasi 95%== tetapi ==gagal total (0%)== menemukan transaksi berisiko. Pakai juga ==precision, recall, F1-score, confusion matrix==.' }
    ],
    keys: [
      { label: 'Overfitting', kw: ['overfitting', 'overfit'] },
      { label: 'Selisih 31 & 33 poin', kw: ['31', '33', 'selisih'] },
      { label: 'Generalisasi buruk', kw: ['generalisasi', 'data baru'] },
      { label: 'Penyebab: kompleks/data terbatas/noise/overtraining', kw: ['kompleks', 'terbatas', 'noise', 'overtraining'] },
      { label: 'Tambah data training', kw: ['menambah data', 'tambah data', 'data tambahan'] },
      { label: 'Cross-validation', kw: ['cross validation', 'k fold'] },
      { label: 'Regularization / dropout', kw: ['regularization', 'regularisasi', 'dropout', 'l1', 'l2'] },
      { label: 'Early stopping', kw: ['early stopping'] },
      { label: 'Feature selection / simplification', kw: ['feature selection', 'sederhana', 'simplification'] },
      { label: 'Underfitting sebagai pembanding', kw: ['underfitting'] },
      { label: 'Precision/recall/F1 & imbalanced', kw: ['precision', 'recall', 'f1', 'imbalanced', 'tidak seimbang'] }
    ],
    tip: '(1) Diagnosis: ==overfitting== + angka selisih 31 & 33 poin. (2) 4 penyebab. (3) **Tabel strategi 7 baris**: strategi | penjelasan | manfaat. (4) Bandingkan dengan underfitting. (5) Tutup dengan catatan evaluasi: cek leakage/splitting dan pakai precision, recall, F1 (contoh imbalanced 5%).',
    a: [
      { h: 'Analisis kondisi model', b: 'Model menunjukkan indikasi kuat mengalami ==overfitting==: performa sangat tinggi pada data training, tetapi menurun signifikan pada data baru yang belum pernah dilihat (validation dan testing).<div class="accbar"><span style="--w:98%">Training 98%</span><span style="--w:67%">Validation 67% (−31 poin)</span><span style="--w:65%">Testing 65% (−33 poin)</span></div>' },
      { h: 'Faktor penyebab', b: '<ul><li>Selisih akurasi training vs validation ==31 poin persentase== (98% vs 67%) dan training vs testing ==33 poin persentase== (98% vs 65%) menunjukkan model terlalu menyesuaikan diri dengan data training dan belum memiliki ==kemampuan generalisasi== yang baik.</li><li>Kemungkinan penyebab: ==model terlalu kompleks==, ==jumlah data pelatihan terbatas==, ==adanya noise== di dalam fitur data, atau ==proses training berlebihan (overtraining)==.</li></ul>' },
      { h: 'Strategi perbaikan', b: '<table class="tbl"><tr><th>Strategi</th><th>Penjelasan</th><th>Manfaat</th></tr><tr><td>Menambah data training</td><td>Memakai data tambahan yang relevan dan representatif</td><td>Memperluas variasi pola yang dipelajari</td></tr><tr><td>Cross-Validation</td><td>Mengevaluasi model pada beberapa pembagian (fold) data training (K-Fold)</td><td>Estimasi performa lebih stabil dan objektif</td></tr><tr><td>Regularization</td><td>Menambahkan penalti pada kompleksitas model (L1/L2)</td><td>Mengurangi kecenderungan mempelajari noise</td></tr><tr><td>Early Stopping</td><td>Menghentikan training ketika performa validation tidak lagi membaik</td><td>Mengurangi risiko overtraining</td></tr><tr><td>Feature Selection</td><td>Mengurangi fitur yang tidak relevan</td><td>Mengurangi noise dan kompleksitas</td></tr><tr><td>Model Simplification</td><td>Model lebih sederhana atau membatasi kedalaman/layer</td><td>Meningkatkan kemampuan generalisasi</td></tr><tr><td>Dropout (neural network)</td><td>Menonaktifkan sebagian neuron secara acak saat training</td><td>Mengurangi ketergantungan berlebihan pada neuron tertentu</td></tr></table>' },
      { h: 'Overfitting vs underfitting', b: '<table class="tbl"><tr><th>Aspek</th><th>Overfitting</th><th>Underfitting</th></tr><tr><td>Kondisi model</td><td>Terlalu menyesuaikan diri dengan data training</td><td>Belum cukup mempelajari pola data</td></tr><tr><td>Training performance</td><td>Sangat tinggi (misal 98%)</td><td>Rendah</td></tr><tr><td>Validation/testing performance</td><td>Jauh lebih rendah (misal 67% dan 65%)</td><td>Juga rendah</td></tr><tr><td>Penyebab utama</td><td>Kompleksitas model terlalu tinggi, noise ikut terpelajari</td><td>Model terlalu sederhana</td></tr></table>' },
      { h: 'Catatan evaluasi tambahan dosen', b: '<ul><li>Perbedaan tajam training vs validation mengindikasikan model ikut menghafal karakteristik spesifik atau kebetulan acak dari data training yang tidak berlaku umum.</li><li>Perbedaan performa juga perlu diperiksa dari sisi ==kualitas data==, ==proses splitting==, dan kemungkinan ==data leakage==.</li><li>Selain accuracy, evaluasi klasifikasi sebaiknya memakai ==precision, recall, F1-score, dan confusion matrix==, terutama bila kelas ==tidak seimbang (imbalanced)==.</li><li>**Contoh:** jika hanya ==5%== transaksi benar-benar berisiko, model "bodoh" yang selalu menebak semua transaksi normal tetap mendapat ==accuracy 95%==, padahal ==gagal total (0%)== menemukan transaksi berisiko.</li></ul>' }
    ]
  }
);
