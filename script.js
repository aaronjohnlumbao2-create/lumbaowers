const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const jumpscare = document.getElementById('jumpscare');
const mainCard = document.getElementById('mainCard');
const bgMusic = document.getElementById('bgMusic');

function triggerPrank() {
    // Hide the main question card
    mainCard.classList.add('hidden');

    // Create and insert the image dynamically so chat previews can't detect it
    if (!document.getElementById('scareImg')) {
        const img = document.createElement('img');
        img.id = 'scareImg';
        img.src = 'assets/jumpscare.jpg';
        img.alt = 'Meme Image';
        jumpscare.insertBefore(img, jumpscare.firstChild);
    }

    // Show full-screen meme overlay
    jumpscare.classList.remove('hidden');

    // Play looping music
    bgMusic.loop = true;
    bgMusic.currentTime = 0;
    bgMusic.play().catch(err => console.log("Audio play blocked:", err));
}

// Hover event: turn NO into YES on PC
noBtn.addEventListener('mouseenter', () => {
    noBtn.innerText = "YES";
    noBtn.style.backgroundColor = "#2ecc71";
});

// Click / Touch events
yesBtn.addEventListener('click', triggerPrank);
noBtn.addEventListener('click', triggerPrank);
