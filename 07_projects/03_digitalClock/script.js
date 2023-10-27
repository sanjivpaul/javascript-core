const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock");
// console.log(clock);

const day = document.getElementById("day");
const cdate = document.getElementById("date");



setInterval(function () {
    let date = new Date()
    let currDate = date.toDateString().slice(3)
    let currDay = date.toDateString().split(" ")[0];
    if(currDay === "Sat"){
        day.innerHTML = "Saturday";

    }else if(currDay === "Sun"){
        day.innerHTML = "Sunday";
    }
    // console.log(date.toDateString());
    // console.log(currDate);
    // console.log(currDay);
    cdate.innerHTML = currDate;
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)