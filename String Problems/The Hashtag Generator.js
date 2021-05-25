function generateHashtag (str) {
    //https://www.codewars.com/kata/52449b062fb80683ec000024
    if(!str || str.trim().length < 1) {
      return false
    }
    //break the string in to a array of chars
    //iterate of the char array 
    //  if it's a string character append it to temp array
    //  else 
    //    at temp array [0] call chage character to uppercase
    //    join the character array together on ever character
    //    push the result to result string
    //    set temp array =[]
  
    let res='#'
    let tempStrArr =[]
    let splitStr = str.trim().split('')
    splitStr[0] = splitStr[0].toUpperCase()
      splitStr.forEach(char => {
      if(char!=' ') {
        tempStrArr.push(char)
      } else {
          if(tempStrArr.length > 0) {
            tempStrArr[0] = tempStrArr[0].toUpperCase()
            res+= tempStrArr.join('')
            tempStrArr =[]
          }
      }
    })
    tempStrArr[0] = tempStrArr[0].toUpperCase() 
    res = res+ tempStrArr.join('')
    return res.length > 140 ? false : res
  }