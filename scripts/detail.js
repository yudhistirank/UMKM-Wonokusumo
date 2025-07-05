// helper: ambil query ?id=...
function getQueryParam(name) {
  return new URLSearchParams(location.search).get(name);
}

const id = getQueryParam("id");
const umkm = umkmData.find(u => u.id === id);

if (!umkm) {
  document.getElementById("detail-section").innerHTML =
    "<p>UMKM tidak ditemukan.</p>";
} else {
  document.title = umkm.name;

  // isi elemen
  document.getElementById("detail-photo").src = umkm.photo;
  document.getElementById("detail-photo").alt = umkm.name;
  document.getElementById("detail-name").textContent = umkm.name;
  document.getElementById("detail-address").textContent = umkm.address;
  document.getElementById("detail-phone").textContent = umkm.phone;
  document.getElementById("detail-price").textContent = umkm.priceRange;
  document.getElementById("detail-benefit").textContent = umkm.benefit;


  // NIB optional
  if (umkm.nib) {
    document.getElementById("detail-nib").textContent = umkm.nib;
  } else {
    document.getElementById("nib-row").style.display = "none";
  }

  // Whatsapp
  const wa = document.getElementById("whatsapp-link");
  wa.href = umkm.whatsapp;
  wa.textContent = "Hubungi " + umkm.name + " via WhatsApp";
}
