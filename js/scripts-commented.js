const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

// função de pulo com qualquer tecla do teclado.
const keyboardJump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

// Vai verificar se o Mario vai bater no tubo e dar game Over.
const verifyPipePosition = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

  // se o tubo for menor ou igual a 120px
  // e a posição do pipe for maior que 0
  // e a posição do mario for menor que 80px
  // então game over.

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    // para a animação do tubo no game over;
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    // pega a posição do mario e deixa rente ao tubo e para a animação dele;
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    // troca a imagem do mario para o mario Game over.
    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.left = "50px";

    // Para o looping quando o jogo acabar.
    clearInterval(loop);
  }
}, 10);

// qualquer tecla que eu clicar vai chamar a função de pulo.
document.addEventListener("keydown", keyboardJump);
