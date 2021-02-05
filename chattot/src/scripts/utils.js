export function keyPressed(e, key, shiftKey=false) {
  if(e.key===key && e.shiftKey===shiftKey) {
    return true
  }
  return false
}