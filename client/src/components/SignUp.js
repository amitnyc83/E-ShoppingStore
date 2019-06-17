import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const SignUp = () => (
  <Form>
    <Form.Group unstackable widths={2}>
      <Form.Input required label='First name' placeholder='First name' />
      <Form.Input required label='Last name' placeholder='Last name' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input required label='Email' placeholder='Email' />
      <Form.Input required label='Password' placeholder='Password' />
    </Form.Group>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default SignUp
