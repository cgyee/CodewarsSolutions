function rot13(message){
    //https://www.codewars.com/kata/530e15517bc88ac656000716
    //ASCII range for latin characters are 65-90 and 97-122
    // We call find the ASCII value of a charater if a character falls within that range we subtract the 
    //minimum of the corresponding range from that value to that the value will fall between 0-25
    //if the value + 13 > 25 take value + 13 mod 25 and the remainder will give us ASCII value of the in the other range character
    //otherwise the character will fall the same range
    
     let res = Array.from(message).map(c => {
         let value = c.charCodeAt(0);
         if((65 <= value && value <=90) || (97 <= value && value <=122)) {
           let char = (65 <= value && value <=90) ? value - 65 : value - 97;
           char+= 13;
           //is char less than 26 if it is what range does it fall in ?
           //is char less than 26 if not what range does it fall in ?
           //char is less than 26 and falls between 65-90
           //char is less than 26 and fall between 97-122
           //char is greater than 26 and does not fall in between 65-90
           //char is greater than 26 and does not fall in between 99-122
           
           if(char <=25) {
             value = (65 <= value && value <=90) ? 65 + char : 97 + char
           }
           else {
             value = (65 <= value && value <=90) ? 65 + (char % 26) : 97 + (char % 26)
           }
         }
         return String.fromCharCode(value);
         
     })
     return res.join('')
  }