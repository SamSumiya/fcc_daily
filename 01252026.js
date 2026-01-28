function scaleImage(size, scale) {
  let [w, h] = size.split('x').map(Number)
  return `${w * scale}x${h*scale}`
}