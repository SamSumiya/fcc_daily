function fizzBuzzMini(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz'
  if ( n % 3 === 0 ) {
    return 'Fizz'
  } else if ( n % 5 === 0 ) {
    return 'Buzz'
  } else {
    return String(n) 
  }
}