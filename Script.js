const statusText = document.getElementById('status-text');
const phrases = ["_COMING SOON_", "_INITIALIZING AI_", "_BUILDING STORIES_", "_ESTABLISHING EMPIRE_"];
let index = 0;

function updateStatus() {
    statusText.classList.remove('blink');
    // Force reflow to restart animation
    void statusText.offsetWidth; 
    statusText.innerText = phrases[index];
    statusText.classList.add('blink');
    
    index = (index + 1) % phrases.length;
}

// Change the text every 3 seconds
setInterval(updateStatus, 3000);
updateStatus();
