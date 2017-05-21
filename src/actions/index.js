import constants from '../constants'
import APIManager from '../utils/APIManager'

const getRequest = (path, params, actionType) => {
  return (dispatch) =>
      APIManager.get(path, params)
      .then(response => {
        //console.log('GET: ' + JSON.stringify(response))

        const payload = response.results || response.result || response.user

        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        return response


      })
      .catch(err => {
        console.log('ERRROR: ' + JSON.stringify(err.message))
        throw err
      })
}

const postRequest = (path, params, actionType) => {
  return (dispatch) =>
      APIManager.post(path, params)
      .then(response => {
        //console.log('POST: ' + JSON.stringify(response))
        const payload = response.results || response.result || response.user

        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        return response

      })
      .catch(err => {
        console.log('ERRROR: ' + JSON.stringify(err.message))
        throw err

      })
}

const putRequest = (path, params, actionType) => {
  return (dispatch) =>
      APIManager.handlePut(path, params)
      .then(response => {
        //console.log('POST: ' + JSON.stringify(response))

        const payload = response.results || response.result || response.user

        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        return response

      })
      .catch(err => {
        console.log('ERRROR: ' + JSON.stringify(err.message))
        throw err
      })
}


export default {

    checkSteam: (id, params) => {
    return dispatch => {
      return dispatch(getRequest('/verify/checkSteam/' + id, params, constants.CHECK_LINK))
    }
  },

    checkFacebook: (id, params) => {
    return dispatch => {
      return dispatch(getRequest('/verify/checkFacebook/' + id, params, constants.CHECK_LINK))
    }
  },

  submitVerify: (params) => {
  return dispatch => {
    return dispatch(postRequest('/api/verify', params, constants.POST_VERIFY))
    }
  },
  
  getMiddlemen: (params) => {
  return dispatch => {
    return dispatch(getRequest('/api/verify', params, constants.GET_MIDDLEMEN))
    }
  }

}
