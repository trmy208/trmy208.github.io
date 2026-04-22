const SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbx3vQyakJkFfJxkP5XAQ8fQkjmt5lnls2n4N3zjrEUL4JxYIzMumbGmPIZwOTzbjgO-OA/exec';

let allEvents = [];
let currentCategory = 'all';

// 1. Tải dữ liệu
async function fetchEvents() {
    try {
        const response = await fetch(SHEET_API_URL);
        allEvents = await response.json();
        renderEvents(allEvents);
        document.getElementById('loading')?.classList.add('hidden');
    } catch (error) {
        console.error("Lỗi:", error);
    }
}

// 2. Hiển thị Card
function renderEvents(events) {
    const grid = document.getElementById('eventGrid');
    if (!grid) return;
    grid.innerHTML = ''; 

    events.forEach(event => {
        const name = event.eventName || "Tên sự kiện";
        const img = event.eventImage || "https://via.placeholder.com/400x250";
        const time = event.time || "Đang cập nhật";
        const loc = event.location || "Đang cập nhật";
        const isHot = event.hasDiagram === "TRUE" || event.hasDiagram === true;
        const rawPrice = getMinPrice(event.priceList);
        let displayPrice = typeof rawPrice === 'number' ? "Từ " + formatCurrency(rawPrice) : rawPrice;

        const card = `
            <div onclick="goToDetail('${event.id}')" class="bg-white rounded-2xl overflow-hidden shadow-sm card-hover transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col">
                <div class="relative h-48 overflow-hidden">
                    <img src="${img}" class="w-full h-full object-cover" alt="${name}" onerror="this.src='https://via.placeholder.com/400x250'">
                    ${isHot ? '<span class="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">HOT</span>' : ''}
                </div>
                <div class="p-5 flex-grow flex flex-col">
                    <h3 class="font-bold text-gray-900 text-lg mb-2 line-clamp-2 h-14">${name}</h3>
                    <div class="text-sm text-gray-500 space-y-2 mb-4">
                        <p class="flex items-start"><i class="fa-regular fa-calendar-check mt-1 mr-2"></i><span>${time}</span></p>
                        <p class="flex items-start"><i class="fa-solid fa-location-dot mt-1 mr-2"></i><span>${loc}</span></p>
                    </div>
                    <div class="mt-auto flex justify-between items-center border-t pt-4">
                        <span class="text-red-500 font-bold text-lg">${displayPrice}</span>
                        <button class="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-600 hover:text-white">Mua vé</button>
                    </div>
                </div>
            </div>`;
        grid.insertAdjacentHTML('beforeend', card);
    });
}

// 3. Hàm lọc chính (Kết hợp Thể loại + Địa điểm + Miễn phí)
function applyTicketboxFilters() {
    const locRadio = document.querySelector('input[name="loc"]:checked');
    const locValue = locRadio ? locRadio.value : 'all';
    const isFreeOnly = document.getElementById('checkFree')?.checked;

    let filtered = allEvents;

    // Lọc Thể loại
    if (currentCategory !== 'all') {
        filtered = filtered.filter(e => e.category?.toString().trim().toLowerCase() === currentCategory.toLowerCase());
    }

    // Lọc Địa điểm
    if (locValue !== 'all' && locValue !== 'Toàn quốc') {
        filtered = filtered.filter(e => e.location?.toLowerCase().includes(locValue.toLowerCase()));
    }

    // Lọc Miễn phí
    if (isFreeOnly) {
        filtered = filtered.filter(e => getMinPrice(e.priceList) === "Miễn phí");
    }

    renderEvents(filtered);
}

// 4. Các hàm bổ trợ lọc
function filterCategory(category, el) {
    currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('text-pink-400', 'border-pink-400');
        btn.classList.add('text-gray-400');
    });
    if (el) el.classList.add('text-pink-400', 'border-pink-400');
    const title = document.getElementById('categoryTitle');
    if (title) title.innerText = category === 'all' ? 'Tất cả sự kiện' : category;
    applyTicketboxFilters();
}

function filterByCity(cityName) {
    const txt = document.getElementById('location-text');
    if (txt) txt.textContent = cityName;
    const val = (cityName === 'Toàn quốc') ? 'all' : cityName;
    const radio = document.querySelector(`input[name="loc"][value="${val}"]`) || document.querySelector(`input[name="loc"][value="${cityName}"]`);
    if (radio) radio.checked = true;
    
    applyTicketboxFilters();
    document.getElementById('location-dropdown')?.classList.add('hidden');
}

// 5. Đóng mở Dropdown (Sửa lỗi không hiện list)
function toggleDropdown(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const isHidden = el.classList.contains('hidden');
    
    // Đóng hết các cái khác
    document.getElementById('location-dropdown')?.classList.add('hidden');
    document.getElementById('dropdownMain')?.classList.add('hidden');
    document.getElementById('dropdownDate')?.classList.add('hidden');

    if (isHidden) el.classList.remove('hidden');
}

// 6. Tiện ích giá & tiền
function getMinPrice(p) {
    if (!p || p.toString().toLowerCase().includes("miễn phí")) return "Miễn phí";
    const nums = p.toString().replace(/\./g, '').match(/\d{4,}/g);
    return nums ? Math.min(...nums.map(Number)) : (p.toString().includes("0") ? "Miễn phí" : "Liên hệ");
}
function formatCurrency(v) { return new Intl.NumberFormat('vi-VN').format(v) + " đ"; }
function goToDetail(id) { if(id) window.location.href = `detail.html?id=${id}`; }

// Khởi chạy
document.addEventListener('DOMContentLoaded', () => {
    fetchEvents();
    
    // Gán sự kiện cho các radio sidebar
    document.querySelectorAll('input[name="loc"], #checkFree').forEach(i => {
        i.onchange = applyTicketboxFilters;
    });

    // Gán sự kiện click cho các tỉnh thành trong Header list
    document.querySelectorAll('.location-option').forEach(opt => {
        opt.onclick = function(e) {
            e.stopPropagation();
            const city = this.dataset.city || this.innerText.trim();
            filterByCity(city);
        };
    });
});

// Click ra ngoài thì đóng
window.onclick = function(e) {
    if (!e.target.closest('.relative') && !e.target.closest('#location-btn')) {
        document.querySelectorAll('.absolute').forEach(el => {
            if (el.id !== 'search-suggestions') el.classList.add('hidden');
        });
    }
};