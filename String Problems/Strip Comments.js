function solution(input, markers) {
    //https://www.codewars.com/kata/51c8e37cee245da6b40000bd
    //iterate over a string
    //check if the char at the current index contains a marker
    //  if it does look for '\n' starting at marker index
    //    slice string from n to i and trim white space
    //    set n = index of '\n'
    let n=0
    let res =''
    for(let i=0; i < input.length; i++) {
      if(markers.includes(input.charAt(i))) {
        const markerIndex = i
        const nIndex = input.indexOf('\n', markerIndex)
        res+=input.slice(n, markerIndex)
        res = res.trim()
        n = nIndex
      }
    }
    return res
  };