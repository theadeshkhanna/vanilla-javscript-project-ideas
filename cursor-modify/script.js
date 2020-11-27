const mouse = document.querySelector(".mouse");
const links = document.querySelectorAll(".nav-links");
const dot = document.querySelector(".dot");

window.addEventListener("mousemove", (e) => {
   mouse.style.top = e.pageY + "px";
   mouse.style.left = e.pageX + "px";
});

links.forEach(link => {
  link.addEventListener("mouseover", () => {
    mouse.classList.add("mouse-grow");
    dot.classList.add("dot-hover");
    link.classList.add("hovered-navi-links");
  });

    link.addEventListener("mouseleave", () => {
        mouse.classList.remove("mouse-grow");
        dot.classList.remove("dot-hover");
        link.classList.remove("hovered-navi-links");
    });
});
