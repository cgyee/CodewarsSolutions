function anagrams(word, words) {
    //https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
    //sort the reference word and assign to var
    let sortWord = word.split('').sort().join('')
    console.log(sortWord)
    //iterate over words splitting each string into a string array append to a new array
    //sort string arrays  
    //join the sorted result on itself
    //iterate over sorted string and compare to reference string if strings are the same append original
    //string to corresponding index
    let sortWords = words.map(w => w.split('').sort().join(''))
    let res  = []
    let index = 0
    sortWords.forEach(word => {
      if(word == sortWord) {
        res.push(words[index])
      }
      index+=1
    })
    return res
    
  }