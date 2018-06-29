import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>GitDash</h1>
    <nav>
      <div>
        <Link to="/internal-contributors">Top Contributors</Link>
        <Link to="/by-stars">Top Repositories</Link>
      </div>
    </nav>
    <hr />
  </div>
)

export default Navbar
