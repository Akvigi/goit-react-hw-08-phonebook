import { SLForm } from 'components/Form/SLForm'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from 'redux/requests'

export const Login = () => {
  const dispatch = useDispatch()

    const onLogin = async (item) => {
        dispatch(logIn(item))
    }
  return (
      <SLForm text={ "Login" } toDo = {onLogin} />
  )
}
