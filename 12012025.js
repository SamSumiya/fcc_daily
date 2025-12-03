function convertToKm(miles) {
  const rawNumber = miles * 1.60934
  return Number(rawNumber.toFixed(2));
}