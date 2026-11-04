document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      console.log("Seção acessada:", link.textContent.trim());
    });
  });
});
