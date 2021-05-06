function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    var vowelsCount = 0;
    Array.from(str).forEach(c => {
      if(vowels.includes(c)) {
        vowelsCount+=1
      }
    })
    
    return vowelsCount;
  }