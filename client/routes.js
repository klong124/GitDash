import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {ContrInt, ContrExt, RepStar, RepFork, RepCont, Home} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {

    return (
      <Switch>
        <Route path="/internal-contributors" component={ContrInt} />
        <Route path="/external-contributors" component={ContrExt} />
        <Route path="/by-stars" component={RepStar} />
        <Route path="/by-forks" component={RepFork} />
        <Route path="/by-contributors" component={RepCont} />
        <Route component={Home} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    //*************PROBABLY DON'T NEED*******************
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    }
  }
}

// **************MIGHT NOT NEED WITHROUTER OR CONNECT************
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired
}
