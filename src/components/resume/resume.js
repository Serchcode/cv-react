import React,{Component} from 'react';
import { Divider,Container,Table } from 'semantic-ui-react';
import './resume.css';

class Resume extends Component{
	render(){
		return(
			<div>
			<Container textAlign='left'>
			<p className="well">Resume</p>
			<Divider horizontal inverted><h2><i className="fa fa-graduation-cap ico" aria-hidden="true"></i>Academic Training</h2></Divider>
			<p className="res">
			<strong>Year: 2012-2016</strong> <br/>
			Institution: Autonomous University of the State of Hidalgo<br/>
			<strong>Year: 2009 -2012</strong><br/>
			Institution: Center of Technological and Industrial Bachelor of Services No. 222.<br/>
			<strong>Year: 2006 - 2009</strong><br/>
			Institution: General Secondary School Number 4<br/>
			</p>
			<Divider horizontal inverted><h2><i className="fa fa-certificate ico" aria-hidden="true"></i>Diplomas</h2></Divider>
			<p className="res">
			<ul>
			<li>Award to the first place for the creation of a web app to report lost or street dogs in the event "Hackupp" carried out in the Polytechnic University of Pachuca gaining the category of social responsibility.</li>
			<li>Award for the participation in the workshop of introduction to the programming language Python imparted by the company fixtergeek.</li>
			<li>Award by the organization of the "SG virtual conference" at the Autonomous University of the state of Hidalgo.</li>
			<li>Certificate in web application development using the Python programming language using the Django framework issued by fixtergeek.</li>
			<li>Certificate in web application development with the JavaScript programming language using the framework React.js issued by the firm fixtergeek.</li>
			</ul>
			</p>
			<Divider horizontal inverted><h2><i className="fa fa-user-secret ico" aria-hidden="true"></i>Work Experience</h2></Divider>
			<p className="res">	
			<strong>		
			Systems Analyst and Programmer<br/>
			September 2016 - May 2017<br/>
			Provision -CDMX<br/>
			</strong>
			Developed a platform called Easy Terrain where people who want to acquire a land register, this platform improved the contact of the company with the customers giving a CRM experience, the system was developed with the 
			Python programming language and the Django development framework Supporting the data in a database in postgresql.<br/>
			<strong>			
			Analyst Programmer (Social Service)<br/>
			January 2016 - June 2016<br/>
			University of Football and Sports Science - Pachuca<br/>
			</strong>
			Develop a system for the functional areas of the company, this system increased the ability to resolve internal incidents in the company, the system had a web environment in which the incidents in question are registered to equipment of Ti, these incidents were received and Views in the system to be supported by the corresponding employee, 
			the system was developed using the php programming language, using the Sql Server database manager to contain all system data.
			</p>
			<Divider horizontal inverted><h2><i className="fa fa-cogs ico" aria-hidden="true"></i>Technical Skills</h2></Divider>
			 <Table inverted>
		      <Table.Body>
		        <Table.Row>
		          <Table.Cell>Knowledge in Hardware and Software:</Table.Cell>
		          <Table.Cell>Knowledge in preventive and corrective maintenance in computer equipment</Table.Cell>
		        </Table.Row>
		        <Table.Row>
		         <Table.Cell>Programming languages:</Table.Cell>
		         <Table.Cell>Knowledge in Php, Python, C ++, JavaScript</Table.Cell>
		        </Table.Row>
		        <Table.Row>
		         <Table.Cell>Frontend Frameworks:</Table.Cell>
		         <Table.Cell>Development in Bootstrap, Materialize, Foundation, css3, Jquery</Table.Cell>
		        </Table.Row>
		         <Table.Row>
		         <Table.Cell>Web Frameworks:</Table.Cell>
		         <Table.Cell>Knowledge in Django, React, Laravel</Table.Cell>
		        </Table.Row>
		        <Table.Row>
		         <Table.Cell>Cloud Service Management:</Table.Cell>
		         <Table.Cell>Knowledge in Heroku,Amazon,Firebase</Table.Cell>
		        </Table.Row>
		        <Table.Row>
		         <Table.Cell>DBMS:</Table.Cell>
		         <Table.Cell>Knowledge in Mysql, Sqlserver,Postgres</Table.Cell>
		        </Table.Row>
		      	<Table.Row>
		         <Table.Cell>Collaborative Development Platforms:</Table.Cell>
		         <Table.Cell>Using git and github platform</Table.Cell>
		       	</Table.Row>
		       	<Table.Row>
		         <Table.Cell>Os:</Table.Cell>
		         <Table.Cell>Windows and Linux (Ubuntu)</Table.Cell>
		       	</Table.Row>
		      </Table.Body>
		    </Table>
		    <Divider horizontal inverted><h2><i className="fa fa-comments-o ico" aria-hidden="true"></i>Languages</h2></Divider>
		    <p className="res">
			I have studied English as a second language accrediting the Toelf exam.</p>
			<Divider horizontal inverted><h2><i className="fa fa-info-circle" aria-hidden="true"></i>Additional Information</h2></Divider>
		    <p className="res">			
			I am a  proactive and self-taught person, always looking to learn more about technologies for web development, I like to attend events that the developer community here in Mexico and meet people who share the taste for web development, I also like to work As a team, since
			you can always learn something new from others and solve problems more easily together.</p>
			</Container>
			</div>
			);
	}
}


export default Resume;