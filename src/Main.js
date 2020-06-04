import React from 'react'

import Card from './Card'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Main.css'

import food from './food'

import logo from './images/icons/crockpot.png'
import background from './images/bg/2.png'

const bgStyle = {
	backgroundImage: `url(${background})`
}

class Main extends React.Component {

	constructor() {
		super();
		this.state = {
			search: '',
			sortBy: 'alpha-desc',
			containsMeat: 'either'
		}
		this.searchUpdate = this.searchUpdate.bind(this);
		this.sortByUpdate = this.sortByUpdate.bind(this);
		this.sortContainsMeat = this.sortContainsMeat.bind(this);
	}

	searchUpdate = () => {
		let inputValue = document.getElementById('search-recipe').value;
		this.setState({search: inputValue})
	}

	sortByUpdate = () => {
		let selectValue = document.getElementById('sort-by').value;
		this.setState({ sortBy: selectValue })
		// alpha-desc, alpha-asc, hunger-desc, hunger-asc, health-desc, health-asc, sanity-desc, sanity-asc, rot-desc, rot-asc
	}
	sortContainsMeat = () => {
		let selectValue = document.getElementById('contains-meat').value;
		this.setState({ containsMeat: selectValue })
		// either, yes, no
	}

	render() {

		// sort food based on this.state.sortBy
		switch (this.state.sortBy) {
			case 'alpha-desc': 
				food.sort((a, b) => (a.name > b.name) ? 1 : -1)
				break;
			case 'alpha-asc':
				food.sort((a, b) => (b.name > a.name) ? 1 : -1)
				break;
			case 'hunger-desc':
				food.sort((a, b) => (a.hunger < b.hunger) ? 1 : -1)
				break;
			case 'hunger-asc':
				food.sort((a, b) => (b.hunger < a.hunger) ? 1 : -1)
				break;
			case 'health-desc':
				food.sort((a, b) => (a.hp < b.hp) ? 1 : -1)
				break;
			case 'health-asc':
				food.sort((a, b) => (b.hp < a.hp) ? 1 : -1)
				break;
			case 'sanity-desc':
				food.sort((a, b) => (a.sanity < b.sanity) ? 1 : -1)
				break;
			case 'sanity-asc':
				food.sort((a, b) => (b.sanity < a.sanity) ? 1 : -1)
				break;
			case 'rot-desc':
				food.sort((a, b) => (a.rot < b.rot) ? 1 : -1)
				break;
			case 'rot-asc':
				food.sort((a, b) => (b.rot < a.rot) ? 1 : -1)
				break;
			default:
				break;
		}

		return(
			<>

				<div className="bg" style={bgStyle}></div>
				<div className="bg-gradient"></div>

				<header>
					<div className="logo">
						<span className="logo-subtext">Don't Starve Together</span>
						<span className="logo-text">All Things Crockpot</span>
						<img src={logo} alt='Crockpot Logo' />
					</div>
				</header>

				<div className="container">

					<div className="search-container">						
						<div className="input-group">
							<input type="text" maxLength="99" id="search-recipe" className="form-control" placeholder="Search..." onChange={this.searchUpdate} />
						</div>
					</div>

					<div className="food-category-container">
						<div className="food-category float-left">
							<span>Sort By...</span>
							<br />
							<select id="sort-by" onChange={this.sortByUpdate}>
								<option value="alpha-desc">Alphabetically A to Z</option>
								<option value="alpha-asc">Alphabetically Z to A</option>
								<option value="hunger-desc">Hunger (descending)</option>
								<option value="hunger-asc">Hunger (ascending)</option>
								<option value="health-desc">Health (descending)</option>
								<option value="health-asc">Health (ascending)</option>
								<option value="sanity-desc">Sanity (descending)</option>
								<option value="sanity-asc">Sanity (ascending)</option>
								<option value="rot-desc">Spoil Time (descending)</option>
								<option value="rot-asc">Spoil Time (ascending)</option>
							</select>
						</div>

						<div className="food-category float-right">
							<span>Contains Meat?</span>
							<br />
							<select id="contains-meat" onChange={this.sortContainsMeat}>
								<option value="either">Either</option>
								<option value="yes">Yes</option>
								<option value="no">No</option>
							</select>
						</div>

						<div className="clear"></div>

					</div>

					<br />

					<div className="card-container">

						{Object.keys(food).map(
								(key, value) => {

									// check search input for any contents
									if(food[key].name.toLowerCase().includes(this.state.search.toLowerCase())){

									// check contains meat if true or false (ignore if either)
									if(this.state.containsMeat !== 'either') {

										if(this.state.containsMeat === 'yes') {

											// Contains Meat
											if(food[key].ismeat === true){
												return(
													<Card
														foodName={food[key].name}
														foodImg={food[key].img}
														foodHp={food[key].hp}
														foodHunger={food[key].hunger}
														foodSanity={food[key].sanity}
														foodRot={food[key].rot}
														foodRecipes={food[key].recipes}
														foodRestrictions={food[key].restrictions}
														foodIsMeat={food[key].ismeat}
														key={key}
													/>
												)
											}

										} else {
											// Does not contain meat
											if(food[key].ismeat === false){
												return(
													<Card
														foodName={food[key].name}
														foodImg={food[key].img}
														foodHp={food[key].hp}
														foodHunger={food[key].hunger}
														foodSanity={food[key].sanity}
														foodRot={food[key].rot}
														foodRecipes={food[key].recipes}
														foodRestrictions={food[key].restrictions}
														foodIsMeat={food[key].ismeat}
														key={key}
													/>
												)
											}
										}

									} else {
										// Both meat and non-meat foods
										return(
											<Card
												foodName={food[key].name}
												foodImg={food[key].img}
												foodHp={food[key].hp}
												foodHunger={food[key].hunger}
												foodSanity={food[key].sanity}
												foodRot={food[key].rot}
												foodRecipes={food[key].recipes}
												foodRestrictions={food[key].restrictions}
												foodIsMeat={food[key].ismeat}
												key={key}
											/>
										)
									}
								}
							}
						)}

					</div>
				</div>

			</>
		)

	}

}

export default Main;