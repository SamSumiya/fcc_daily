function resolutionStreak(days) {
  let n = 0; 

  const STEPS = 10000; 
  const READ = 120; 
  const PAGES = 5; 

  for ( let i = 0; i < days.length; i++ ) {
    if ( Array.isArray(days[i]) || days[i].length !== 3 )  throw new Error(`Invalid data on day ${i + 1}`);
    const [ s, r, p ] = days[i]
    
    if ( s >= STEPS && r <= READ && p >= PAGES ) {
      n ++ 
    } else {
      return `Resolution failed on day ${i + 1}: ${n} day streak.`
    }
  }
  
  return `Resolution on track: ${n} day streak.`
}