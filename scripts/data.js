/*
 * Tambahkan data UMKM baru cukup di berkas ini.
 * id wajib unik (dipakai di URL ?id=)
 */
const umkmData = [
  {
    id: "bakso-pak-budi",
    name: "Bakso Pak Budi",
    category: "Makanan",
    photo: "img/bakso-pak-budi.jpg",
    address: "Jl. Sawo No. 12, Wonokusumo, Surabaya",
    phone: "0812-3456-7890",
    nib: "9123456789012",
    whatsapp: "https://wa.me/6281234567890",
    priceRange: "Rp12.000 - Rp20.000",
    benefit: "Bakso gurih buatan sendiri, cocok untuk makan siang keluarga."
  },
  {
    id: "es-teh-segar",
    name: "Es Teh Segar Bu Lilis",
    category: "Minuman",
    photo: "img/esteh.jpg",
    address: "Jl. Bulak Sari IV No. 8, Wonokusumo, Surabaya",
    phone: "0812-5555-4444",
    nib: "",
    whatsapp: "https://wa.me/6281255554444",
    priceRange: "Rp3.000 - Rp5.000",
    benefit: "Minuman teh manis segar, cocok dinikmati saat siang hari."
  },
  {
    id: "batik-cantik",
    name: "Batik Cantik",
    category: "Kerajinan",
    photo: "img/batik-cantik.png",
    address: "Jl. Mangga No. 5, Wonokusumo, Surabaya",
    phone: "0813-9876-5432",
    nib: "9876543210987",
    whatsapp: "https://wa.me/6281398765432",
    priceRange: "Rp50.000 - Rp250.000",
    benefit: "Batik handmade motif khas lokal, cocok untuk acara formal & santai."
  },
  {
    id: "laundry-bersih",
    name: "Laundry Bersih",
    category: "Layanan & Jasa",
    photo: "img/laundry-bersih.jpg",
    address: "Jl. Melati No. 20, Wonokusumo, Surabaya",
    phone: "0812-1111-2222",
    nib: "",
    whatsapp: "https://wa.me/6281211112222",
    priceRange: "Rp6.000 - Rp10.000 per kg",
    benefit: "Layanan cepat & bersih, tersedia antar-jemput gratis."
  },
  {
    id: "nasi-uduk-maknyus",
    name: "Nasi Uduk Maknyus",
    category: "Makanan",
    photo: "img/nasi-uduk.jpg",
    address: "Jl. Cendana No. 9, Wonokusumo, Surabaya",
    phone: "0813-2222-3333",
    nib: "",
    whatsapp: "https://wa.me/6281322223333",
    priceRange: "Rp8.000 - Rp15.000",
    benefit: "Rasa gurih dan porsi mengenyangkan, cocok untuk sarapan pagi."
  },
  {
    id: "kopi-hitam-pak-de",
    name: "Kopi Hitam Pak De",
    category: "Minuman",
    photo: "img/kopi-hitam.jpg",
    address: "Jl. Rambutan No. 3, Wonokusumo, Surabaya",
    phone: "0814-4444-5555",
    nib: "8899776655443",
    whatsapp: "https://wa.me/6281444445555",
    priceRange: "Rp5.000 - Rp10.000",
    benefit: "Aroma kuat kopi khas rumahan, nikmat di pagi hari."
  },
  {
    id: "anyaman-rotan-ibu-rahma",
    name: "Anyaman Rotan Ibu Rahma",
    category: "Kerajinan",
    photo: "img/anyaman.jpg",
    address: "Jl. Jeruk No. 14, Wonokusumo, Surabaya",
    phone: "0815-6666-7777",
    nib: "7788990011223",
    whatsapp: "https://wa.me/6281566667777",
    priceRange: "Rp25.000 - Rp200.000",
    benefit: "Kerajinan tangan dari rotan asli, cocok untuk dekorasi dan hadiah."
  },
  {
    id: "servis-elektronik-hari",
    name: "Servis Elektronik Pak Hari",
    category: "Layanan & Jasa",
    photo: "img/servis-elektronik.jpg",
    address: "Jl. Pisang No. 22, Wonokusumo, Surabaya",
    phone: "0812-8888-9999",
    nib: "",
    whatsapp: "https://wa.me/6281288889999",
    priceRange: "Rp25.000 - Rp150.000",
    benefit: "Servis cepat untuk TV, kipas, dan alat elektronik lainnya."
  },
  {
    id: "keripik-tempe-ummi",
    name: "Keripik Tempe Ummi",
    category: "Makanan",
    photo: "img/keripik-tempe.jpg",
    address: "Jl. Jambu No. 17, Wonokusumo, Surabaya",
    phone: "0812-2233-4455",
    nib: "9900112233445",
    whatsapp: "https://wa.me/6281222334455",
    priceRange: "Rp8.000 - Rp20.000 per bungkus",
    benefit: "Keripik renyah gurih, cocok untuk camilan atau oleh-oleh."
  },
  {
    id: "jus-buah-fresh",
    name: "Jus Buah Fresh",
    category: "Minuman",
    photo: "img/jus-buah.jpg",
    address: "Jl. Semangka No. 11, Wonokusumo, Surabaya",
    phone: "0813-5566-7788",
    nib: "",
    whatsapp: "https://wa.me/6281355667788",
    priceRange: "Rp5.000 - Rp12.000",
    benefit: "Jus buah segar dari buah asli, tanpa pengawet."
  }
];
