
const hamburger =document.querySelector(".menu_icon")

const Navmenu = document.querySelector(".nav-menu");



hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  Navmenu.classList.toggle("active");
})

document.querySelectorAll("a").forEach(n => n.addEventListener("click",() => {
  hamburger.classList.remove("active")
  Navmenu.classList.remove("active")
 
}))