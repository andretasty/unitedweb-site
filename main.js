const WHATSAPP = "5544999604289";

document.querySelectorAll("[data-wa]").forEach((a) => {
  const msg = a.dataset.wa || "Olá! Vim pelo site da UnitedWeb.";
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  a.target = "_blank";
  a.rel = "noopener";
  a.addEventListener("click", () => {
    if (typeof gtag === "function") gtag("event", "contato_whatsapp", { origem: location.pathname });
  });
});

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
document.querySelectorAll("[data-since]").forEach((el) => (el.textContent = new Date().getFullYear() - 2019));
