import React, {Component} from 'react';
import './footer.css';

class Footer extends Component{
	render(){
		return(
			<div>
			<div className="futer">
				<i className="fa fa-github fa-3x ico" aria-hidden="true"></i>
				<i className="fa fa-linkedin fa-3x ico" aria-hidden="true"></i>
				<i className="fa fa-globe fa-3x ico" aria-hidden="true"></i>
				<br/>
			</div>
			<div className="Hack">
			<p>Made by Serchlab.com 2017</p>
			</div>
			</div>
			);
	
	}
}

export default Footer;