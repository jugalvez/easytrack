import { useContext } from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

import ProfileContext from '../context/ProfileContext'

import '../css/dashboard.css'


const Dashboard = ({ children }) => {

  const [ profile, setProfile ] = useContext(ProfileContext)

  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              exact
              to="/todo"
              className="nav-link"
            >
              List
            </NavLink>
            <NavLink
              exact
              to="/another"
              className="nav-link"
            >
              Another
            </NavLink>
          </Nav>
          <Nav>
            <Navbar.Text>
              Bienvenido <b>{ profile.name }</b>
              <img 
                src="https://cdn.fakercloud.com/avatars/emmandenn_128.jpg"
                className="rounded-circle ml-3 Dashboard-thumb"                    
              />
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="my-5">
        { children }
      </div> 
    </div>
  )
}


export default Dashboard