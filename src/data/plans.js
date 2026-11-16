/**
 * Menyalin gladhy-backend/src/config/plans.js.
 *
 * Dua salinan angka yang sama memang ada harganya, tetapi mengambilnya lewat
 * API berarti menaruh satu permintaan jaringan dan satu mode kegagalan di depan
 * halaman pemasaran. Kalau batas atau fitur di berkas backend berubah, ubah
 * juga di sini.
 *
 * `null` berarti tanpa batas, mengikuti konvensi backend. Kunci `features`
 * sama persis dengan FEATURES di backend dan dengan `plans.rows` di i18n.
 */
export const PLANS = [
  {
    key: 'BASIC',
    label: 'Paket 1',
    participants: 50,
    programs: 3,
    features: {
      ai_assistant: false,
      custom_game_build: false,
      login_advanced: false,
      live_translate: false,
      compliance_report: false,
      white_label: false,
    },
  },
  {
    key: 'PROFESSIONAL',
    label: 'Paket 2',
    participants: 250,
    programs: 15,
    featured: true,
    features: {
      ai_assistant: true,
      custom_game_build: true,
      login_advanced: true,
      live_translate: false,
      compliance_report: false,
      white_label: false,
    },
  },
  {
    key: 'ENTERPRISE',
    label: 'Enterprise',
    participants: null,
    programs: null,
    features: {
      ai_assistant: true,
      custom_game_build: true,
      login_advanced: true,
      live_translate: true,
      compliance_report: true,
      white_label: true,
    },
  },
]

// Urutan tampil baris fitur; yang paling sering tersedia di atas.
export const FEATURE_ORDER = [
  'ai_assistant',
  'custom_game_build',
  'login_advanced',
  'live_translate',
  'compliance_report',
  'white_label',
]

/**
 * Logo klien untuk bagian Kepercayaan. Sengaja kosong: logo hanya dipasang
 * setelah berkasnya dan izin pakainya ada. Selama kosong, deret logo tidak
 * dirender sama sekali.
 *
 * Bentuk: { name: 'Nama Lembaga', src: '/clients/nama.svg' }
 */
export const CLIENTS = []
