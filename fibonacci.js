// without dynamic programming
// recursion 

const recursionFibonacci = (n) => {
  if (n <= 2) return 1;
  return recursionFibonacci(n - 1) + recursionFibonacci(n - 2);
}


// console.log(recursionFibonacci(6));
// console.log(recursionFibonacci(10));
// console.log(recursionFibonacci(100));

// with dynamic programming
// memoization

const memoFibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoFibonacci(n - 1, memo) + memoFibonacci( n - 2, memo);
  return memo[n]; 
}

// console.log(memoFibonacci(6));
// console.log(memoFibonacci(10));
console.log(memoFibonacci(100));

