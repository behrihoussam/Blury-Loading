const image = document.getElementById("image");
const title = document.getElementById("title");
let count = 0;


function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
setInterval(() => {
    count++;
    if (count <= 100) {
        title.innerHTML = count + "%";
        title.style.opacity = scale(count, 0, 100, 2, 0);
        image.style.filter = `blur(${scale(count, 0, 100, 30, 0)}px)`
    } else {
        return;
    }
}, 15);