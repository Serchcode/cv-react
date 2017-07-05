import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import './nav.css';

class Menucv extends Component {

  componentDidMount(){

  }
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='Skills' active={activeItem === 'Skills'} onClick={this.handleItemClick} />
          <Menu.Item name='Portfolio' active={activeItem === 'Portfolio'} onClick={this.handleItemClick} />
          <Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    )
  }
}



export default Menucv;