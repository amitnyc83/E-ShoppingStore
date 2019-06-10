import React, { Component } from 'react'
import {Menu, Header, Icon } from 'semantic-ui-react'

export default class HomePage extends Component {
  state = {activeItem: 'home'}

  render (){
    const { activeItem } = this.state

    return (
      <Menu>
       <Menu.Item
       name='home'
       color='green'
       active={activeItem === 'home'}
       onClick={this.handleMenuClick}
      /></Menu>
    )
  }
}
