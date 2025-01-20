import Header from "./componen/Header/Header";  // Mengimpor komponen Header untuk ditampilkan di bagian atas halaman
import CustomerService from "./componen/customer/CustomerService";  // Mengimpor komponen CustomerService untuk menampilkan informasi layanan pelanggan
import FormSection from "./componen/form/FormSection";  // Mengimpor komponen FormSection yang berisi form
import FAQ from "./componen/faq/FAQSection";  // Mengimpor komponen FAQ untuk menampilkan bagian pertanyaan yang sering diajukan
import BottomCTA from "./componen/bottom/BottomCTA";  // Mengimpor komponen BottomCTA untuk panggilan aksi di bagian bawah halaman
import Footer from "./componen/footer/Footer";  // Mengimpor komponen Footer untuk menampilkan bagian footer
import WhatsAppButton from "./componen/whatsappbutton/whatsappbutton";  // Mengimpor komponen WhatsAppButton untuk menampilkan tombol WhatsApp

function App() {
  return (
    <>
      <Header />  {/* Menampilkan komponen Header */}
      <CustomerService />  {/* Menampilkan komponen CustomerService */}
      <FormSection />  {/* Menampilkan komponen FormSection */}
      <FAQ />  {/* Menampilkan komponen FAQ */}
      <BottomCTA />  {/* Menampilkan komponen BottomCTA */}
      <Footer />  {/* Menampilkan komponen Footer */}
      <WhatsAppButton />  {/* Menampilkan komponen WhatsAppButton */}
    </>
  )
}

export default App;
