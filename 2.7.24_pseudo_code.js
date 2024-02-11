// class activity: post pseudo code on class slack as a reply: 1.6.24

/*
Joses example pseudo code on R & S slack chat:
input: x
output: y

how do we get there in english:
something talking about the problem and how to go about it.

translate to english ->
something talking about solving the problem in code.


My pseudo-breakdown #1: for 1.6.24 prob #1
step 1: create a start and end point.
input: x
output: y

step 2: how do we get from point A to B? 
find the target value in an array of distinct integers, in the array of numbers and keeping the order, we need to return the index position of the target - if its found.

If target is not found then, return the index number position where target number would be (inserted in order).
*/

// My pseudo-breakdown #2:
// step 1: create a start and end point.
// exhibit the numbers and and also the target - find the first part of question: which is find the index of the number provided in ex.
// then find the second part of question: which is to find the index of a number in the ex given if its not in the ex.

// step 2: how do we get from point A to B? 
// part 1 - return the index position of the target number - if its found or in the array ex.

// part 2 - If number is missing in ex array provided then return the target index position of that number (insert in order).

// HERE is the code:
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If target is not found then, return the index number position where target number would be (if inserted in order).

// Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
// Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
// Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

Input: nums = [56, 67, 70, 77], target = 72 ; [56, 67, 70, 72, 77]
// Input: nums = [56, 67, 70, 77], target = 72 => [56, 67, 70, 72, 77]
Output: 3

// code:
// Jose explains part 2 of code- (which is) finding the index of a number that isn't in the given sorted array. In the else if statement: "At any given position, because the array is sorted, all numbers before the current position are smaller and all numbers after are bigger. so if we check and a number is now bigger than the target, then we have found where the target number belongs."

function findTargetNums(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
    console.log(nums, target); 
        // console.log(nums[i]); 
        // return i;
      } else if (nums[i] > target) {
        // console.log(i);
        return i;
      }
    }
    // console.log(nums);
    return nums.length;
  }
  
  findTargetNums([56, 67, 70, 77], 77);
  // console.log("hello")

// function findNumbers(numbers) {
//     console.log(numbers); 
// }

// findNumbers(1);



// 1.7.24_code problem #2:
// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
// Example 1:
Input: [1,2,3,1]
Output: true
// Example 2:
Input: [1,2,3,4]
Output: false
// Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

/* My pseudo-breakdown #1: for 1.7.24 prob #2:

input: an array of integers.
output: if there are duplicates - return true and return false if no duplicates.
Use Boolean

- check if array contains integers, convert if it is not (parse float)?
- create empty object (to store the available numbers)
- loop through the integers to ck if there are or are not duplicates.
- return true if intergers are more than 1.
- return false if there is only 1 integer.
*/


// attempt at code: 
// function containsDuplicates(nums) {
// (create an empty object to hold the integers that are seen)
//     for (let i = 0; i < nums.length; i++) {
//         if ([nums[i] === ] ) {

//         }

//     }
// }