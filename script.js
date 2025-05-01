function changeTheme() {
  const html = document.documentElement
  html.classList.toggle("light")

  const image = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    image.setAttribute("src", "/darkmode-lightmode/assets/bg-white.avif")
  } else {
    image.setAttribute("src", "/darkmode-lightmode/assets/bg-black.jpg")
  }
}