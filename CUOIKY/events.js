let events = [
  {
    id: 26,
    title: "Concert Anh Trai Say hi",
    desc: "Live concert cực cháy",
    category: "Nhạc sống",
    date: "2026-04-18",
    location: "TP HCM",
    price: "1.000.000đ",
    hot: true,
    img: "anhtraisayhi.jpeg"
  },
  {
    title: "Concert Tổ quốc 30/4 - 1/5",
    desc: "Live concert Tổ quốc",
    category: "Nhạc sống",
    date: "2026-04-30",
    location: "Quảng trường Ba Đình",
    price: "Miễn phí",
    hot: true,
    img: "concerttoquoc.jpg"
  },
  {
    title: "Triển lãm Harry Potter: Trải nghiệm phép thuật",
    desc: "Triển lãm phép thuật",
    category: "Tham quan & Trải nghiệm",
    date: "2026-07-31",
    location: "Bảo tàng Harry Potter",
    price: "200.000đ",
    hot: true,
    img: "harrypotter.jpeg"
  },
  {
    title: "Bảo tàng chiêm tinh học",
    desc: "Khám phá vũ trụ",
    category: "Tham quan & Trải nghiệm",
    date: "2026-06-19",
    location: "Hòa Lạc, Hà Nội",
    price: "150.000đ",
    hot: true,
    img: "chiemtinh.jpeg"
  },
  {
    title: "GreenGreen Cortis",
    desc: "Live concert cực cháy",
    category: "Nhạc sống",
    date: "2026-04-20",
    location: "Vincom Center",
    price: "300.000đ",
    hot: true,
    img: "cortis.jpg"
  },
  { 
    id: 1, 
    title: "Concert Blackpink: World Tour",
    desc: "Live concert Blackpink", 
    category: "Nhạc sống", 
    date: "2026-03-21", 
    location: "Sân Mỹ Đình", 
    price: "2.500.000đ", 
    hot: true, 
    img: "blackpink.jpeg" 
  },
  {
    id: 2,
    title: "Workshop: Art Therapy - Vẽ Pastel",
    desc: "Trải nghiệm vẽ pastel",
    category: "Tham quan & Trải nghiệm",
    date: "2026-03-21",
    location: "EventHub Studio",
    price: "Miễn phí",
    hot: false,
    img : "",
  },
  {
    id: 3,
    title: "Vietnam Tech Expo: AI & Future",
    desc: "Triển lãm công nghệ AI",
    category: "Tham quan & Trải nghiệm",
    date: "2026-03-05",
    location: "VNU Innovation Hub",
    price: "Miễn phí",
    hot: false,
    img: "",
  },
  {
    id: 4,
    title: "Giải Bóng đá MB Hanoi Cup 2026",
    desc: "Giải bóng đá hấp dẫn nhất Hà Nội",
    category: "Thể thao",
    date: "2026-03-25",
    location: "Sân Mỹ Đình",
    price: "200.000đ",
    hot: true,
    img: "mbhanoicup.jpeg"
  },
  {
    id: 5,
    title: "Đêm Nhạc Trịnh: Nối Vòng Tay Lớn",
    desc: "Đêm nhạc tưởng nhớ Trịnh Công Sơn",
    category: "Nhạc sống",
    date: "2026-03-28",
    location: "Nhà hát Lớn Hà Nội",
    price: "800.000đ",
    hot: true,
    img: "trinhcongson.jpeg"
  },
  {
    id: 6,
    title: "Tech Talk: Web3 & Blockchain",
    desc: "Hội thảo về Web3 và Blockchain",
    category: "Tham quan & Trải nghiệm",
    date: "2026-03-12",
    location: "Quận 1, TP.HCM",
    price: "150000đ",
    hot: false,
    img: "",
  },
  {
    id: 7,
    title: "VNU Fintech Forum 2026",
    desc: "Diễn đàn Fintech hàng đầu Việt Nam",
    category: "Tham quan & Trải nghiệm",
    date: "2026-03-05",
    location: "VNU-IS Hall",
    price: "Miễn phí",
    hot: false,
    img: "",
  },
  {
    id: 8,
    title: "Vietnam Cosplay Festival 2026",
    desc: "Lễ hội cosplay lớn nhất Việt Nam",
    category: "Tham quan & Trải nghiệm",
    date: "2026-04-10",
    location: "Công viên Thống Nhất",
    price: "120.000đ",
    hot: true,
    img: "anhtraisayhi.jpeg"
  },
  {
    id: 9,
    title: "Marathon Vì Cộng Đồng - UpRace",
    category: "Thể thao",
    date: "2026-03-15",
    location: "Hồ Gươm",
    price: "Miễn phí",
    hot: true,
    img: "marathon.jpeg"
  },
  {
    id: 10,
    title: "Vietnam Fintech Summit 2026",
    desc: "Hội nghị thượng đỉnh Fintech Việt Nam",
    category: "Tham quan & Trải nghiệm",
    date: "2026-03-15",
    location: "Lotte Center Hà Nội",
    price: "500.000đ",
    hot: true,
    img: "",
  },
  {
    id: 11,
    title: "VCS League Championship (LOL)",
    desc: "Giải đấu Liên Minh Huyền Thoại lớn nhất Việt Nam",
    category: "Thể thao",
    date: "2026-03-30",
    location: "GG Stadium",
    price: "100.000đ",
    hot: true,
    img: "vcs.jpeg"
  },
  {
    id: 12,
    title: "Triển lãm Vietnam Auto Expo",
    desc: "Triển lãm ô tô lớn nhất Việt Nam",
    category: "Tham quan & Trải nghiệm",
    date: "2026-04-20",
    location: "SECC Quận 7",
    price: "50.000đ",
    hot: true,
    img: "autoexpo.jpeg",
  },
];

// ===== RENDER =====
function renderEvents(filter = "all") {
  let list = document.getElementById("eventList");
  list.innerHTML = "";

document.querySelector(".prev").onclick = () => {
  slider.scrollLeft -= 300;
};

  let filtered = events.filter(e =>
    filter === "all" || e.category === filter
  );

  filtered.forEach(e => {
    list.innerHTML += `
      <div class="card" onclick="goToanhtraisayhi('${e.title}', '${e.date}', '${e.location}', '${e.price}', '${e.img}')">
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

function goToanhtraisayhi(title, date, location, price, img) {
  const url = `anhtraisayhi.html?title=${encodeURIComponent(title)}
  &date=${encodeURIComponent(date)}
  &location=${encodeURIComponent(location)}
  &price=${encodeURIComponent(price)}
  &img=${encodeURIComponent(img)}`;

  window.location.href = url;
}

// INIT
renderEvents();
renderHot();

const slider = document.querySelector(".slider");

document.querySelector(".next").onclick = () => {
  slider.scrollLeft += 300;
};

document.querySelector(".prev").onclick = () => {
  slider.scrollLeft -= 300;
};