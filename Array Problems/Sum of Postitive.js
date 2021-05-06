function positiveSum(arr) {
    if(arr.length) {
      let reducer = (acc, curr) => curr > 0 ? acc + curr : acc + 0
      return arr.reduce(reducer, 0)
      
    }
    return 0
  }