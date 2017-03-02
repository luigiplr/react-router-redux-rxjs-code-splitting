import { PAGE3_ACTION } from 'actions/page3'

const initialState = {
  toggled: false
}

export default function page3(state = initialState, action) {
  switch(action.type) {
    case PAGE3_ACTION:
      return {
        ...state,
        toggled: !state.toggled
      }
    default:
      return state
  }
}

page3.reducer = 'page3'
