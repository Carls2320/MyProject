/** @type {import('tailwindcss').Config} */
export default {
  // Menentukan file-file yang akan dipindai oleh Tailwind untuk menghasilkan kelas-kelas CSS yang digunakan.
  content: [
    // Memindai file HTML di direktori root
    "./index.html",
    // Memindai semua file JavaScript dan TypeScript (termasuk JSX dan TSX) di dalam direktori src dan subdirektorinya
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Bagian untuk memperluas (extend) tema Tailwind. Anda bisa menambahkan tema atau konfigurasi lain di sini.
    extend: {
      // Misalnya, Anda bisa menambahkan warna kustom, font, spacing, dan lainnya di dalam bagian ini
    },
  },
  // Daftar plugin yang akan digunakan oleh Tailwind
  plugins: [],
};
