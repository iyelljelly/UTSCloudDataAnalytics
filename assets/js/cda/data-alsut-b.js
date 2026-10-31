/* Soal ALSUT 6-10 (sama dengan Soal Latihan UTS dosen). */
window.UTS = window.UTS || {};
UTS.essays = UTS.essays || [];

UTS.essays.push(
  {
    id: 'alsut6', region: 'ALSUT', no: 6, kisi: [2], modul: 'Modul 4, 8',
    title: 'Data Lake (S3) vs Data Warehouse (Redshift) dan desain arsitekturnya',
    question: 'Sebuah perusahaan ingin menyimpan data mentah dari berbagai sumber sekaligus menyediakan data terstruktur untuk kebutuhan laporan manajemen. Bandingkan karakteristik Data Lake dan Data Warehouse serta jelaskan bagaimana Amazon S3 dan Amazon Redshift dapat digunakan untuk memenuhi kedua kebutuhan tersebut. Jelaskan pula pertimbangan desain arsitektur agar pengelolaan data tetap efisien dan dapat dikembangkan!',
    rinci: [
      { q: 'Data lake menyimpan data jenis apa dan dalam kondisi apa?', a: 'Semua jenis: ==structured, semi-structured, dan unstructured==, dalam kondisi apa adanya (raw/uncurated maupun curated).' },
      { q: 'Data warehouse menyimpan data seperti apa?', a: 'Data ==structured (dan semi-structured)== dari sistem transaksional/operasional yang sudah bersih dan sangat terkurasi (highly curated).' },
      { q: 'Apa beda schema-on-read dan schema-on-write?', a: '==Schema-on-read== (data lake): skema ditentukan saat data dibaca, jadi data masuk cepat. ==Schema-on-write== (warehouse): skema tabel ditentukan ketat sebelum data dimuat.' },
      { q: 'Bagaimana perbandingan biaya dan performa?', a: 'Data lake: penyimpanan objek ==sangat murah== untuk skala besar, query makin cepat dengan format kolumnar (Parquet). Warehouse: biaya lebih tinggi tetapi ==query SQL kompleks paling cepat== (latensi rendah).' },
      { q: 'Layanan AWS untuk masing-masing?', a: 'Data lake: {{Amazon S3}} + {{AWS Lake Formation}}. Data warehouse: {{Amazon Redshift}}.' },
      { q: 'Bagaimana S3 dan Redshift dipakai bersama untuk kasus ini?', a: 'Data mentah semua sumber masuk ke ==S3 data lake== (zona landing → raw → trusted → curated), diolah dengan {{AWS Glue}}, lalu data rapi dimuat ke ==Redshift== untuk laporan manajemen di {{Amazon QuickSight}}. {{Redshift Spectrum}} bisa query file di S3 tanpa memuatnya.' },
      { q: 'Sebutkan pertimbangan desain agar efisien dan bisa dikembangkan.', a: 'Zona S3, format kolumnar ==Parquet== + partisi, katalog ==Glue Data Catalog== (cegah data swamp), tata kelola Lake Formation, ==lifecycle policy & storage class== untuk hemat biaya, compute dan storage terpisah (node ==RA3==), keamanan IAM/KMS.' }
    ],
    keys: [
      { label: 'Data lake', kw: ['data lake'] },
      { label: 'Data warehouse', kw: ['data warehouse', 'warehouse'] },
      { label: 'Amazon S3', kw: ['s3'] },
      { label: 'Amazon Redshift', kw: ['redshift'] },
      { label: 'Schema-on-read', kw: ['schema on read', 'saat dibaca'] },
      { label: 'Schema-on-write', kw: ['schema on write', 'sebelum dimuat', 'sebelum data dimuat'] },
      { label: 'Structured / unstructured', kw: ['terstruktur', 'structured'] },
      { label: 'Zona landing/raw/trusted/curated', kw: ['landing', 'raw', 'trusted', 'curated', 'zona'] },
      { label: 'Glue / Data Catalog', kw: ['glue', 'catalog', 'katalog'] },
      { label: 'Redshift Spectrum', kw: ['spectrum'] },
      { label: 'Parquet / partisi / lifecycle', kw: ['parquet', 'partisi', 'lifecycle', 'storage class', 'kolumnar'] }
    ],
    tip: '**A.** Tabel perbandingan (jenis data, skema, biaya & performa, pengguna). **B.** Cara S3 + Redshift memenuhi 2 kebutuhan (data mentah vs laporan). **C.** Pertimbangan desain (zona, Parquet, katalog, governance, biaya, scalability).',
    a: [
      { h: 'A. Perbandingan karakteristik', b: '<table class="tbl"><tr><th>Karakteristik</th><th>Data Lake (Amazon S3)</th><th>Data Warehouse (Amazon Redshift)</th></tr><tr><td>Tipe & kualitas data</td><td>Menyimpan data ==structured, semistructured, & unstructured== dalam kondisi apa adanya (raw/uncurated maupun curated).</td><td>Menyimpan data ==structured & semistructured== dari sistem transaksional/operasional yang sudah sangat bersih & terkurasi (highly curated).</td></tr><tr><td>Penerapan skema</td><td>==Schema-on-read== (skema ditentukan saat data dibaca/dianalisis, sehingga proses masuknya data sangat cepat).</td><td>==Schema-on-write== (skema tabel ditentukan ketat sebelum data dimuat ke warehouse).</td></tr><tr><td>Biaya & performa</td><td>Biaya penyimpanan objek sangat murah untuk skala tak terbatas; query makin cepat dengan format kolumnar (Parquet).</td><td>Biaya penyimpanan/komputasi lebih tinggi, tetapi memberi ==performa query SQL kompleks paling cepat== (latensi rendah).</td></tr></table>' },
      { h: 'A. Perbandingan (lanjutan)', filled: true, b: '<table class="tbl"><tr><th>Karakteristik</th><th>Data Lake</th><th>Data Warehouse</th></tr><tr><td>Pengguna utama</td><td>Data engineer dan data scientist (eksplorasi, ML)</td><td>Business analyst dan manajemen (laporan, BI)</td></tr><tr><td>Pendekatan yang cocok</td><td>ELT</td><td>ETL</td></tr><tr><td>Layanan AWS</td><td>{{Amazon S3}} + {{AWS Lake Formation}}</td><td>{{Amazon Redshift}}</td></tr></table>' },
      { h: 'B. Cara Amazon S3 dan Amazon Redshift memenuhi kedua kebutuhan', filled: true, b: '<ol><li>**Kebutuhan data mentah dari berbagai sumber → Amazon S3 data lake.** Semua data dimasukkan apa adanya ke S3 dengan zona ==landing → raw → trusted → curated==. {{AWS Glue}} crawler mencatat skemanya di {{Glue Data Catalog}}, dan {{AWS Lake Formation}} mengatur izin aksesnya.</li><li>**Kebutuhan data terstruktur untuk laporan manajemen → Amazon Redshift.** Data dari zona curated yang sudah dibersihkan oleh job {{AWS Glue}} dimuat ke Redshift (arsitektur ==MPP==: leader node + compute node yang bekerja paralel). Laporan ditampilkan di {{Amazon QuickSight}}.</li><li>**Menghubungkan keduanya:** {{Redshift Spectrum}} dapat meng-query file di S3 langsung tanpa memuatnya ke Redshift, jadi data historis besar cukup disimpan murah di S3.</li></ol>' },
      { h: 'C. Pertimbangan desain arsitektur agar efisien dan dapat dikembangkan', filled: true, b: '<ul><li>**Pisahkan storage dan compute:** S3 untuk penyimpanan, Redshift/Athena/Glue untuk komputasi, sehingga masing-masing bisa diperbesar terpisah (Redshift node ==RA3==).</li><li>**Zona data yang jelas** (landing, raw, trusted, curated) supaya data mentah tetap tersimpan dan data siap pakai terpisah.</li><li>**Katalog metadata** ({{Glue Data Catalog}}) agar data mudah ditemukan dan tidak berubah menjadi ==data swamp==.</li><li>**Format kolumnar & partisi** (==Parquet==) supaya query lebih cepat dan murah serta bisa diproses paralel.</li><li>**Hemat biaya:** pilih ==storage class== S3 sesuai frekuensi akses (Standard, Intelligent-Tiering, Standard-IA, Glacier) dan pakai ==lifecycle policy==.</li><li>**Tata kelola & keamanan:** Lake Formation (termasuk tag-based access control), IAM least privilege, enkripsi {{AWS KMS}}, pembatasan kolom/baris di Redshift.</li><li>Ikuti **Well-Architected Framework** dan **Data Analytics Lens**.</li></ul>' }
    ]
  },

  {
    id: 'alsut7', region: 'ALSUT', no: 7, kisi: [1], modul: 'Modul 5, 8',
    title: 'Risiko keamanan dan 4 pilar perlindungan data pipeline',
    question: 'Sebuah organisasi menggunakan layanan cloud untuk menyimpan dan memproses informasi pelanggan. Data diakses oleh berbagai bagian perusahaan, tetapi belum ada pembatasan hak akses dan perlindungan data yang memadai. Analisis risiko keamanan yang mungkin terjadi dan jelaskan bagaimana penerapan access control, encryption, logging, dan monitoring dapat membantu melindungi data pada setiap tahapan data pipeline!',
    rinci: [
      { q: 'Menurut shared responsibility model, siapa yang bertanggung jawab atas data dan hak akses?', a: '==Pelanggan== (security IN the cloud). AWS menjaga keamanan OF the cloud (infrastruktur).' },
      { q: 'Sebutkan 4 risiko keamanan dalam kasus ini.', a: '(1) ==Paparan data sensitif/PII (data breach)==, (2) ==hilangnya integritas/veracity== karena modifikasi tidak sengaja atau sabotase (tampering/data poisoning), (3) ==pelanggaran regulasi== karena tidak ada jejak audit, (4) penyalahgunaan kredensial saat data berpindah antar-lapisan.' },
      { q: 'Access control diterapkan dengan prinsip dan layanan apa?', a: 'Prinsip ==least privilege== dan "keep people away from data". Layanan {{AWS IAM}} (roles, policies, MFA), {{AWS Lake Formation}} dan kebijakan kolom/baris Redshift untuk kontrol granular sampai tabel, kolom, baris, sel, termasuk masking PII.' },
      { q: 'Apa beda authentication dan authorization?', a: '==Authentication== membuktikan kamu siapa (bisa pakai MFA). ==Authorization== menentukan kamu boleh melakukan apa.' },
      { q: 'Bagaimana enkripsi data in transit?', a: 'Protokol ==TLS/SSL (HTTPS)==, inter-node encryption di kluster (EMR/SageMaker), dan isolasi lalu lintas di Amazon VPC private subnet / VPC endpoint.' },
      { q: 'Bagaimana enkripsi data at rest?', a: 'Enkripsi S3 (==SSE-S3 / SSE-KMS==), Kinesis Data Streams, dan kluster Redshift memakai kunci yang dikelola terpusat di {{AWS KMS}} (dilindungi HSM).' },
      { q: 'Logging memakai apa?', a: '{{AWS CloudTrail}} (mencatat setiap panggilan API, seperti CCTV), S3 server access logs, dan log audit Redshift: siapa mengakses apa, kapan, dari mana, kunci KMS mana.' },
      { q: 'Monitoring memakai apa?', a: '{{Amazon CloudWatch}} (metrik + alarm real-time), {{Amazon Macie}} (ML untuk menemukan PII di S3), {{Amazon GuardDuty}} (mendeteksi aktivitas berbahaya pada akun dan beban kerja).' }
    ],
    keys: [
      { label: 'Shared responsibility / security in the cloud', kw: ['shared responsibility', 'security in the cloud', 'tanggung jawab'] },
      { label: 'Risiko kebocoran data / PII', kw: ['pii', 'bocor', 'kebocoran', 'breach', 'sensitif'] },
      { label: 'Least privilege', kw: ['least privilege', 'seperlunya', 'minimum'] },
      { label: 'AWS IAM', kw: ['iam'] },
      { label: 'Lake Formation / akses granular', kw: ['lake formation', 'kolom', 'baris', 'granular'] },
      { label: 'Enkripsi at rest & in transit', kw: ['at rest', 'in transit', 'enkripsi', 'encryption'] },
      { label: 'TLS / HTTPS', kw: ['tls', 'ssl', 'https'] },
      { label: 'AWS KMS', kw: ['kms'] },
      { label: 'CloudTrail (logging)', kw: ['cloudtrail'] },
      { label: 'CloudWatch (monitoring)', kw: ['cloudwatch'] },
      { label: 'Macie / GuardDuty', kw: ['macie', 'guardduty'] }
    ],
    tip: '**A.** Risiko (4 poin) dengan menyebut shared responsibility. **B.** Empat pilar: Access control (IAM, least privilege, Lake Formation) → Encryption (in transit TLS, at rest KMS) → Logging (CloudTrail) → Monitoring (CloudWatch, Macie, GuardDuty). Kaitkan ke tahap pipeline.',
    a: [
      { h: 'A. Analisis risiko keamanan (tanggung jawab pelanggan, security IN the cloud)', b: 'Tanpa pembatasan akses dan perlindungan data, organisasi menghadapi risiko:<ol><li>==Paparan data sensitif / PII (data breach)==: karyawan yang tidak berwenang bisa melihat data pribadi pelanggan.</li><li>==Hilangnya veracity / integritas data== akibat modifikasi atau penghapusan tidak sengaja (human error) maupun sabotase (tampering/data poisoning).</li><li>==Pelanggaran regulasi & kepatuhan hukum== karena tidak ada jejak audit siapa mengakses apa.</li><li>Penyalahgunaan kredensial pada jaringan publik saat data berpindah antar-lapisan.</li></ol>' },
      { h: 'B1. Access Control (authentication, authorization, least privilege)', b: 'Terapkan prinsip ==Least Privilege== (izin minimum yang dibutuhkan untuk bekerja) dan prinsip "keep people away from data". Gunakan {{AWS IAM}} (roles, policies, MFA) untuk mengontrol layanan atau pengguna mana yang boleh menjalankan skrip ingestion (misal role AWS Glue) tanpa memberi akses baca langsung ke pengguna. Di lapisan storage dan consumption, gunakan {{AWS Lake Formation}} dan kebijakan kolom/baris di Redshift untuk kontrol akses granular sampai level ==tabel, kolom, baris, dan sel== (serta masking kolom PII bagi divisi yang tidak berwenang).' },
      { h: 'B2. Encryption (data at rest & data in transit)', b: '**Data in transit (ingestion & processing):** enkripsi jalur komunikasi dengan ==TLS/SSL (HTTPS)==, aktifkan inter-node encryption pada kluster pemrosesan (EMR/SageMaker), dan isolasi lalu lintas di jaringan privat dengan Amazon VPC private subnets / VPC endpoints.<br>**Data at rest (storage & stream):** enkripsi data di Amazon S3 (SSE-S3/SSE-KMS), aliran Kinesis Data Streams, dan kluster Redshift memakai kunci yang dikelola terpusat di {{AWS KMS}} (dilindungi modul HSM).' },
      { h: 'B3. Logging (jejak audit & kepatuhan)', b: 'Aktifkan {{AWS CloudTrail}}, S3 server access logs, dan log audit Redshift untuk mencatat setiap panggilan API dan aktivitas pengguna (siapa mengakses data pelanggan, kapan, dari mana, dan kunci KMS mana yang dipakai). Log audit disimpan di penyimpanan yang fault-tolerant dan dikunci aksesnya agar menjadi ==bukti kepatuhan regulasi== yang sah.' },
      { h: 'B4. Monitoring (pemantauan berkelanjutan & deteksi anomali)', b: 'Gunakan {{Amazon CloudWatch}} untuk memantau metrik operasional dan mengirim ==alarm real-time== bila ada lonjakan akses tidak wajar, ditambah {{Amazon Macie}} (memakai ML untuk otomatis menemukan data PII di S3 dan memberi peringatan kebocoran) serta {{Amazon GuardDuty}} untuk mendeteksi aktivitas berbahaya pada akun dan beban kerja.' }
    ]
  },

  {
    id: 'alsut8', region: 'ALSUT', no: 8, kisi: [2, 3], modul: 'Modul 3, 6, 8',
    title: 'ETL vs ELT dan pentingnya data cleaning & validation',
    question: 'Jelaskan perbedaan antara proses Extract, Transform, Load (ETL) dan Extract, Load, Transform (ELT). Bagaimana organisasi menentukan pendekatan yang sesuai berdasarkan karakteristik dan kebutuhan analisis data? Jelaskan pula mengapa proses data cleaning dan data validation penting untuk memastikan kualitas data!',
    rinci: [
      { q: 'Bagaimana urutan ETL?', a: '==Extract → Transform → Load==: data diolah dulu di server pemrosesan terpisah sampai rapi, baru dimuat ke tujuan (biasanya ==data warehouse==). Analogi: sayur dicuci dan dipotong dulu, baru masuk kulkas.' },
      { q: 'Bagaimana urutan ELT?', a: '==Extract → Load → Transform==: data mentah langsung dimuat ke tujuan (biasanya ==data lake==), diolah belakangan saat dibutuhkan. Analogi: sayur langsung masuk kulkas, dicuci saat mau dimasak.' },
      { q: 'Kapan ETL dipilih?', a: 'Data ==terstruktur==, kebutuhan laporan rutin yang sudah pasti, analis butuh query cepat dari data siap pakai, dan ==data sensitif (PII) harus disaring== sebelum disimpan.' },
      { q: 'Kapan ELT dipilih?', a: 'Data ==tidak terstruktur/beragam==, volume besar, ingin data masuk cepat, kebutuhan analisis belum pasti (eksplorasi/ML), dan ==data mentah ingin tetap tersimpan==.' },
      { q: 'Apa kekurangan masing-masing?', a: 'ETL: ==proses masuknya lebih lama==. ELT: ==butuh waktu mengolah== saat data mau dipakai.' },
      { q: 'Data wrangling lebih dekat ke ETL atau ELT?', a: '==ELT==.' },
      { q: 'Apa beda data cleaning dan data validating?', a: '==Cleaning membuat data bisa dipakai== (hapus duplikat, perbaiki nilai salah). ==Validating memastikan data sudah benar== (cek jumlah baris, format, duplikat, PII, outlier).' },
      { q: 'Kenapa cleaning dan validation penting?', a: 'Karena ==Value rests on Veracity==, ==data yang buruk lebih berbahaya daripada tidak punya data==, dan garbage in garbage out. Contoh jebakan: NULL belum tentu nol.' }
    ],
    keys: [
      { label: 'ETL: transform sebelum load', kw: ['etl', 'olah dulu', 'transform terlebih dahulu', 'ditransformasi'] },
      { label: 'ELT: load dulu, transform belakangan', kw: ['elt', 'simpan dulu', 'belakangan', 'dimuat mentah'] },
      { label: 'Data warehouse (ETL)', kw: ['warehouse', 'redshift'] },
      { label: 'Data lake (ELT)', kw: ['data lake', 's3'] },
      { label: 'Terstruktur vs tidak terstruktur', kw: ['terstruktur', 'structured'] },
      { label: 'PII / data sensitif', kw: ['pii', 'sensitif'] },
      { label: 'Data cleaning', kw: ['cleaning', 'membersihkan', 'pembersihan'] },
      { label: 'Data validation', kw: ['validat', 'validasi'] },
      { label: 'Duplikat / nilai salah / missing', kw: ['duplikat', 'salah', 'kosong', 'missing', 'null'] },
      { label: 'Veracity / kualitas data', kw: ['veracity', 'kualitas', 'garbage', 'dipercaya'] }
    ],
    tip: '**A.** Definisi ETL vs ELT (urutan, tujuan, kelebihan, kekurangan). **B.** Cara memilih: lihat struktur data, tujuan penyimpanan, kepastian kebutuhan, kecepatan, PII. **C.** Cleaning vs validating + kenapa penting (veracity → value).',
    a: [
      { h: 'A. ETL (Extract, Transform, Load)', b: 'Data diekstrak dari sumber, ==ditransformasikan terlebih dahulu di memori/server pemrosesan terpisah== hingga berstruktur rapi, baru kemudian dimuat (load) ke penyimpanan tujuan seperti data warehouse.<br>**Kapan dipilih:** sangat cocok untuk ==data terstruktur== dengan kebutuhan laporan rutin yang sudah pasti, ketika analis butuh query cepat dari data siap pakai, dan ketika ==data sensitif (PII) wajib difilter== sebelum disimpan.' },
      { h: 'A. ELT (Extract, Load, Transform)', filled: true, b: 'Data diekstrak lalu ==langsung dimuat mentah== ke penyimpanan tujuan (biasanya ==data lake== di {{Amazon S3}}), dan transformasi dilakukan belakangan saat data akan dipakai, memakai mesin komputasi di tujuan ({{AWS Glue}}, {{Amazon EMR}}, {{Amazon Athena}}, Redshift).<br>**Kapan dipilih:** data ==tidak terstruktur atau beragam==, volume dan kecepatan datang tinggi, kebutuhan analisis belum pasti (eksplorasi, ML), dan data mentah ingin tetap tersimpan. Data wrangling lebih dekat dengan alur ELT.' },
      { h: 'B. Cara organisasi menentukan pendekatan', filled: true, b: '<table class="tbl"><tr><th>Pertimbangan</th><th>Pilih ETL</th><th>Pilih ELT</th></tr><tr><td>Urutan</td><td>Olah dulu, baru simpan</td><td>Simpan dulu, olah belakangan</td></tr><tr><td>Jenis data & tujuan</td><td>Data terstruktur, tujuannya data warehouse</td><td>Data tidak terstruktur, tujuannya data lake</td></tr><tr><td>Kelebihan</td><td>Data langsung siap dan query cepat; PII bisa disaring sebelum disimpan</td><td>Data masuk lebih cepat dan data mentahnya tetap tersimpan</td></tr><tr><td>Kekurangan</td><td>Proses masuknya lebih lama</td><td>Butuh waktu mengolah saat data mau dipakai</td></tr></table>' },
      { h: 'C. Mengapa data cleaning dan data validation penting', filled: true, b: '<ul><li>**Data cleaning** (langkah ke-3 dari 6 langkah wrangling) ==membuat data bisa dipakai==: menghapus duplikat, memperbaiki nilai yang salah, menangani nilai kosong, dan menyeragamkan format antar sumber.</li><li>**Data validating** (langkah ke-5) ==memastikan data sudah benar==: cek jumlah baris, format/tipe data, duplikat, PII, dan outlier sebelum data dipublikasikan.</li><li>**Alasan pentingnya:** nilai bisnis bergantung pada kebenaran data (==Value rests on Veracity==). ==Data yang buruk lebih berbahaya daripada tidak punya data sama sekali== karena keputusan diambil dengan yakin tetapi salah (garbage in, garbage out). Contoh jebakan: ==NULL belum tentu nol==.</li><li>Urutan 6 langkah wrangling: Discovery → Structuring → Cleaning → Enriching → Validating → Publishing.</li></ul>' }
    ]
  },

  {
    id: 'alsut9', region: 'ALSUT', no: 9, kisi: [3], modul: 'Modul 3, 7',
    title: 'Batch vs streaming untuk perusahaan logistik',
    question: 'Sebuah perusahaan logistik memiliki data transaksi pengiriman yang dikumpulkan setiap akhir hari dan data lokasi kendaraan yang dikirim secara terus-menerus melalui sensor GPS. Bandingkan penggunaan batch ingestion dan streaming ingestion untuk kedua sumber data tersebut. Tentukan pendekatan dan layanan AWS yang sesuai, serta jelaskan alasan pemilihannya berdasarkan volume, velocity, dan kebutuhan waktu pemrosesan data!',
    rinci: [
      { q: 'Data transaksi pengiriman akhir hari memakai pendekatan apa?', a: '==Batch ingestion==.' },
      { q: 'Data lokasi GPS kendaraan memakai pendekatan apa?', a: '==Streaming ingestion==.' },
      { q: 'Bagaimana volume dan velocity data transaksi?', a: 'Volume besar per kumpulan (bulk), ==velocity rendah/periodik==: dikumpulkan sepanjang hari dan dikirim sekali setiap akhir hari.' },
      { q: 'Bagaimana volume dan velocity data GPS?', a: 'Volume per pesan kecil tetapi akumulasinya masif, ==velocity sangat tinggi==: ribuan armada mengirim koordinat terus-menerus setiap detik/menit.' },
      { q: 'Bagaimana kebutuhan waktu pemrosesan keduanya?', a: 'Transaksi: ==toleran latensi (jam/harian)==, cukup diolah malam hari. GPS: ==latensi sangat rendah (milidetik/detik)== karena nilainya tertinggi saat data masih segar.' },
      { q: 'Layanan AWS untuk batch?', a: '{{AWS DMS}} (jika dari database relasional), {{AWS DataSync}} (jika berupa file), dan {{AWS Glue}} (serverless Spark batch ETL job) ke {{Amazon S3}} / Redshift.' },
      { q: 'Layanan AWS untuk streaming?', a: '{{AWS IoT Core}} (telemetri ==MQTT== dari sensor GPS) → {{Kinesis Data Streams}} / {{Kinesis Data Firehose}} dan {{Kinesis Data Analytics}} (Apache Flink).' },
      { q: 'Kenapa tidak semuanya dibuat streaming atau semuanya batch?', a: 'Streaming untuk transaksi akhir hari ==memboroskan biaya== tanpa nilai tambah. Batch untuk GPS ==menghilangkan kemampuan memantau armada real-time==.' }
    ],
    keys: [
      { label: 'Batch ingestion untuk transaksi', kw: ['batch'] },
      { label: 'Streaming ingestion untuk GPS', kw: ['stream'] },
      { label: 'Volume', kw: ['volume'] },
      { label: 'Velocity', kw: ['velocity', 'kecepatan'] },
      { label: 'Latensi / real-time', kw: ['latensi', 'real time', 'realtime'] },
      { label: 'AWS Glue / DMS / DataSync', kw: ['glue', 'dms', 'datasync'] },
      { label: 'Kinesis Data Streams / Firehose', kw: ['kinesis', 'firehose'] },
      { label: 'AWS IoT Core / MQTT', kw: ['iot core', 'mqtt', 'iot'] },
      { label: 'Producer / consumer', kw: ['producer', 'consumer'] },
      { label: 'Alasan biaya', kw: ['biaya', 'boros', 'hemat', 'murah'] }
    ],
    tip: 'Paling aman jawab dengan **tabel 2 kolom** (Batch untuk transaksi vs Streaming untuk GPS) dengan baris: karakteristik volume & velocity, kebutuhan waktu, cara kerja, layanan AWS. Tutup dengan alasan pemilihan.',
    a: [
      { h: 'Tabel perbandingan', b: '<table class="tbl"><tr><th>Aspek</th><th>Transaksi pengiriman akhir hari → ==Batch Ingestion==</th><th>Lokasi sensor GPS → ==Streaming Ingestion==</th></tr><tr><td>Volume & velocity</td><td>**Volume besar per kumpulan (bulk), velocity rendah/periodik:** data dikumpulkan sepanjang hari dan dikirim sekali setiap akhir hari.</td><td>**Volume per pesan kecil tapi akumulasinya masif, velocity sangat tinggi:** sensor GPS ribuan armada mengirim koordinat terus-menerus setiap detik/menit.</td></tr><tr><td>Kebutuhan waktu pemrosesan</td><td>**Toleran latensi (jam/harian):** tidak perlu dianalisis detik itu juga; cukup diolah malam hari (overnight) agar laporan siap keesokan paginya.</td><td>**Latensi sangat rendah (milidetik/detik, real-time):** nilai data tertinggi saat masih segar (melacak posisi truk, deteksi keterlambatan, rute macet saat itu juga).</td></tr><tr><td>Cara kerja di pipeline</td><td>Menjalankan ==scheduled batch job== yang mengekstrak kumpulan rekaman, melakukan transformasi kompleks, dan memuatnya ke storage.</td><td>==Producers== menaruh rekaman berurutan ke dalam stream (buffer sementara), lalu ==consumers== memprosesnya pada sliding time window.</td></tr><tr><td>Layanan AWS</td><td>{{AWS DMS}} (jika dari DB relasional), {{AWS DataSync}} (jika berupa file), dan {{AWS Glue}} (serverless Spark batch ETL job ke Amazon S3 / Redshift).</td><td>{{AWS IoT Core}} (menangkap telemetri MQTT dari sensor GPS truk) → {{Kinesis Data Streams}} / {{Kinesis Data Firehose}} & {{Kinesis Data Analytics}} (Apache Flink).</td></tr></table>' },
      { h: 'Alasan pemilihan pendekatan', b: 'Memaksakan streaming untuk transaksi akhir hari hanya akan ==memboroskan biaya infrastruktur tanpa nilai tambah bisnis==, sedangkan memaksakan batch untuk GPS kendaraan akan ==menghilangkan kemampuan memantau posisi armada== dan merespons kendala pengiriman secara real-time.' }
    ]
  },

  {
    id: 'alsut10', region: 'ALSUT', no: 10, kisi: [3], modul: 'Modul 4, 5, 6, 7, 8',
    title: 'Merancang pipeline end-to-end untuk perusahaan ritel',
    question: 'Sebuah perusahaan ritel memiliki beberapa cabang yang menghasilkan data transaksi penjualan, persediaan produk, dan aktivitas pelanggan. Data berasal dari database operasional, aplikasi berbasis cloud, serta file laporan yang dikumpulkan secara berkala. Perusahaan berencana membangun platform Cloud Data Analytics menggunakan AWS untuk menghasilkan laporan penjualan harian, memantau persediaan, dan mendukung pengambilan keputusan manajemen. Analisis bagaimana perusahaan dapat merancang pipeline data yang sesuai dengan kebutuhan tersebut. Jelaskan tahapan pengumpulan, penyimpanan, pengolahan, dan analisis data, serta berikan contoh layanan AWS yang dapat digunakan pada setiap tahapan!',
    rinci: [
      { q: 'Data dari database operasional (penjualan & persediaan) masuk pakai apa?', a: '{{AWS DMS}} dengan fitur ==Change Data Capture (CDC)== untuk mereplikasi tabel transaksi dan stok dari tiap cabang secara berkelanjutan.' },
      { q: 'Data dari aplikasi berbasis cloud masuk pakai apa?', a: '{{Amazon AppFlow}} jika aplikasi ==SaaS== (CRM/e-commerce), atau {{Kinesis Data Streams}} & {{Kinesis Data Firehose}} jika berupa aliran clickstream real-time.' },
      { q: 'File laporan berkala masuk pakai apa?', a: '{{AWS DataSync}} untuk memindahkan file dari sistem file cabang ke {{Amazon S3}} secara terjadwal (batch).' },
      { q: 'Tahap penyimpanan memakai apa?', a: '==Data lake Amazon S3== dengan zona landing → raw → trusted → curated, katalog {{Glue Data Catalog}}, tata kelola {{AWS Lake Formation}}, dan {{Amazon Redshift}} sebagai data warehouse untuk laporan.' },
      { q: 'Tahap pengolahan memakai apa?', a: '{{AWS Glue}} ETL job (cleaning, gabung data antarcabang, agregasi penjualan harian), {{Amazon EMR}} untuk big data, dan {{Kinesis Data Analytics}} untuk memantau stok real-time.' },
      { q: 'Tahap analisis memakai apa?', a: '{{Amazon Athena}} (query ad-hoc ke data lake), {{Amazon Redshift}} (query laporan), {{Amazon QuickSight}} (dashboard penjualan harian & persediaan), {{Amazon SageMaker}} (prediksi permintaan).' },
      { q: 'Apa yang harus ada di semua tahap?', a: 'Keamanan dan pemantauan: {{AWS IAM}} (least privilege), {{AWS KMS}} (enkripsi), {{AWS CloudTrail}} (audit), {{Amazon CloudWatch}} (monitoring).' },
      { q: 'Tujuan menyatukan semua sumber cabang ke satu tempat?', a: 'Membentuk ==single source of truth== supaya semua divisi memakai angka yang sama.' }
    ],
    keys: [
      { label: 'Ingestion / pengumpulan', kw: ['ingestion', 'pengumpulan'] },
      { label: 'AWS DMS (CDC)', kw: ['dms', 'cdc', 'change data capture'] },
      { label: 'Amazon AppFlow', kw: ['appflow'] },
      { label: 'AWS DataSync', kw: ['datasync'] },
      { label: 'Amazon S3 data lake', kw: ['s3', 'data lake'] },
      { label: 'Amazon Redshift', kw: ['redshift'] },
      { label: 'AWS Glue', kw: ['glue'] },
      { label: 'Amazon QuickSight', kw: ['quicksight', 'dashboard'] },
      { label: 'Athena / SageMaker', kw: ['athena', 'sagemaker'] },
      { label: 'Kinesis untuk data real-time', kw: ['kinesis', 'firehose'] },
      { label: 'Keamanan (IAM/KMS/CloudTrail)', kw: ['iam', 'kms', 'cloudtrail', 'cloudwatch'] }
    ],
    tip: 'Ikuti 4 tahap yang diminta soal: **Pengumpulan → Penyimpanan → Pengolahan → Analisis**. Di tahap pengumpulan, cocokkan 3 sumber dengan 3 layanan (DB → DMS, aplikasi cloud → AppFlow/Kinesis, file → DataSync). Tiap tahap sebut minimal 1 layanan AWS.',
    a: [
      { h: 'Gambaran umum', b: 'Untuk menyatukan ketiga sumber data cabang ritel yang beragam menjadi satu sumber kebenaran (==single source of truth==), perusahaan dapat merancang arsitektur hibrida (ELT/ETL modern data pipeline) melalui ==4 tahapan utama==.' },
      { h: '1. Tahap pengumpulan data (Ingestion layer: cocokkan alat purpose-built dengan sumber)', b: '<ul><li>**Dari database operasional (transaksi penjualan & persediaan):** {{AWS Database Migration Service (AWS DMS)}} dengan fitur ==Change Data Capture (CDC)== untuk mereplikasi tabel transaksi penjualan dan stok barang dari tiap cabang secara berkelanjutan.</li><li>**Dari aplikasi berbasis cloud (SaaS / aktivitas pelanggan):** {{Amazon AppFlow}} (jika berupa aplikasi SaaS seperti CRM/e-commerce) atau {{Amazon Kinesis Data Streams & Amazon Data Firehose}} (jika berupa aliran clickstream aktivitas pelanggan secara real-time).</li><li>**Dari file laporan berkala cabang:** {{AWS DataSync}} untuk mentransfer berkas laporan dari sistem file cabang ke Amazon S3 secara terjadwal (batch).</li></ul>' },
      { h: '2. Tahap penyimpanan (Storage layer)', filled: true, b: 'Semua data mendarat di ==data lake {{Amazon S3}}== dengan zona ==landing → raw → trusted → curated==. {{AWS Glue}} crawler mencatat skema ke {{Glue Data Catalog}}, dan {{AWS Lake Formation}} mengatur izin per divisi. Data penjualan dan stok yang sudah rapi dimuat ke ==data warehouse {{Amazon Redshift}}== untuk laporan manajemen. Data lama dipindah ke storage class lebih murah (misal Glacier) dengan lifecycle policy.' },
      { h: '3. Tahap pengolahan (Processing layer)', filled: true, b: '{{AWS Glue}} ETL job (Spark serverless) menjalankan data wrangling: membersihkan duplikat dan format yang berbeda antarcabang, menggabungkan (enriching) data transaksi dengan master produk dan cabang, menghitung agregasi penjualan harian, lalu memvalidasi hasilnya sebelum disimpan ke zona curated / Redshift. Job dijadwalkan dengan Glue workflow (batch harian). Untuk volume sangat besar bisa memakai {{Amazon EMR}}; untuk memantau stok secara real-time dari stream bisa memakai {{Kinesis Data Analytics}}.' },
      { h: '4. Tahap analisis & visualisasi (Analysis layer)', filled: true, b: '<ul><li>{{Amazon QuickSight}}: dashboard laporan penjualan harian dan pemantauan persediaan per cabang.</li><li>{{Amazon Redshift}} / {{Amazon Athena}}: query SQL untuk laporan dan analisis ad-hoc langsung ke data lake.</li><li>{{Amazon SageMaker}}: model ML untuk memprediksi permintaan atau stok yang akan habis sehingga mendukung keputusan manajemen.</li></ul>' },
      { h: 'Lintas tahap: keamanan dan pemantauan', filled: true, b: '{{AWS IAM}} dengan least privilege, enkripsi at rest dengan {{AWS KMS}} dan in transit dengan TLS, jejak audit {{AWS CloudTrail}}, serta pemantauan pipeline dengan {{Amazon CloudWatch}}.' }
    ]
  }
);
