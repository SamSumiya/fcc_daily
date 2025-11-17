function isMatch(fingerprintA, fingerprintB) {
  if ( fingerprintA.length !== fingerprintB.length ) return false 

  const deviation = Math.floor(fingerprintA.length * 0.1) 

  let i = 0; 
  let mismatchCount = 0; 

  while ( i < fingerprintA.length ) {
    if (fingerprintA[i] !== fingerprintB[i]) {
      mismatchCount += 1 
    }

    if ( mismatchCount > deviation) return false 
    i ++ 
  }

  return true 
}