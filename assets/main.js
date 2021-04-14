//get the correct window size 
updateSize();

//listen to resiz event
window.addEventListener('resize', () => {
    updateSize();
})

function updateSize() {
    //get viewport height
    let vh = window.innerHeight * 0.01;
    //set the vh value in the --vh custom prop to the root of dom
    document.documentElement.style.setProperty('--vh', '${vh}px');
}