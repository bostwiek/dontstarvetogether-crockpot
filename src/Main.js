import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './Main.css';

import Overlay from './Overlay';
import Card from './Card';
import Footer from './Footer';

import food from './food';


import logo from './images/icons/crockpot.png';
import background from './images/bg/4.png';

const bgStyle = {
	backgroundImage: `url(${background})`
}

// lodash handles sorting
var _ = require('lodash');

class Main extends React.Component {

	constructor() {
		super();
		this.state = {
			search: '',
			sortBy: 'alpha-desc',
			containsMeat: 'either',
			warlyRecipes: 'either',
			showOverlay: true
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
	//			Click Functions			//
	//													//
	//////////////////////////////

	cardClicked = e => {
		
		if(e.target.id) {
			let clickedID = e.target.id;

			// allows for scrolling on card overlay
			if(clickedID >= 0) {

				this.setState({ showOverlay: !this.state.showOverlay });

				// use magical lodash sorting method to handle correct ID clicked
				const foodSorted = _.sortBy(food, 'id')

				// pulling from foodUnsorted to display proper recipe if
				// sort by function has been used [based on array key / id clicked]
				ReactDOM.render(
					<React.StrictMode>
						<Overlay
							foodName={foodSorted[clickedID].name}
							foodImg={foodSorted[clickedID].img}
							foodHp={foodSorted[clickedID].hp}
							foodHunger={foodSorted[clickedID].hunger}
							foodSanity={foodSorted[clickedID].sanity}
							foodRot={foodSorted[clickedID].rot}
							foodRecipes={foodSorted[clickedID].recipes}
							foodRestrictions={foodSorted[clickedID].restrictions}
							foodIsMeat={foodSorted[clickedID].ismeat}
							foodNotes={foodSorted[clickedID].notes}
							foodFavorite={foodSorted[clickedID].favorite}
							foodWarly={foodSorted[clickedID].warly}
							visible={this.state.showOverlay}
							cardClicked={this.cardClicked}
							key={foodSorted[clickedID]}
						/>
					</React.StrictMode>,
					document.getElementById('overlay')
				);
			}
		} else {
			// hide overlay as fallback
			this.setState({ showOverlay: !this.state.showOverlay });
				ReactDOM.render(
					<React.StrictMode>
						<Overlay
							visible={this.state.showOverlay}
						/>
					</React.StrictMode>,
					document.getElementById('overlay')
				);
		}

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
				
				<CSSTransition
					in={!this.state.showOverlay}
					timeout={250}
					classNames="fade"
				>
					<div id="overlay"></div>
				</CSSTransition>

				<header>
					<div className="logo">
						<span className="logo-subtext">Don't Starve Together</span>
						<span className="logo-text">Crock Pot Recipes</span>
						<img src={logo} alt='Crockpot Logo' />
					</div>
				</header>

				<div className="container">

					<div className="search-container">						
						<div className="input-group">
							<input
								type="text"
								maxLength="99"
								id="search-recipe"
								className="form-control"
								placeholder="Search..."
								onChange={this.searchUpdate}
							/>
						</div>
					</div>

					<div className="food-category-container">

						<div className="food-category">
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

						<div className="food-category float-left">
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
								<option value="no">Hide</option>
								<option value="yes">Only</option>
							</select>
						</div>

						<div className="clear"></div>

					</div>

					<br />

					<p className="text-center" style={{'font-size':'0.8em'}}>
							* select a recipe to see more details *
					</p>

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
											foodID={food[key].id}
											cardClicked={this.cardClicked}
											key={key}
										/>
									);
									
									// checks SEARCH input first to filter out items
									if(food[key].name.toLowerCase().includes(this.state.search.toLowerCase())){

										// we make it here if we have at LEAST one result
										
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

											default: {
												return false;
											}
										}
									} else {
										// we end up here if there are 0 results for filters
										return false;
									} return false;
								}
							)
					
						}

					</div>
					<Footer />
				</div>

			</>
		)

	}

}

export default Main;