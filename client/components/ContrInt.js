import React from 'react'
import {connect} from 'react-redux'
import ContrNav from './ContrNav'

const ContrInt = (props) => {
  return (
    <div>
      <ContrNav/>
      INTERNAL CONTRIBUTORS
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    contributors: state.org.inContrs
  }
}

export default connect(mapStateToProps)(ContrInt)
