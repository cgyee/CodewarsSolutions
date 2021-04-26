function titleCase(title, minorWords) {
  //https://www.codewars.com/kata/5202ef17a402dd033c000009
  //convert title to a lower case and assign to a variable strArray
  //convert minor words to lowercase and assign to a variable mArray
  
  //split strArray into an array of strings with space as the seperator
  //split mArray into an array of strings with space as the seperator
  
  //iterate through strArray if an element of str array is found not in mArray capitalize the first character
  
  //return the strArray as a joined String with a space seperator
  if(title.trim().length < 1) {
    return '';
  }
  let strArray = title.toLowerCase();
  let mArray = minorWords ? minorWords.toLowerCase() : '';
  
  strArray = strArray.split(' ');
  mArray = mArray.split(' ');
  
  let temp = strArray[0].split('');
  temp[0] = temp[0].toUpperCase();
  strArray[0] = temp.join('');
  
  for(let i =1; i < strArray.length; i++) {
    if(!mArray.includes(strArray[i])) {
      temp = strArray[i].split('');
      temp[0] = temp[0].toUpperCase();
      strArray[i] = temp.join('');
    } 
  }
  
  return strArray.join(' ');
}