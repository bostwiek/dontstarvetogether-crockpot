import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css'

import IngredientsTable from './IngredientsTable'

import food from './food'

import honeyham from './images/crockpot/honeyham.webp'

class Main extends React.Component {

	state = {
		currentRecipe: 'asparagussoup'
	}

	render() {

		const swapRecipe = () => {
			if (this.state.currentRecipe == 'asparagussoup') {
				this.setState({currentRecipe: 'lobsterdinner'})
			} else if (this.state.currentRecipe == 'lobsterdinner') {
				this.setState({currentRecipe: 'asparagussoup'})
			}
		}
		
		let currentRecipeState = this.state.currentRecipe;
		let currentRecipe = food[currentRecipeState];

		return(		

			// <IngredientsTable />

				// cant change to a string
				// need to reference state inside json object query

			<>
			<table>
				<tr>
					<td>
						{currentRecipe.name}
					</td>
				</tr>
				<tr>
					<td>
						hp: 
					</td>
					<td>
						{currentRecipe.hp}
					</td>
				</tr>
				<tr>
					<td>
						hunger: 
					</td>
					<td>
						{currentRecipe.hunger}
					</td>
				</tr>
				<tr>
					<td>
						sanity: 
					</td>
					<td>
						{currentRecipe.sanity}
					</td>
				</tr>
				<tr>
					<td>
						spoil: 
					</td>
					<td>
						{currentRecipe.spoil}
					</td>
				</tr>
			</table>

			<button onClick={swapRecipe}>Swap</button>
			</>
		)

	}

}

export default Main;