import React from 'react'
import {connect} from 'react-redux'
import RepNav from './RepNav'

const RepCont = (props) => {
  if (props.repositories === undefined) {
    return <h1>Enter a GitHub organization</h1>
  }
  return (
    <div>
      <RepNav/>
      <h3>By Contributors</h3>
      {props.repositories.sort((a, b) => (a.numContrs <= b.numContrs)).map((repo, i) => (<div key={repo.name}>{i + 1}) {repo.name} - {repo.numContrs}</div>))}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    repositories: state.org.repos
  }
}

export default connect(mapStateToProps)(RepCont)
