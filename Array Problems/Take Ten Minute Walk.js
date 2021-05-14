function isValidWalk(walk) {
    //https://www.codewars.com/kata/54da539698b8a2ad76000228/
    const directions = {
      'n':0,
      's':0,
      'w':0,
      'e':0
    }
    if(walk.length > 10 || walk.length < 10) {
      return false
    }
    walk.forEach(direction => {
      directions[direction]+=1
    })
    
    const ver = directions['n'] - directions['s']
    const hor = directions['w'] - directions['e']
    
    return ver === 0 && hor === 0
  }