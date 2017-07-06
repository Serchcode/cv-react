import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import './contact.css';

class Contact extends Component{
	render(){
		return(
			<div>
			<Container textAlign='center'>
			<p className="well">Contact</p>
			<p className="pb">
				<i className="fa fa-address-card fa-5x ico ic" aria-hidden="true"></i><br/>
				Phone: 7751344187<br/>
				E-mail: pe280591@uaeh.edu.mx<br/>
				Phone (alternative): 5537137756<br/>
				E-mail (alternative): cecpj@hotmail.com<br/>	
			</p>
			</Container>
			</div>
			);
	}
}

export default Contact;