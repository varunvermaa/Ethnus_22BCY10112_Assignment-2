let train = document.getElementById("train");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let position = 0;
let interval;

function moveTrain() {
    position += 5;
    train.style.transform = `translateX(${position}px)`;
    if (position > window.innerWidth) {
        position = -200; // Reset train to left if it exits the screen
    }
}

startButton.addEventListener("click", function() {
    if (!interval) {
        interval = setInterval(moveTrain, 100);
    }
});

stopButton.addEventListener("click", function() {
    clearInterval(interval);
    interval = null;
});
