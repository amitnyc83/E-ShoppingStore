import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Message } from 'semantic-ui-react'
import AccountForm from './AccountForm'

class SignUp extends Component {


  render(){
    return(
      <div>
        <Message
          attached
          header='Welcome to our site!'
          content='Fill out the form below to sign-up for a new account'
        />
      <AccountForm formType={'createUser'} />
        <Message attached='bottom' warning>
          Already signed up?&nbsp;<Button as={Link} to='/login' content='Login here'/>&nbsp;instead.
        </Message>
      </div>
    )
  }
}

export default SignUp
