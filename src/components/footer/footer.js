import React, {Component} from 'react';
import './footer.css';

class Footer extends Component{
	render(){
		return(
			<div>
			<div className="futer">
				<a className="ancla" href="https://github.com/Serchcode"><i className="fa fa-github fa-3x ico" aria-hidden="true"></i></a>
				<a className="ancla" href="https://www.linkedin.com/in/sergio-p%C3%A9rez-bautista-794492114/"><i className="fa fa-linkedin fa-3x ico" aria-hidden="true"></i></a>
				<a className="ancla" href="https://sergioperez.herokuapp.com/"><i className="fa fa-globe fa-3x ico" aria-hidden="true"></i></a>
				<br/>
			</div>
			<div className="Hack">
			<a href="https://sergioperez.herokuapp.com/"><p>Made by Serchlab.com 2019</p></a>
			</div>
			</div>
			);
	
	}
}

export default Footer;