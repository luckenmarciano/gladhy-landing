/**
 * Every string on the page, in both languages, in one file.
 *
 * The app does the same thing (osct_frontend/src/shared/index.jsx), and the
 * reason holds here too: with copy scattered across components, one language
 * quietly drifts out of date and nobody notices until a visitor reads it.
 * Side by side, a missing translation is obvious while writing.
 */

export const LANGS = ['id', 'en']

export const T = {
  id: {
    htmlLang: 'id',

    nav: { about: 'Tentang', features: 'Fitur', plans: 'Paket', contact: 'Hubungi', signIn: 'Masuk' },

    hero: {
      eyebrow: 'Pelatihan Bersertifikat',
      title1: 'Latih. Uji.',
      title2: 'Sertifikasi.',
      lead:
        'Gladhy membantu lembaga menyelenggarakan pelatihan bersertifikat — dari materi dan ujian, ' +
        'sampai kehadiran yang terverifikasi dan sertifikat yang keasliannya bisa diperiksa siapa saja.',
      ctaPrimary: 'Hubungi kami',
      ctaSecondary: 'Lihat fitur',
    },

    about: {
      eyebrow: 'Masalahnya',
      title: 'Pelatihan selesai. Lalu buktinya di mana?',
      body:
        'Banyak lembaga sudah menjalankan pelatihan dengan baik, tapi jejaknya tersebar: daftar hadir di kertas, ' +
        'nilai di spreadsheet, sertifikat di folder komputer seseorang. Saat klien atau auditor bertanya, ' +
        'menyusunnya kembali makan waktu berhari-hari.',
      points: [
        {
          t: 'Satu tempat, bukan lima',
          d: 'Materi, ujian, jadwal sesi, kehadiran, dan sertifikat berada dalam satu sistem yang saling terhubung.',
        },
        {
          t: 'Kehadiran yang tidak bisa dititipkan',
          d: 'Peserta memindai QR di lokasi. Tercatat dengan waktu, bukan tanda tangan yang bisa diwakilkan.',
        },
        {
          t: 'Sertifikat yang bisa dibuktikan',
          d: 'Setiap sertifikat punya nomor dan halaman verifikasi publik. Perekrut bisa memeriksanya sendiri, tanpa menghubungi Anda.',
        },
      ],
    },

    features: {
      eyebrow: 'Yang Anda dapatkan',
      title: 'Cukup untuk menjalankan lembaga pelatihan',
      items: [
        { t: 'Kursus & modul', d: 'Susun materi berjenjang: modul, pelajaran, video, dokumen, dan kuis di tiap langkah.' },
        { t: 'Pretest & posttest', d: 'Ukur kemampuan sebelum dan sesudah. Learning gain terhitung otomatis per peserta.' },
        { t: 'Sesi & absensi QR', d: 'Jadwalkan kelas atau drill, peserta konfirmasi hadir, kehadiran terekam lewat pemindaian QR.' },
        { t: 'Sertifikat terverifikasi', d: 'Terbitkan massal, kirim lewat email, dan biarkan siapa pun memverifikasinya di halaman publik.' },
        { t: 'Doc Library', d: 'Pustaka dokumen untuk peserta — SOP, panduan, dan rujukan yang selalu versi terbaru.' },
        { t: 'AI Assistant', d: 'Peserta bertanya, dijawab dari dokumen kursus Anda sendiri — bukan dari internet.' },
        { t: 'Live Translate', d: 'Subtitel langsung saat sesi berjalan, untuk peserta atau instruktur lintas bahasa.' },
        { t: 'Laporan', d: 'Progres peserta, kehadiran, dan hasil ujian — siap diekspor saat dibutuhkan.' },
      ],
    },

    plans: {
      eyebrow: 'Paket',
      title: 'Pilih sesuai ukuran lembaga Anda',
      lead: 'Semua paket memuat fitur inti. Yang membedakan adalah kapasitas dan kemampuan lanjutan.',
      colFeature: 'Fitur',
      cta: 'Hubungi kami untuk penawaran',
      note:
        'Harga disesuaikan dengan kebutuhan dan jumlah peserta. Hubungi kami untuk penawaran — ' +
        'pendaftaran lembaga dilakukan langsung oleh tim kami.',
      rows: {
        participants: 'Jumlah peserta',
        programs: 'Jumlah program',
        core: 'Kursus, ujian, sesi, absensi, sertifikat, Doc Library',
        ai: 'AI Assistant & Knowledge Base',
        translate: 'Live Translate',
        compliance: 'Laporan kepatuhan',
        branding: 'Subdomain & branding lembaga sendiri',
      },
      unlimited: 'Tanpa batas',
      yes: 'Termasuk',
      no: '—',
    },

    contact: {
      eyebrow: 'Mulai',
      title: 'Ceritakan kebutuhan lembaga Anda',
      lead:
        'Pendaftaran lembaga kami lakukan langsung, supaya subdomain, branding, dan paket Anda siap sejak hari pertama. ' +
        'Kirim pesan, atau hubungi lewat WhatsApp bila lebih cepat.',
      wa: 'Chat WhatsApp',
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

    footer: { tagline: 'Platform Pelatihan & Sertifikasi', rights: 'Seluruh hak dilindungi.' },
  },

  en: {
    htmlLang: 'en',

    nav: { about: 'About', features: 'Features', plans: 'Plans', contact: 'Contact', signIn: 'Sign in' },

    hero: {
      eyebrow: 'Certified Training',
      title1: 'Train. Assess.',
      title2: 'Certify.',
      lead:
        'Gladhy helps institutions run certified training — from material and assessment ' +
        'through to verified attendance and certificates anyone can authenticate.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'See features',
    },

    about: {
      eyebrow: 'The problem',
      title: 'The training went well. Where is the proof?',
      body:
        'Plenty of institutions run good training, but the record of it is scattered: attendance on paper, ' +
        'scores in a spreadsheet, certificates in somebody’s folder. When a client or an auditor asks, ' +
        'putting it back together takes days.',
      points: [
        {
          t: 'One place, not five',
          d: 'Material, assessments, session schedules, attendance and certificates live in one connected system.',
        },
        {
          t: 'Attendance that cannot be signed for a friend',
          d: 'Participants scan a QR code on site. Recorded with a timestamp, not a signature someone else can add.',
        },
        {
          t: 'Certificates that hold up',
          d: 'Every certificate carries a number and a public verification page. Recruiters can check it themselves, without contacting you.',
        },
      ],
    },

    features: {
      eyebrow: 'What you get',
      title: 'Enough to run a training institution',
      items: [
        { t: 'Courses & modules', d: 'Build structured material: modules, lessons, video, documents, and a quiz at each step.' },
        { t: 'Pretest & posttest', d: 'Measure before and after. Learning gain is calculated per participant automatically.' },
        { t: 'Sessions & QR attendance', d: 'Schedule classes or drills, let people RSVP, and record attendance by QR scan.' },
        { t: 'Verifiable certificates', d: 'Issue in batches, deliver by email, and let anyone verify them on a public page.' },
        { t: 'Doc Library', d: 'A document library for participants — SOPs, guides and references, always the current version.' },
        { t: 'AI Assistant', d: 'Participants ask questions and get answers from your own course documents, not from the open web.' },
        { t: 'Live Translate', d: 'Live subtitles during a session, for participants or instructors working across languages.' },
        { t: 'Reports', d: 'Participant progress, attendance and assessment results — ready to export when you need them.' },
      ],
    },

    plans: {
      eyebrow: 'Plans',
      title: 'Sized to your institution',
      lead: 'Every plan includes the core. What differs is capacity and the advanced capabilities.',
      colFeature: 'Feature',
      cta: 'Contact us for a quote',
      note:
        'Pricing depends on your needs and participant numbers. Get in touch for a quote — ' +
        'institutions are registered directly by our team.',
      rows: {
        participants: 'Participants',
        programs: 'Programmes',
        core: 'Courses, assessments, sessions, attendance, certificates, Doc Library',
        ai: 'AI Assistant & Knowledge Base',
        translate: 'Live Translate',
        compliance: 'Compliance reporting',
        branding: 'Own subdomain & branding',
      },
      unlimited: 'Unlimited',
      yes: 'Included',
      no: '—',
    },

    contact: {
      eyebrow: 'Get started',
      title: 'Tell us what your institution needs',
      lead:
        'We register institutions ourselves, so your subdomain, branding and plan are ready on day one. ' +
        'Send a message, or reach us on WhatsApp if that is quicker.',
      wa: 'Chat on WhatsApp',
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

    footer: { tagline: 'Training & Certification Platform', rights: 'All rights reserved.' },
  },
}
