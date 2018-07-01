import axios from 'axios'


const OATHTOKEN = 'daa965470f19845252fe5ea9c2cb1455d70a86f8'

/**
 * ACTION TYPES
 */
const PUT_ORG = 'PUT_ORG'

/**
 * INITIAL STATE
 */
const defaultOrg = {}

/**
 * ACTION CREATORS
 */
const putOrg = (name, repos, inContrs, exContrs) => ({type: PUT_ORG, name, repos, inContrs, exContrs})


/**
 * HELPER FUNCTIONS
 */

const reposWithInf = async (repos) => {
  let promises = []
  let repoInf = []
  for (let i = 0; i < repos.length; i++) {
    promises.push(axios.get(repos[i].contributors_url + `?access_token=${OATHTOKEN}`)
      .then(res => res.data)
      .then(info => {
        repoInf.push({name: repos[i].name, numContrs: info.length, numForks: repos[i].forks, numStars: repos[i].stargazers_count})
      })
    )
  }
  await Promise.all(promises)

  return repoInf
}


const contrsWithInf = async (contrs) => {
  let promises = []
  let contrInf = []
  for (let i = 0; i < contrs.length; i++) {
    promises.push(axios.get(contrs[i].contributors_url + `?access_token=${OATHTOKEN}`)
      .then(res => res.data)
      .then(info => {
        contrInf.push({name: contrs[i].login, numContrs: info.length})
      })
    )
  }
  await Promise.all(promises)

  return contrInf
}



/**
 * THUNK CREATORS
 */

export const writeOrg = (name) => async (dispatch) => {
  let repos, inContrs, exContrs
  await axios.get(`https://api.github.com/orgs/${name}/repos?access_token=
${OATHTOKEN}`)
    .then(res => res.data)
    .then(info =>
      reposWithInf(info))
    .then(repoInf => {
      repos = repoInf
    })
    .catch(err => console.log(err))
  await axios.get(`https://api.github.com/orgs/${name}/members?access_token=
${OATHTOKEN}`)
    .then(res => res.data)
    .then(info =>
      contrsWithInf(info))
    .then(contrInf => {
      inContrs = contrInf
    })
    .catch(err => console.log(err))
  //********It seems I need to be a member of an organization to see the outside collaborators
  // Perhaps there's another endpoint I should look at***************************
//   await axios.get(`https://api.github.com/orgs/${name}/outside_collaborators?access_token=
// ${OATHTOKEN}`)
//     .then(res => res.data)
//     .then(info => {
//       exContrs = info
//       console.log("ExContrs are", info)
//     })
//     .catch(err => console.log(err))

  dispatch(putOrg(name, repos, inContrs, exContrs))
}

/**
 * REDUCER
 */
export default function(state = defaultOrg, action) {
  switch (action.type) {
    case PUT_ORG:
      return {name: action.name, repos: action.repos, inContrs: action.inContrs, exContrs: action.exContrs}
    default:
      return state
  }
}
