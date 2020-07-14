
const Width = window.innerWidth;
const actived = true;

window.onresize = () => {
  if (Width <= 1180) {
    titles()
  }
}

function titles() {
  if (actived) {
    const TitleWoman = document.createElement('h2');
    TitleWoman.innerHTML = 'WHO';
    document.querySelector('.woman .container').appendChild(TitleWoman);
    TitleWoman.style.fontSize = '100px';
  } else {
    return null;
  }
}

/*
TIRAR E COLOCAR OS DISPLAY, PARA VER E O H2
SAI NA PARTE DE CIMA.
*/