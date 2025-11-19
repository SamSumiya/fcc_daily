function convert(heading) {
  const [count, subStr] = countHash(heading.trimStart())
  
  if (count === 0 || count > 6) return 'Invalid format'

  return `<h${count}>${subStr}</h${count}>`
} 

function countHash(str) {
  let i = 0; 
  let count = 0 

  while (i < str.length) {
    if (str[i] === '#') count ++
    else break 
    i ++ 
  }

  if (count === 0 || str[i] !== ' ') return [0, ''];

  return [count, str.slice(i+1).trimStart()]
}