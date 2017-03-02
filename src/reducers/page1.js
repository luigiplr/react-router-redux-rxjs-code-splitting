import { PAGE1_ACTION } from 'actions/page1'

const initialState = {
  toggled: false
}

export default function page1(state = initialState, action) {
  switch(action.type) {
    case PAGE1_ACTION:
      return {
        ...state,
        toggled: !state.toggled
      }
  }
}

page1.reducer = 'page1'
