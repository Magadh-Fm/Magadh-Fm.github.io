/* =========================================
   SECTION: PRELOADER & EMERGENCY CLEAR
   ========================================= */
function hidePreloader() {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        setTimeout(() => {
            preloader.style.display = "none";
            startTypewriter(); // Run this only after preloader is gone
        }, 800);
    }
}

// EMERGENCY: If page takes more than 4 seconds, force it open!
const backupTimer = setTimeout(hidePreloader, 4000);

window.addEventListener('load', function() {
    clearTimeout(backupTimer); // Cancel backup if site loads fast
    setTimeout(hidePreloader, 1000); // Normal hide
});

/* =========================================
   SECTION: TYPEWRITER EFFECT
   ========================================= */
function startTypewriter() {
    const textElement = document.querySelector(".typewriter-text");
    const brandName = "MAGADH FM";
    let index = 0;

    function type() {
        if (textElement && index < brandName.length) {
            textElement.innerHTML += brandName.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }
    type();
}

/* =========================================
   SECTION: NAVIGATION CONTROLS
   ========================================= */
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.style.width = (menu.style.width === "300px") ? "0" : "300px";
}

function toggleSearch() {
    document.getElementById('searchWrapper').classList.toggle('active');
}
