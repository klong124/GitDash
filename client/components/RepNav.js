import React from 'react'
import {Link} from 'react-router-dom'

const RepNav = () => (
  <div>
    <h3>Top Repositories</h3>
    <nav>
      <div>
        <Link to="/by-stars">Top Repositories By Stars</Link>
        <Link to="/by-forks">Top Repositories By Forks</Link>
        <Link to="/by-contributors">Top Repositories By Contributors</Link>
      </div>
    </nav>
    <hr />
  </div>
)

export default RepNav
