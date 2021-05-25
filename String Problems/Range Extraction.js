function solution(list){
    //https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
    //iterate over the array
    
    //if the difference between the current character and the previous character is 1 increment diffcount
    //else
    //  if diffCount >= 2
    //  create a string from  array[i -1]-diffCount- '-' array[i-1]
    //  push to res array
    //  set diffCount =0
    //  else
    //    push array[i-1] to res array
    
    let diffCount = 0
    let res =[]
    for(let curr =1; curr < list.length; curr++) {
      const prev = curr -1
      if(list[curr] - list[prev] === 1) {
        diffCount+=1
      } else {
          if(diffCount >= 2) {
            const str = `${list[prev]-diffCount}-${list[prev]}`
            res.push(str)
            diffCount = 0
          } else {
            for(let i= diffCount;  i > -1 ; i--) {
              res.push(list[prev-i])
            }
            diffCount = 0
          }
      }
    }
    const prev = list.length-1
    if(diffCount >=2) {
      res.push(`${list[prev] - diffCount}-${list[prev]}`)
    } else {
       for(let i= diffCount;  i > -1 ; i--) {
          res.push(list[prev-i])
        }
    }
    return res.join(',')
  }