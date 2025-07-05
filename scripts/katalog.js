// dom elements
const container = document.getElementById("umkm-container");
const filterNav = document.getElementById("category-filters");

// ambil kategori unik
const categories = ["Semua", ...new Set(umkmData.map(u => u.category))];

/*------------  RENDER FILTER BUTTONS  ----------------*/
categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.textContent = cat;
  btn.dataset.category = cat;
  if (cat === "Semua") btn.classList.add("active");
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(cat);
  });
  filterNav.appendChild(btn);
});

/*------------  RENDER UMKM CARDS  ----------------*/
function renderCards(filterCat = "Semua") {
  container.innerHTML = ""; // clear grid
  umkmData
    .filter(u => filterCat === "Semua" || u.category === filterCat)
    .forEach(u => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${u.photo}" alt="${u.name}" />
        <h3>${u.name}</h3>
      `;
      card.addEventListener("click", () => {
        // arahkan ke halaman detail
        location.href = `detail.html?id=${encodeURIComponent(u.id)}`;
      });
      container.appendChild(card);
    });
}

// tampilkan grid awal
renderCards();
