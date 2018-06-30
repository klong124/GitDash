import axios from 'axios'

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
    promises.push(axios.get(repos[i].contributors_url)
      .then(res => res.data)
      .then(info => {
        repoInf.push({repo: repos[i].name, numContrs: info.length, numForks: repos[i].forks, numStars: repos[i].stargazers_count})
      })
    )
  }

  await Promise.all(promises)

  return repoInf
}



/**
 * THUNK CREATORS
 */

export const writeOrg = (name) => async (dispatch) => {
  let repos, inContrs, exContrs
  await axios.get(`https://api.github.com/orgs/${name}/repos`)
    .then(res => res.data)
    .then(info => {
      repos = reposWithInf(info)
      console.log("Repos are", repos)
    })
    .catch(err => console.log(err))
  await axios.get(`https://api.github.com/orgs/${name}/members`)
    .then(res => res.data)
    .then(info => {
      inContrs = info
      console.log("InContrs are", info)
    })
    .catch(err => console.log(err))
  await axios.get(`https://api.github.com/orgs/${name}/outside_collaborators`)
    .then(res => res.data)
    .then(info => {
      exContrs = info
      console.log("ExContrs are", info)
    })
    .catch(err => console.log(err))

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
