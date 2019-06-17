import React, { Component } from 'react'
import { Input, Sticky, Menu, Segment, Image, Divider } from 'semantic-ui-react'
import _ from 'lodash'


export default class HomePage extends Component {
  state = {activeItem: 'home'}


  handleMenuClick = (e, { name }) => this.setState({ activeItem: name })

  render (){
    const { activeItem } = this.state

    return (
      <Sticky>
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
            name='log-in'
            color='orange'
            active={activeItem === 'log-in'}
            onClick={this.handleMenuClick}
          />
          <Menu.Item
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
