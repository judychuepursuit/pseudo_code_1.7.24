// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#examples

/*
Array 
let nums = [1, 2, 3, 4, 5, 6]
i have a list/collection of numbers
typically we are dealing with a collection of a specific data type
but that does not mean we can only store that data type

- Array literal notation 

let someVariable = []

this is the syntax to create a new and empty array, We can also fill it with values


let someSecondVariable = [1, 2, 3]

- using constructor

let someVariable = new Array(1, 2, 3)


we use arrays to store data, specifically we do 
not care about the individuality of the data, rather that we have a collection of it. 

- Accessing values in the array
if i wanted to take a look at the first value in the array, i would use its index value. 

"I want the element at this position"

but we have to remember that arrays are 0 based index, meaning that they dont start at 1, they start at 0

if i want the first element, i use the 0 index. if i want the second element, i need to use 1 and so on and so forth

if we try to access a value that does not exist, outside of the range of indexes, then we get undefined 



- Removing and adding to an array
.shift, .unshift, .pop, .push - are the methods that allow us to add and remove things to the front and back of the array. 

manipulates the end of the array, or the last element
.pop - remove from the end of the array 
.push - adds an element to the end of the array


manipulates the front of the array, or the first element
.shift - remove the first element 
.unshift - add to the front of the array

we consider adding or removing from the start or end of the array to cost us no time. 
*/
//                  0  1  2  3  4
// let someVariable = [1, 2, 3, 4, 5, 6]
// let someVariable = new Array(1, 2, 3, 4)
// console.log(someVariable[3])

// continued from 1.5.24_Jose class
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

/* pseudo code
  input: an array, containing numbers and strings containing a number
  this is an opportunity to ask a follow up question
  OUTPUT: returning a number, which is the total of adding all values in the array together
*/

// ASK JOSE for help with this
// function sumOfNums(nums) {
//   console.log(nums)

// }

// sumOfNums(789)
// sumOfNums(nums1)

// let answer =[]

// let nums1 = [9, 3, '7', '3']
// let nums2 = ['5', '0', 9, 3, 2, 1, '9', 6, 7]
// let nums3 = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']

// 1.4.24_LEETCODE:
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {

// };

// submitted
// var maxProfit = function(prices) {
//     if(prices == null || prices.length <= 1) return 0;
//     let minBuy = prices[0];
//     let profit = 0;
//     for(let i = 1; i < prices.length; i++) {
//         minBuy = Math.min(minBuy, prices[i]);
//         profit = Math.max(profit, prices[i] - minBuy);
//     }
//     return profit;
// };