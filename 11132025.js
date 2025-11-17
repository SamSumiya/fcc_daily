function shiftArray(arr, n) {
  const loa = arr.length
  const shift = ((n % loa) + loa) % loa
  const na = new Array(loa)

  for (let i = 0; i < arr.length; i++) {
    na[i] = arr[(shift+i)%loa]
  }
  return na
}