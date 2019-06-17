import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Form, Grid, Segment, Container } from 'semantic-ui-react'

class LogIn extends Component {
  render() {
    return(
      <Container>
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input icon='at' iconPosition='left' label='Email' placeholder='Email' />
            <Form.Input icon='lock' iconPosition='left' label='Password' placeholder='Password' type='password' />
          </Form.Group>
          <Button primary type='submit' content='Login' />
        </Form>

       <Divider horizontal section>Or</Divider>
       <Button as={Link} to='/signup' content='Sign up' icon='signup' size='big' secondary/>
      </Container>
    )
  }
}

export default LogIn
