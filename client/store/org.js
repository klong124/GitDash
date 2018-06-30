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

/**
 * THUNK CREATORS
 */

export const writeOrg = (org) => async dispatch => {
  dispatch(putOrg(org))
}

export const readOrg = () => async dispatch => {

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
