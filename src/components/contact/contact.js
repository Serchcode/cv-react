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
				Phone: 7711056030<br/>
				E-mail: perez.sergiob@gmail.com<br/>
				Phone (alternative): 5527446157<br/>
				E-mail (alternative): serchcode@gmail.com<br/>	
			</p>
			</Container>
			</div>
			);
	}
}

export default Contact;