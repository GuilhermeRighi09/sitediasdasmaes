// Configurações do Álbum
const listaFrases = [
    "Primeiro último dia de aula",
    "A arte no parque Van Gogh",
    "Mamãe 2 vezes ❤️",
    "Primeiro niver como vovó",
    "Formando os filhos",
    "Mamãe Corinthiana"
];

const listaImagens = [
    "fotos/f1.jpg",
    "fotos/f2.jpg",
    "fotos/f3.jpg",
    "fotos/f4.jpg",
    "fotos/f7.jpg",
    "fotos/f8.jpg"
];

let indiceAtual = 0;
const fraseEl = document.getElementById('frase');
const imagemEl = document.getElementById('imagem');
const barraEl = document.getElementById('barra-progresso');

// --- CONTROLE DE MÚSICA VIA JS ---
const musica = new Audio('som.mp3');
musica.loop = true;

const musicBtn = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');
const musicText = document.querySelector('.music-text');

musicBtn.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        musicIcon.textContent = "⏸️";
        musicText.textContent = "Pausar";
        musicBtn.classList.add('tocando');
    } else {
        musica.pause();
        musicIcon.textContent = "🎵";
        musicText.textContent = "Tocar Música";
        musicBtn.classList.remove('tocando');
    }
});

// --- LÓGICA DO ÁLBUM ---
function atualizarPagina() {
    // Efeito de transição
    fraseEl.style.opacity = 0;
    fraseEl.style.transform = "translateY(20px)";
    imagemEl.style.filter = "blur(10px) brightness(0.7)";

    setTimeout(() => {
        fraseEl.textContent = listaFrases[indiceAtual];
        imagemEl.src = listaImagens[indiceAtual];
        
        // Atualiza Barra de Progresso
        const progresso = ((indiceAtual + 1) / listaFrases.length) * 100;
        barraEl.style.width = `${progresso}%`;

        // Volta os elementos
        fraseEl.style.opacity = 1;
        fraseEl.style.transform = "translateY(0)";
        imagemEl.style.filter = "blur(0) brightness(1)";
    }, 400);
}

function proximaFoto() {
    indiceAtual = (indiceAtual + 1) % listaFrases.length;
    atualizarPagina();
}

// Evento de clique na imagem
document.querySelector('.moldura-interativa').addEventListener('click', proximaFoto);

// Iniciar página
window.onload = atualizarPagina;