import { img10 } from "../asset";

const ContactForm = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center p-5 text-white overflow-hidden rounded-tl-[80px] rounded-tr-[80px]"
      style={{
        background: `linear-gradient(45deg, #DC016866 5%, rgba(91, 89, 232, 1) 100%), url(${img10})`,
        backgroundSize: "100% auto", // Memastikan gambar mengisi seluruh elemen
        backgroundPosition: "center", // Menempatkan gambar di tengah
        backgroundRepeat: "no-repeat", // Menghindari gambar terulang
      }}
    >
      <div className="flex flex-col lg:flex-row items-start w-full max-w-6xl mt-[-40px] 2xl:max-w-7xl 2xl:px-20">
        {/* Bagian Kiri */}
        <div className="flex-1 p-5 mb-10 lg:mb-auto mt-20">
          {/* Judul utama */}
          <h2 className="text-[32px] font-[550] leading-[48px] tracking-[0.005em] text-left mb-[39px] 2xl:text-[36px]">
            Isi formulir di samping ini dan kami akan menghubungi Anda secepat
            mungkin
          </h2>

          {/* Deskripsi tambahan */}
          <p className="text-[18px] font-[400] leading-[30px] tracking-[0.005em] text-left mb-6 2xl:text-[20px]">
            Kami percaya bahwa kolaborasi adalah kunci kesuksesan. Hubungi kami
            hari ini, dan mari wujudkan masa depan bisnis Anda bersama Rekan AI!
          </p>
        </div>

        {/* Bagian Form */}
        <div className="flex-1 bg-white text-[#212121] rounded-2xl p-8 shadow-lg border-[8px] border-pink-300 mx-auto lg:mx-0 lg:ml-12 w-full max-w-lg mt-[79px] mb-[79px] 2xl:max-w-xl 2xl:px-12">
          {/* Judul form */}
          <h3 className="text-xl font-bold mb-4 text-[#212121] 2xl:text-2xl">
            Hubungi Tim Terbaik Kami
          </h3>
          {/* Deskripsi form */}
          <p className="mb-6 text-[#212121] 2xl:text-lg">
            Silakan isi data diri Anda pada formulir di bawah ini
          </p>

          {/* Formulir input */}
          <form className="flex flex-col gap-4">
            {/* Input Nama */}
            <div>
              <label className="text-[#6B5CEA]">Nama (Tanpa Gelar)*</label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                required
                className="w-full mt-1 p-4 border border-[#5B59E8]  rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Input Nomor Telepon */}
            <div>
              <label className="text-[#6B5CEA]">Nomor Telepon*</label>
              <input
                type="tel"
                placeholder="Masukkan nomor telepon Anda"
                required
                className="w-full mt-1 p-4 border border-[#5B59E8]  rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Input Email */}
            <div>
              <label className="text-[#6B5CEA]">Email*</label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                required
                className="w-full mt-1 p-4 border border-[#5B59E8]  rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Input Nama Organisasi */}
            <div>
              <label className="text-[#6B5CEA] ">
                Nama Organisasi/Perusahaan
              </label>
              <input
                type="text"
                placeholder="Masukkan nama organisasi/perusahaan Anda"
                className="w-full mt-1 p-4 border border-[#5B59E8]  rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Dropdown Pilih Kebutuhan */}
            <div>
              <label className="text-[#6B5CEA]">Pilih Kebutuhan</label>
              <select
                required
                className="w-full mt-1 p-4 border border-[#5B59E8]  rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Pilih kebutuhan Anda</option>
                <option value="konsultasi">Konsultasi</option>
                <option value="pelatihan">Pelatihan</option>
                <option value="pengembangan">Pengembangan</option>
              </select>
            </div>

            {/* Checkbox Verifikasi */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                required
                className="focus:ring-2 focus:ring-indigo-500"
              />
              <span className="text-[#212121]">Saya bukan robot</span>
            </div>

            {/* Tombol Kirim */}
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white  py-3 px-6 rounded-lg shadow-md transition-all w-[173px] pr-6"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
