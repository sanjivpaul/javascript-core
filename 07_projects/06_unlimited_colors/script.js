// generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color;
}
// console.log(Math.floor(Math.random() * 16));
console.log(randomColor());
const box = document.querySelector('#box')
// const chnageColor = box.style.backgroundColor = randomColor()


let intervalId;
const startChangingColor = function () {
    // saftey check
    // if intervalId is null then add intervalId
    if (!intervalId) {
        intervalId = setInterval(changeBoxColor, 1000)
    }
    function changeBoxColor() {
        box.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null; //for memory utilization
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)