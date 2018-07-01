import React from 'react'
import {connect} from 'react-redux'
import ContrNav from './ContrNav'

const ContrExt = (props) => {
  return (
    <div>
      <ContrNav/>
      EXTERNAL CONTRIBUTORS
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    contributors: state.org.inContrs
  }
}

export default connect(mapStateToProps)(ContrExt)

