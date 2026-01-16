function emailChainCount(subject) {
  let count = 0; 
  const forwarded = new Set(['fw', 'fwd','re'])

  const lowerCaseSub = subject.toLowerCase()
  const arr = lowerCaseSub.split(":") 
  
  for (let v of arr) {
    if (forwarded.has(v.trim())) {
      count ++ 
    }
  }

  return count
}