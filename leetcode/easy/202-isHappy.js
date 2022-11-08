// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Input: n = 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// Time: O(log n)
// Space: O(1)

const getSum = (num) => {
  let total = 0;
  while (num !== 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    total += Math.pow(lastDigit, 2);
  }
  return total;
};

const isHappy = (n) => {
  let slow = n;
  let fast = n;

  while (true) {
    slow = getSum(slow);
    fast = getSum(getSum(fast));
    if (fast === slow) {
      return fast === 1;
    }
  }
};
