const header = document.querySelector('header');

document.addEventListener('scroll', () => {
  if (window.pageYOffset >= 600) {
    header.style.backgroundColor = "#222"
    header.style.transition = '.4s'
  } else {
    header.style.backgroundColor = "transparent" 
  }
})

