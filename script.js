// ==============================
// Ultra Friendship Website Script
// ==============================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 2500);
});

// Friendship Quotes
const quotes = [
    "❤️ True friendship never ends.",
    "🌸 Friends make every moment beautiful.",
    "✨ Together forever, no matter the distance.",
    "💖 Jyoti, Khusboo & Roshani = Best Friends Forever.",
    "🥰 A real friend is a treasure.",
    "🌈 Friendship makes life colorful.",
    "💕 Happiness grows when shared with friends."
];

let quoteIndex = 0;
const quoteText = document.getElementById("quoteText");

setInterval(() => {
    quoteIndex++;

    if (quoteIndex >= quotes.length) {
        quoteIndex = 0;
    }

    quoteText.style.opacity = "0";

    setTimeout(() => {
        quoteText.innerHTML = quotes[quoteIndex];
        quoteText.style.opacity = "1";
    }, 500);

}, 3000);

// Friendship Timer
const startDate = new Date("2024-01-01");

function updateTimer() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("count").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

setInterval(updateTimer, 1000);

updateTimer();

// Surprise Button
document.getElementById("surprise").onclick = function () {

    alert("❤️ Forever Friends ❤️\n\nJyoti 🌸\nKhusboo 🌹\nRoshani ✨");

    createFireworks();

};

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = window.innerHeight;

    const move = setInterval(() => {

        pos -= 4;

        heart.style.top = pos + "px";

        if (pos < -50) {

            clearInterval(move);

            heart.remove();

        }

    }, 20);

}

setInterval(createHeart, 500);

// Fireworks Effect
function createFireworks() {

    for (let i = 0; i < 40; i++) {

        const spark = document.createElement("div");

        spark.style.position = "fixed";
        spark.style.width = "10px";
        spark.style.height = "10px";
        spark.style.borderRadius = "50%";
        spark.style.left = "50%";
        spark.style.top = "50%";
        spark.style.background =
            `hsl(${Math.random() * 360},100%,60%)`;

        document.body.appendChild(spark);

        const x = (Math.random() - 0.5) * 700;
        const y = (Math.random() - 0.5) * 700;

        spark.animate([
            {
                transform: "translate(0,0)",
                opacity: 1
            },
            {
                transform: `translate(${x}px,${y}px)`,
                opacity: 0
            }
        ], {
            duration: 1500
        });

        setTimeout(() => {
            spark.remove();
        }, 1500);

    }

}

// Cursor Sparkle
document.addEventListener("mousemove", (e) => {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";
    star.style.pointerEvents = "none";
    star.style.fontSize = "18px";

    document.body.appendChild(star);

    star.animate([
        {
            opacity: 1,
            transform: "scale(1)"
        },
        {
            opacity: 0,
            transform: "scale(2)"
        }
    ], {
        duration: 700
    });

    setTimeout(() => {
        star.remove();
    }, 700);

});

// Smooth Fade
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(100px)";
    section.style.transition = "1s";

});

// Welcome Message
setTimeout(() => {

    alert("💖 Welcome to the Friendship Website!\n\n❤️ Jyoti\n🌸 Khusboo\n✨ Roshani");

}, 3000);