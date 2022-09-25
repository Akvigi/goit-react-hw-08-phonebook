import React from 'react'
import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup';

const List = ({ array = [], del }) => {
  return (
      <ListGroup as="ol" numbered>
        {array.length !== 0 ? array.map(item => <ListGroup.Item as="li" key={item.id}>{item.name}: {item.number} <button onClick={() => del(item.id)} type='click'>delete</button></ListGroup.Item>) : <li>Havent contacts to show</li>}
      </ListGroup>
  )
}

List.propTypes = {
  array: PropTypes.array,
  del: PropTypes.func
}

export default List