/**
 * Semua kalimat di halaman ini, dua bahasa, dalam satu berkas.
 *
 * Aplikasi melakukan hal yang sama, dengan alasan yang sama: kalau teks
 * tersebar di komponen, satu bahasa diam-diam tertinggal dan baru ketahuan
 * saat pengunjung membacanya. Berdampingan, terjemahan yang hilang langsung
 * terlihat saat menulis.
 *
 * Urutan butir dalam array (langkah alur, layar tur, fitur, sorotan) dipakai
 * komponennya untuk memasangkan ikon dan mockup. Menambah butir berarti
 * menambah pasangannya di komponen itu juga.
 */

export const LANGS = ['id', 'en']

export const T = {
  id: {
    htmlLang: 'id',

    nav: {
      workflow: 'Cara kerja', tour: 'Produk', features: 'Fitur', plans: 'Paket', faq: 'FAQ',
      contact: 'Hubungi', signIn: 'Masuk', menu: 'Buka menu', close: 'Tutup menu', main: 'Navigasi utama',
    },

    hero: {
      eyebrow: 'Platform pelatihan bersertifikat',
      title: ['Latih.', 'Uji.', 'Sertifikasi.'],
      lead:
        'Gladhy membantu lembaga menyelenggarakan pelatihan bersertifikat dalam satu sistem: materi dan simulasi, ' +
        'ujian, kehadiran yang terverifikasi, sampai sertifikat yang keasliannya bisa diperiksa siapa saja.',
      ctaPrimary: 'Hubungi kami',
      ctaSecondary: 'Lihat cara kerjanya',
      chipQr: 'Kehadiran tercatat',
      chipQrSub: 'Pindai QR · 08.02',
      chipCert: 'Sertifikat terbit',
      chipCertSub: 'Dapat diverifikasi publik',
      chipGain: 'Learning gain',
      scroll: 'Gulir',
    },

    problem: {
      eyebrow: 'Masalahnya',
      title: 'Pelatihan selesai. Lalu buktinya di mana?',
      body:
        'Banyak lembaga sudah menjalankan pelatihan dengan baik, tetapi jejaknya tersebar: daftar hadir di kertas, ' +
        'nilai di spreadsheet, sertifikat di folder komputer seseorang. Saat klien atau auditor bertanya, ' +
        'menyusunnya kembali makan waktu berhari-hari.',
      scraps: ['Daftar hadir kertas', 'Nilai di spreadsheet', 'Sertifikat di folder'],
      core: 'Satu catatan yang utuh',
      coreSub: 'Hadir · Lulus · Tersertifikasi',
      points: [
        { t: 'Satu tempat, bukan lima', d: 'Materi, ujian, jadwal sesi, kehadiran, dan sertifikat berada dalam satu sistem yang saling terhubung.' },
        { t: 'Kehadiran yang tidak bisa dititipkan', d: 'Peserta memindai QR sesi dari ponselnya sendiri. Tercatat dengan waktu, bukan tanda tangan yang bisa diwakilkan.' },
        { t: 'Sertifikat yang bisa dibuktikan', d: 'Setiap sertifikat punya nomor dan halaman verifikasi publik. Perekrut memeriksanya sendiri, tanpa menghubungi Anda.' },
      ],
    },

    workflow: {
      eyebrow: 'Cara kerja',
      title: 'Tiga langkah, satu alur yang tersambung',
      lead: 'Setiap langkah mengisi langkah berikutnya, jadi tidak ada data yang disalin tangan.',
      steps: [
        {
          k: 'Latih',
          t: 'Susun materi dan jalankan kelasnya',
          d: 'Kursus berjenjang berisi modul, pelajaran, video, dokumen, dan simulasi. Sesi tatap muka atau daring dijadwalkan di tempat yang sama.',
          bullets: ['Modul & pelajaran berurutan', 'Simulasi di tiap pelajaran', 'Jadwal sesi + konfirmasi hadir'],
        },
        {
          k: 'Uji',
          t: 'Ukur sebelum dan sesudah',
          d: 'Pretest dan posttest dikerjakan di platform. Learning gain tiap peserta terhitung otomatis, dan kehadiran terekam lewat pemindaian QR.',
          bullets: ['Pretest & posttest berwaktu', 'Learning gain otomatis', 'Absensi QR per sesi'],
        },
        {
          k: 'Sertifikasi',
          t: 'Terbitkan bukti yang bisa diperiksa',
          d: 'Peserta yang memenuhi syarat menerima sertifikat bernomor lewat email. Siapa pun dapat memeriksa keasliannya di halaman verifikasi publik.',
          bullets: ['Terbit massal sekali klik', 'Dikirim ke email peserta', 'Halaman verifikasi publik'],
        },
      ],
    },

    tour: {
      eyebrow: 'Tur produk',
      title: 'Satu platform, tiga sudut pandang',
      lead: 'Tiap peran melihat menu yang ia butuhkan, tidak lebih. Pilih peran untuk melihat layarnya.',
      note: 'Ilustrasi tampilan. Nama dan angka di dalamnya hanya contoh.',
      roles: {
        admin: {
          label: 'Admin',
          blurb: 'Mengatur program, peserta, dan sertifikat seluruh lembaga.',
          screens: [
            { t: 'Dasbor lembaga', d: 'Peserta aktif, kehadiran, sertifikat terbit, dan sesi mendatang dalam satu layar.' },
            { t: 'Sertifikat massal', d: 'Pilih peserta yang lulus, terbitkan sekaligus, dan kirim lewat email.' },
            { t: 'Laporan', d: 'Progres, kehadiran, dan hasil ujian per program, siap diekspor.' },
          ],
        },
        trainer: {
          label: 'Trainer',
          blurb: 'Mengajar, mencatat kehadiran, dan menyusun materi serta soal.',
          screens: [
            { t: 'Absensi QR', d: 'Tampilkan kode QR sesi; daftar hadir terisi sendiri saat peserta memindai.' },
            { t: 'Kelola kursus', d: 'Susun modul dan pelajaran, lalu tambahkan video, dokumen, dan simulasi.' },
            { t: 'Editor tes', d: 'Tulis soal pretest dan posttest, atur waktu dan nilai lulusnya.' },
          ],
        },
        participant: {
          label: 'Peserta',
          blurb: 'Belajar, mengikuti ujian, dan mengambil sertifikat dari ponsel.',
          screens: [
            { t: 'Kursus saya', d: 'Lanjutkan pelajaran dari titik terakhir dan lihat progres tiap modul.' },
            { t: 'Simulasi', d: 'Praktikkan prosedur dalam skenario interaktif sebelum turun ke lapangan.' },
            { t: 'Pretest & posttest', d: 'Kerjakan ujian berwaktu dan lihat peningkatan nilai sendiri.' },
            { t: 'Sertifikat', d: 'Unduh sertifikat dan bagikan tautan verifikasinya.' },
          ],
        },
      },
    },

    features: {
      eyebrow: 'Yang Anda dapatkan',
      title: 'Cukup untuk menjalankan lembaga pelatihan',
      lead: 'Fitur inti tersedia di semua paket. Kemampuan lanjutan menyusul sesuai kebutuhan.',
      items: [
        { t: 'Kursus & modul', d: 'Susun materi berjenjang: modul, pelajaran, video, dokumen, dan simulasi di tiap langkah.' },
        { t: 'Pretest & posttest', d: 'Ukur kemampuan sebelum dan sesudah. Learning gain terhitung otomatis per peserta.' },
        { t: 'Sesi & absensi QR', d: 'Jadwalkan kelas atau drill, peserta konfirmasi hadir, kehadiran terekam lewat pemindaian QR.' },
        { t: 'Sertifikat terverifikasi', d: 'Terbitkan massal, kirim lewat email, dan biarkan siapa pun memverifikasinya.' },
        { t: 'AI Assistant', d: 'Peserta bertanya, dijawab dari dokumen kursus Anda sendiri — bukan dari internet.' },
        { t: 'Doc Library', d: 'SOP, panduan, dan rujukan untuk peserta, selalu versi terbaru.' },
        { t: 'Live Translate', d: 'Subtitel langsung saat sesi berjalan, untuk kelas lintas bahasa.' },
        { t: 'Laporan', d: 'Progres peserta, kehadiran, dan hasil ujian — siap diekspor saat dibutuhkan.' },
      ],
      chat: { q: 'Kapan APAR harus diperiksa ulang?', a: 'Menurut SOP-07 di pustaka Anda: setiap 6 bulan.' },
      before: 'Sebelum', after: 'Sesudah',
    },

    spotlight: {
      eyebrow: 'Terbaru di Gladhy',
      title: 'Lebih dari sekadar kelas daring',
      lead: 'Empat kemampuan yang membedakan pelatihan yang sekadar diikuti dari yang benar-benar dikuasai.',
      hint: 'Gulir untuk melihat semuanya',
      items: [
        {
          tag: 'Simulasi',
          t: 'Praktik dulu, baru ke lapangan',
          d: 'Tiap pelajaran dapat ditutup dengan simulasi interaktif. Templat bawaan tersedia di semua paket; simulasi 3D buatan sendiri bisa diunggah di paket lanjutan.',
          points: ['Skenario per pelajaran', 'Templat siap pakai', 'Unggah build 3D sendiri'],
        },
        {
          tag: 'Zoom',
          t: 'Kelas daring tanpa salin-tempel tautan',
          d: 'Hubungkan akun Zoom lembaga. Meeting dibuat otomatis saat sesi dijadwalkan, dan kehadiran pesertanya masuk ke catatan sesi.',
          points: ['Meeting dibuat otomatis', 'Kehadiran tercatat', 'Akun Zoom per lembaga'],
        },
        {
          tag: 'Verifikasi',
          t: 'Keaslian yang bisa dicek siapa saja',
          d: 'Setiap sertifikat membawa nomor unik. Perekrut atau auditor cukup memasukkannya di halaman verifikasi publik.',
          points: ['Nomor unik per sertifikat', 'Halaman verifikasi publik', 'Tanpa perlu akun'],
        },
        {
          tag: 'Branding',
          t: 'Alamat dan wajah lembaga Anda sendiri',
          d: 'Setiap lembaga mendapat subdomain, logo, dan warnanya sendiri. Peserta masuk ke platform yang terasa milik lembaga Anda.',
          points: ['Subdomain sendiri', 'Logo & warna lembaga', 'Halaman masuk yang bisa diatur'],
        },
      ],
      verify: { label: 'Nomor sertifikat', check: 'Periksa', ok: 'Sertifikat asli', okSub: 'Terbit oleh lembaga penyelenggara', sample: 'Contoh' },
    },

    trust: {
      title: 'Satu sistem, dari kelas pertama sampai sertifikat.',
      stats: [
        { v: 6, suffix: '', l: 'modul inti di setiap paket' },
        { v: 3, suffix: '', l: 'peran: admin, trainer, peserta' },
        { v: 2, suffix: '', l: 'bahasa: Indonesia & Inggris' },
        { v: 24, suffix: ' jam', l: 'verifikasi sertifikat tersedia' },
      ],
      clients: 'Dipercaya oleh',
    },

    plans: {
      eyebrow: 'Paket',
      title: 'Pilih sesuai ukuran lembaga Anda',
      lead: 'Semua paket memuat fitur inti. Yang membedakan adalah kapasitas dan kemampuan lanjutan.',
      popular: 'Paling banyak dipilih',
      cta: 'Minta penawaran',
      note:
        'Harga disesuaikan dengan kebutuhan dan jumlah peserta. Pendaftaran lembaga dilakukan langsung oleh tim kami.',
      rows: {
        participants: 'Peserta',
        programs: 'Program',
        core: 'Kursus, ujian, sesi, absensi QR, sertifikat, Doc Library',
        branding: 'Subdomain, logo & warna lembaga',
        ai_assistant: 'AI Assistant & Knowledge Base',
        custom_game_build: 'Simulasi 3D kustom',
        login_advanced: 'Halaman masuk lanjutan',
        live_translate: 'Live Translate',
        compliance_report: 'Laporan kepatuhan',
        white_label: 'White-label penuh',
      },
      unlimited: 'Tanpa batas',
    },

    faq: {
      eyebrow: 'Pertanyaan umum',
      title: 'Yang biasanya ditanyakan lebih dulu',
      items: [
        { q: 'Bagaimana cara mendaftarkan lembaga saya?', a: 'Pendaftaran dilakukan langsung oleh tim kami. Kirim pesan lewat formulir atau WhatsApp; kami menyiapkan subdomain, branding, dan paket Anda sehingga semuanya siap sejak hari pertama.' },
        { q: 'Apakah lembaga saya mendapat alamat dan tampilan sendiri?', a: 'Ya. Setiap lembaga mendapat subdomain sendiri di gladhy.co.id beserta nama, logo, dan warnanya. Paket lanjutan menambah pengaturan halaman masuk, sampai white-label penuh.' },
        { q: 'Bagaimana keaslian sertifikat diperiksa?', a: 'Setiap sertifikat memiliki nomor unik dan halaman verifikasi publik. Siapa pun dapat memeriksanya tanpa akun dan tanpa menghubungi lembaga Anda.' },
        { q: 'Apakah data lembaga saya terpisah dari lembaga lain?', a: 'Ya. Pengguna hanya dapat mengakses data lembaganya sendiri, dan pemisahan ini diuji secara otomatis setiap kali platform diperbarui.' },
        { q: 'Apakah peserta perlu memasang aplikasi?', a: 'Tidak. Gladhy berjalan di peramban ponsel maupun komputer. Peserta belajar, mengerjakan ujian, dan memindai QR kehadiran langsung dari ponselnya.' },
        { q: 'Bahasa apa saja yang didukung?', a: 'Antarmuka tersedia dalam bahasa Indonesia dan Inggris. Untuk sesi lintas bahasa, Live Translate menampilkan subtitel langsung di paket Enterprise.' },
        { q: 'Berapa harganya?', a: 'Harga mengikuti jumlah peserta dan kemampuan yang Anda butuhkan. Ceritakan kebutuhan lembaga Anda dan kami kirimkan penawarannya.' },
      ],
    },

    contact: {
      eyebrow: 'Mulai',
      title: 'Ceritakan kebutuhan lembaga Anda',
      lead:
        'Pendaftaran lembaga kami lakukan langsung, supaya subdomain, branding, dan paket Anda siap sejak hari pertama.',
      steps: ['Anda mengirim pesan', 'Kami membalas dengan penawaran', 'Lembaga Anda kami siapkan'],
      wa: 'Chat WhatsApp',
      waText: 'Halo, saya ingin tahu lebih lanjut tentang Gladhy.',
      name: 'Nama Anda',
      institution: 'Nama lembaga',
      email: 'Email',
      message: 'Ceritakan singkat kebutuhan Anda',
      send: 'Kirim pesan',
      sending: 'Mengirim…',
      okTitle: 'Pesan terkirim.',
      okBody: 'Terima kasih — kami akan membalas ke email Anda.',
      errGeneric: 'Pesan gagal terkirim. Silakan coba lagi atau hubungi kami lewat WhatsApp.',
    },

    signIn: {
      title: 'Masuk ke Gladhy',
      lead: 'Tiap lembaga punya alamatnya sendiri. Masukkan nama singkat lembaga Anda:',
      placeholder: 'namalembaga',
      go: 'Lanjut',
      hintPrefix: 'Anda akan dibuka ke',
      fallback: 'Tidak tahu alamat lembaga Anda? Masuk di sini',
      close: 'Tutup',
    },

    footer: {
      tagline: 'Platform pelatihan & sertifikasi untuk lembaga di industri apa pun.',
      product: 'Produk', company: 'Hubungi',
      rights: 'Seluruh hak dilindungi.',
      top: 'Kembali ke atas',
    },

    mock: {
      home: 'Dasbor', training: 'Pelatihan', qr: 'Absensi', courses: 'Kursus', myCourses: 'Kursus Saya',
      manage: 'Kelola Kursus', tests: 'Editor Tes', pretest: 'Pretest', certs: 'Sertifikat', reports: 'Laporan',
      greeting: 'Selamat pagi', overview: 'Ringkasan lembaga',
      active: 'Peserta aktif', attendance: 'Kehadiran', issued: 'Sertifikat terbit',
      gain: 'Learning gain per program', upcoming: 'Sesi mendatang',
      pre: 'Pretest', post: 'Posttest',
      today: 'Hari ini', tomorrow: 'Besok',
      programs: ['K3 Dasar', 'Operator Forklift', 'Tanggap Darurat'],
      module: 'Modul', lesson: 'Pelajaran', simulation: 'Simulasi', video: 'Video', doc: 'Dokumen', done: 'Selesai',
      lessons: ['Mengenali bahaya', 'Alat pelindung diri', 'Prosedur evakuasi', 'Memadamkan api kecil'],
      question: 'Pertanyaan', of: 'dari', timeLeft: 'Sisa waktu',
      qText: 'Langkah pertama saat menemukan api kecil di area kerja adalah…',
      options: ['Mencari sumber air terdekat', 'Membunyikan alarm dan memberi tahu sekitar', 'Melanjutkan pekerjaan', 'Membuka semua jendela'],
      next: 'Berikutnya',
      scanTitle: 'Pindai untuk hadir', session: 'Sesi 3 · Tanggap Darurat', present: 'Hadir', scanned: 'memindai',
      certTitle: 'Sertifikat Kompetensi', certGiven: 'Diberikan kepada', certFor: 'atas kelulusan program',
      certNo: 'No.', verified: 'Terverifikasi',
      objectives: 'Tujuan', objList: ['Kenali sumber api', 'Ambil APAR yang tepat', 'Padamkan dengan teknik PASS'],
      score: 'Skor', live: 'Langsung', autoAttendance: 'Kehadiran otomatis', minutes: 'mnt',
      participant: 'Peserta', progress: 'Progres', result: 'Hasil', export: 'Ekspor', passed: 'Lulus', ongoing: 'Berjalan',
      signInTo: 'Masuk ke', email: 'Email', password: 'Kata sandi', signIn: 'Masuk',
      tenants: ['Akademi Keselamatan', 'Balai Diklat Industri', 'Pusat Pelatihan Logistik'],
    },
  },

  en: {
    htmlLang: 'en',

    nav: {
      workflow: 'How it works', tour: 'Product', features: 'Features', plans: 'Plans', faq: 'FAQ',
      contact: 'Contact', signIn: 'Sign in', menu: 'Open menu', close: 'Close menu', main: 'Main navigation',
    },

    hero: {
      eyebrow: 'Certified training platform',
      title: ['Train.', 'Assess.', 'Certify.'],
      lead:
        'Gladhy helps institutions run certified training in one system: material and simulations, ' +
        'assessments, verified attendance, and certificates anyone can authenticate.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'See how it works',
      chipQr: 'Attendance recorded',
      chipQrSub: 'QR scan · 08:02',
      chipCert: 'Certificate issued',
      chipCertSub: 'Publicly verifiable',
      chipGain: 'Learning gain',
      scroll: 'Scroll',
    },

    problem: {
      eyebrow: 'The problem',
      title: 'The training went well. Where is the proof?',
      body:
        'Plenty of institutions run good training, but the record of it is scattered: attendance on paper, ' +
        'scores in a spreadsheet, certificates in somebody’s folder. When a client or an auditor asks, ' +
        'putting it back together takes days.',
      scraps: ['Paper attendance sheet', 'Scores in a spreadsheet', 'Certificates in a folder'],
      core: 'One complete record',
      coreSub: 'Attended · Passed · Certified',
      points: [
        { t: 'One place, not five', d: 'Material, assessments, session schedules, attendance and certificates live in one connected system.' },
        { t: 'Attendance that cannot be signed for a friend', d: 'Participants scan the session QR from their own phone. Recorded with a timestamp, not a signature someone else can add.' },
        { t: 'Certificates that hold up', d: 'Every certificate carries a number and a public verification page. Recruiters check it themselves, without contacting you.' },
      ],
    },

    workflow: {
      eyebrow: 'How it works',
      title: 'Three steps, one connected flow',
      lead: 'Each step feeds the next, so no data is ever copied by hand.',
      steps: [
        {
          k: 'Train',
          t: 'Build the material and run the class',
          d: 'Structured courses made of modules, lessons, video, documents and simulations. In-person or online sessions are scheduled in the same place.',
          bullets: ['Ordered modules & lessons', 'A simulation per lesson', 'Session schedule + RSVP'],
        },
        {
          k: 'Assess',
          t: 'Measure before and after',
          d: 'Pretests and posttests are taken on the platform. Learning gain is calculated per participant, and attendance is recorded by QR scan.',
          bullets: ['Timed pretest & posttest', 'Automatic learning gain', 'QR attendance per session'],
        },
        {
          k: 'Certify',
          t: 'Issue proof that can be checked',
          d: 'Participants who qualify receive a numbered certificate by email. Anyone can confirm it on the public verification page.',
          bullets: ['Issue in batches', 'Delivered to each inbox', 'Public verification page'],
        },
      ],
    },

    tour: {
      eyebrow: 'Product tour',
      title: 'One platform, three points of view',
      lead: 'Each role sees the menu it needs and nothing more. Pick a role to see its screens.',
      note: 'Illustrative screens. Names and numbers are examples only.',
      roles: {
        admin: {
          label: 'Admin',
          blurb: 'Runs programmes, participants and certificates across the institution.',
          screens: [
            { t: 'Institution dashboard', d: 'Active participants, attendance, certificates issued and upcoming sessions on one screen.' },
            { t: 'Batch certificates', d: 'Select those who passed, issue them together and deliver by email.' },
            { t: 'Reports', d: 'Progress, attendance and assessment results per programme, ready to export.' },
          ],
        },
        trainer: {
          label: 'Trainer',
          blurb: 'Teaches, records attendance, and builds material and questions.',
          screens: [
            { t: 'QR attendance', d: 'Show the session QR code; the attendance list fills itself as people scan.' },
            { t: 'Course builder', d: 'Arrange modules and lessons, then add video, documents and simulations.' },
            { t: 'Test editor', d: 'Write pretest and posttest questions, set the time limit and pass mark.' },
          ],
        },
        participant: {
          label: 'Participant',
          blurb: 'Learns, sits assessments and collects certificates from a phone.',
          screens: [
            { t: 'My courses', d: 'Resume from the last lesson and see progress for each module.' },
            { t: 'Simulation', d: 'Practise a procedure in an interactive scenario before going on site.' },
            { t: 'Pretest & posttest', d: 'Sit timed assessments and see your own improvement.' },
            { t: 'Certificates', d: 'Download a certificate and share its verification link.' },
          ],
        },
      },
    },

    features: {
      eyebrow: 'What you get',
      title: 'Enough to run a training institution',
      lead: 'The core is in every plan. Advanced capabilities follow as you need them.',
      items: [
        { t: 'Courses & modules', d: 'Build structured material: modules, lessons, video, documents, and a simulation at each step.' },
        { t: 'Pretest & posttest', d: 'Measure before and after. Learning gain is calculated per participant automatically.' },
        { t: 'Sessions & QR attendance', d: 'Schedule classes or drills, let people RSVP, and record attendance by QR scan.' },
        { t: 'Verifiable certificates', d: 'Issue in batches, deliver by email, and let anyone verify them.' },
        { t: 'AI Assistant', d: 'Participants ask questions and get answers from your own course documents, not the open web.' },
        { t: 'Doc Library', d: 'SOPs, guides and references for participants, always the current version.' },
        { t: 'Live Translate', d: 'Live subtitles during a session, for classes working across languages.' },
        { t: 'Reports', d: 'Participant progress, attendance and assessment results — ready to export when you need them.' },
      ],
      chat: { q: 'When must an extinguisher be re-inspected?', a: 'Per SOP-07 in your library: every 6 months.' },
      before: 'Before', after: 'After',
    },

    spotlight: {
      eyebrow: 'New in Gladhy',
      title: 'More than an online classroom',
      lead: 'Four capabilities that separate training people sat through from training they actually mastered.',
      hint: 'Scroll to see them all',
      items: [
        {
          tag: 'Simulation',
          t: 'Practise first, then go on site',
          d: 'Any lesson can end with an interactive simulation. Built-in templates come with every plan; your own 3D builds can be uploaded on higher plans.',
          points: ['A scenario per lesson', 'Ready-made templates', 'Upload your own 3D build'],
        },
        {
          tag: 'Zoom',
          t: 'Online classes without pasting links',
          d: 'Connect your institution’s Zoom account. A meeting is created when a session is scheduled, and attendance flows back into the session record.',
          points: ['Meetings created for you', 'Attendance recorded', 'One Zoom account per institution'],
        },
        {
          tag: 'Verification',
          t: 'Authenticity anyone can check',
          d: 'Every certificate carries a unique number. A recruiter or auditor only has to enter it on the public verification page.',
          points: ['Unique number per certificate', 'Public verification page', 'No account needed'],
        },
        {
          tag: 'Branding',
          t: 'Your institution’s own address and face',
          d: 'Each institution gets its own subdomain, logo and colour. Participants sign in to a platform that feels like yours.',
          points: ['Your own subdomain', 'Institution logo & colour', 'Configurable sign-in page'],
        },
      ],
      verify: { label: 'Certificate number', check: 'Check', ok: 'Genuine certificate', okSub: 'Issued by the organising institution', sample: 'Sample' },
    },

    trust: {
      title: 'One system, from the first class to the certificate.',
      stats: [
        { v: 6, suffix: '', l: 'core modules in every plan' },
        { v: 3, suffix: '', l: 'roles: admin, trainer, participant' },
        { v: 2, suffix: '', l: 'languages: Indonesian & English' },
        { v: 24, suffix: ' h', l: 'certificate verification available' },
      ],
      clients: 'Trusted by',
    },

    plans: {
      eyebrow: 'Plans',
      title: 'Sized to your institution',
      lead: 'Every plan includes the core. What differs is capacity and the advanced capabilities.',
      popular: 'Most chosen',
      cta: 'Request a quote',
      note:
        'Pricing depends on your needs and participant numbers. Institutions are registered directly by our team.',
      rows: {
        participants: 'Participants',
        programs: 'Programmes',
        core: 'Courses, assessments, sessions, QR attendance, certificates, Doc Library',
        branding: 'Own subdomain, logo & colour',
        ai_assistant: 'AI Assistant & Knowledge Base',
        custom_game_build: 'Custom 3D simulations',
        login_advanced: 'Advanced sign-in page',
        live_translate: 'Live Translate',
        compliance_report: 'Compliance reporting',
        white_label: 'Full white-label',
      },
      unlimited: 'Unlimited',
    },

    faq: {
      eyebrow: 'Common questions',
      title: 'What people usually ask first',
      items: [
        { q: 'How do I register my institution?', a: 'Our team registers institutions directly. Send a message through the form or WhatsApp; we set up your subdomain, branding and plan so everything is ready on day one.' },
        { q: 'Does my institution get its own address and look?', a: 'Yes. Each institution gets its own subdomain on gladhy.co.id with its name, logo and colour. Higher plans add sign-in page settings, up to full white-label.' },
        { q: 'How is a certificate authenticated?', a: 'Every certificate has a unique number and a public verification page. Anyone can check it without an account and without contacting your institution.' },
        { q: 'Is my institution’s data separate from others?', a: 'Yes. Users can only reach their own institution’s data, and that separation is tested automatically every time the platform is updated.' },
        { q: 'Do participants need to install an app?', a: 'No. Gladhy runs in the browser on phones and computers. Participants learn, sit assessments and scan the attendance QR straight from their phone.' },
        { q: 'Which languages are supported?', a: 'The interface is available in Indonesian and English. For sessions across languages, Live Translate shows live subtitles on the Enterprise plan.' },
        { q: 'How much does it cost?', a: 'Pricing follows your participant numbers and the capabilities you need. Tell us about your institution and we will send a quote.' },
      ],
    },

    contact: {
      eyebrow: 'Get started',
      title: 'Tell us what your institution needs',
      lead:
        'We register institutions ourselves, so your subdomain, branding and plan are ready on day one.',
      steps: ['You send a message', 'We reply with a quote', 'We set up your institution'],
      wa: 'Chat on WhatsApp',
      waText: 'Hello, I would like to know more about Gladhy.',
      name: 'Your name',
      institution: 'Institution',
      email: 'Email',
      message: 'Briefly, what do you need?',
      send: 'Send message',
      sending: 'Sending…',
      okTitle: 'Message sent.',
      okBody: 'Thank you — we will reply to your email.',
      errGeneric: 'The message could not be sent. Please try again or reach us on WhatsApp.',
    },

    signIn: {
      title: 'Sign in to Gladhy',
      lead: 'Each institution has its own address. Enter your institution’s short name:',
      placeholder: 'institution',
      go: 'Continue',
      hintPrefix: 'You will be taken to',
      fallback: 'Don’t know your institution’s address? Sign in here',
      close: 'Close',
    },

    footer: {
      tagline: 'A training & certification platform for institutions in any industry.',
      product: 'Product', company: 'Contact',
      rights: 'All rights reserved.',
      top: 'Back to top',
    },

    mock: {
      home: 'Dashboard', training: 'Training', qr: 'Attendance', courses: 'Courses', myCourses: 'My Courses',
      manage: 'Manage Courses', tests: 'Test Editor', pretest: 'Pretest', certs: 'Certificates', reports: 'Reports',
      greeting: 'Good morning', overview: 'Institution overview',
      active: 'Active participants', attendance: 'Attendance', issued: 'Certificates issued',
      gain: 'Learning gain by programme', upcoming: 'Upcoming sessions',
      pre: 'Pretest', post: 'Posttest',
      today: 'Today', tomorrow: 'Tomorrow',
      programs: ['Basic Safety', 'Forklift Operator', 'Emergency Response'],
      module: 'Module', lesson: 'Lesson', simulation: 'Simulation', video: 'Video', doc: 'Document', done: 'Done',
      lessons: ['Recognising hazards', 'Protective equipment', 'Evacuation procedure', 'Putting out a small fire'],
      question: 'Question', of: 'of', timeLeft: 'Time left',
      qText: 'The first step on finding a small fire in the work area is to…',
      options: ['Look for the nearest water', 'Raise the alarm and warn those nearby', 'Carry on working', 'Open every window'],
      next: 'Next',
      scanTitle: 'Scan to check in', session: 'Session 3 · Emergency Response', present: 'Present', scanned: 'scanned',
      certTitle: 'Certificate of Competence', certGiven: 'Awarded to', certFor: 'for completing the programme',
      certNo: 'No.', verified: 'Verified',
      objectives: 'Objectives', objList: ['Identify the fire source', 'Pick the right extinguisher', 'Put it out with PASS'],
      score: 'Score', live: 'Live', autoAttendance: 'Automatic attendance', minutes: 'min',
      participant: 'Participant', progress: 'Progress', result: 'Result', export: 'Export', passed: 'Passed', ongoing: 'Ongoing',
      signInTo: 'Sign in to', email: 'Email', password: 'Password', signIn: 'Sign in',
      tenants: ['Safety Academy', 'Industrial Training Centre', 'Logistics Training Hub'],
    },
  },
}
