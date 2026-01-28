function oddOrEvenDay(timestamp) {
  const date = new Date(timestamp)

  const day = date.getUTCDate()

  return day % 2 === 0 ? 'even' : 'odd'
}