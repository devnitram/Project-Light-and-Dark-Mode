function changeTheme() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  // pegar a tag img
  const image = document.querySelector("#profile img")

  //depois de pegar substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    image.setAttribute('src', './assets/bg-white.avif')
  } else {
    // se tiver sem o light mode, manter a imagem normal
    image.setAttribute('src', './assets/bg-black.jpg')
  }


  // if(html.classList.contains('light)) {
  //    html.classList.remove('light')
  //  } else {
    // html . classList.add('light')
  // }



}