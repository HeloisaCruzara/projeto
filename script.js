function toggleMode() {
  const html = document.documentElement
  html.classList.toggle(`light`)

  /*pode usar assim tbm if (html.classList.contains(`light`)) {
    html.classList.remove(`light`)
  } else {
    html.classList.add(`light`)
  } */

  // pegar a tag img
  // substiruir a image

  const img = document.querySelector("#profile img")

  if (html.classList.contains(`light`)) {
    img.setAttribute("src", "./assets/newavatar.png")
  } else {
    img.setAttribute("src", "./assets/avatar-darkmode.png")
  }
}
