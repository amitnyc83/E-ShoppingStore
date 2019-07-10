import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class AccountForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.firstName)
    fetch('api/users', {
      method: 'POST',
      body: new FormData(document.getElementById("user-form")),
      credentials: 'same-origin'
    })
    .then(resp => console.log(resp))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <Form id="user-form" className='attached fluid segment' onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            fluid label='First Name'
            placeholder='First Name'
            type='text'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
            />
          <Form.Input
            fluid label='Last Name'
            placeholder='Last Name'
            type='text'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleChange}
            />
        </Form.Group>
        <Form.Input
          label='Email'
          placeholder='Email'
          type='text'
          name='email'
          icon='at'
          iconPosition='left'
          value={this.state.email}
          onChange={this.handleChange}
          />
        <Form.Input
          label='Password'
          placeholder='Password'
          type='password'
          name='password'
          icon='lock'
          iconPosition='left'
          value={this.state.password}
          onChange={this.handleChange}
          />
        <Button color='blue'>Submit</Button>
      </Form>
    )
  }
}

export default AccountForm
