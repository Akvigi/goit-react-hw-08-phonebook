import React from 'react'
// import { Form, Label } from 'components/styled-comp/styled'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';


export const SLForm = ({text, toDo}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const reset = () => {
    if (text !== "Sign up") {
      setEmail('')
      setPassword('')
    } else {
      setName('')
      setEmail('')
      setPassword('') 
    }
  }
const navigate = useNavigate();

  const toUser = () => {
    if (text !== "Sign up") {
      const user = {
        email: email,
        password: password
      }
      return user
    } else {
      const user = {
        name: name,
        email: email,
        password: password
      }
      return user
    }
  }

  // const user = {
  //   name: name,
  //   email: email,
  //   password: password
  // }
  
  const user = toUser()

  const onSubmit = (e, us) => {
    e.preventDefault()
    console.log(JSON.stringify(us));
    // dispatch(getSignUp(JSON.stringify(us)))
    toDo(us)
    navigate("/phonebook", { replace: true });
    reset()
  }

  return (
      <Form
           onSubmit={(e) => onSubmit(e, user)}
      >
          {text === "Sign up" && <Form.Group className="mb-3" controlId="formBasicName"><Form.Label>Name
            <Form.Control
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={(e) => setName(e.currentTarget.value)} />
            </Form.Label>
      </Form.Group>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email
              <Form.Control
                type="text"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)} />
        </Form.Label>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password
            <Form.Control
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}/>
          </Form.Label>
      </Form.Group>
          <Button variant="primary" type="submit" >{text}</Button>
        </Form>
  )
}
