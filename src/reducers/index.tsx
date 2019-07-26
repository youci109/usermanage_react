import  VisibilityFilters  from '../actions'

const initialState = {

}

export default function getUserList(state = initialState, actions = VisibilityFilters) {
  if (typeof state === 'undefined') {
    return initialState
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}