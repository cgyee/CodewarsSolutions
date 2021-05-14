function rowSumOddNumbers(n) {
	// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
  let initialRowValue = n * (n-1)+1
  let sum = initialRowValue
  
  for(let i =1; i < n; i++) {
    initialRowValue+= 2
    sum+=initialRowValue
  }
  return sum
}