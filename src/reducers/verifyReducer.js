import constants from '../constants'

var initialState = {
  allprofiles: null
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type){
    case constants.GET_MIDDLEMEN:
    console.log('GET_MIDDLEMEN:' + JSON.stringify(action.payload))
    updated['allprofiles'] = action.payload
    return updated

    default:
      return state
  }
}
