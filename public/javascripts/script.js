// Animate on Screen
AOS.init();

// Toggle navbar
window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  const toTopIcon = document.getElementById("to-top");
  const whatsappIcon = document.getElementById("whatsapp");

  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    document.getElementById("navbar").style.top = "-100px";
    toTopIcon.classList.add("slide-left");
    whatsappIcon.classList.add("slide-left");
  } else {
    document.getElementById("navbar").style.top = "0";
    toTopIcon.classList.remove("slide-left");
    whatsappIcon.classList.remove("slide-left");
  }
}


// const pos = { x: 0, y: 0 };

// const saveCursorPosition = function (x, y) {
//   pos.x = (x / window.innerWidth).toFixed(2);
//   pos.y = (y / window.innerHeight).toFixed(2);
//   document.documentElement.style.setProperty('--x', pos.x);
//   document.documentElement.style.setProperty('--y', pos.y);
// }

// document.addEventListener('mousemove', e => {
//   saveCursorPosition(e.clientX, e.clientY);
//   console.log(e.clientX, e.clientY);
// })