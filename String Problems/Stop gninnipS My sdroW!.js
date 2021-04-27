function spinWords(string){
    //https://www.codewars.com/kata/5264d2b162488dc400000001
    //Turn the string into a string array of words with spaces as the seperator
    let words = string.split(' ')
    
    //Iterate over the arrays and split the words in chars
    let res = words.map(word => {
      let chars = word.split('')
      //If string array element length >=5 then:
      if(word.length >= 5) {
        // reverse the array elements
        chars = chars.reverse()
      }
      //rejoin the split array
      chars = chars.join('')
      return chars
    })
      
    //join the array elements
    return res.join(' ')