var xDown = null;
var yDown = null;
var xDiff = null;
var yDiff = null;

document.addEventListener('touchstart', (evt) => {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
})

document.addEventListener("touchmove", (evt) => {
    if (!xDown || !yDown) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    xDiff = xDown - xUp;
    yDiff = yDown - yUp;
})

document.addEventListener("touchend", () => {
    if (yDiff && yDiff > 0) {
        var footerBox = document.getElementById("footerBox");
        var finalHeight = footerBox.clientHeight - yDiff;
        footerBox.style.height = `${finalHeight}px`;
    };
});
