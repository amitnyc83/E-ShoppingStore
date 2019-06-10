import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import Logo from './Logo'

export default class HomePage extends Component {
  state = {activeItem: 'home'}

  handleMenuClick = (e, { name }) => this.setState({ activeItem: name })

  render (){
    const { activeItem } = this.state

    return (
      <Menu attached='top' tabular>
       <Menu.Item
         name='home'
         color='orange'
         active={activeItem === 'home'}
         onClick={this.handleMenuClick}
        />
        <Menu.Item
          name='cart'
          color='orange'
          active={activeItem === 'cart'}
          onClick={this.handleMenuClick}
        />
        <Menu.Item
         name='sign-in'
         color='orange'
         active={activeItem === 'sign-in'}
         onClick={this.handleMenuClick}
        >
        </Menu.Item>
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
    )
  }
}
