// import { Label } from 'components/styled-comp/styled'
import { nanoid } from 'nanoid'
import React, {useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PBForm = ({ add }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const reset = () => {
    setName('')
    setNumber('')
  }

  const onAddContact = (e) => {
    e.preventDefault()
    if(name === '' && number === '') return alert("enter fields")
    const newContact = {
      name: name,
      number: number,
      id: nanoid()
    }

    add(newContact)
    reset()
  }
  
  return (
        <Form onSubmit={(e) => { onAddContact(e) }}>
          <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name
                  <Form.Control
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)} />
              </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Number
              <Form.Control
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={(e) => setNumber(e.currentTarget.value)}/>
            </Form.Label>
          </Form.Group>
          <Button variant="primary" type="submit" >Add contact</Button>
        </Form>
  )
}

PBForm.propTypes = {
  add: PropTypes.func
}


export default PBForm;
