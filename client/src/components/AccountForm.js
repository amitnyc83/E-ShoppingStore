import React, { Component } from 'react'
import { Form, Input, Button, Icon } from 'semantic-ui-react'

class AccountForm extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    return(
      <Form className='attached fluid segment' onSubmit={this.handleSubmit}>
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
          value={this.state.email}
          onChange={this.handleChange}
          />
        <Form.Input
          label='Password'
          placeholder='password'
          type='password'
          name='password'
          icon='lock'
          value={this.state.password}
          onChange={this.handleChange}
          />
        <Button color='blue'>Submit</Button>
      </Form>
    )
  }
}

export default AccountForm
