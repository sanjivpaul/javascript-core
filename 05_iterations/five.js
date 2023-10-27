// # forEach loop:
const coding = ["js", "ruby", "cpp", "python", "java", "rust"]
// coding.forEach(function(item){console.log(item);})

// coding.forEach((item)=>{console.log(item)}) // arrow fn as callback fn

// passing function as forEach parameter
function printMe(item){
    console.log(item);
}

// coding.forEach(printMe) // it will also work same

// acce more things
coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})

// array of objects
const myCoding = [
    {
        languageName: "Javascript",
        languageFileExtension : "js"
    },
    {
        languageName: "python",
        languageFileExtension : "py"
    },
    {
        languageName: "java",
        languageFileExtension : "java"
    },
    {
        languageName: "ruby",
        languageFileExtension : "rb"
    },
    {
        languageName: "c++",
        languageFileExtension : "cpp"
    },
]

myCoding.forEach((item)=>{
    // console.log(item);//return all the objects
    console.log(item.languageName); // gets value of the objects
})