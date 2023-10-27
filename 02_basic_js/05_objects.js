// destructring =>

const course = {
    name:"js in hindi",
    price: 999,
    courseInstructor:"sanjiv"
}

// console.log(course.courseInstructor); //old way

// object destructuring 

const {courseInstructor: instructor, name} = course;
// console.log(courseInstructor); //sanjiv
console.log(instructor); // sanjiv
console.log(name);

// apis => apna kam kisi or ke sar pe dal dena is called apis
// random user me

// JSON = javascript object notation
// {
//     "name":"js in hindi",
//     "price": 999,
//     "courceInstructor":"sanjiv"
// }



// [
//     {},
//     {},
//     {}
// ]