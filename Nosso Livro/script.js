const pages = document.querySelectorAll('.page');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const musicBtn = document.querySelector('#musicBtn');
const audio = document.querySelector('#bgMusic');

let currentPage = 0;

function updateBook() {
    pages.forEach((page, index) => {
        if (index < currentPage) {
            page.classList.add('flipped');
            page.style.zIndex = index;
        } else {
            page.classList.remove('flipped');
            page.style.zIndex = pages.length - index;
        }
    });
}

// Controle da Música
musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicBtn.innerText = "⏸ Pausar Música";
    } else {
        audio.pause();
        musicBtn.innerText = "🎵 Ouvir Música";
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length) {
        currentPage++;
        updateBook();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updateBook();
    }
});

updateBook();