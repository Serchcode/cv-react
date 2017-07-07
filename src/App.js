import React, { Component } from 'react';
import Footer from './components/footer/footer';
import Routes from './routes';
import './App.css';
import Particles from 'react-particles-js';
import { Menu, Segment, Sidebar,Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class App extends Component {
   componentDidMount(){

  }
  state = { activeItem: 'Home',
            visible: false }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { visible } = this.state
    return (
          <div>
           <Segment inverted>
           <Menu icon="labeled" inverted >
           <Menu.Item name='Menu' active={activeItem === 'Menu'} onClick={this.toggleVisibility}>
            <Icon name='content'/>
            Menu
           </Menu.Item>
           </Menu>
           </Segment>
          <Sidebar.Pushable>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Link to={"/"}>
          <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} >
          <Icon name='home'/>
            Home
          </Menu.Item>
          </Link>
          <Link to={"/curriculum"}>
          <Menu.Item name='Skills' active={activeItem === 'Skills'} onClick={this.handleItemClick} >
          <Icon name='spy'/>
            Skills
           </Menu.Item>
          </Link>
          <Link to={"/resume"}>
          <Menu.Item name='Resume' active={activeItem === 'Resume'} onClick={this.handleItemClick} >
          <Icon name='student'/>
            Resume
           </Menu.Item>
          </Link>
          <Link to={"/contact"}>
          <Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick} >
          <Icon name='user outline'/>
            Contact
           </Menu.Item>
          </Link>
          </Sidebar>
          <Sidebar.Pusher>
          <div className="App">      
          <Particles/>        
      	  <Routes/>
      	  <Footer/>
          </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
    );
  }
}

export default App;
