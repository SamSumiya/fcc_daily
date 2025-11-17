function findWord(matrix, word) {
  const dirs = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1]
  ]

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      
      if (matrix[i][j] !== word[0]) continue;

      for ( let [dx, dy] of dirs ) {

        let x = i;
        let y = j;
        let k = 0; 

        while ( 
          k < word.length &&
          x >= 0 && x < matrix.length && 
          y >= 0 && y < matrix[0].length && 
          matrix[x][y] === word[k]
        ) {
          x += dx
          y += dy 
          k +=1 
        }

        if ( k === word.length ) {
          return [
            [i, j],
            [i + (word.length - 1) * dx,
             j + (word.length - 1) * dy]
          ]
        }
      }
    }
  }
}