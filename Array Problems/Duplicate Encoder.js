function duplicateEncode(word){
    // iterate over the string
    //add each character to the dictionary as it appears, with the value being the # of occurrences
    
    //iterate over the string
    //if the character at the key has a value greater than 1 append a ')' else '('
    
    let res='';
    let dict ={};
    let lower_str = word.toLowerCase()
    for(let i = 0; i < lower_str.length; i++) {
      if(!(lower_str[i] in dict)) {
        dict[lower_str[i]] = 0;
      }
      dict[lower_str[i]]+=1;
    }
    
    for(let j =0; j < lower_str.length; j++) {
      res+= dict[lower_str[j]] >= 2 ? ')' : '('
    }
    return res;
  }