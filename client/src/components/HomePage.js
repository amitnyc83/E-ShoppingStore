import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Sticky, Menu, Divider } from 'semantic-ui-react'



class HomePage extends Component {
  state = {activeItem: 'home'}


  handleMenuClick = (e, { name }) => this.setState({ activeItem: name })

  render (){
    const { activeItem } = this.state

    return (
      <Sticky>
        <Menu attached='top' tabular>
          <Menu.Item
            as={Link} to='/products'
            name='home'
            color='orange'
            active={activeItem === 'home'}
            onClick={this.handleMenuClick}
          />
          <Menu.Item
            as={Link} to='/account'
            name='account'
            color='orange'
            active={activeItem === 'account'}
            onClick={this.handleMenuClick}
          />
          <Menu.Item
            as={Link} to='/cart'
            name='cart'
            color='orange'
            active={activeItem === 'cart'}
            onClick={this.handleMenuClick}
          />
          <Menu.Item
            as={Link} to='/login'
            name='log-in'
            color='orange'
            active={activeItem === 'log-in'}
            onClick={this.handleMenuClick}
          />
          <Menu.Item
            as={Link} to='/signup'
            name='sign-up'
            color='orange'
            active={activeItem === 'sign-up'}
            onClick={this.handleMenuClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search products...'
                />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Divider hidden />
      </Sticky>
    )
  }
}


export default HomePage
