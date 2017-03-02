import { PAGE2_INCREMENT, PAGE2_DECREMENT } from 'actions/page2'

export default function page2(state = 0, action) {
  switch (action.type) {
    case PAGE2_INCREMENT:
      return state + 1
    case PAGE2_DECREMENT:
      return state - 1
    default:
      return state
  }
}

page2.reducer = 'page2'
