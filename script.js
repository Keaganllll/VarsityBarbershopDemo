// Highlight active nav link
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a => {
    const href = a.getAttribute("href");
    if(href === path) a.classList.add("active");
  });
})();

// Mobile menu toggle
function toggleMenu(){
  const nav = document.getElementById("siteNav");
  nav.classList.toggle("open");
}

// Close menu when clicking a nav link (mobile)
document.addEventListener("click", (e) => {
  const nav = document.getElementById("siteNav");
  const btn = document.getElementById("menuBtn");
  if(!nav || !btn) return;

  if(e.target.matches("nav a")) nav.classList.remove("open");
  if(!nav.contains(e.target) && e.target !== btn) nav.classList.remove("open");
});

// Maps modal: show Apple + Google choices
function openDirections(address){
  const backdrop = document.getElementById("mapModalBackdrop");
  const apple = document.getElementById("appleMapsLink");
  const google = document.getElementById("googleMapsLink");

  const q = encodeURIComponent(address);

  // Apple Maps
  apple.href = `https://maps.apple.com/?q=${q}`;

  // Google Maps
  google.href = `https://www.google.com/maps/search/?api=1&query=${q}`;

  backdrop.style.display = "flex";
}

function closeDirections(){
  const backdrop = document.getElementById("mapModalBackdrop");
  backdrop.style.display = "none";
}
