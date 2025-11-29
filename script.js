// Typewriter text
// Typewriter text
const message = "Wishing you a day filled with love, joy, and unforgettable moments! 🎉🎂";
let typeIndex = 0;

function typeWriter() {
    if (typeIndex < message.length) {
        document.getElementById("message").innerHTML += message.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 60);
    }
}
typeWriter();

// Draw hearts (confetti)
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];

for (let j = 0; j < 150; j++) {
    confettiPieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 2,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
        speed: Math.random() * 3 + 1
    });
}

function drawHeart(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + size / 4);
    ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 2, x, y + size);
    ctx.bezierCurveTo(x + size, y + size / 2, x + size / 2, y - size / 2, x, y + size / 4);
    ctx.fill();
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach(p => {
        drawHeart(p.x, p.y, p.size, p.color);
        p.y += p.speed;
        if (p.y > canvas.height) p.y = -10;
    });

    requestAnimationFrame(drawConfetti);
}
drawConfetti();

// Reveal surprise
document.getElementById("revealBtn").onclick = () => {
    document.getElementById("surprise").classList.remove("hidden");
};

// IMAGE SWAP
const firstImage = "myphoto1.jpeg";   
const secondImage = "myphoto2.jpeg";  

const img = document.getElementById("mainphoto");  // ✅ Corrected ID

let showingFirst = true;

img.onclick = () => {
    img.style.opacity = 0;

    setTimeout(() => {
        img.src = showingFirst ? secondImage : firstImage;
        showingFirst = !showingFirst;
        img.style.opacity = 1;
    }, 500);
};
