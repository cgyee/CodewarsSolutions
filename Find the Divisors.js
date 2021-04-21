function divisors(integer) {
    //https://www.codewars.com/kata/544aed4c4a30184e960010f4
    let res = []
    let index =0;
    
    for(let i = 2; i < Math.floor(integer / 2) + 1; i++) {
      if(integer % i == 0) {
        res[index] = i;
        index+=1;
      }
    }
    if(res.length < 1) {
      res = `${integer} is prime`;
    }
    
    return res;
  };