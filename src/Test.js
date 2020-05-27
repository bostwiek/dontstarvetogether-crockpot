import React from 'react'

class Test extends React.Component {

	constructor() {
		super();
		this.state = {
			sortAsc: true
		}
		this.flipSortAsc = this.flipSortAsc.bind(this);
	}

	Data = [
		{id: '0', name: 'Zero', sort: 3},
		{id: '1', name: 'One', sort: 4}, 
		{id: '2', name: 'Two', sort: 2},
		{id: '3', name: 'Three', sort: 1}
	];


	flipSortAsc = () => {
		let flipSortAsc = !this.state.sortAsc;
		this.setState({sortAsc: flipSortAsc})
	}

	render() {
		const Numbers = [5, 6, 4, 7, 3, 8, 2, 9, 1, 10];

			// sorting standard array
			(this.state.sortAsc === true) ? 
				Numbers.sort((a, b) => a - b) :
				Numbers.sort((a, b) => b - a);

			// sorting array composed of objects
			(this.state.sortAsc === true) ? 
				this.Data.sort((a, b) => (a.id < b.id) ? 1 : -1) : 
				this.Data.sort((a, b) => (b.id < a.id) ? 1 : -1)



		// also want a toggle for Ascending to Descending ( ~`3`)~
		
		return(
			<>
				{this.Data[0].name},
				{this.Data[1].name},
				{this.Data[2].name},
				{this.Data[3].name}
				<br />
				{Numbers[0]},
				{Numbers[1]},
				{Numbers[2]},
				{Numbers[3]},
				{Numbers[4]},
				{Numbers[5]},
				{Numbers[6]},
				{Numbers[7]},
				{Numbers[8]},
				{Numbers[9]}
				<br />
				{this.state.sortby}
				<br />
				<button onClick={this.flipSortAsc}>Press me</button>
			</>
		)
	}

}

export default Test;