import { useState, useEffect, useContext } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useGetApi } from '../customHooks/ApiService'
import ProfileContext from '../context/ProfileContext'

import '../css/Login.css'

export default function Login() {
  const [ user, setUser ] = useState('')
  const [ pass, setPass ] = useState('')
  const [ url, setUrl ] = useState('')
  const [ response, executeCall ] = useGetApi(url)

  const [ profile, setProfile ] = useContext(ProfileContext)
  const history = useHistory()

  const handleLogin = async () => {    
    if (user === '')
      return

    const search = '/users?username=' + user
    setUrl(search)
  }

  useEffect(() => {
    if (response && response.length === 1) {
      const data = response[0]

      setProfile({...profile, id: data.id, name: data.username })
      history.push('/todo')
    }
  }, [ response ])


  const Botoncito = ({ children, typeButton }) => {
    const validar = (typeButton == 'submit') ? 'fa fas-edit' : 'Presionar'

    return (
      <a href="#">{ children(validar) }</a>
    )
  }

  return (
    <div className="LoginContainer pt-5">
      <Card className="mx-auto ToDo-card">
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Usuario"
                onChange={(event) => setUser(event.target.value) } 
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Contraseña"
                onChange={(event) => setPass(event.target.value) } 
              />
            </Form.Group>
            
            <Botoncito typeButton="submit">
              { (texto) => <i className={texto}></i> }
            </Botoncito>

            <Button variant="primary" type="button" onClick={() => handleLogin() }>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}