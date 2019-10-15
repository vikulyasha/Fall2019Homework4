const defaultSize = 30;
let currentSize = defaultSize;
const handler = function(event) {
    const ballon = document.getElementsByClassName('balloon')[0];

    if (event.keyCode === 73) { currentSize += 10; }
    if (event.keyCode === 68) { currentSize -= 10; }

    if (currentSize > 60 || currentSize <= 0) {
        if (currentSize > 60) {
             ballon.innerHTML = "&#128165";
        }
        if (currentSize <= 0) {
            ballon.innerHTML = "Done";
        }
        document.removeEventListener('keyup', handler);
    } else {
        ballon.style.fontSize = currentSize + "px";
    }
}
document.addEventListener('keyup', handler);