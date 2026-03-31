let events = [
  {
    title: "Concert Sơn Tùng",
    desc: "Live concert cực cháy",
    category: "Nhạc sống",
    date: "2026-05-01",
    location: "Hà Nội",
    price: "500.000đ",
    hot: true,
    img: "https://picsum.photos/400/200?1"
  },
  {
    title: "Workshop AI",
    desc: "Học AI từ cơ bản",
    category: "Hội thảo & Workshop",
    date: "2026-04-20",
    location: "TP.HCM",
    price: "200.000đ",
    hot: false,
    img: "https://picsum.photos/400/200?2"
  }
];

// ===== RENDER =====
function renderEvents(filter = "all") {
  let list = document.getElementById("eventList");
  list.innerHTML = "";

  let filtered = events.filter(e =>
    filter === "all" || e.category === filter
  );

  filtered.forEach(e => {
    list.innerHTML += `
      <div class="card" onclick="goToBooking('${e.title}', '${e.date}', '${e.location}', '${e.price}', '${e.img}')">
        <div class="card-img">
          <img src="${e.img}">
          ${e.hot ? `<div class="tag">HOT</div>` : ""}
        </div>
        <div class="info">
          <h4>${e.title}</h4>
          <div class="meta">${e.date} • ${e.location}</div>
          <div class="bottom">
            <span class="price">${e.price}</span>
            <button class="buy-btn">Mua vé</button>
          </div>
        </div>
      </div>
    `;
  });
}

// ===== HOT =====
function renderHot() {
  let hotList = document.getElementById("hotList");
  hotList.innerHTML = "";

  events.filter(e => e.hot).forEach(e => {
    hotList.innerHTML += `
      <div class="card">
        <img src="${e.img}">
        <div class="info">
          <h4>${e.title}</h4>
        </div>
      </div>
    `;
  });
}

// ===== SEARCH =====
document.querySelector(".search-box").addEventListener("input", function () {
  let keyword = this.value.toLowerCase();

  let filtered = events.filter(e =>
    e.title.toLowerCase().includes(keyword)
  );

  let list = document.getElementById("eventList");
  list.innerHTML = "";

  filtered.forEach(e => {
    list.innerHTML += `
      <div class="card">
        <img src="${e.img}">
        <div class="info">
          <h4>${e.title}</h4>
        </div>
      </div>
    `;
  });
});

// ===== FILTER =====
function applyFilters() {
  let date = document.getElementById("filterDate").value;
  let location = document.getElementById("filterLocation").value;

  let filtered = events.filter(e =>
    (!date || e.date === date) &&
    (!location || e.location === location)
  );

  let list = document.getElementById("eventList");
  list.innerHTML = "";

  filtered.forEach(e => {
    list.innerHTML += `
      <div class="card">
        <img src="${e.img}">
        <div class="info">
          <h4>${e.title}</h4>
        </div>
      </div>
    `;
  });
}

// ===== MODAL =====
function openDetail(title, desc) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("title").innerText = title;
  document.getElementById("desc").innerText = desc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// ===== LOGIN =====
function openLogin() {
  document.getElementById("login").style.display = "block";
}

function closeLogin() {
  document.getElementById("login").style.display = "none";
}

// ===== CREATE EVENT =====
function openCreateEvent() {
  document.getElementById("createEventModal").style.display = "block";
}

function closeCreateEvent() {
  document.getElementById("createEventModal").style.display = "none";
}

function createEvent() {
  let newEvent = {
    title: document.getElementById("evTitle").value,
    desc: document.getElementById("evDesc").value,
    category: document.getElementById("evCategory").value,
    date: document.getElementById("evDate").value,
    location: document.getElementById("evLocation").value,
    price: document.getElementById("evPrice").value,
    hot: false,
    img: "https://picsum.photos/400/200?random=" + Math.random()
  };

  events.push(newEvent);

  renderEvents();
  closeCreateEvent();
}

function goToBooking(title, date, location, price, img) {
  const url = `booking.html?title=${encodeURIComponent(title)}
  &date=${encodeURIComponent(date)}
  &location=${encodeURIComponent(location)}
  &price=${encodeURIComponent(price)}
  &img=${encodeURIComponent(img)}`;

  window.location.href = url;
}

// INIT
renderEvents();
renderHot();