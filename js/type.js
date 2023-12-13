const text = document.querySelector(".first-text");

const textLoad = () => {
    setTimeout( () => {
        text.textContent = "Honest, Quality, Grow"
    }, 0)
    // setTimeout( () => {
    //     text.textContent = "Quality"
    // }, 4000)
    // setTimeout( () => {
    //     text.textContent = "Grow"
    // }, 8000)
}

textLoad();
setInterval(textLoad, 16000);