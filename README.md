# Gladhy — landing page

Halaman utama **gladhy.co.id**: menjelaskan produk, membandingkan paket, dan
menerima permintaan dari calon lembaga.

Terpisah dari aplikasi karena audiens dan iramanya berbeda — halaman ini berubah
saat pemasaran berubah, aplikasi berubah saat produknya berubah. Keduanya hanya
bertemu di satu titik: tombol **Masuk**.

## Menjalankan secara lokal

```bash
npm install
npm run dev          # http://localhost:5174
```

Backend perlu jalan di `localhost:4000` agar formulir kontak berfungsi.
`vite.config.js` mem-proxy `/api` ke sana, meniru produksi di mana Caddy
melakukan hal yang sama — jadi formulirnya selalu satu origin dengan API dan
CORS tidak pernah ikut campur.

## Konfigurasi

Semuanya lewat env Vite, dibaca di `src/config.js`. Nilai bawaan sudah
menunjuk produksi, jadi `npm run dev` berjalan tanpa berkas `.env`.

| Variabel | Arti |
|---|---|
| `VITE_PLATFORM_DOMAIN` | Domain induk lembaga. Dialog Masuk menyusun `{slug}.{domain}` darinya. |
| `VITE_WHATSAPP_NUMBER` | Format internasional, angka saja. Kosong = tombol WhatsApp tidak ditampilkan. |
| `VITE_API_URL` | Kosongkan di produksi supaya panggilan bersifat relatif. |

## Pembagian hostname

| Alamat | Menyajikan |
|---|---|
| `gladhy.co.id`, `www.` | Halaman ini |
| `app.gladhy.co.id` | Aplikasi, konteks platform |
| `{slug}.gladhy.co.id` | Aplikasi, dengan branding lembaga itu |

Tombol **Masuk** menanyakan nama singkat lembaga lalu mengarah ke subdomainnya,
karena di situlah pengguna melihat logo dan warna lembaganya sendiri. Ada
tautan cadangan ke `app.` bagi yang tidak tahu alamatnya — itu tetap berfungsi
untuk semua orang.

Sengaja **tidak** ada pencarian "nama lembaga → subdomain": endpoint semacam itu
juga memungkinkan siapa pun menyusuri daftar pelanggan.

## Menyalurkan

`Dockerfile` membangun berkas statis lalu menyalinnya ke volume yang dibaca
Caddy — tidak ada server Node yang berjalan. Dirangkai oleh service `landing`
di `docker-compose.prod.yml` milik repo backend.

Dua hal yang mudah terlewat, keduanya sudah dijaga di sana:

- Volume `landing_dist` **terpisah** dari `web_dist` milik aplikasi. Kedua
  Dockerfile mengosongkan `/srv` sebelum menyalin, jadi berbagi volume membuat
  tiap deploy menghapus yang lain.
- `DOMAIN` wajib. Kosong membuat Caddy menolak seluruh konfigurasi dan semua
  host mati, bukan hanya halaman ini.

## Struktur

\
Urutan halaman: Hero → Masalah → Alur 3 langkah → Tur produk → Fitur →
Sorotan → Kepercayaan → Paket → FAQ → Kontak.

## Animasi

Memakai **GSAP + ScrollTrigger** dan **Lenis**, keduanya dimuat belakangan
lewat  sehingga hero tampil tanpa menunggunya. Tiga aturan yang
dijaga di seluruh kode:

- **Isi tidak pernah disembunyikan oleh CSS.** Keadaan awal animasi dipasang
  GSAP. Kalau skripnya gagal dimuat, pengunjung kehilangan gerak, bukan isi.
- ** dihormati penuh**: tanpa pin, tanpa paralaks,
  tanpa scroll halus, tanpa putar otomatis.
- **Pin hanya di layar ≥ 861px.** Di HP, Alur ditumpuk biasa dan Sorotan
  digeser dengan jari. Lenis hanya aktif untuk mouse/trackpad.

Semua animasi GSAP lewat  di , yang
membongkarnya sendiri saat komponen lepas atau lebar layar berubah.

## Menyunting teks

Semua kalimat, kedua bahasa, ada di . Ditaruh berdampingan supaya
terjemahan yang tertinggal langsung terlihat saat menulis, bukan berbulan-bulan
kemudian oleh pengunjung. Urutan butir dalam array (langkah, layar tur, fitur,
sorotan) dipasangkan dengan ikon dan mockup di komponennya.

Angka dan fitur paket di  menyalin
. Kalau berubah di sana, ubah juga di
sini — mengambilnya lewat API berarti menaruh permintaan jaringan dan satu mode
kegagalan di depan halaman pemasaran.

## Yang sengaja belum diisi

- **Logo klien**: array  di  kosong, jadi
  deret logonya tidak dirender. Isi setelah berkas dan izin pakainya ada.
- **Angka pemakaian** (jumlah lembaga, peserta, sertifikat): bagian Kepercayaan
  hanya memuat fakta produk. Ganti di  (i18n) bila datanya ada.
- Mockup memakai nama dan angka contoh; jangan diganti data lembaga sungguhan.
