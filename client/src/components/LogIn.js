import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Form, Container, Header } from 'semantic-ui-react'

class LogIn extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return(
      <Container>
        <Header as='h2' textAlign='center'>
          Log In To Your Account
          <Divider hidden />
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group unstackable widths={2}>
            <Form.Input
              icon='at'
              iconPosition='left'
              label='Email'
              name='email'
              type='email'
              value={this.state.email}
              placeholder='Email'
              onChange={this.handleChange}
            />
            <Form.Input
              icon='lock'
              iconPosition='left'
              label='Password'
              name='password'
              type='password'
              value={this.state.password}
              placeholder='Password'
              onChange={this.handleChange}
            />
          </Form.Group><br></br>
          <Button primary type='submit' content='Login' />
        </Form>
        <Divider horizontal section>Or</Divider>
        <Button as={Link} to='/signup' content='Sign up' icon='signup' size='small' secondary/>
      </Container>
    )
  }
}

export default LogIn
