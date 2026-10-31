/*
 * Pemilih mata kuliah. Menentukan course aktif (urutan prioritas: ?c= di URL, pilihan terakhir di
 * localStorage, lalu default), kemudian memuat file data course itu + app.js secara berurutan.
 * Tiap course punya data sendiri; kamus umum (shared) dipakai bersama.
 */
(function () {
  'use strict';
  var COURSES = {
    cml: {
      name: 'Cloud Machine Learning', short: 'Machine Learning', icon: '🤖',
      files: [
        'cml/data-core.js', 'cml/data-kmg-a.js', 'cml/data-kmg-b.js', 'cml/data-als-a.js', 'cml/data-als-b.js',
        'cml/data-drill.js', 'cml/data-materi.js',
        'shared/data-glosarium-a.js', 'shared/data-glosarium-b.js', 'shared/data-glosarium-c.js',
        'cml/data-glosarium-ml-a.js', 'cml/data-glosarium-ml-b.js'
      ]
    },
    cda: {
      name: 'Cloud Data Analytics', short: 'Data Analytics', icon: '☁️',
      files: [
        'cda/data-core.js', 'cda/data-alsut-a.js', 'cda/data-alsut-b.js', 'cda/data-kmg.js',
        'cda/data-drill.js', 'cda/data-materi.js',
        'shared/data-glosarium-a.js', 'shared/data-glosarium-b.js', 'shared/data-glosarium-c.js'
      ]
    }
  };
  var DEFAULT = 'cml';
  var id = null;
  try { id = new URLSearchParams(location.search).get('c'); } catch (e) { /* browser lama */ }
  if (!COURSES[id]) { try { id = localStorage.getItem('utsCourse'); } catch (e) { id = null; } }
  if (!COURSES[id]) id = DEFAULT;
  try { localStorage.setItem('utsCourse', id); } catch (e) { /* mode privat */ }

  window.UTS_COURSES = COURSES;
  window.UTS_COURSE = id;
  document.documentElement.setAttribute('data-course', id);

  // async=false: file dijalankan berurutan sesuai daftar, app.js paling akhir.
  COURSES[id].files.concat(['app.js']).forEach(function (f) {
    var s = document.createElement('script');
    s.src = 'assets/js/' + f;
    s.async = false;
    s.onerror = function () { console.error('Gagal memuat ' + f); };
    document.body.appendChild(s);
  });
})();
