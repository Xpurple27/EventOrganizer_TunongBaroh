# EcoCatalyst Hub - Tunong Baroh Event Organizer

Proyek ini adalah platform manajemen acara dan katalog program untuk Tunong Baroh Event Organizer di Banda Aceh.

## Langkah Migrasi ke GitHub

Jika Anda melihat pesan **"nothing to commit, working tree clean"**, itu artinya file Anda sudah tersimpan di database lokal Git. Anda bisa langsung melompat ke langkah nomor 5.

### Urutan Perintah Lengkap:

1.  **Inisialisasi Git:**
    ```bash
    git init
    ```

2.  **Tambahkan File:** (Jangan lewati langkah ini!)
    ```bash
    git add .
    ```

3.  **Simpan Perubahan (Commit):**
    ```bash
    git commit -m "Initial commit: Tunong Baroh Hub"
    ```
    *Jika muncul pesan "nothing to commit", lanjut saja ke langkah berikutnya.*

4.  **Atur Branch Utama:**
    ```bash
    git branch -M main
    ```

5.  **Hubungkan ke GitHub:**
    *(Pastikan URL ini sesuai dengan repositori yang Anda buat di GitHub)*
    ```bash
    git remote add origin https://github.com/Xpurple27/EcoCatalyst_TunongBaroh_Event_Organizer.git
    ```
    *Jika muncul error "remote origin already exists", ketik: `git remote remove origin` lalu ulangi perintah di atas.*

6.  **Unggah Kode:**
    ```bash
    git push -u origin main --force
    ```

## Teknologi yang Digunakan
- **Framework:** Next.js 15
- **UI:** ShadCN UI & Tailwind CSS
- **Database & Auth:** Firebase (Firestore & Auth)
- **AI:** Genkit (Google Gemini)

## Kontak Operasional
- **Awaludin:** +62 813-6091-1234
- **Dedek:** +62 823-6100-3219
- **Lokasi:** Banda Aceh, Indonesia
