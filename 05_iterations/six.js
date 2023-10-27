// ************************* filter() ****************
// # filter: return only true or false
const coding = ["js", "ruby", "cpp", "python", "java", "rust"]

const data = coding.forEach((item) => {
    // console.log(item);
    // return item // not work!
})

// console.log(data); // undefined
// means forEach not returned any value it return undefined

// # filter:
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter((num) => {
    return num > 4;
})
// console.log(newNums);

const specialNums = []
myNums.forEach((item) => {
    if (item > 4) {
        specialNums.push(item)
    }
})
// console.log(specialNums);

const books = [
    { title: "book one", genre: "fictional", publish: "1994", edition: "5th" },
    { title: "book two", genre: "history", publish: "1984", edition: "7th" },
    { title: "book three", genre: "self motivation", publish: "2004", edition: "3rd" },
    { title: "book four", genre: "finance", publish: "1998", edition: "5th" },
    { title: "book five", genre: "history", publish: "2001", edition: "4th" },
    { title: "book six", genre: "mathematics", publish: "1974", edition: "9th" },
    { title: "book seven", genre: "finance", publish: "1954", edition: "12th" },
    { title: "book eight", genre: "fictional", publish: "2000", edition: "5th" },
    { title: "book nine", genre: "finance", publish: "1992", edition: "6th" },
    { title: "book ten", genre: "history", publish: "1994", edition: "8th" },
    { title: "book eleven", genre: "fictional", publish: "1993", edition: "7th" },
    { title: "book 12", genre: "finance", publish: "1999", edition: "5th" },
]

// find book which genre are history
const genreHistory = books.filter((book) => book.genre === "history")
// console.log(genreHistory);

// find books which are publish after year 1995 and genre is history
const booksByYears = books.filter((bk) => {
    return bk.publish > 1995 && bk.genre === "history"
})
console.log(booksByYears);