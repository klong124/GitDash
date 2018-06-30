import React from 'react'
import {Link} from 'react-router-dom'

const ContrNav = () => (
  <div>
    <h3>Top Contributors</h3>
    <nav>
      <div>
        <Link to="/internal-contributors">Top Internal Contributors</Link>
        <Link to="/external-contributors">Top External Contributors</Link>
      </div>
    </nav>
    <hr />
  </div>
)

export default ContrNav
