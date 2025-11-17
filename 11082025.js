function canPost(message) {
  const len = message.length 

  if ( len <= 40 ) {
    return 'short post'
  } else if (len > 40 && len <= 80) {
    return 'long post'
  } else {
    return 'invalid post'
  }
}