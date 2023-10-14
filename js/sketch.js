let hoverText;
const offset = 25;
let windowWidth = window.innerWidth - offset;
let mousePos = { x: undefined, y: undefined };
let counter = 0;

window.onload = function () {
  // SETUP
  hoverText = document.createElement("div");
  hoverText.id = "hover-text";
  document.body.appendChild(hoverText);
  hoverText.classList.add("cover-hover-text")
  hoverText.innerHTML = "";
  hoverText.style.display = "none";

  // carregar informações dependendo da página
  if (window.workHover) workHover();
  if (window.sketchesHover) sketchesHover();

  // DESKTOP
  if (window.innerWidth > 500) {
    window.addEventListener('mousemove', (event) => {
      mousePos = { x: event.pageX, y: event.pageY };
      hoverText.style.display = "block";
    });

    // atualizar posição em tempo real
    let clientScrollY = 0;
    document.addEventListener('mousemove', (event) => clientScrollY = event.clientY);
    document.addEventListener('scroll', () => mousePos.y = window.scrollY + clientScrollY);

    // RUN
    setInterval(() => {
      hoverTextWidth = hoverText.offsetWidth;
      windowWidth = window.innerWidth - offset + 20;
      if (mousePos.x < windowWidth - hoverTextWidth - offset) {
        hoverText.style.left = (mousePos.x + offset) + "px";
        hoverText.style.top = mousePos.y + "px";
      } else {
        hoverText.style.left = (mousePos.x - offset - hoverTextWidth) + "px";
        hoverText.style.top = mousePos.y + "px";
      }
    }, 1)
  }
  // MOBILE
  // else {
  //   window.addEventListener('touchmove', (e) => updateMobilePosition(e));
  //   window.addEventListener('touchstart', (e) => { updateMobilePosition(e); counter = 1; });
  //   window.addEventListener('touchend', () => { counter = 0; hoverText.style.display = "none" });

  //   function updateMobilePosition(e) {
  //     let event = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
  //     let touch = event.touches[0] || event.changedTouches[0];
  //     mousePos = { x: touch.pageX, y: touch.pageY };
  //   }

  //   // RUN
  //   setInterval(() => {
  //     if (counter > 0 && counter <= 100) {
  //       counter++;
  //       hoverText.style.display = "none";
  //     }
  //     if (counter > 100) {
  //       hoverText.style.display = "block";
  //       hoverTextWidth = hoverText.offsetWidth;
  //       windowWidth = window.innerWidth - offset;
  //       hoverText.style.left = (Math.min(Math.max(mousePos.x - hoverTextWidth / 2, 0), windowWidth - hoverTextWidth + offset)) + "px";
  //       hoverText.style.top = (mousePos.y - 3 * offset) + "px";
  //     }
  //   }, 1)
  // }
}