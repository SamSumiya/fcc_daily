function getExtension(filename) {
  const last = filename.lastIndexOf('.')

  if (last < 0 || last === filename.length - 1) return 'none'

  return filename.slice(last+1)
}