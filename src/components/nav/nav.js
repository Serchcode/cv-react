import React, { Component } from 'react';
import { Menu, Segment, Sidebar} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './nav.css';


class Menucv extends Component {

  componentDidMount(){

  }
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Sidebar.Pushable as={Segment}>
         <Sidebar.Pusher>
        <Menu inverted pointing secondary>
          <Link to={"/"}>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
          </Link>
          <Link to={"/curriculum"}>
          <Menu.Item name='Skills' active={activeItem === 'Skills'} onClick={this.handleItemClick} />
          </Link>
          <Link to={"/resume"}>
          <Menu.Item name='Resume' active={activeItem === 'Resume'} onClick={this.handleItemClick} />
          </Link>
          <Link to={"/contact"}>
          <Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick} />
          </Link>
        </Menu>
         </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Segment>
    )
  }
}



export default Menucv;