function likes(names) {
    //https://www.codewars.com/kata/5266876b8f4bf2da9b000362
    //if names is empty return "no one likes this"
    if(names.length == 0) {
      return "no one likes this"
    }
    
    //create string var result=""
    let results=""
    //if names == 1
      //return names[0] +"likes this"
    if(names.length == 1) {
      return names[0] + " likes this"
    }
    
    //if names == 2
      //return names[0] + "and" + names[1] likes this
    if(names.length ==2) {
      return names[0] + " and " + names[1] + " like this"
    }
    
    //if names  >=3
      //return names[0] + "," + names[1] + "," + "and" + names[2] + "likes this"
    return names.length > 3 ? names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this":names[0] + ", " + names[1] + " and " + names[2] + " like this"
  }