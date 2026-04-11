/* Trong script.js */
const video = document.getElementById("eventVideo");
const music = document.getElementById("bgMusic");

// Hàm này sẽ chạy ngay khi trang tải xong
window.onload = () => {
    video.style.display = "block";
    video.currentTime = 0;
    
    video.play().catch(error => {
        console.log("Trình duyệt chặn tự động phát: ", error);
    });

    music.muted = false;
    music.play().catch(() => {
        console.log("Nhạc chờ tương tác người dùng để phát.");
    });

    // Hiệu ứng âm lượng tăng dần (Fade-in)
    music.volume = 0;
    let vol = 0;
    let fade = setInterval(() => {
        if (vol < 0.7) {
            vol += 0.05;
            music.volume = vol;
        } else clearInterval(fade);
    }, 100);
};

/* VIDEO END */
video.onended = () => {
    video.style.display = "none";
    finalScreen.style.display = "block";
};

/* 🇻🇳 FLAG WAVE + STAR SHAKE */
const wave = document.getElementById("wave");
const star = document.getElementById("star");

let t = 0;

function animateFlag() {
    t += 0.05;

    let path = "M0 0 ";
    for (let x = 0; x <= 600; x += 20) {
        let y = 20 * Math.sin((x * 0.02) + t);
        path += `L${x} ${y} `;
    }
    path += "L600 400 L0 400 Z";

    wave.setAttribute("d", path);

    // ⭐ sao lắc nhẹ
    let offset = Math.sin(t) * 5;
    star.setAttribute("transform", `translate(${offset},0)`);

    requestAnimationFrame(animateFlag);
}
animateFlag();

/* 🎆 FIREWORK PRO */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];
let particles = [];

/* 🎯 rocket bay lên */
function Firework() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.targetY = Math.random() * canvas.height / 2;

    this.speed = 5;
    this.color = `hsl(${Math.random()*360},100%,60%)`;
}

Firework.prototype.update = function () {
    this.y -= this.speed;

    // vệt sáng
    ctx.beginPath();
    ctx.moveTo(this.x, this.y + 10);
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = this.color;
    ctx.stroke();

    // tới điểm nổ
    if (this.y <= this.targetY) {
        explode(this.x, this.y, this.color);
        return false;
    }
    return true;
};

/* 💥 nổ */
function explode(x, y, color) {
    for (let i = 0; i < 80; i++) {
        particles.push({
            x,
            y,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 6,
            life: 100,
            color
        });
    }
}

/* ✨ hạt */
function updateParticles() {
    particles.forEach((p, i) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.speed *= 0.96;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
    });
}

/* 🎬 animation */
function animateFireworks() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // rocket
    fireworks = fireworks.filter(f => f.update());

    // particles
    updateParticles();

    requestAnimationFrame(animateFireworks);
}

/* 🚀 tạo pháo */
setInterval(() => {
    fireworks.push(new Firework());
}, 500);

// sau 5s chuyển trang
setTimeout(() => {
  window.location.href = "anhtraisayhi.html";
}, 5000);

animateFireworks();
