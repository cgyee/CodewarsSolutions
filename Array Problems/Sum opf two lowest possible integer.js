function sumTwoSmallestNumbers(numbers) {  
    //https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
    numbers.sort((a, b) => {
      if(a < b) {return -1}
      if(b > a) {return 1}
      return 0
    })
    
    return numbers[0] + numbers[1]
  }