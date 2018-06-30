import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {writeOrg} from '../store'

const Navbar = (props) => (
  <div>
    <h1>GitDash</h1>
    <nav>
      <div>
        <Link to="/internal-contributors">Top Contributors</Link>
        <Link to="/by-stars">Top Repositories</Link>
        <input className="form-control" type="text" name="org" placeholder="Enter GitHub organization name" value={props.org} onChange={props.handleChange}/>
      </div>
    </nav>
    <hr />
  </div>
)

const mapStateToProps = (state) => {
  return {
    org: state.org
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => {
      dispatch(writeOrg(event.target.value))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
