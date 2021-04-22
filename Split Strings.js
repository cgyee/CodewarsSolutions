function solution(str){
    //https://www.codewars.com/users/cgyee/completed_solutions
    //create array to hold the result
    //create a variable to hold the array's current index
    //iterate over the string
    
    //if i mod 2 is odd append to array and increment it's index by one
    
    //if the string's length is odd get the last element of the array in concat '_' to it
    
    //return final string
    
    let arr = [];
    let index = 0;
    let temp ="";
    
    for(let i = 0; i < str.length; i++) {
      temp+=str[i];
      if(i % 2 != 0) {
        arr[index] = temp;
        index+=1;
        temp='';
      }
    }
    if(str.length % 2 != 0) {
      arr[index] = temp+'_';
    }
    return arr
     
  }