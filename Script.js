/* =========================================
   MAGADH FM - OFFICIAL ENGINE (script.js)
   ========================================= */

// 1. FIREBASE CONFIGURATION
const firebaseConfig = {
    apiKey: "AIzaSyCx9NEijeMktE0Zpgid1dTV7j8mP9ITl7s",
    authDomain: "magadh-fm.firebaseapp.com",
    projectId: "magadh-fm",
    storageBucket: "magadh-fm.firebasestorage.app",
    messagingSenderId: "553225595463",
    appId: "1:553225595463:web:5ff0107427421ffbbd9f62",
    measurementId: "G-B0H73PX3TR"
};

// Initialize Firebase with Error Catching
try {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    console.log("🔥 Empire Connected: Firebase Active");
} catch (e) {
    console.error("Firebase connection failed. Check your API keys.", e);
}

// 2. SMART TYPEWRITER EFFECT
// This looks at the page title to decide what text to type out
// 2. SMART TYPEWRITER (Full Category Support)
const textElement = document.querySelector(".typewriter-text");
let brandName = "MAGADH FM"; 

if (document.title.includes("About")) {
    brandName = "THE CREATOR";
} else if (document.title.includes("| Magadh FM")) {
    // This pulls whatever you put before the "|" in your <title>
    // e.g. <title>Adventure Stories | Magadh FM</title> types "ADVENTURE STORIES"
    brandName = document.title.split('|')[0].trim().toUpperCase();
}

let index = 0;
function typeEffect() {
    if (textElement && index < brandName.length) {
        textElement.innerHTML += brandName.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

// 3. SIDEBAR NAVIGATION LOGIC
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    // This allows for a smooth toggle on every click
    if (menu.style.width === "300px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "300px";
    }
}

// 4. THE ULTIMATE PRELOADER (Fixes the "stuck" or "blinking" issue)
window.addEventListener('load', function() {
    const preloader = document.getElementById("preloader");
    
    if (preloader) {
        // Step 1: Hold the logo for 1.8 seconds (shows off your pulse animation)
        setTimeout(() => {
            // Step 2: Fade out using JS styles (safer than classList)
            preloader.style.transition = "opacity 0.8s ease, visibility 0.8s";
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            
            // Step 3: Remove from layout so buttons are clickable
            setTimeout(() => {
                preloader.style.display = "none";
                
                // Step 4: Start the typewriter text once the screen is clear
                typeEffect();
            }, 800); 
        }, 1800);
    }
});
// Toggle Search Box Expansion
function toggleSearch() {
    const container = document.getElementById('searchContainer');
    container.classList.toggle('active');
    if (container.classList.contains('active')) {
        document.getElementById('siteSearch').focus();
    }
}

// Search Functionality
const categories = [
    { name: "Horror", url: "horror.html" },
    { name: "Magic", url: "magic.html" },
    { name: "Thriller", url: "thriller.html" },
    { name: "Action", url: "action.html" },
    { name: "About Me", url: "about.html" }
];

document.getElementById('siteSearch').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    const dropdown = document.getElementById('searchDropdown');
    
    if (term.length > 0) {
        const filtered = categories.filter(cat => cat.name.toLowerCase().includes(term));
        dropdown.innerHTML = filtered.map(cat => `<a href="${cat.url}">${cat.name}</a>`).join('');
        dropdown.style.display = 'flex';
    } else {
        dropdown.style.display = 'none';
    }
});
// 1. Toggle Search Expansion
function toggleSearch() {
    const wrapper = document.getElementById('searchWrapper');
    const input = document.getElementById('searchInput');
    
    wrapper.classList.toggle('active');
    
    if (wrapper.classList.contains('active')) {
        input.focus();
    } else {
        input.value = "";
        document.getElementById('searchDropdown').style.display = 'none';
    }
}

// 2. Search Database
const siteRealms = [
    { name: "Horror Realm", url: "horror.html" },
    { name: "Magic Realm", url: "magic.html" },
    { name: "Thriller Realm", url: "thriller.html" },
    { name: "Action Realm", url: "action.html" },
    { name: "Fantasy Realm", url: "fantasy.html" },
    { name: "Sci-Fi Realm", url: "scifi.html" },
    { name: "Re-incarnation", url: "reincarnation.html" },
    { name: "Mythology", url: "mythology.html" },
    { name: "Mystery", url: "mystery.html" },
    { name: "Adventure", url: "adventure.html" },
    { name: "About Creator", url: "about.html" }
];

// 3. Search Logic
document.getElementById('searchInput').addEventListener('input', function(e) {
    const value = e.target.value.toLowerCase();
    const dropdown = document.getElementById('searchDropdown');
    
    if (value.length > 0) {
        const matches = siteRealms.filter(realm => 
            realm.name.toLowerCase().includes(value)
        );
        
        if (matches.length > 0) {
            dropdown.innerHTML = matches.map(realm => 
                `<a href="${realm.url}">${realm.name}</a>`
            ).join('');
            dropdown.style.display = 'flex';
        } else {
            dropdown.innerHTML = `<a href="#">No realm found...</a>`;
            dropdown.style.display = 'flex';
        }
    } else {
        dropdown.style.display = 'none';
    }
});

// Close search if clicking outside
document.addEventListener('click', function(e) {
    const wrapper = document.getElementById('searchWrapper');
    if (!wrapper.contains(e.target)) {
        wrapper.classList.remove('active');
        document.getElementById('searchDropdown').style.display = 'none';
    }
});
