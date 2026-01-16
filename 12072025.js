// Imperative 
function compressString(sentence) {
  const freq = getFreq(sentence)
  const arr = sentence.split(' ')
  const seen = new Set()
  const res = [] 

  for ( let el of arr ) {
    if (seen.has(el)) continue

    if (freq.get(el) > 1) {
      res.push(`${el}(${freq.get(el)})`)
    } else {
      res.push(el)
    }

    seen.add(el)
  }
  console.log(res)
  return res.join(' ')
}

function getFreq(sentence) {
  const arr = sentence.split(' ')
  const freq = new Map() 

  for (let el of arr) {
    const times = (freq.get(el) || 0) + 1
    freq.set(el, times)
  } 

  return freq 
}

// Functional 

