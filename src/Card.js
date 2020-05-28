import React from 'react'

import iconHealth from './images/icons/health.png'
import iconHunger from './images/icons/hunger.png'
import iconSanity from './images/icons/sanity.png'
import iconRot from './images/icons/rot.png'
import iconDonot from './images/icons/donot.png'

import imgFrame from './images/ingredients/frame.png'

const frameStyle = {
	backgroundSize: "cover",
	backgroundImage: `url(${imgFrame})`
}


class Card extends React.Component {

	checkRecipes = (recipes) => {

		if(!recipes) {
			return;
		} else {

			const items = [];
			let i = 0;
			let displayClass;

			for (const [key, value] of recipes.entries()) {
				i++;
				if(i > 1) displayClass = 'ingredient-row-hide';
				items.push(
					<div key={key} className={displayClass}>
						<div className="ingredient-icon" style={frameStyle}>
							<img src={require(`./images/ingredients/${value[0]}.png`)} alt={value[0]} />
						</div>
						<div className="ingredient-icon" style={frameStyle}>
							<img src={require(`./images/ingredients/${value[1]}.png`)} alt={value[1]} />
						</div>
						<div className="ingredient-icon" style={frameStyle}>
							<img src={require(`./images/ingredients/${value[2]}.png`)} alt={value[2]} />
						</div>
						<div className="ingredient-icon" style={frameStyle}>
							<img src={require(`./images/ingredients/${value[3]}.png`)} alt={value[3]} />
						</div>
					</div>
				)
			}
			return(
				<>
					{items}
				</>
			)
		}
	}

	checkFoodRestrictions = (foodRestrictions) => {

		if(!foodRestrictions || foodRestrictions[0] === 'none') {
			return;
		} else {

			/* push jsx with img src into array, return array after loops */
			const items = [];

			for (const [key, value] of foodRestrictions.entries()) {
				items.push(
					<div className="ingredient-restriction-container" key={key}>
						<div className="ingredient-restriction">
							<img src={imgFrame} className="food-icon-frame" alt="frame" />
							<img src={iconDonot} className="food-icon-donot" alt="restriction icon" />
							<img src={require(`./images/ingredients/${value}.png`)} className="food-icon-restriction" alt={value} />
						</div>
					</div>
				)
			}
			return(
				<>
					{items}
				</>
			)
		}
	}

	render() {

		// lowers font-size for food names greater than 18 characters
		let foodNameClass;
		(this.props.foodName.length > 18) ? foodNameClass = 'small-text' : foodNameClass = '';

		return(

			<div className="food-card">
				<div className="row-top">

					<div className="row-half row-left">
						<img src={require(`${this.props.foodImg}`)} className="food-img" alt={this.props.foodName} />
					</div>

					<div className="row-half row-right">

						<div className="row-top">
							<div className="food-icon-container">
								
								<div className="food-icon">
									<img src={iconHealth} alt="Health Icon" />
									<span className="food-icon-value">
										{this.props.foodHp}
									</span>
								</div>

								<div className="food-icon">
									<img src={iconHunger} alt="Hunger Icon" />
									<span className="food-icon-value">
										{this.props.foodHunger}
									</span>
								</div>

							</div>
						</div>

						<div className="row-btm">
							<div className="food-icon-container">
								<div className="food-icon">
									<img src={iconSanity} alt="Sanity Icon"  />
									<span className="food-icon-value">
										{this.props.foodSanity}
									</span>
								</div>

								<div className="food-icon">
									<img src={iconRot} alt="Rot Icon"  />
									<span className="food-icon-value">
										{this.props.foodRot}
									</span>
								</div>
							</div>
						</div>
						
					</div>
				</div>

				<div className="row-mid">
					<div className="food-name">
						<span className={foodNameClass}>{this.props.foodName}</span>
					</div>
				</div>

				{/* foodRecipes[] */}

				<div className="row-bot">
					{this.checkRecipes(this.props.foodRecipes)}
				</div>

				
				<div className="row-bot text-right">
					{this.checkFoodRestrictions(this.props.foodRestrictions)}
				</div>

			</div>
		)

	}

}

export default Card;