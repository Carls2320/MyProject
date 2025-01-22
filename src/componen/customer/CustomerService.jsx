import { email,phone,customer } from "../asset"; // Import gambar icon untuk email,telepon,customer service

const CustomerService = () => {
  return (
    <section className="mt-[180px] md:mt-[115px] 2xl:mt-[45px] flex flex-col md:flex-row justify-between items-center px-5 py-10 max-w-6xl mx-auto gap-10 mb-[114px]">
      {/* Container utama dengan styling responsif untuk menampung konten customer service */}

      <div className="w-full md:w-[773px] h-auto gap-[29px] text-left">
        {/* Div untuk teks utama dan informasi pendukung */}

        <div className="mb-5">
          <h2 className="text-[#212121] text-[28px] md:text-[32px] font-[550] text-lg leading-[36px] md:leading-[48px]">
            Kami Siap Membantu Bisnis{" "}
            <span className="hidden lg:inline">
              <br />
            </span>{" "}
            Anda Lebih Maju!
          </h2>
        </div>

        <p className="text-[#212121] leading-relaxed mb-6 text-[16px] md:text-[18px]">
          {/* Paragraf penjelasan singkat mengenai layanan yang ditawarkan */}
          Butuh informasi lebih lanjut tentang produk atau solusi kami?{" "}
          <span className="hidden lg:inline">
            <br />
          </span>{" "}
          Tim Rekan AI siap menjawab pertanyaan Anda dengan cepat dan
          profesional.
        </p>

        <div className="flex flex-col gap-4">
          {/* Container untuk menampung daftar kontak dalam format fleksibel */}

          <div className="flex items-start gap-4">
            {/* Kontainer untuk informasi kontak via email */}
            <img
              src={email} // Menampilkan icon email
              alt="Email Icon" // Teks alternatif untuk gambar email
              className="w-10 h-10 object-contain" // Styling untuk ukuran gambar
            />
            <div className="text-left">
              <p className="text-sm text-[#212121]">
                Kirim pertanyaan Anda ke{" "}
                <strong className="text-[#5B59E8]">support@rekanai.com</strong>{" "}
                dan tim kami
              </p>
              <p className="text-sm text-[#212121]">akan segera merespons.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            {/* Kontainer untuk informasi kontak via telepon */}
            <img
              src={phone} // Menampilkan icon telepon
              alt="Phone Icon" // Teks alternatif untuk gambar telepon
              className="w-10 h-10 object-contain" // Styling untuk ukuran gambar
            />
            <div className="text-left">
              <p className="text-sm text-[#212121]">
                Hubungi kami di{" "}
                <strong className="text-[#5B59E8]">(+62) 123-4567-890</strong>
              </p>
              <p className="text-sm text-[#212121]">
                (Senin - Jumat, 08:00 - 17:00 WIB).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        {/* Div untuk menampilkan gambar ilustrasi customer service */}
        <img
          src={customer} // Menampilkan gambar customer service
          alt="Customer Service" // Teks alternatif untuk gambar customer service
          className="w-full md:w-[400px] lg:w-[500px] max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default CustomerService; // Ekspor komponen agar dapat digunakan di file lain
