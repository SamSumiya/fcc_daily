function mostFrequent(arr) {
  const map = new Map() 
  let res = '' 
  let maxCount = 0; 

  for ( let el of arr ) {
    const count = (map.get(el) || 0 ) + 1
    map.set(el, count)

    if ( count > maxCount) {
      maxCount = count
      res = el
    }
  }

  return res 
}