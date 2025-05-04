document.addEventListener("DOMContentLoaded", () => {
    const counterEl = document.getElementById("visit-counter");
    const visits = localStorage.getItem("visits");
  
    let count = visits ? parseInt(visits, 10) : 0;
    count++;
  
    localStorage.setItem("visits", count);
    counterEl.textContent = count;
  });
  