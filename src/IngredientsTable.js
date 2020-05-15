import React from 'react'

class IngredientsTable extends React.Component {

	constructor() {
		super();

		this.state = {
			ingredients: ['-', '-', '-', '-']
		}

		this.ingredientClicked = this.ingredientClicked.bind(this)
		this.submitIngredients = this.submitIngredients.bind(this)
		this.resetIngredients = this.resetIngredients.bind(this)
	}  
	

	ingredientClicked(e) {
		
		let ingredients = [...this.state.ingredients];
		
		// need to figure out where in the array we left off... .map maybe?
		let currentIndex = '';
		if (ingredients[0] == '-') {
			currentIndex = 0;
		} else if (ingredients[1] == '-') {
			currentIndex = 1;
		} else if (ingredients[2] == '-') {
			currentIndex = 2;
		} else if (ingredients[3] == '-') {
			currentIndex = 3;
		}
		let ingredient = {...ingredients[currentIndex]};
		ingredient = e.target.id;
		ingredients[currentIndex] = ingredient;
		this.setState({ingredients})

	}

	resetIngredients() {
		this.setState({
			ingredients: ['-', '-', '-', '-']
		})
	}

	submitIngredients() {
		let ingredientsArray = this.state.ingredients;
		if(ingredientsArray.includes('meat')) {
			alert('contains meat')
		}
	}

  render() {

		return(
			<>
			
				<div className="container-fluid">
					<div className="row">

						<div className="col-12">
				
							<div className="container">

								<div className="ingredient-container">
									
									<div className="ingredient-category" id="meat" onClick={this.ingredientClicked}>
										Meats
									</div>
									
									<div className="ingredient-category" id="vegetable" onClick={this.ingredientClicked}>
										Vegetables
									</div>
									
									<div className="ingredient-category" id="fruit" onClick={this.ingredientClicked}>
										Fruits
									</div>
									
									<div className="ingredient-category" id="fish" onClick={this.ingredientClicked}>
										Fish
									</div>
									
									<div className="ingredient-category" id="egg" onClick={this.ingredientClicked}>
										Eggs
									</div>
									
									<div className="ingredient-category" id="sweetener" onClick={this.ingredientClicked}>
										Sweeteners
									</div>
									
									<div className="ingredient-category" id="monster" onClick={this.ingredientClicked}>
										Monster Foods
									</div>
									
									<div className="ingredient-category" id="dairy" onClick={this.ingredientClicked}>
										Dairy
									</div>
									
									<div className="ingredient-category" id="inedible" onClick={this.ingredientClicked}>
										Inedible
									</div>
									
								</div>

								<div className="output-container">

									<div className="crockpot-slot">
										{this.state.ingredients[0]}
									</div>
									
									<div className="crockpot-slot">
										{this.state.ingredients[1]}
									</div>
									
									<div className="crockpot-slot">
										{this.state.ingredients[2]}
									</div>
									
									<div className="crockpot-slot">
										{this.state.ingredients[3]}
									</div>

								</div>



								<br /><br /><br />

								<button onClick={this.submitIngredients}>Submit</button>
								
								<button onClick={this.resetIngredients}>Reset</button>
								
								<br /><br /><br />


								
									More important:
										To be able to click on the dish and see the recipe

										less important to be able to click on each ingredient and see what comes out - that shit is bonkers complicated.

									Ingredients:
										Meats:
											Meat
											Monster Meat
											Morsel

										Vegetables:
											Carrot

										

									Possible recipe outcomes:
									https://dontstarve.fandom.com/wiki/Crock_Pot
									Asparagus Soup
									Bacon and Eggs
									Banana Pop
									Butter Muffin
									California Roll
									Ceviche
									Creamy Potato Puree
									Dragonpie
									Fancy Spiralled Tubers
									Fish Tacos
									Fish Sticks
									Fist Full of Jam
									Flower Salad
									Froggie Bunwich
									Fruit Medley
									Guacamole
									Honey Ham
									Honey Nuggets
									Ice Creamy
									Jelly Beans
									Kabobs
									Lobster Bisque
									Lobster Dinner
									Mandrake Soup
									Meatballs
										0.5x meat, no inedibles
									Meaty Stew
										3.0x meat, no inedibles, mole, eggs, mandrake
									Melonsicle
									Monster Lasagna
										2.0x Monster/Durian, no inedibles
									Pierogi
									Powdercake
									Pumpkin Cookie
									Ratatouille
									Salsa Fresca
									Seafood Gumbo
									Spicy Chili
									Stuffed Eggplant
									Stuffed Pepper Poppers
									Surf n' Turf
									Taffy
									Trail Mix
									Turkey Dinner
									Unagi
									Vegetable Stinger
									Waffles
									Wet Goop


							</div>
						
						</div>
					
					</div>
				</div>
			</>

		)
  }
}

export default IngredientsTable;