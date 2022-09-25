import { signUp } from 'redux/requests'
import { SLForm } from 'components/Form/SLForm'
import React from 'react'
import { useDispatch} from 'react-redux'

export const SignUp = () => {
    const dispatch = useDispatch()

    const onSignUp = async (item) => {
        dispatch(signUp(item))
    }

  return (
      <SLForm text={"Sign up"} toDo= {onSignUp} />
  )
}
