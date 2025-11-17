function count(str) {
  let vc = 0, cc = 0 
  const vowels = new Set('aeiouAEIOU'); 

  for ( let el of str ) {
    if ( !/[A-Za-z]/.test(el)) continue; 

    if (vowels.has(el)) vc ++; 
    else cc ++ 
  }

  return [vc, cc]
}