function formatDuration (seconds) {
    // codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
    if(seconds === 0) {
      return 'now'
    }
    const secondsInYear = {'duration':'year', 'seconds':31536000}
    const secondsInDay = {'duration':'day', 'seconds':86400}
    const secondsInHour = {'duration':'hour', 'seconds':3600}
    const secondsInMin = {'duration':'minute', 'seconds':60}
    const second = {'duration':'second', 'seconds':1}
    const timeCal = [secondsInYear, secondsInDay, secondsInHour, secondsInMin, second]
    let time = []
    timeCal.forEach(timeobj => {
      const tempTime = Math.floor(seconds / timeobj.seconds)
      time.push({'duration':timeobj.duration, 'seconds':tempTime})
      seconds -= (tempTime*timeobj.seconds)
    })
    let lastIndex = 0
    const filterTimes = time.filter(timeobj => timeobj.seconds > 0)
    const res = filterTimes.reduce((acc, curr) => {
      if(curr) {
        const str = curr.seconds > 1 ? `${curr.seconds} ${curr.duration}s` : `${curr.seconds} ${curr.duration}`
        if(filterTimes.length > 1 && lastIndex == (filterTimes.length-1)) {
          acc+=' and '
        } 
        else if(filterTimes.length >=3 && lastIndex >=1 && lastIndex < (filterTimes.length -1)) {
          acc+=', '
        }
        lastIndex+=1
        return acc + str
      }
      return ''
    },'')
    
    return res
  }
  