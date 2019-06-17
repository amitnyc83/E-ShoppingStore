import React, { Component } from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

class LogIn extends Component {
  render() {
    return(
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form>
             <Form.Input icon='user' iconPosition='left' label='Email' placeholder='Email' />
             <Form.Input icon='lock' iconPosition='left' label='Password' placeholder='Password' type='password' />

             <Button primary type='submit' content='Login' />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
          <Button content='Sign up' icon='signup' size='big' />
        </Grid.Column>
       </Grid>

       <Divider vertical section>Or</Divider>
      </Segment>
    )
  }
}

export default LogIn
