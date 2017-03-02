import { PAGE2_ACTION } from 'actions/page2'

const initialState = {
  toggled: false
}

export default function page2(state = initialState, action) {
  switch(action.type) {
    case PAGE2_ACTION:
      return {
        ...state,
        toggled: !state.toggled
      }
    default:
      return state
  }
}

page2.reducer = 'page2'
