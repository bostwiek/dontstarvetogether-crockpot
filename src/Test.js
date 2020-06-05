import React from 'react';
import 'animate.css';


// important functions looks like this
import {test} from './TestFunctions';

class Test extends React.Component {

	constructor() {
		super();
		this.state = {
		}
	}

	render() {

		return(
			<>
				<h1 class="animate__animated animate__fadeInDown animate__faster animate__repeat-3">An animated element</h1>

			</>
		)
	}

}

export default Test;