import React, { useContext } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProfileContext from '../context/ProfileContext'


/* Pages */
import Dashboard from '../layout/Dashboard'
import ToDo from '../pages/ToDo'
import Login from '../pages/Login'


export default function Main() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute path="/todo">
            <Dashboard>
              <ToDo />
            </Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/another">
            <Dashboard>
              <Another />
            </Dashboard>
          </PrivateRoute>
        </Switch>
    </Router>
  );
}


// Redirect to Login if are not yet authenticated
function PrivateRoute({ children, path }) {
  const [ profile, setProfile ] = useContext(ProfileContext)

  if (profile.id !== 0) { 
    return (
      <Route path={path}>
        { children }
      </Route>
    )
  } else {
    return (
      <Redirect to={{ pathname: "/" }} />
    )
  }
}


function Another () {
  return (
    <h1 class="text-center">Another blank page </h1>
  )
}