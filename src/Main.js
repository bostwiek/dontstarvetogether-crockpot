import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css'

import food from './food'

import iconHealth from './images/icons/health.webp'
import iconHunger from './images/icons/hunger.webp'
import iconSanity from './images/icons/sanity.webp'
import iconRot from './images/icons/rot.webp'


// need to add FILTER / SEARCH next


function DisplayFullMenu() {
	return(
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">

							{Object.keys(food).map(
								(key, value) => {
									return(
										<table className="menu-item" key={key}>
											<tbody>
												<tr>
													<td colSpan={2}>{food[key][1]}</td>
												</tr>
												<tr>
													<td colSpan={2}><img src={require(`./images/crockpot/${key}.webp`)} alt={key} /></td>
												</tr>
												<tr>
													<td><img src={iconHealth} className="icon-stat" alt="icon-health" /></td>
													<td>{food[key][2]}</td>
												</tr>
												<tr>
													<td><img src={iconHunger} className="icon-stat" alt="icon-hunger" /></td>
													<td>{food[key][3]}</td>
												</tr>
												<tr>
													<td><img src={iconSanity} className="icon-stat" alt="icon-sanity" /></td>
													<td>{food[key][4]}</td>
												</tr>
												<tr>
													<td><img src={iconRot} className="icon-stat" alt="icon-rot" /></td>
													<td>{food[key][5]} days</td>
												</tr>
											</tbody>
										</table>
									)
								}
							)}

					</div>
				</div>
			</div>
		</>
	)
}

class Main extends React.Component {

	state = {
		currentRecipe: 'asparagussoup'
	}

	render() {
		
		let currentRecipeState = this.state.currentRecipe;
		let currentRecipe = food[currentRecipeState];

		const swapRecipe = () => {
			if (this.state.currentRecipe === 'asparagussoup') {
				this.setState({currentRecipe: 'lobsterdinner'})
			} else if (this.state.currentRecipe === 'lobsterdinner') {
				this.setState({currentRecipe: 'asparagussoup'})
			}
		}


		return(		

			// <IngredientsTable />

				// cant change to a string
				// need to reference state inside json object query

			<>

			<DisplayFullMenu />

			</>
		)

	}

}

export default Main;