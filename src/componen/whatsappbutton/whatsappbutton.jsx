import WaButtons from '../asset/Whatsapp22.png';  // Mengimpor gambar ikon WhatsApp

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-2 right-2 md:right-24 flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full z-50 cursor-pointer border-4 border-[#6950DA] bg-gradient-to-l from-[#FD66B9] to-[#A162F9] m-[10px]">
      {/* Tombol WhatsApp */}
      <img
        className="w-10 h-10 md:w-12 md:h-12"  // Menentukan ukuran ikon WhatsApp
        src={WaButtons}  // Gambar yang diimpor
        alt="WhatsApp"  // Deskripsi gambar jika gambar gagal dimuat
      />
    </div>
  );
};

export default WhatsAppButton;
