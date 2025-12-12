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

/* 

in this question, we need to use map as object does corse the data type to string which wont work with input 
such as non-string data. 

additinally, we can always set a maxCount checker in the loop, 
so we dont need to wait for the new map to be populated before finding the the most frequent element. 


*/ 