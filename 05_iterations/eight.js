// ****************** reduce() **************************
// # reduce:

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (preVal, currVal) {
    // console.log(`preVal: ${preVal} and currVal: ${currVal}`);
    return preVal + currVal
}, 0)
// console.log(myTotal);

// reduce with arrow function:
const myTotal2 = myNums.reduce((preVal, currVal) => (preVal + currVal), 0)
// console.log(myTotal2);

const shopingCart = [
    {
        itemName: "js course",
        price: 5999
    },
    {
        itemName: "py course",
        price: 3999
    },
    {
        itemName: "java course",
        price: 2999
    },
    {
        itemName: "flutter course",
        price: 9999
    },
    {
        itemName: "ios dev course",
        price: 12999
    }

]

// add all the prices of the shoping cart
const totalPrice = shopingCart.reduce((preVal, item) => {
    return preVal + item.price
}, 0)
console.log(totalPrice);