// 1. Configuração do Álbum
const fotos = [
    { url: 'fotos/f1.jpg', legenda: 'Você é a luz dos meus dias ✨' },
    { url: 'fotos/f2.jpg', legenda: 'O sorriso mais lindo que conheço ❤️' },
    { url: 'fotos/f3.jpg', legenda: 'Minha maior inspiração 💪' },
    { url: 'fotos/f4.jpg', legenda: 'Te amo daqui até a eternidade 🌸' }
];

const slider = document.getElementById('slider');
const sliderCaption = document.getElementById('slider-caption');
let currentIndex = 0;

// Renderizar Slides
fotos.forEach((foto, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `<img src="${foto.url}" onclick="abrirModal('${foto.url}', '${foto.legenda}')">`;
    slider.appendChild(slide);
});

// Loop Automático
function proximoSlide() {
    currentIndex = (currentIndex + 1) % fotos.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    sliderCaption.style.opacity = 0;
    setTimeout(() => {
        sliderCaption.innerText = fotos[currentIndex].legenda;
        sliderCaption.style.opacity = 1;
    }, 400);
}

setInterval(proximoSlide, 4000);
sliderCaption.innerText = fotos[0].legenda;

// 2. Lógica do Modal (Ampliação)
const modal = document.getElementById('modal');
const imgAmpliada = document.getElementById('img-ampliada');
const modalCaption = document.getElementById('modal-caption');

function abrirModal(src, legenda) {
    modal.style.display = "block";
    imgAmpliada.src = src;
    modalCaption.innerText = legenda;
}

function fecharModal() {
    modal.style.display = "none";
}

// 3. Música
const musica = new Audio('som.mp3');
musica.loop = true;
const btnM = document.getElementById('music-btn');

btnM.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        btnM.innerHTML = "⏸️";
        btnM.style.background = "#ff8fa3";
    } else {
        musica.pause();
        btnM.innerHTML = "🎵";
        btnM.style.background = "#800f2f";
    }
});

// 4. Efeito de Aparição (Scroll)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));