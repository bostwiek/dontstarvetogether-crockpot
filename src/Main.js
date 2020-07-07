import React from 'react';

import Card from './Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './Main.css';

import food from './food';

import logo from './images/icons/crockpot.png';
import background from './images/bg/4.png';
import Overlay from './Overlay';

const bgStyle = {
	backgroundImage: `url(${background})`
}

class Main extends React.Component {

	constructor() {
		super();
		this.state = {
			search: '',
			sortBy: 'alpha-desc',
			containsMeat: 'either',
			warlyRecipes: 'either',
			showOverlay: false
		}
		this.searchUpdate = this.searchUpdate.bind(this);
		this.sortByUpdate = this.sortByUpdate.bind(this);
		this.sortContainsMeat = this.sortContainsMeat.bind(this);
		this.sortWarlyRecipes = this.sortWarlyRecipes.bind(this);

		this.cardClicked = this.cardClicked.bind(this);
	}

	//////////////////////////////
	//													//
	//			Sort Functions			//
	//													//
	//////////////////////////////

	// Triggers when SEARCH input value changes
	searchUpdate = () => {
		let inputValue = document.getElementById('search-recipe').value;
		this.setState({search: inputValue});
	}

	// Triggers when SORT BY select value changes
	sortByUpdate = () => {
		let selectValue = document.getElementById('sort-by').value;
		this.setState({ sortBy: selectValue });
	}

	// Triggers when CONTAINS MEAT select value changes
	sortContainsMeat = () => {
		let selectValue = document.getElementById('contains-meat').value;
		this.setState({ containsMeat: selectValue });
	}

	// Triggers when WARLY RECIPES select value changes
	sortWarlyRecipes = () => {
		let selectValue = document.getElementById('warly-recipes').value;
		this.setState({ warlyRecipes: selectValue });
	}

	//////////////////////////////
	//													//
	//			Card Functions			//
	//													//
	//////////////////////////////

	cardClicked = () => {
		this.setState({ showOverlay: !this.state.showOverlay });
	}

	render() {

		// switch to sort food based on this.state.sortBy
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

				<div className="bg animated-bg" style={bgStyle}></div>
				<div className="bg-gradient"></div>
				
				<Overlay
					foodName={'Fist Full of Jam'}
					foodImg={'./images/crockpot/guacamole.png'}
					foodHp={69}
					foodHunger={420}
					foodSanity={25}
					foodRot={10}
					foodRecipes={["lesserglowberry", "lesserglowberry", "fruits", "any"]}
					foodRestrictions={'twigs'}
					foodIsMeat={true}
					foodNotes={'notes'}
					cardClicked={this.cardClicked}
					key={0}
					visible={this.state.showOverlay}
				/>

				<header>
					<div className="logo">
						<span className="logo-subtext">Don't Starve Together</span>
						<span className="logo-text">All Things Crockpot {this.state.showOverlay}</span>
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

						<div className="food-category">
							<span>Contains Meat</span>
							<br />
							<select id="contains-meat" onChange={this.sortContainsMeat}>
								<option value="either">Either</option>
								<option value="yes">Yes</option>
								<option value="no">No</option>
							</select>
						</div>

						<div className="food-category float-right">
							<span>Warly recipes</span>
							<br />
							<select id="warly-recipes" onChange={this.sortWarlyRecipes}>
								<option value="either">Show</option>
								<option value="yes">Only</option>
								<option value="no">Hide</option>
							</select>
						</div>

						<div className="clear"></div>

					</div>

					<br />

					<div className="card-container">

						{	

							//////////////////////////////
							//													//
							//	Dynamic sort functions	//
							//													//
							//////////////////////////////

							Object.keys(food).map(
								(key, value) => {

									// store JSX object of food card to return later
									const foodCardJSX = (
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
											foodNotes = {food[key].notes}
											cardClicked={this.cardClicked}
											key={key}
										/>
									);

									
									// checks SEARCH input first to filter out items
									if(food[key].name.toLowerCase().includes(this.state.search.toLowerCase())){

										// Switch for Warly-specific, and Meat/non-meat-specific recipes
										switch(this.state.warlyRecipes) {

											// Warly filter: show any
											case 'either': {
												if(this.state.containsMeat === 'either') {
													return(foodCardJSX);
												} else {
													if(this.state.containsMeat === 'yes') {
														if(food[key].ismeat === true) return(foodCardJSX)
													} else {
														if(food[key].ismeat === false) return(foodCardJSX)
													}
												}
												break;
											}

											// Warly filter: show only warly foods
											case 'yes': {
												if(this.state.containsMeat === 'either') {
													if(food[key].warly === true) {
														return(foodCardJSX);
													}													
												} else {
													if(this.state.containsMeat === 'yes') {
														if((food[key].ismeat === true) && (food[key].warly === true)) return(foodCardJSX)
													} else {
														if((food[key].ismeat === false) && (food[key].warly === true)) return(foodCardJSX)
													}
												}
												break;
											}

											// Warly filter: show only non-warly foods
											case 'no': {
												if(this.state.containsMeat === 'either') {
													if(food[key].warly === false) {
														return(foodCardJSX);
													}													
												} else {
													if(this.state.containsMeat === 'yes') {
														if((food[key].ismeat === true) && (food[key].warly === false)) return(foodCardJSX)
													} else {
														if((food[key].ismeat === false) && (food[key].warly === false)) return(foodCardJSX)
													}
												}
												break;
											}
										}
									} else {
										// fallback for when object does not match search query
										return;
									}
								}
							)
					
						}

					</div>
				</div>

			</>
		)

	}

}

export default Main;