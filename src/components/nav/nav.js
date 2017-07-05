import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
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
          <Link to={"/"}>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          </Link>
          <Link to={"/curriculum"}>
          <Menu.Item name='Skills' active={activeItem === 'Skills'} onClick={this.handleItemClick} />
          </Link>
          <Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick} />
        </Menu>
      </Segment>
    )
  }
}



export default Menucv;