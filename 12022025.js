function toSnake(camel) {
  let opt = '' 

  for ( let c of camel ) {
    if (c === c.toLowerCase()) {
      opt += c 
    } else {
      opt += '_'
      opt += c.toLowerCase()
    }
  }

  return opt 
}