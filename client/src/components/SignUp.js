import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Divider, Grid, Container } from 'semantic-ui-react'

const SignUp = () => (
  <Container>
    <Form>
      <Form.Group unstackable widths={2}>
        <Form.Input required label='First name' placeholder='First name' />
        <Form.Input required label='Last name' placeholder='Last name' />
      </Form.Group>
      <Form.Group widths={2}>
        <Form.Input required icon='at' label='Email' placeholder='Email' />
        <Form.Input required icon='lock'label='Password' placeholder='Password' />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>

    <Divider horizontal section>Or</Divider>
    <Button as={Link} to='/login' content='Log In' icon='login' size='big' secondary></Button>
    </Container>
)

export default SignUp
