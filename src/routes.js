import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import CV from './components/cv/cv';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';

const Routes = () =>{
	return(
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/curriculum/" component={CV}/>
				<Route exact path="/resume/" component={Resume}/>
				<Route exact path="/contact/" component={Contact}/>
			</Switch>
		);
}

export default Routes;