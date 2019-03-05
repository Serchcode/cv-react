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
			Computer Systems (Autonomous University of the State of Hidalgo)<br/>
			</p>
			<Divider horizontal inverted><h2><i className="fa fa-certificate ico" aria-hidden="true"></i>Professional resume</h2></Divider>
			<p className="res">
			Before concluding my university education I started in the field of software development,
			beginning in 2016 joining "Provisión", a company in which I collaborated as an analyst and
			programmer of your platforms, easy terrain and sell it easy. After a year I joined one
			software development company "Team developers" supporting the analysis and development of
			web platforms that support processes for the Government of the state of Hidalgo. In 2018
			I started as a backend and frontend developer for "Iupick", a startup based in CDMX
			specialized in logistics for ecommerce platforms.
			</p>
			<Divider horizontal inverted><h2><i className="fa fa-user-secret ico" aria-hidden="true"></i>Work Experience</h2></Divider>
			<p className="res">	
			<strong>		
			backend - frontend Developer<br/>
			April 2018 - Current<br/>
			Iupick - CDMX<br/>
			</strong>
			Development python backend for iupick administration panel, creation development and API maintenance and service implementation of the main carriers (fedex,
			dhl, Estafeta), frontend development javascript logistics map for ecommerce implemented on various platforms (shopify, magento, woocommerce).<br/>
			<strong>		
			Systems Analyst and Programmer<br/>
			March 2017 - April 2018<br/>
			Team Developers - Pachuca Hgo.<br/>
			</strong>			
			Development and analysis of different projects among which stand out: CRM for the Institute
			Hidalguense de Competitividad Empresarial (IHCE) and CRM for the Escuela Normal del Valle del
			Mezquital.<br/>
			<strong>		
			Systems Analyst and Programmer<br/>
			March 2016 - February 2017<br/>
			Provision -CDMX<br/>
			</strong>
			Developed a platform called Easy Terrain where people who want to acquire a land register, this platform improved the contact of the company with the customers giving a CRM experience, the system was developed with the 
			Python programming language and the Django development framework Supporting the data in a database in postgresql.<br/>
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
		         <Table.Cell>Knowledge in Django, React, Laravel, Odoo</Table.Cell>
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