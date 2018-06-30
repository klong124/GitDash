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
        <input className="form-control" type="text" name="org" placeholder="Enter GitHub organization name" onKeyPress={props.handleChange}/>
        <hr />
        Current Organization is {props.name}
        {/*<a href="/auth/github">Log In with GitHub</a>*/}
      </div>
    </nav>
    <hr />
  </div>
)

const mapStateToProps = (state) => {
  return {
    name: state.org.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (event) => {
      let key = event.which || event.keyCode
      console.log("Key is", key)
      if (key === 13)
        dispatch(writeOrg(event.target.value))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
