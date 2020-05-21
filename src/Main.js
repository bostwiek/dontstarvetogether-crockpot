import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css'

import food from './food'

import iconHealth from './images/icons/health.webp'
import iconHunger from './images/icons/hunger.webp'
import iconSanity from './images/icons/sanity.webp'
import iconRot from './images/icons/rot.webp'


// need to add FILTER / SEARCH next

function SearchRecipe(props) {
	return(
		<div className="input-group mb-3">
			<input type="text" maxLength="99" id="search-recipe" className="form-control" onChange={props.searchUpdate} />
		</div>
	)
}

function DisplayFullMenu(props) {

	return(
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">

						<SearchRecipe searchUpdate={props.searchUpdate} />

						<br />

						{Object.keys(props.food).map(
							(key, value) => {
								if(props.food[key].name.toLowerCase().includes(props.searchState.toLowerCase())){
									return(
										<table className="menu-item" key={key}>
											<tbody>
												<tr>
													<td colSpan={2}>{props.food[key].name}</td>
												</tr>
												<tr>
													<td colSpan={2}><img src={require(`${props.food[key].imgsrc}`)} alt={key} /></td>
												</tr>
												<tr>
													<td><img src={iconHealth} className="icon-stat" alt="icon-health" /></td>
													<td>{props.food[key].hp}</td>
												</tr>
												<tr>
													<td><img src={iconHunger} className="icon-stat" alt="icon-hunger" /></td>
													<td>{props.food[key].hunger}</td>
												</tr>
												<tr>
													<td><img src={iconSanity} className="icon-stat" alt="icon-sanity" /></td>
													<td>{props.food[key].sanity}</td>
												</tr>
												<tr>
													<td><img src={iconRot} className="icon-stat" alt="icon-rot" /></td>
													<td>{props.food[key].rot} days</td>
												</tr>
											</tbody>
										</table>
									)
								} else {
									return;
								}
							}
						)}

					</div>
				</div>
			</div>
		</>
	)
}

class Main extends React.Component {

	constructor() {
		super();

		this.state = {
			search: ''
		}

		this.searchUpdate = this.searchUpdate.bind(this);
	}

	searchUpdate = x => {
		let inputValue = document.getElementById('search-recipe').value;
		this.setState({search: inputValue})
	}

	render() {

		return(		

			// <IngredientsTable />

				// cant change to a string
				// need to reference state inside json object query

			<>

				<DisplayFullMenu
					food={food}
					searchUpdate={this.searchUpdate}
					searchState={this.state.search}
				/>

			</>
		)

	}

}

export default Main;