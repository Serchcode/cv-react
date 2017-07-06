import React ,{Component}from 'react';
import { Image } from 'semantic-ui-react';
import { Divider,Container } from 'semantic-ui-react';
import python from '../../assets/pyt.png';
import jas from '../../assets/jas.png';
import php from '../../assets/php.png';
import react from '../../assets/re.png';
import django from '../../assets/dj.png';
import laravel from '../../assets/laravel.png';
import aws from '../../assets/aws.png';
import nginx from '../../assets/ng.png';
import fire from '../../assets/Firebase.png';
import postgres from '../../assets/po.png';
import mysql from '../../assets/my.png';
import server from '../../assets/se.png';
import './cv.css';
import { Grid } from 'semantic-ui-react';

class CV extends Component{
	render(){
		return(
			<div>
			<Container>
			<p className="well">My skills</p>
			<Divider horizontal inverted>Programming languages</Divider>
			<Grid centered>
			<Grid.Row>
			<Grid.Column mobile={12} tablet={4} computer={4} centered>
			<Image src={jas}/>
			</Grid.Column>
			<Grid.Column mobile={12} tablet={4} computer={4} centered>
			<Image  src={python}/>
			</Grid.Column>
			<Grid.Column mobile={12} tablet={4} computer={4} centered>
			<Image src={php}/>
			</Grid.Column>
			</Grid.Row>
			</Grid>
			<Divider horizontal inverted>Frameworks</Divider>
			<Grid centered>
			<Grid.Row>
			<Grid.Column mobile={12} tablet={4} computer={4} centered>
			<Image src={react}/>
			</Grid.Column>
			<Grid.Column mobile={12} tablet={4} computer={4} centered>
			<Image  src={django}/>
			</Grid.Column>
			<Grid.Column mobile={12} tablet={4} computer={4} centered>
			<Image src={laravel}/>
			</Grid.Column>
			</Grid.Row>
			</Grid>
			<Divider horizontal inverted>Cloud Services & Servers</Divider>
			<Grid centered>
			<Grid.Row>
			<Grid.Column mobile={12} tablet={4} computer={4} centered>
			<Image className="down" src={fire}/>
			</Grid.Column>
			<Grid.Column mobile={12} tablet={4} computer={4} centered>
			<Image className="down"  src={nginx}/>
			</Grid.Column>
			<Grid.Column mobile={12} tablet={4} computer={4} centered>
			<Image className="down" src={aws}/>
			</Grid.Column>
			</Grid.Row>
			</Grid>
			<Divider horizontal inverted>Dbms</Divider>
			<Grid centered>
			<Grid.Row>
			<Grid.Column mobile={12} tablet={4} computer={4} centered>
			<Image className="down" src={postgres}/>
			</Grid.Column>
			<Grid.Column mobile={12} tablet={4} computer={4} centered>
			<Image className="down"  src={mysql}/>
			</Grid.Column>
			<Grid.Column mobile={12} tablet={4} computer={4} centered>
			<Image className="down" src={server}/>
			</Grid.Column>
			</Grid.Row>
			</Grid>
			</Container>
			</div>
			);
	}
}

export default CV;