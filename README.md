
# EcoCatalyst Hub - Tunong Baroh Event Organizer

Proyek ini adalah platform manajemen acara dan katalog program untuk Tunong Baroh Event Organizer di Banda Aceh.

## Status Proyek
🚀 **Berhasil Dimigrasi ke GitHub:** [Xpurple27/EventOrganizer_TunongBaroh](https://github.com/Xpurple27/EventOrganizer_TunongBaroh)

## Deskripsi
EcoCatalyst Hub dirancang untuk memudahkan sekolah, instansi, dan organisasi dalam merencanakan kegiatan luar ruang (outdoor training), sekolah alam, dan aksi konservasi lingkungan (seperti penanaman mangrove) di wilayah Aceh.

## Teknologi yang Digunakan
- **Framework:** Next.js 15 (App Router)
- **UI:** ShadCN UI & Tailwind CSS (Smooth Animations)
- **Database & Auth:** Firebase (Firestore & Authentication)
- **AI:** Genkit (Google Gemini) untuk fitur cerdas

## Masalah Autentikasi Git (Personal Access Token)
Jika Anda mendapatkan error `Invalid username or token`, gunakan **Personal Access Token (PAT)** sebagai pengganti password:
1. Buat PAT di GitHub: **Settings > Developer Settings > Personal Access Tokens > Tokens (classic)**.
2. Centang cakupan `repo`.
3. Jalankan perintah ini di terminal:
   `git remote set-url origin https://USERNAME:TOKEN@github.com/USERNAME/REPO_NAME.git`
4. Lakukan `git push` kembali.

## Cara Update Kode ke GitHub
Jika Anda melakukan perubahan, jalankan perintah ini di terminal:
1. `git add .`
2. `git commit -m "Deskripsi perubahan Anda"`
3. `git push origin main`

## Deployment ke Vercel
1. Masuk ke [Vercel](https://vercel.com) menggunakan akun GitHub.
2. Impor repositori `EventOrganizer_TunongBaroh`.
3. Tambahkan **Environment Variables**:
   - `GOOGLE_GENAI_API_KEY`: (API Key dari Google AI Studio)
4. Klik **Deploy**.

## Kontak Operasional
- **Awaludin:** [+62 813-6091-1234](https://wa.me/6281360911234)
- **Dedek:** [+62 823-6100-3219](https://wa.me/6282361003219)
- **Lokasi:** Banda Aceh, Indonesia

---
&copy; 2024 Tunong Baroh Event Organizer. Hak Cipta Dilindungi.
