

function getWeekday(dateString) {
  const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6:"Saturday"
  }
  const [ y, m, d ] = dateString.split('-').map(Number)
  const day = new Date( Date.UTC(y, m-1, d)).getUTCDay() 

  return days[day]
}