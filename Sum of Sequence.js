const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    //https://www.codewars.com/kata/586f6741c66d18c22800010a
    //let variable s =0
    //if begin > end return 0
    //iterate with i=0 to end with step as the incrementer
    //sum i, s+=i at each loop
    //return s
    let s = 0;
    if(begin > end) {
      return s;
    }
    for(let i = begin; i < end + 1; i+=step) {
      s+= i;
    }
    return s;
  };