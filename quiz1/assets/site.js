document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const typedName = document.querySelector("#typed-name");
if (typedName) {
  const name = "Anang Ardhiansyah";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    typedName.textContent = name;
  } else {
    let index = 0;
    const typeNextCharacter = () => {
      typedName.textContent = name.slice(0, index);
      index += 1;
      if (index <= name.length) window.setTimeout(typeNextCharacter, 95);
    };
    typeNextCharacter();
  }
}

const currentPath = window.location.pathname.replace(/\/$/, "") || "/quiz1";
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  const targetPath = new URL(link.href).pathname.replace(/\/$/, "") || "/quiz1";
  if (targetPath === currentPath) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});
