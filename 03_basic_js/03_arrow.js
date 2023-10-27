// @ Arrow Function
// @ THIS keyword => refer current context
// @ Context => means humlog kiske bare me bat kar rhe, like koi movie ka context ky hai movie kiss topic me hai
// context current variable ka bat krta hai

const userRegister = {
    username: "Sanjiv",
    price: 555,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website.`);// this => refer current context
        console.log(this); // print current variables
    }

}

// userRegister.welcomeMessage(); //Sanjiv, welcome to website.
// userRegister.username = "Sanjiv Paul"
// userRegister.welcomeMessage(); //Sanjiv Paul, welcome to website.

// console.log(this); // {} => it gives empty object

// @Note: If we run console.log(this) on the browser then we get window object.

// @type1:Normal function
// function biscuits(){
//     let username = "Sanjiv"
//     // console.log(this);
//     console.log(this.username); // undefined => this cannot work in functions
// }

// biscuits()

// // @type2:Normal function
// const biscuits = function (){
//     let username = "Sanjiv"
//     // console.log(this);
//     console.log(this.username); // undefined => this cannot work in functions
// }

// biscuits()

// @type3:Arrow Functions
// const biscuits = () => {
//     let username = "Sanjiv"
//     // console.log(this); // {} => return empty objext
//     console.log(this.username); // undefined => this cannot work in arrow functions
// }
// biscuits()


// @More about arrow functions:
// @syntax: ()=>{}

// @explecet run arrow function: retrun required and curly braces required
// const addTwo = (num1, num2) =>{
//     return num1+num2;
// }
// console.log(addTwo(2,3)); // 5

// @implecet run arrow function: no retrun required and no curly braces required
// const addTwo = (num1, num2) => num1+num2;

// console.log(addTwo(2,3)); // 5

// @implecetly pass object:
// const user = () =>({username:"Sanjiv"});
// console.log(user());


// # forEach:
const allUsers = ["Sanjiv", "Paul", "Gandhi"]

allUsers.forEach((user)=>{console.log(user);})



