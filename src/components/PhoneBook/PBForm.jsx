import { Form, Label } from 'components/styled-comp/styled'
import { nanoid } from 'nanoid'
import React, {useState } from 'react'
import PropTypes from 'prop-types'


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
     <Form onSubmit={(e) => {onAddContact(e)}}>
          <Label>Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={(e) => setName(e.currentTarget.value)} />
          </Label>
          <Label>Number
            <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={(e) => setNumber(e.currentTarget.value)}/>
          </Label>
          <button type="submit" >Add contact</button>
        </Form>
  )
}

PBForm.propTypes = {
  add: PropTypes.func
}


export default PBForm;
