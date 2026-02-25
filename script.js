CSS

/* =========================================
   SECTION 1: GLOBAL RESET & BASE STYLES
   ========================================= */
html {
    scroll-behavior: smooth;
}

body {
    background-color: #050505; /* Deep black for maximum glow effect */
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
}

/* Custom Selection Color */
::selection {
    background: #ff4d4d;
    color: white;
}

/* =========================================
   SECTION 2: PRELOADER & ANIMATIONS
   ========================================= */
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #050505;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.8s ease, visibility 0.8s;
}

.pulse-text {
    color: #ff4d4d;
    font-size: 2.5rem;
    letter-spacing: 10px;
    font-weight: 800;
    text-align: center;
    animation: pulseGlow 1.5s ease-in-out infinite;
}

@keyframes pulseGlow {
    0%, 100% { opacity: 0.3; text-shadow: 0 0 5px #ff4d4d; }
    50% { opacity: 1; text-shadow: 0 0 30px #ff4d4d; }
}

.progress-bar-container {
    width: 200px;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    margin: 20px auto 0;
    overflow: hidden;
}

.progress-bar {
    width: 0;
    height: 100%;
    background: #ff4d4d;
    animation: loadBar 2s forwards;
}

@keyframes loadBar {
    0% { width: 0%; }
    100% { width: 100%; }
}

/* =========================================
   SECTION 3: NAVIGATION & SEARCH BAR
   ========================================= */
.top-nav-controls {
    display: flex;
    align-items: center;
    position: fixed;
    top: 30px;
    width: 100%;
    z-index: 1000;
    pointer-events: none;
}

.nav-btn-left, .nav-btn-right {
    pointer-events: auto;
    position: absolute;
    color: white;
    font-size: 1.2rem;
    background: rgba(255, 255, 255, 0.05);
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: 0.4s;
    border: 1px solid rgba(255, 77, 77, 0.2);
    text-decoration: none;
}

.nav-btn-left { left: 30px; }
.nav-btn-right { right: 30px; border: none; cursor: pointer; }

.nav-btn-left:hover, .nav-btn-right:hover {
    color: #ff4d4d;
    box-shadow: 0 0 20px rgba(255, 77, 77, 0.5);
    background: rgba(255, 77, 77, 0.1);
}

/* Search Bar Container */
.search-wrapper {
    position: absolute;
    left: 100px; /* Positions after Home icon */
    pointer-events: auto;
    z-index: 1001;
}

.search-bar {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 77, 77, 0.3);
    border-radius: 8px;
    height: 55px;
    width: 55px; /* Collapsed */
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.search-wrapper.active .search-bar {
    width: 280px; /* Expanded */
    background: rgba(10, 10, 10, 0.95);
    border-color: #ff4d4d;
    box-shadow: 0 0 20px rgba(255, 77, 77, 0.2);
}

#searchInput {
    width: 100%;
    background: none;
    border: none;
    outline: none;
    color: white;
    padding: 0 15px;
    display: none;
}

.search-wrapper.active #searchInput {
    display: block;
}

.search-icon-btn {
    background: none;
    border: none;
    color: white;
    min-width: 55px;
    height: 100%;
    cursor: pointer;
}

/* =========================================
   SECTION 4: SIDE NAVIGATION (SIDEBAR)
   ========================================= */
.side-nav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 2000;
    top: 0;
    right: 0;
    background-color: rgba(10, 10, 10, 0.98);
    overflow-x: hidden;
    transition: 0.5s ease-in-out;
    padding-top: 80px;
    border-left: 2px solid #ff4d4d;
}

.side-nav a {
    padding: 15px 40px;
    text-decoration: none;
    font-size: 1.1rem;
    color: #bbb;
    display: block;
    transition: 0.3s;
}

.side-nav a:hover {
    color: #ff4d4d;
    padding-left: 50px;
}

.side-nav .closebtn {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 40px;
}

.genre-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 10px;
}

/* Genre Button Colors */
.horror { background: rgba(255, 0, 0, 0.15); color: #ff4444 !important; border-color: #ff444455; }
.thriller { background: rgba(255, 165, 0, 0.15); color: #ffa500 !important; border-color: #ffa50055; }
.magic { background: rgba(147, 112, 219, 0.15); color: #9370db !important; border-color: #9370db55; }
.action { background: rgba(255, 69, 0, 0.15); color: #ff4500 !important; border-color: #ff450055; }

/* =========================================
   SECTION 5: HERO & CONTENT STYLES
   ========================================= */
.hero-section {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('assets/banner.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.typewriter-text {
    background: linear-gradient(90deg, #ff4d4d, #ff8c00, #ff4d4d);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    letter-spacing: 12px;
    min-height: 1.2em;
    font-weight: 800;
    animation: gradientFlow 3s linear infinite;
}

@keyframes gradientFlow {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
}

/* =========================================
   SECTION 6: ABOUT PAGE & SOCIAL ICONS
   ========================================= */
.contact-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 77, 77, 0.2);
    backdrop-filter: blur(10px);
    transition: 0.4s;
}

.social-container {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.social-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #bbb;
    transition: 0.3s;
}

.social-box i {
    font-size: 2.5rem;
    margin-bottom: 8px;
}

.handle-name {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: bold;
}

.social-box:hover {
    color: #ff4d4d;
    transform: translateY(-5px);
}

/* =========================================
   SECTION 7: RESPONSIVENESS
   ========================================= */
@media screen and (max-width: 768px) {
    .search-wrapper { left: 80px; }
    .search-wrapper.active .search-bar { width: 180px; }
    .genre-grid { grid-template-columns: 1fr; }
    .nav-btn-left, .nav-btn-right { width: 45px; height: 45px; }
}
