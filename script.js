const downloadBtn = document.getElementById("downloadBtn");
const downloadMenu = document.getElementById("downloadMenu");

// Toggle dropdown on click
downloadBtn.addEventListener("click", () => {
    downloadMenu.classList.toggle("hidden");
});

// Optional: Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!downloadBtn.contains(e.target) && !downloadMenu.contains(e.target)) {
        downloadMenu.classList.add("hidden");
    }
});



