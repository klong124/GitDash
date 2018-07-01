import React from 'react'
import {connect} from 'react-redux'
import ContrNav from './ContrNav'

const ContrExt = (props) => {
  if (props.contributors === undefined) {
    return <h1>Enter a GitHub organization</h1>
  }
  return (
    <div>
      <ContrNav/>
      <h3>External Contributors</h3>
      {/*{props.contributors.sort((a, b) => (a.numContrs <= b.numContrs)).map((contr, i) => (<div key={contr.name}>{i + 1}) {contr.name} - {contr.numContrs}</div>))}*/}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    contributors: state.org.exContrs
  }
}

export default connect(mapStateToProps)(ContrExt)

