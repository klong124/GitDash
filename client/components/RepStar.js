import React from 'react'
import {connect} from 'react-redux'
import RepNav from './RepNav'

const RepStar = (props) => {
  if (props.repositories === undefined) {
    return <h1>Enter a GitHub organization</h1>
  }
  return (
    <div>
      <RepNav/>
      <h3>By Stars</h3>
      {props.repositories.sort((a, b) => (a.numStars <= b.numStars)).map((repo, i) => (<div key={repo.name}>{i + 1}) {repo.name} - {repo.numStars}</div>))}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    repositories: state.org.repos
  }
}

export default connect(mapStateToProps)(RepStar)
