function squareSum(numbers){
    //https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
    return numbers.reduce((a, b)=> a+b**2, 0)
  }