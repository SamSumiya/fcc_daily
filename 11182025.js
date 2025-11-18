function oneHundred(chars) {
  const lc = chars.length
  const sets = Math.floor( 100 / lc)
  const trail = 100 % lc 
  let opt = '' 

  for ( let i = 0; i < sets; i ++ ) {
    opt += chars 
  }

  opt += chars.slice(0, trail)

  return opt 
}