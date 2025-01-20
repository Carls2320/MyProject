import { StrictMode } from 'react'  // Mengimpor StrictMode dari React untuk memeriksa potensi masalah dalam aplikasi
import { createRoot } from 'react-dom/client'  // Mengimpor fungsi createRoot untuk membuat root DOM untuk aplikasi
import './index.css'  // Mengimpor file CSS global yang akan diterapkan ke seluruh aplikasi
import App from './App.jsx'  // Mengimpor komponen utama aplikasi (App) dari file App.jsx

// Membuat root React pada elemen dengan id 'root' dan merender aplikasi
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App />  
  </StrictMode>,
)
