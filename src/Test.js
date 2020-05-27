import React from 'react'

class Test extends React.Component {

	constructor() {
		super();
		this.state = {
			sortby: 'id'
		}
	}

	Data = [
		{id: '0', name: 'Zero', sort: 3},
		{id: '1', name: 'One', sort: 4}, 
		{id: '2', name: 'Two', sort: 2},
		{id: '3', name: 'Three', sort: 1}
	];

	Numbers = [5, 6, 4, 7, 3, 8, 2, 9, 1, 10]

	render() {

		const buttonClicked = () => {
			
			// toggle the sort state if by ID
			let toggleSort;
			(this.state.sortby == 'id') ? toggleSort = 'name' : toggleSort = 'id';
			this.setState({sortby: toggleSort});


			// sorting standard array
			this.Numbers.sort((a, b) => a - b)

			// sorting array composed of objects
			this.Data.sort((a, b) => (a.id + b.id) ? 1 : -1)

		}

		// also want a toggle for Ascending to Descending ( ~`3`)~
		
		return(
			<>
				{this.Data[0].name}, {this.Data[1].name}, {this.Data[2].name}, {this.Data[3].name}
				<br />
				{this.Numbers[0]}, {this.Numbers[1]}, {this.Numbers[2]}, {this.Numbers[3]}
				<br />
				{this.state.sortby}
				<br />
				<button onClick={buttonClicked}>Press me</button>
			</>
		)
	}

}

export default Test;