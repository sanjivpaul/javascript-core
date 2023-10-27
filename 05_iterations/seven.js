// ************************ map()  *************************
// # map: arithmatic operation can perform
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map((items)=> items + 10)
// console.log(newNums);

// # chaining concept:
// const newNums = myNums.map((num)=> num * 10).map((num)=> num + 1)
const newNums = myNums.map((num)=> num * 10).map((num)=> num + 1).filter((item)=> item >=40)
console.log(newNums);
