// Finding the number of ways to reach from a starting position to an ending position travelling in
//  specified directions only. Problem Statement: Given a 2-D matrix with M rows and N columns,
//  find the number of ways to reach cell with coordinates (i,j) 
//  from starting cell (0,0) under the condition that you can only travel one step 
//  right or one step down.

// Recursion

const gridTravelerRecursion = (m, n) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  return gridTravelerRecursion(m - 1, n) + gridTravelerRecursion(m, n - 1);
}

// console.log(gridTravelerRecursion(2,3));
// console.log(gridTravelerRecursion(3,3));
// console.log(gridTravelerRecursion(4,4));
// console.log(gridTravelerRecursion(18,18));

// Memo

const gridTraveler = (m, n, memo = {}) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  const key = m + "," + n;
  if (key in memo) return memo[key];
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,3));
console.log(gridTraveler(4,4));
console.log(gridTraveler(18,18));