/*
 * Tambahkan data UMKM baru cukup di berkas ini.
 * id wajib unik (dipakai di URL ?id=)
 */
const umkmData = [
  {
    id: "Ifa-Cookies",
    name: "Ifa Cookies",
    category: "Makanan",
    photo: "img/Ifa Cookies.png",
    address: "Jl. Bulak Sari 1 No 19, Wonokusumo, Surabaya",
    phone: "0878-0344-1908",
    nib: "-",
    whatsapp: "https://wa.me/6287803441908",
    priceRange: "Nastar (Mulai Rp15.000), Bolu (Mulai Rp15.000), Cookies (Mulai Rp15.000), Kue Kastengel (Mulai Rp15.000), Kue Semprit (Mulai Rp15.000), ",
    benefit: "Kue kering lezat dengan berbagai varian rasa, cocok untuk camilan dan oleh-oleh Lebaran",
    BPOM: "-",
    JUAL:"Nastar, Bolu, Cookies, Kue Kastengel, Kue Semprit dll."
  },
  {
    id: "Nasi-Pecel-Bali-Bu-Yayuk",
    name: "Nasi Pecel Bali Bu Yayuk",
    category: "Makanan",
    photo: "img/Pecel Bali Bu Yayuk.png",
    address: "Jl. Bulak Sari II No. 8, Wonokusumo, Surabaya",
    phone: "-",
    nib: "-",
    whatsapp: "-",
    priceRange: "Nasi Pecel (Mulai Rp10.000), Nasi Bali (Mulai Rp10.000), Nasi Campur (Mulai Rp10.000) ",
    benefit: "Rekomendasi Makanan yang digunakan untuk sarapan pagi.",
    BPOM: "-",
    JUAL: "Nasi Pecel, Nasi Bali, Nasi Campur"
  },
  {
    id: "Puspa-food-market",
    name: "Puspa Food",
    category: "Makanan",
    photo: "img/Puspa Food.png",
    address: "Bulak Sari 2 Buntu 1-A, Kel. Wonokusumo, Kec. Semampir, Kota Surabaya, Jawa Timur 60141",
    phone: "0878-5451-9590",
    nib: "9876543210987",
    whatsapp: "https://wa.me/6287854519590",
    priceRange: "Bawang Goreng (Rp. 25.000 - Rp. 50.000), Brambang Goreng (Rp. 25.000 - Rp. 30.000), Nasi Bakar (Rp. 12.000)",
    benefit: "Menambah Cita Rasa Makanan, Mempercantik.",
    BPOM: "ID35110001871380323",
    JUAL: "Bawang Goreng, Brambang Goreng, Nasi Bakar "
  },
  {
    id: "Jamu-Bu-Rasmini ",
    name: "Jamu Bu Rasmini",
    category: "Minuman",
    photo: "img/Jamu Bu Rasmini.png",
    address: "Jl. Bulak Sari Gg. I No.23, Wonokusumo, Surabaya",
    phone: "0882-0094-63109",
    nib: "-",
    whatsapp  : "https://wa.me/62882009463109",
    priceRange: "Gelas Kaca (Rp.3000), Botol Sedang (Rp7.000), Botol Besar (Rp.15.000)",
    benefit: "Penawar Masuk Angin, Penawar Capek - Capek, Menambah Nafsu Makan, Penawar Sariawan, Dapat Menurunkan Berat Badan, Penawar Gatal - Gatal",
    BPOM: "-",
    JUAL: "Beras Kencur, Sinom, Kunyit Asam, Ademan, Kunci Soroh (Antibiotik)"
  },
  {
    id: "Nasi-Cokot-Bu-Siti",
    name: "Nasi Cokot Bu Siti",
    category: "Makanan",
    photo: "img/nasi cokot bu siti.png",
    address: "Bulak Sari Gang 2 No 19, Wonokusumo, Surabaya",
    phone: "0812-3931-5753",
    nib: "-",
    whatsapp: "https://wa.me/6281239315753",
    priceRange: "Nasi Cokot Tanpa Kertas Minyak (Rp7.000), Nasi Cokot Dengan Kertas Minyak (Rp10.000)",
    benefit: "Rasa gurih dan porsi mengenyangkan, cocok untuk sarapan pagi.",
    BPOM: "-",
    JUAL: "Nasi Cokot Varian Cumi - Cumi, Nasi Cokot Varian Ayam Suwir, Nasi Cokot Varian Daging"
  },
  {
    id: "Warung-Mbak-Fitri",
    name: "Warung Mbak Fitri",
    category: "Minuman",
    photo: "img/warung mbak fitri.png",
    address: "Bulak Sari Gang Lebar No 24 A RT 09 RW 06 , Wonokusumo, Surabaya",
    phone: "0831-1713-1786",
    nib: "-",
    whatsapp: "https://wa.me/6283117131786",
    priceRange: "All Varian Pop Ice (Rp3.000)",
    benefit: "Pop Ice cocok diminum di siang hari.",
    BPOM: "-",
    JUAL: "Pop Ice All Varian, Gorengan, Jajanan Ringan, Makanan Ringan"
  },
  {
    id: "FotoCopy-Aristha",
    name: "FotoCopy Aristha",
    category: "Layanan & Jasa",
    photo: "img/fotocopy aristha.png",
    address: "Bulak Sari Gang 1 No 51, Wonokusumo, Surabaya",
    phone: "08885300560",
    nib: "-",
    whatsapp: "https://wa.me/628885300560",
    priceRange: "FotoCopy (Rp250), Bulpoin (Rp.3000), Spidol (Rp5.000), Buku Tulis (Rp4.000)",
    benefit: "Toko ATK yang menyediakan berbagai kebutuhan ATK Sekolah, Kuliah dan Jasa FotoCopy",
    BPOM: "-",
    JUAL: "FotoCopy, Bulpoin, Spidol, Buku Tulis, Jasa Pengetikan"
  },
  {
    id: "Warung-Bu-Purwanti",
    name: "Warung Bu Purwanti",
    category: "Makanan",
    photo: "img/Warung-Bu-Purwanti.png",
    address: "Bulak Sari Gang 6 No 37, Wonokusumo, Surabaya",
    phone: "0895-2988-9771",
    nib: "-",
    whatsapp: "https://wa.me/6289529889771",
    priceRange: "Gado - Gado (Rp12.000), Bakso (Rp10.000), Pangsit (10.000) ",
    benefit: "Cocok di Makan Pada Siang Hari",
    BPOM: "-",
    JUAL: "Gado - Gado, Bakso, Pangsit"
  },
  {
    id: "Umi-Catering",
    name: "Umi Catering",
    category: "Makanan",
    photo: "img/umi catering.png",
    address: "Bulak Sari Gang Lebar No 25 RT 09 RW 06, Wonokusumo, Surabaya",
    phone: "0888-8558-969",
    nib: "",
    whatsapp: "https://wa.me/628888558969",
    priceRange: "Nasi Tumpeng (Rp500.000 - 700.000), Nasi Kotak (Rp18.000), Prasmanan (Rp35.000), Gurame (Rp50.000)",
    benefit: "Cocok dipakai Untuk Acara Hajatan",
    BPOM: "-",
    JUAL: "Catering Nasi Tumpeng, Catering Nasi Kotak, Catering Prasmanan, Catering Gurame"
  },
  {
    id: "Martabak-Bu-Mariamah",
    name: "Martabak Bu Mariamah",
    category: "Makanan",
    photo: "img/martabak mariamah.png",
    address: "Depan Gang 2 RT 02 Kulon, Wonokusumo, Surabaya",
    phone: "0877-5134-7944",
    nib: "-",
    whatsapp: "https://wa.me/6287751347944",
    priceRange: "Martabak Mie (Rp1.000)",
    benefit: "Cocok di Makan Pada Siang - Sore Hari",
    BPOM: "-",
    JUAL: "Martabak Mie, Martabak Telur"
  },
  {
    id: "Rujak-Bu-Tutik",
    name: "Rujak Bu Tutik",
    category: "Makanan",
    photo: "img/rujak bu tutik.png",
    address: "Depan Gang 2 RT 02 Kulon, Wonokusumo, Surabaya",
    phone: "0877-3424-0415",
    nib: "-",
    whatsapp: "https://wa.me/6287734240415",
    priceRange: "Rujak (Rp10.000), Rujak Cabai 5 (12.000)",
    benefit: "Cocok di Makan Pada Siang - Sore Hari",
    BPOM: "-",
    JUAL: "Rujak Buah, Rujak Cingur, Rujak Petis, Rujak Cabai"
  },
  {
    id: "FotoCopy Bu Erna",
    name: "FotoCopy Bu Erna",
    category: "Layanan & Jasa",
    photo: "img/FotoCopy Bu Erna.png",
    address: "Bulak Sari 06 Gang 5 No 07, Wonokusumo, Surabaya",
    phone: "0819-3788-4531",
    nib: "-",
    whatsapp: "https://wa.me/6281937884531",
    priceRange: "FotoCopy (Rp3.000), Print Hitam Putih  (Rp1.000), Print Berwarna 1 Lembar (2.000) ",
    benefit: "Tempat Fotocopy dan Print dengan Harga yang Terjangkau",
    BPOM: "-",
    JUAL: "FotoCopy, Print Hitam Putih, Print Berwarna, Jasa Pengetikan"
  },
  {
    id: "Kedai-Umi",
    name: "Kedai Umi",
    category: "Minuman",
    photo: "img/Kedai Umi.png",
    address: "Bulak Sari Gang Lebar No 25 RT 09 RW 06, Wonokusumo, Surabaya",
    phone: "0888-8558-969",
    nib: "-",
    whatsapp: "https://wa.me/628888558969",
    priceRange: "Es Teh (Rp3.000), Es Cao (Rp3.000), Es Manado (10.000)",
    benefit: "Cocok di Minum Pada Siang - Sore Hari",
    BPOM: "-",
    JUAL: "Minuman Es Teh, Minuman Es Cao, Minuman Es Manado"
  },
  {
    id: "Es-Teh-Bu-Santi",
    name: "Es Teh Bu Santi",
    category: "Minuman",
    photo: "img/Es Teh Bu Santi.png",
    address: "Bulak Sari Gang 1 No 37, Wonokusumo, Surabaya",
    phone: "0858-5083-9349",
    nib: "-",
    whatsapp: "https://wa.me/6285850839349",
    priceRange: "Es Teh Sedang (Rp3.000), Es Teh Besar (Rp5.000)",
    benefit: "Cocok di Minum Pada Siang - Sore Hari",
    BPOM: "-",
    JUAL: "Es Teh Sedang, Es Teh Besar, Minuman Ringan Lainnya"
  },
  {
    id: "Nyes-Boba-Signature-Drink",
    name: "Nyes Boba Signature Drink",
    category: "Minuman",
    photo: "img/Nyes Boba Signature Drink.png",
    address: "Bulak Sari Gang 3 No 23 RT 03 RW 06, Wonokusumo, Surabaya",
    phone: "0896-2685-4488",
    nib: "-",
    whatsapp: "https://wa.me/6289626854488",
    priceRange: "Minuman Boba (Rp12.000), Es Teh (Rp3.000 - 8.000)",
    benefit: "Cocok di Makan Pada Siang - Sore Hari",
    BPOM: "-",
    JUAL: "Boba Signature Drink, Es Teh, Minuman Boba"
  },
  {
    id: "D'winn-Family-Barbershop-And-Salon",
    name: "D'winn Family Barbershop and Salon",
    category: "Layanan & Jasa",
    photo: "img/dwin salon.png",
    address: "Jalan Bulak Sari,  Wonokusumo, Surabaya",
    phone: "0819-3788-4531",
    nib: "-",
    whatsapp: "https://wa.me/6281937884531",
    priceRange: "Cuci (Rp5.000 - 15.000), Gunting Cowok (Rp20.000), Gunting Cewek (Rp20.000), Catok (25.000 - 30.000), Variasi (30.000 - 40.000)",
    benefit: "Cocok di Makan Pada Siang - Sore Hari",
    BPOM: "-",
    JUAL: "Barbershop, Salon, Cuci Rambut, Gunting Rambut, Catok Rambut"
  },
  {
    id: "Nirmala-Gallery",
    name: "Nirmala Gallery",
    category: "Layanan & Jasa",
    photo: "img/Nirmala Gallery.png",
    address: "Jalan Bulak Sari Gang 1 No 51,  Wonokusumo, Surabaya",
    phone: "0896-5152-6050",
    nib: "Legalitas NIB",
    whatsapp: "https://wa.me/6289651526050",
    priceRange: "Bouquet Uang (Mulai 10.000), Bouquet Boneka (Mulai 10.000), Bouquet Bunga (Mulai 10.000), Bouquet Snack (Mulai 10.000)",
    benefit: "Cocok Dibuat Acara Wisuda, Ulang Tahun, Anniversary, dan Lainnya",
    BPOM: "-",
    JUAL: "Bouquet Uang, Bouquet Boneka, Bouquet Bunga, Bouquet Snack"
  },
  {
    id: "Kedai-Avrinda",
    name: "Kedai Avrinda",
    category: "Makanan",
    photo: "img/kedai avrinda.png",
    address: "Jalan Bulak Sari Gang 1 No 51 A,  Wonokusumo, Surabaya",
    phone: "0857-8478-7737",
    nib: "-",
    whatsapp: "https://wa.me/6285784787737",
    priceRange: "Mie Ayam SD (4.000), Mie Ayam SMP (6.000), Mie Ayam SMA (8.000), Mie Ayam 3 Varian (10.000), Mie Ayam Brutal (15.000), Siomay Kuah Pedas (Rp3.000 - 5.000), Roti Bakar (Rp2.000 - 3.000), Roti Sandwich (Rp2.000 - 7.000), Burger UFO (Rp10.000 - 15.000), Burger Jumbo (Rp10.000 - 15.000), Burger Pedas (Rp10.000 - 15.000), Tahu Krispi (Rp2.000 - 5.000)",
    benefit: "Cocok di Makan Pada Siang - Sore Hari",
    BPOM: "-",
    JUAL: "Mie Ayam SD, Mie Ayam SMP, Mie Ayam SMA, Mie Ayam 3 Varian, Mie Ayam Brutal, Siomay Kuah Pedas, Roti Bakar, Roti Sandwich, Burger UFO, Burger Jumbo, Burger Pedas, Tahu Krispi"
  },
  {
    id: "Warung-Bu-Cicik",
    name: "Warung Bu Cicik",
    category: "Makanan",
    photo: "img/warung bu cicik.png",
    address: "Jalan Bulak Sari Gang 8 No 25,  Wonokusumo, Surabaya",
    phone: "0822-3559-8809",
    nib: "-",
    whatsapp: "https://wa.me/6282235598809",
    priceRange: "Nasi Pecel (Mulai Rp.12.000 - 15.000), Nasi Campur (Mulai Rp.12.000 - 15.000)",
    benefit: "Cocok di Makan Pada Pagi - Siang Hari",
    BPOM: "-",
    JUAL: "Nasi Pecel, Nasi Campur"
  },
  {
    id: "Warung-Bu-Ana",
    name: "Warung Bu Ana",
    category: "Makanan",
    photo: "img/Warung Bu Ana.png",
    address: "Jalan Bulak Sari Jaya,  Wonokusumo, Surabaya",
    phone: "0821-8215-7262",
    nib: "-",
    whatsapp: "https://wa.me/6282182157262",
    priceRange: "Brengkesan (Mulai Rp5.000), Botok (Mulai Rp5.000), Macam - Macam Sayuran (Mulai Rp5.000), Macam - Macam Lauk Pauk (Mulai Rp5.000)",
    benefit: "Cocok di Makan Pada Pagi - Siang Hari",
    BPOM: "-",
    JUAL: "Brengkesan, Botok, Macam - Macam Sayurann, Macam - Macam Lauk Pauk"
  },
  {
    id: "Rizka-Salon",
    name: "Rizka Salon",
    category: "Layanan & Jasa",
    photo: "img/Rizka Salon.png",
    address: "Jalan Bulak Sari No 28 RT 04 RW 06,  Wonokusumo, Surabaya",
    phone: "0812-1640-6162",
    nib: "Berlegalitas NIB",
    whatsapp: "https://wa.me/6281216406162",
    priceRange: "Potong Rambut (Rp30.000 - 35.000), Potong Rambut + Cuci Blow (Rp60.000 - 70.000), Cuci Blow (Rp40.000 - 60.000), Cuci + Catok (Rp.70.000 - 90.000), Creambath (Rp.90.000 - 100.000), Hair Spa / Hair Mask (Rp.100.000 - 120.000), Catok (Rp.40.000 - 60.000), Curling (Rp.75.000 - 100.000), Hair Styling / Hair Do (Rp.50.000 - 100.000), Treatment Anti Kutu (Rp.150.000), Smoothing Keratin (Rp.350.000 - 500.000), Filler /Treatment Keratin (Rp.450.000 - 600.000), Smoothing Blow Perm (Rp.400.000 - 600.000), Keriting Permanent Dingin (Rp.200.000 - 250.000), Coloring Warna Rambut (Rp.200.000 - 400.000), Toning (Rp.100.000 - 150.000)",
    benefit: "Cocok untuk tempat Perawatan Rambut, Potong Rambut, Cuci Blow, Creambath, Hair Spa, Hair Mask, Catok, Curling, Hair Styling, Treatment Anti Kutu, Smoothing Keratin, Filler /Treatment Keratin, Smoothing Blow Perm, Keriting Permanent Dingin, Coloring Warna Rambut",
    BPOM: "-",
    JUAL: "Potong Rambut, Potong Rambut + Cuci Blow, Cuci Blow, Cuci + Catok, Creambath, Hair Spa / Hair Mask, Catok, Curling, Hair Styling / Hair Do, Treatment Anti Kutu, Smoothing Keratin, Filler /Treatment Keratin, Smoothing Blow Perm, Keriting Permanent Dingin, Coloring Warna Rambut, Toning"
  },
  {
    id: "Toko-Elektronik-Ali",
    name: "Toko Elektronik Ali",
    category: "Layanan & Jasa",
    photo: "img/toko elektronik ali.png",
    address: "Jalan Tenggumung Karya Lor No. 39 RT 04 RW 06,  Wonokusumo, Surabaya",
    phone: "0877-5165-9745",
    nib: "Berlegalitas NIB",
    whatsapp: "https://wa.me/6287751659745",
    priceRange: "Kabel Listrik (Mulai Rp.10.000), Lampu (Mulai Rp.10.000), dan Barang Elektronik Lainnya (Mulai Rp.10.000 - 500.000)",
    benefit: "Cocok Memenuhi kebutuhan Elektronik Rumah Tangga",
    BPOM: "-",
    JUAL: "Kabel Listrik, Lampu, dan Barang Elektronik Lainnya"
  },
  {
    id: "Toko-Sepatu-Sandal-Ali",
    name: "Toko Sepatu Sandal Ali",
    category: "Layanan & Jasa",
    photo: "img/toko sandal sepatu ali.png",
    address: "Jalan Tenggumung Karya Lor No. 39 RT 04 RW 06,  Wonokusumo, Surabaya",
    phone: "0877-5165-9745",
    nib: "Berlegalitas NIB",
    whatsapp: "https://wa.me/6287751659745",
    priceRange: "Sepatu (Mulai Rp.10.000), Sandal (Mulai Rp.10.000), dan Barang Sepatu Lainnya (Mulai Rp.10.000 - 500.000)",
    BPOM: "-",
    JUAL: "Sepatu, Sandal, dan Barang Sepatu Lainnya"
  },
  {
    id: "Pentol-Merdeka",
    name: "Pentol Merdeka",
    category: "Makanan",
    photo: "img/pentol merdeka.png",
    address: "Jl. Bulak Sari Gg. Lebar 4A RT 04 RW 06,  Wonokusumo, Surabaya",
    phone: "0852-0144-3591",
    nib: "-",
    whatsapp: "https://wa.me/6285201443591",
    priceRange: "Tahu, pentol, gorengan (Mulai Rp 500)",
    benefit: "Cocok Memenuhi kebutuhan Makanan",
    BPOM: "-",
    JUAL: "Tahu, Pentol, Gorengan"
  },
  {
    id: "Seblak-Hilya",
    name: "Seblak Hilya",
    category: "Makanan",
    photo: "img/seblak hilya.png",
    address: "Jl. Bulak Sari 31A RT 04 RW 06,  Wonokusumo, Surabaya",
    phone: "0881-0363-47273",
    nib: "-",
    whatsapp: "https://wa.me/62881036347273",
    priceRange: "Seblak Biasa (Rp 10.000), Seblak Ceker + Sayap (Rp 15.000), Seblak Komplit (Rp 20.000)",
    benefit: "Cocok Memenuhi kebutuhan Makanan",
    BPOM: "-",
    JUAL: "Seblak Biasa , Seblak Ceker + Sayap, Seblak Komplit"
  },
    {
    id: "Batagor-Siomay-Cireng",
    name: "Batagor Siomay Cireng",
    category: "Makanan",
    photo: "img/Batagor Siomay Cireng.png",
    address: "Jl. Bulak Sari 31A RT 04 RW 06,  Wonokusumo, Surabaya",
    phone: "0881-0363-47273",
    nib: "-",
    whatsapp: "https://wa.me/62881036347273",
    priceRange: "Batagor Komplit (Rp 13.000), Cireng Isi (Rp 1.000), Siomay (Rp 1.500)",
    benefit: "Cocok Memenuhi kebutuhan Makanan",
    BPOM: "-",
    JUAL: "Batagor Komplit, Cireng Isi, Siomay"
  },
];
