let active = false;

window.addEventListener("load", () => {
  // Obtenemos el tamanio de la pantalla al momento de cargar la pa'gina
  let height = screen.availHeight;
  let width = screen.availWidth;

  // Obtenemos los elmentos necesarios
  let $btnMenu = document.querySelector("#menu");
  let $closeMenu = document.querySelector("#close-menu");
  let nav = document.querySelector(".responsive-nav");
  // Usamos las medidas que obtuvimos para darle un tamanio al nav
  nav.style.width = `${width}px`;
  nav.style.height = `${height}px`;

  // Un simple toggle
  $btnMenu.addEventListener("click", () => {
    if (!active) {
      nav.classList.toggle("visible");
      // Para evitar el scroll
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
    } else {
      nav.classList.toggle("visible");
    }

    active = !active;
    // Para activar el scroll
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  });

  // Cerrar el menu
  $closeMenu.addEventListener("click", () => {
    active = false;
    nav.classList.toggle("visible");
  });
});
