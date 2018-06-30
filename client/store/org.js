import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ORG = 'GET_ORG'
const PUT_ORG = 'PUT_ORG'

/**
 * INITIAL STATE
 */
const defaultOrg = {}

/**
 * ACTION CREATORS
 */
const putOrg = (name, repos, contrs) => ({type: PUT_ORG, name, repos, contrs})


/**
 * THUNK CREATORS
 */

export const writeOrg = (name) => async (dispatch) => {
  let repos, contrs
  await axios.get(`https://api.github.com/orgs/${name}/repos`)
    .then(res => res.data)
    .then(info => {
      repos = info
      console.log("Repos are", info)
    })
    .catch(err => console.log(err))
  await axios.get(`https://api.github.com/orgs/${name}/members`)
    .then(res => res.data)
    .then(info => {
      contrs = info
      console.log("Contrs are", info)
    })
    .catch(err => console.log(err))

  dispatch(putOrg(name, repos, contrs))
}

/**
 * REDUCER
 */
export default function(state = defaultOrg, action) {
  switch (action.type) {
    case PUT_ORG:
      return {...state, name: action.name, repos: action.repos, contrs: action.contrs}
    default:
      return state
  }
}
