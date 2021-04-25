function order(words){
  //https://www.codewars.com/kata/55c45be3b2079eccff00010f
  //if words.length = 0 return ""
  
  //trim the spaces
  
  //split the string into a array using the spaces as a seperator str
  //create new empty array res equal to str.length 
  
  //iterate over the outer array from 0 to n
  //iterate over the inner array from 0 to m
  //if str[n][m] is number place str[n] in the index of str[n][m] - 1
  
  //join res with ' '
  str = words.split(' ');
  
  let res = [...Array(str.length)];
  for(let s in str) {
    for(let c in str[s]) {
      if(!isNaN(str[s][c])) {
        res[parseInt(str[s][c]) - 1] = str[s];
      }
    }
  }
  return res.join(' ')
}
