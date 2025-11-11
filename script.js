document.addEventListener("DOMContentLoaded", () => {
  const lightBtn = document.getElementById("lightBtn");
  const darkBtn = document.getElementById("darkBtn");

  lightBtn.addEventListener("click", () => {
    document.body.classList.remove("dark");
    lightBtn.classList.add("active");
    darkBtn.classList.remove("active");
  });

  darkBtn.addEventListener("click", () => {
    document.body.classList.add("dark");
    darkBtn.classList.add("active");
    lightBtn.classList.remove("active");
  });
});

