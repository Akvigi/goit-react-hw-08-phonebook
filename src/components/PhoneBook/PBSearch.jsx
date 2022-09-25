// import { Label } from 'components/styled-comp/styled'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from 'redux/filterSlice'
// import PropTypes from 'prop-types'
import { Form  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PBSearch = () => {
  const dispatch = useDispatch()
  // const array = useSelector(state => state.contacts.items)
  return (
    <>
      {/* {array.length > 0 && */}
      <Form.Group className='mb-3'>
        <Form.Label>Find contacts by name
              <Form.Control
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={(e)=> dispatch(setFilter(e.currentTarget.value))} 
              />
          </Form.Label>
        </Form.Group>
      {/* } */}
    </>
  )
}

// PBSearch.propTypes = {
//   array: PropTypes.array,
//   onChange: PropTypes.func  
// }

export default PBSearch