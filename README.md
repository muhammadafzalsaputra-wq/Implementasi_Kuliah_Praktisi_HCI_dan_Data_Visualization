# Insight Mahasiswa — Dashboard Survei

## Deskripsi
Proyek studi kasus untuk menerapkan prinsip **Human Computer Interaction (HCI)** dan **Data Visualization** melalui dashboard interaktif tentang kebiasaan belajar mahasiswa.

> **Penting:** data di dalam aplikasi adalah data simulasi untuk demonstrasi, bukan hasil survei nyata.

## Permasalahan
Informasi survei dalam bentuk tabel angka mentah dapat lebih sulit dipahami dengan cepat. Dashboard ini menyajikan ringkasan dan grafik agar pola sederhana lebih mudah dibaca.

## Tujuan
- Menyajikan data survei dengan antarmuka yang jelas dan konsisten.
- Memudahkan pengguna melihat ringkasan jumlah responden dan rata-rata durasi belajar.
- Membandingkan metode belajar dan lokasi belajar melalui grafik.
- Memberikan filter sederhana untuk mengeksplorasi data.

## Teknologi
- HTML untuk struktur halaman.
- CSS untuk tata letak, warna, responsivitas, dan fokus keyboard.
- JavaScript untuk pemrosesan data dan interaksi.
- Chart.js untuk membuat grafik.

## Penerapan HCI
- Informasi dikelompokkan menjadi ringkasan, grafik, dan catatan.
- Label dan deskripsi menjelaskan tujuan setiap grafik.
- Warna, jarak, dan tipografi digunakan secara konsisten.
- Tata letak menyesuaikan ukuran layar.
- Filter dapat digunakan dengan kontrol pilihan yang memiliki label.

## Penerapan Data Visualization
- Grafik batang untuk membandingkan metode belajar.
- Grafik lingkaran untuk menunjukkan proporsi lokasi belajar.
- Grafik batang kelompok untuk membandingkan durasi belajar.
- Ringkasan statistik membantu pengguna memahami data dengan cepat.

## Cara menjalankan
1. Unduh atau clone repositori ini.
2. Buka folder proyek di Visual Studio Code.
3. Buka `index.html` menggunakan browser. Jika tersedia, ekstensi Live Server juga dapat digunakan.
4. Pastikan koneksi internet aktif agar pustaka Chart.js dari CDN dapat dimuat.

## Pengujian sederhana
- Ubah filter dari “Semua responden” menjadi “Sering belajar online”.
- Pastikan jumlah responden, rata-rata, metode favorit, dan grafik berubah.
- Ubah filter menjadi “Lebih sering belajar offline”.
- Coba buka halaman pada layar ponsel atau kecil untuk memeriksa tata letak responsif.

## Batasan
Data simulasi hanya digunakan untuk mendemonstrasikan fitur. Kesimpulan tentang kebiasaan belajar mahasiswa secara nyata memerlukan data survei yang benar-benar dikumpulkan.
