export function getRedirectPath({ type, avatar}) {
  let url = (type === 'boss') ? '/url' : '/genius'
  if (!avatar) {
    url += 'info'
  }
  return url
}