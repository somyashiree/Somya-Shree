const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const scrollDownBtn = document.getElementById('scrollDownBtn');
const scrollUpBtn = document.getElementById('scrollUpBtn');

playBtn.addEventListener('click', () => {
    video.play();
});

pauseBtn.addEventListener('click', () => {
    video.pause();
});

resumeBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    }
});

scrollDownBtn.addEventListener('click', () => {
    window.scrollBy({ top: 100, behavior: 'smooth' });
});

scrollUpBtn.addEventListener('click', () => {
    window.scrollBy({ top: -100, behavior: 'smooth' });
});
