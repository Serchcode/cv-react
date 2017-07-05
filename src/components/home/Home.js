import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import fotito from '../../assets/fotito.jpg';
import cb from '../../assets/cb.png';
import uaeh from '../../assets/ua.png'
import './Home.css';
import { Grid } from 'semantic-ui-react';


class Home extends Component{
	render(){
		return(
			<div>
			<Container>
			<p className="well">Welcome!</p>
			<Image className="imagen" src={fotito}  shape='circular' centered/>
			<Grid centered>
			<Grid.Row>
			<Grid.Column mobile={12} tablet={8} computer={8}>
			<p className="hello">Hello my name is Sergio Perez Bautista, i am graduated of the licenciature of computacional system in the 
			Autonomous University of the State of Hidalgo.</p>
			</Grid.Column>
			</Grid.Row>
			</Grid>
			</Container>
			<Container className="seccion">
			<Grid centered>
			<Grid.Row>
			<Grid.Column mobile={12} tablet={8} computer={8}>
			<p className="sub">Academic Training</p>
			</Grid.Column>
			</Grid.Row>
			<Grid.Row>
			<Grid.Column mobile={12} tablet={8} computer={8}>
			<p className="sub2">Center of Technological and Industrial Bachelor's Degree No. 222</p>
         	<p>My baccalaureate studies at the Center for Industrial Technology and Services No. 
			222 where he chooses the specialty of Programming.</p>
			</Grid.Column>
			<Grid.Column mobile={12} tablet={8} computer={8}>
			<Image className="imagen" src={cb}  centered/>
			</Grid.Column>
			</Grid.Row>
			<Grid.Row>
			<Grid.Column mobile={12} tablet={8} computer={8}>
			<p className="sub2">Autonomous University of the State of Hidalgo</p>
			<p>My higher education studies at the Autonomous University of the State of Hidalgo successfully 
			completing the Bachelor's Degree in Computer Systems Generation 2012-2016.</p>
			</Grid.Column>
			<Grid.Column mobile={12} tablet={8} computer={8}>
			<Image className="imagen" src={uaeh}  centered/>
			</Grid.Column>
			</Grid.Row>	
			</Grid>
			</Container>
			</div>
			);
	}
}

export default Home;