import React from 'react'

class Footer extends React.Component {
	render() {
		return(
			<footer className="row">
				<div className="col-1 no-padding"></div>
				<div className="col-10 no-padding">
					&copy; bostwiek 2020
					<br />
					Please send any update requests or bugs to bostwiek@gmail.com
					<br />
					Project hosted on github <a href="https://github.com/bostwiek/dontstarvetogether-crockpot">here</a>.
				</div>
				<div className="col-1 no-padding"></div>
			</footer>
		)
	}
}


export default Footer;