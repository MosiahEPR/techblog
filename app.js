/* ========= INTERSECTION OBSERVER ========= */
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

// observe only fade-in elements (cards and main blocks that have that class)
document.querySelectorAll(".fade-in").forEach(el => io.observe(el));


/* ========= TILT 3D - REMOVED =========
   El efecto que movía .card-inner con el mouse fue eliminado
   para evitar que el texto se cortara. No hay listeners de mouse aquí.
*/


/* ========= TRANSICIÓN DE PÁGINA ========= */
document.addEventListener("click", e => {
  const a = e.target.closest("a");
  if (!a) return;

  const href = a.getAttribute("href");
  if (!href || href.startsWith("#")) return; // No interrumpir scroll interno
  if (href.startsWith("http")) return;

  e.preventDefault();
  document.body.style.opacity = "0";
  setTimeout(() => { window.location.href = href; }, 250);
});

/* ========= SCROLL SUAVE ========= */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
