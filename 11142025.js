function daysUntilWeekend(dateString) {
  const [ y, m, d ] = dateString.split('-').map(Number)
  const utcDate = new Date(Date.UTC(y, m - 1, d))
  const day = utcDate.getUTCDay()

  const sat = 6, sun = 0

  if ( day === sat || day === sun) {
    return "It's the weekend!"
  }

  const remaining = sat - day 

  return remaining === 1 ? `${remaining} day until the weekend.` : `${remaining} days until the weekend.`
}