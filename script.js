const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");

btn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", open ? "true" : "false");
});
