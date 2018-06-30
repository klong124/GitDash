import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {ContrInt, ContrExt, RepStar, RepFork, RepCont, Home} from './components'

const Routes = () => (
  <Switch>
    <Route path="/internal-contributors" component={ContrInt} />
    <Route path="/external-contributors" component={ContrExt} />
    <Route path="/by-stars" component={RepStar} />
    <Route path="/by-forks" component={RepFork} />
    <Route path="/by-contributors" component={RepCont} />
    <Route component={Home} />
  </Switch>
)

export default withRouter(Routes)
