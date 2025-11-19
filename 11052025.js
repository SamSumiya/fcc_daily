function buildMatrix(rows, cols) {
  const opt = [] 

  for ( let i = 0; i < rows; i ++ ) {
    opt.push(new Array(cols).fill(0))
  }

  return opt
}