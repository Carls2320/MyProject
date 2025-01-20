import email from "../asset/email.png"; // Import gambar icon untuk email
import customer from "../asset/customer.png"; // Import gambar ilustrasi customer service
import phone from "../asset/phone.png"; // Import gambar icon untuk telepon

const CustomerService = () => {
  return (
    <section className="mt-[180px] md:mt-[115px] 2xl:mt-[45px] flex flex-col md:flex-row justify-between items-center px-5 py-10 max-w-6xl mx-auto gap-10 mb-[114px]">
      {/* Container utama dengan styling responsif untuk menampung konten customer service */}

      <div className="md:max-w-xl text-center md:text-left ">
        {/* Div untuk teks utama dan informasi pendukung */}

        <div className="mb-5">
          <h2 className="text-[#212121] text-[32px] font-semibold leading-[48px] text-left decoration-solid">
            {/* Heading utama dengan warna teks dan ukuran font yang diatur */}
            Kami Siap Membantu Bisnis <br /> Anda Lebih Maju!
          </h2>
        </div>

        <p className="text-[#212121] leading-relaxed mb-6 text-left">
          {/* Paragraf penjelasan singkat mengenai layanan yang ditawarkan */}
          Butuh informasi lebih lanjut tentang produk atau solusi kami? <br />{" "}
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
          className="max-w-full h-auto" // Styling untuk memastikan gambar berskala dengan baik
        />
      </div>
    </section>
  );
};

export default CustomerService; // Ekspor komponen agar dapat digunakan di file lain
