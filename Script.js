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
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        console.log("🔥 Empire Connected: Firebase Active");
    }
} catch (e) {
    console.error("Firebase connection failed.", e);
}

// 2. SMART TYPEWRITER EFFECT
const textElement = document.querySelector(".typewriter-text");
let brandName = "MAGADH FM"; 

if (document.title.includes("About")) {
    brandName = "THE CREATOR";
} else if (document.title.includes("|")) {
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

// 3. SIDEBAR NAVIGATION
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    // Using a class toggle is more reliable than checking inline width
    if (menu.style.width === "300px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "300px";
    }
}

// 4. PRELOADER & TYPEWRITER TRIGGER
window.addEventListener('load', function() {
    const preloader = document.getElementById("preloader");
    
    if (preloader) {
        setTimeout(() => {
            preloader.style.transition = "opacity 0.8s ease, visibility 0.8s";
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            
            setTimeout(() => {
                preloader.style.display = "none";
                typeEffect(); // Start typing only after preloader is gone
            }, 800); 
        }, 1500); // 1.5s delay to show the logo
    } else {
        typeEffect(); // If no preloader, start typing immediately
    }
});

// 5. SEARCH SYSTEM
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
    { name: "About Creator", url: "about.html" },
    { name: "Home", url: "index.html" }
];

function toggleSearch() {
    const wrapper = document.getElementById('searchWrapper');
    const input = document.getElementById('searchInput');
    const dropdown = document.getElementById('searchDropdown');
    
    wrapper.classList.toggle('active');
    
    if (wrapper.classList.contains('active')) {
        input.focus();
    } else {
        input.value = "";
        dropdown.style.display = 'none';
    }
}

// Search Input Listener
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
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
}

// Close search if clicking outside
document.addEventListener('click', function(e) {
    const wrapper = document.getElementById('searchWrapper');
    const dropdown = document.getElementById('searchDropdown');
    if (wrapper && !wrapper.contains(e.target)) {
        wrapper.classList.remove('active');
        if (dropdown) dropdown.style.display = 'none';
    }
});
