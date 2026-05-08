const listaFrases = [
    "Primeiro último dia de aula",
    "A arte no parque Van Gogh",
    "Mamãe 2 vezes ❤️",
    "Primeiro niver como vovó",
    "Formando os filhos",
    "Mamãe Corinthiana",
]

const listaImagens = [
    "fotos/f1.jpg",
    "fotos/f2.jpg",
    "fotos/f3.jpg",
    "fotos/f4.jpg",
    "fotos/f7.jpg",
    "fotos/f8.jpg",
]

const fraseElemento = document.getElementById('frase')
const imagemElemento = document.getElementById('imagem')
let indiceAtual = 0


fraseElemento.textContent = listaFrases[0]
imagemElemento.src = listaImagens[0]

function proximaFoto() {
    fraseElemento.style.opacity = 0;
    imagemElemento.style.opacity = 0;

    setTimeout(() => {
        indiceAtual++;
        
        if (indiceAtual >= listaFrases.length) {
            indiceAtual = 0;
        }

        fraseElemento.textContent = listaFrases[indiceAtual];
        imagemElemento.src = listaImagens[indiceAtual];

       
        fraseElemento.style.opacity = 1;
        imagemElemento.style.opacity = 1;
    }, 400); 
}