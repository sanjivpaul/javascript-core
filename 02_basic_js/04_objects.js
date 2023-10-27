// const threadUser = {} // non-singleton object => object literal

const threadUser = new Object(); // => singleton object(constructor method)

threadUser.id = "123abc";
threadUser.name = "honey";
threadUser.isLoggedIn = false;

// console.log(threadUser); 
// { id: '123abc', name: 'honey', isLoggedIn: false }

// => Nested object:

const instaUser = {
    email: "insta5@gmail.com",
    fullName: {
        userFullName: {
            firstName: "honey",
            midName: "",
            lastName: "singh"
        }

    },

}

// console.log(instaUser.fullName.userFullName.firstName); // honey
// console.log(instaUser.fullName.userFullName);
// { firstName: 'honey', midName: '', lastName: 'singh' }


// => concatination of objects
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj3 = {5:"e", 6:"f"};

// const obj3 = {obj1, obj2};
// console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj5 = Object.assign({}, obj1, obj2, obj3 )
// console.log(obj5);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// => using spread operator for conatination of object is good practice
const obj4 = {...obj1, ...obj2};
// console.log(obj4);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// values of database
// array of objects
const users = [
    {
        id:1,
        email:"sj@gmail.com"
    },
    {
        id:1,
        email:"sj@gmail.com"
    },
    {
        id:1,
        email:"sj@gmail.com"
    },
]
console.log(users[1].email); //sj@gmail.com

console.log(threadUser);
// { id: '123abc', name: 'honey', isLoggedIn: false }

console.log(Object.keys(threadUser)); 
// [ 'id', 'name', 'isLoggedIn' ] => datatype is array

console.log(Object.values(threadUser)); 
// [ '123abc', 'honey', false ] => datatype array

console.log(Object.entries(threadUser)); 
// [ [ 'id', '123abc' ], [ 'name', 'honey' ], [ 'isLoggedIn', false ] ]

console.log(threadUser.hasOwnProperty("isLoggedIn")); // true
console.log(threadUser.hasOwnProperty("isLogged")); // false