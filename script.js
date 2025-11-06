
// WEB ANIMATION 
VANTA.NET({
  el: "#main",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xf50039,
  backgroundColor: 0x0,
  maxDistance: 22.00,
  spacing: 16.00
})


// navigation bar logic
let ham = document.querySelector(".ham")
let menu = document.querySelector(".menu")


ham.addEventListener("click" , ()=>{
    ham.classList.toggle("activeHam")
    menu.classList.toggle("activeMenu")
})