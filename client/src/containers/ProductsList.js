import React from 'react'
import { Grid, Image, Header, Divider } from 'semantic-ui-react'

const ProductsList = () => (
  <div>
  <Divider hidden />
  <Header as='h2' textAlign='center'> Products
  <Divider hidden />
  </Header>
  <Grid columns={3} divided>
  <Grid.Row>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
  </Grid.Row>

  <Grid.Row>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
  </Grid.Column>
  </Grid.Row>

  <Grid.Row>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
  </Grid.Column>
  </Grid.Row>

  <Grid.Row>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
  </Grid.Column>
  </Grid.Row>

  <Grid.Row>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
  </Grid.Column>
  <Grid.Column>
  <Image src='https://react.semantic-ui.com/images/wireframe/image.png'/>
  </Grid.Column>
  </Grid.Row>
  </Grid>
  </div>
)

export default ProductsList
