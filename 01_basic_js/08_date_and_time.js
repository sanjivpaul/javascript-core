const myDate = new Date(); // date object
// console.log(myDate); //2023-08-24T18:20:34.806Z
// console.log(myDate.toString()); // Thu Aug 24 2023 23:51:01 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); //2023-08-24T18:21:37.994Z
// console.log(myDate.toJSON()); // 2023-08-24T18:22:06.511Z

// console.log(myDate.toLocaleString()); // 24/8/2023, 11:53:32 pm => return date and time
// console.log(myDate.toLocaleDateString()); // 24/8/2023 => return date
// console.log(myDate.toLocaleTimeString()); // 11:53:32 pm => return time
// console.log(myDate.toDateString()); // Thu Aug 24 2023

// console.log(typeof myDate); // object => myDate is a object

let myBirthDay = new Date(2000, 6, 14); // Fri Jul 14 2000
// let myBirthDay = new Date(2000, 6, 14, 5, 5); // 14/7/2000, 5:05:00 am
// let myBirthDay = new Date("2000-07-14"); // Fri Jul 14 2000
// console.log(myBirthDay.toDateString()); // Fri Jul 14 2000
// console.log(myBirthDay.toLocaleString());

// timestamp=>
let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1692902427391 => in miliseconds
// console.log(myBirthDay.getTime()); //963513000000 => time in miliseconds

// console.log(Math.floor(Date.now()/1000)); // 1692902824 => miliseconds converted into seconds


let newDate = new Date(); 
console.log(newDate);//2023-08-24T18:48:59.581Z
console.log(newDate.getMonth()); // 7
console.log(newDate.getFullYear()); // 2023
console.log(newDate.getDate()); // 25
console.log(newDate.getTime()); // 1692903087944 => in miliseconds
console.log(newDate.getDay()); // 5 => 







