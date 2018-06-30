import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ORG = 'GET_ORG'
const PUT_ORG = 'PUT_ORG'

/**
 * INITIAL STATE
 */
const defaultOrg = ""

/**
 * ACTION CREATORS
 */
const getOrgInfo = (org) => ({type: GET_ORG, org})
const putOrg = (org) => ({type: PUT_ORG, org})



// export const writeOrg = (org) => async (dispatch) => {
//   dispatch(putOrg(org))
// }

/**
 * THUNK CREATORS
 */

export const writeOrg = (org) => (dispatch) => {
  dispatch(putOrg(org))
  return axios.get(`https://api.github.com/search/repositories?q=$web`)
    .then(res => res.data)
    .then(info => {
      console.log("Info is", info)
    })
}

/**
 * REDUCER
 */
export default function(state = defaultOrg, action) {
  switch (action.type) {
    case PUT_ORG:
      return action.org
    default:
      return state
  }
}
