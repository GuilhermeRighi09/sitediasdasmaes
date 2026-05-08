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

function atualizarPagina() {
  
    fraseEl.style.opacity = 0;
    fraseEl.style.transform = "translateY(20px)";
    imagemEl.style.filter = "blur(10px) brightness(0.7)";

    setTimeout(() => {
        fraseEl.textContent = listaFrases[indiceAtual];
        imagemEl.src = listaImagens[indiceAtual];
        
        
        const progresso = ((indiceAtual + 1) / listaFrases.length) * 100;
        barraEl.style.width = `${progresso}%`;

        
        fraseEl.style.opacity = 1;
        fraseEl.style.transform = "translateY(0)";
        imagemEl.style.filter = "blur(0) brightness(1)";
    }, 400);
}

function proximaFoto() {
    indiceAtual = (indiceAtual + 1) % listaFrases.length;
    atualizarPagina();
}


window.onload = atualizarPagina;