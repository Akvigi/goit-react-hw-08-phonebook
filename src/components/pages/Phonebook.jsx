import PBForm from 'components/PhoneBook/PBForm'
import List from 'components/PhoneBook/PBList'
import PBSearch from 'components/PhoneBook/PBSearch'
import Section from 'components/Section/Section'
import { ContentContainer } from 'components/styled-comp/styled'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts, addContact, removeContact } from "redux/requests";


export const Phonebook = () => {
  const contacts = useSelector(store => store.contacts)
  const filter = useSelector(store => store.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const onFilter = () => {
    if (filter) {
      const filterredArray = contacts.items.filter(({ name }) => name.toLowerCase().indexOf(filter.toLowerCase()) > -1)
      return filterredArray
    } 
    return contacts.items
  }

  const onAddCont = (item) => {
    dispatch(addContact(item))
  }

  const onRemoveCont = (id) => {
    dispatch(removeContact(id))
  }

  const array = onFilter()
  return (
        <ContentContainer>
          <Section title="Phonebook">
              <PBForm
                add = {onAddCont}
              />
            </Section>
            <Section title="Contacts">
              <PBSearch/>
              {contacts.loading ? <h3>loading...</h3> : <List array={array} del={onRemoveCont} />}
            </Section>
        </ContentContainer>
  )
}
