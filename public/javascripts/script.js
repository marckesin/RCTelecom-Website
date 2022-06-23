// Animate on Screen
// eslint-disable-next-line no-undef
AOS.init();

const scrollFunction = () => {
  const toTopIcon = document.getElementById("to-top");
  const whatsappIcon = document.getElementById("whatsapp");
  const { scrollTop } = document.body;

  if (scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    document.getElementById("navbar").style.top = "-100px";
    toTopIcon.classList.add("slide-left");
    whatsappIcon.classList.add("slide-left");
  } else {
    document.getElementById("navbar").style.top = "0";
    toTopIcon.classList.remove("slide-left");
    whatsappIcon.classList.remove("slide-left");
  }
};

// Toggle navbar
window.onscroll = () => scrollFunction();
