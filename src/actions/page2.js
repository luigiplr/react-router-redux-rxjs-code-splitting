export const PAGE2_INCREMENT = 'PAGE2_INCREMENT'
export const PAGE2_DECREMENT = 'PAGE2_DECREMENT'

export function page2Increment() {
  return { type: PAGE2_INCREMENT }
}

export function page2Decrement() {
  return { type: PAGE2_DECREMENT }
}