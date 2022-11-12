// /**
//  * 
//  * @param s You are given a string s. Consider the following algorithm applied to this string:

// Take all the prefixes of the string, and choose the longest palindrome between them.
// If this chosen prefix contains at least two characters, cut this prefix from s and go back to the first step with the updated string. Otherwise, end the algorithm with the current string s as a result.
// Your task is to implement the above algorithm and return its result when applied to string s.

// Note: you can click on the prefixes and palindrome words to see the definition of the terms if you're not familiar with them.

// Example

// For s = "aaacodedoc", the output should be solution(s) = "".

// The initial string s = "aaacodedoc" contains only three prefixes which are also palindromes - "a", "aa", "aaa". The longest one between them is "aaa", so we cut it from s.
// Now we have string "codedoc". It contains two prefixes which are also palindromes - "c" and "codedoc". The longest one between them is "codedoc", so we cut it from the current string and obtain the empty string.
// Finally the algorithm ends on the empty string, so the answer is "".
// For s = "codesignal", the output should be solution(s) = "codesignal".
// The initial string s = "codesignal" contains the only prefix, which is also palindrome - "c". This prefix is the longest, but doesn't contain two characters, so the algorithm ends with string "codesignal" as a result.

// For s = "", the output should be solution(s) = "".

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string s

// A string consisting of English lowercase letters.

// Guaranteed constraints:
// 0 ≤ s.length ≤ 1000.

// [output] string

// The result of the described algorithm.
//  */
// function solution(s) {
//   const isPalindrome = (arr) => {
//     const testArray = arr.split("");
//     const copy = [...testArray];

//     return testArray.join("") === copy.reverse().join("");
//   };
//   let str = s;
//   let palindromes = [];
//   for (let i = 0; i < s.length; i++) {
//     let stringToCheck = s.slice(0, i + 1);
//     console.log(stringToCheck);
//     if (isPalindrome(stringToCheck)) {
//       palindromes.push(stringToCheck);
//     }
//   }
//   const longestPalindrome = Math.max(...palindromes.map((p) => p.length));

//   console.log(longestPalindrome);
// }

// /**You are given an array of strings arr. Your task is to construct a string from the words in arr, starting with the 0th character from each word (in the order they appear in arr), followed by the 1st character, then the 2nd character, etc. If one of the words doesn't have an ith character, skip that word.

// Return the resulting string.

// Example

// For arr = ["Daisy", "Rose", "Hyacinth", "Poppy"], the output should be solution(arr) = "DRHPaoyoisapsecpyiynth".

// First, we append all 0th characters and obtain string "DRHP";
// Then we append all 1st characters and obtain string "DRHPaoyo";
// Then we append all 2nd characters and obtain string "DRHPaoyoisap";
// Then we append all 3rd characters and obtain string "DRHPaoyoisapsecp";
// Then we append all 4th characters and obtain string "DRHPaoyoisapsecpyiy";
// Finally, only letters in the arr[2] are left, so we append the rest characters and get "DRHPaoyoisapsecpyiynth";
// example

// For arr = ["E", "M", "I", "L", "Y"], the output should be solution(arr) = "EMILY".

// Since each of these strings have only one character, the answer will be concatenation of each string in order, so the answer is EMILY.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string arr

// An array of strings containing alphanumeric characters.

// Guaranteed constraints:
// 1 ≤ arr.length ≤ 100,
// 1 ≤ arr[i].length ≤ 100.

// [output] string

// Return the resulting string. */
// /**Input:
// arr:
// ["Daisy", 
//  "Rose", 
//  "Hyacinth", 
//  "Poppy"]
// Expected Output:
// "DRHPaoyoisapsecpyiynth" */
// function solution2(arr) {}

// /**
//  * An integer n is called a full square, if there exists some integer s, such that n = s * s. Examples of full squares are 0, 1, 4, 9, 16, etc.

// Given an array of distinct integers numbers, your task is to find the number of pairs of indices (i, j) such that i ≤ j and the sum numbers[i] + numbers[j] is a full square.

// Example

// For numbers = [-1, 18, 3, 1, 5], the output should be solution(numbers) = 4.

// There is one pair of indices where the corresponding elements sum up to 0:

// (0, 3): numbers[0] + numbers[3] = -1 + 1 = 0.
// There are two pairs of indices where the corresponding elements sum up to 4:

// (0, 4): numbers[0] + numbers[4] = -1 + 5 = 4;
// (2, 3): numbers[2] + numbers[3] = 3 + 1 = 4.
// There is one pair of indices where the corresponding elements sum up to 36:

// (1, 1): numbers[1] + numbers[1] = 18 + 18 = 36;
// In total, there are 1 + 2 + 1 = 4 pairs summing up to full squares.

// For numbers = [2], the output should be solution(numbers) = 1.

// The only pair of indices is (0, 0) and the sum of corresponding elements is equal to numbers[0] + numbers[0] = 2 + 2 = 4, which is a full square. So the answer is 1.
// For numbers = [-2, -1, 0, 1, 2], the output should be solution(numbers) = 6.

// There are three pairs of indices where the corresponding elements sum up to 0: (0, 4), (1, 3), and (2, 2).
// There are two pairs of indices where the corresponding elements sum up to 1: (1, 4) and (2, 3).
// There is one pair of indices where the corresponding elements sum up to 4: (4, 4).
// In total, there are 3 + 2 + 1 = 6 pairs summing up to full squares.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer numbers

// An array of distinct integers.

// Guaranteed constraints:
// 1 ≤ numbers.length ≤ 4 · 104,
// -2 · 104 ≤ numbers[i] ≤ 2 · 104.

// [output] integer

// The number of pairs of indices (i, j) such that i ≤ j and the sum of the corresponding elements is equal to some full square.
//  */



// function solution(numbers) {

// }

// /**
//  * Input:
// numbers: [-1, 18, 3, 1, 5]
// Expected Output:
// 4
//  */

export const goo = "a"