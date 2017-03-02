import { PAGE1_TOGGLE_PLAY } from 'actions/page1'

const initialState = {
  playing: false
}

export default function page1(state = initialState, action) {
  switch(action.type) {
    case PAGE1_TOGGLE_PLAY:
      return {
        ...state,
        playing: !state.playing
      }
    default:
      return state
  }
}

page1.reducer = 'page1'
