import React from 'react'

import OverlayBottom from './OverlayBottom'

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

class Overlay extends React.Component {
	
	////////////////////////////
	//												//
	//	Ingredients Go Here 	//
	//												//
	////////////////////////////

	checkRecipes = (recipes) => {

		if(!recipes) {
			return;
		} else {

			const items = [];

			for (const [key, value] of recipes.entries()) {
				items.push(
					<div className="row ingredient-container" key={key}>
						<div className="col-3 ingredient-icon" style={frameStyle}>
							<img src={require(`./images/ingredients/${value[0]}.png`)} alt={value[0]} />
						</div>
						<div className="col-3 ingredient-icon" style={frameStyle}>
							<img src={require(`./images/ingredients/${value[1]}.png`)} alt={value[1]} />
						</div>
						<div className="col-3 ingredient-icon" style={frameStyle}>
							<img src={require(`./images/ingredients/${value[2]}.png`)} alt={value[2]} />
						</div>
						<div className="col-3 ingredient-icon" style={frameStyle}>
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


	////////////////////////////
	//												//
	//	Recipe Restrictions 	//
	//												//
	////////////////////////////

	checkFoodRestrictions = (foodRestrictions) => {

		if(!foodRestrictions || foodRestrictions[0] === 'none') {
			return;
		} else {

			const items = [];

			for (const [key, value] of foodRestrictions.entries()) {
				items.push(
					<div className="col-3 ingredient-restriction" key={key}>
						<img src={imgFrame} className="food-icon-frame" alt="frame" />
						<img src={iconDonot} className="food-icon-donot" alt="restriction icon" />
						<img src={require(`./images/ingredients/${value}.png`)} className="food-icon-restriction" alt={value} />
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

		if(this.props.visible !== false) {

			return(

				<div className="overlay-container" onClick={this.props.cardClicked}>

					<div className="food-card-overlay container" onClick={()=>{return false;}}>
						<div className="row">
							<div className="col">
								<div className="food-name">{this.props.foodName}</div>
							</div>
						</div>

						<div className="row food-icon-stats-row">
							<div className="col-6 no-padding">
								<img src={require(`${this.props.foodImg}`)} className="food-img" alt={this.props.foodName} />
							</div>
							<div className="col-1 no-padding"></div>
							<div className="col-3 no-padding">
								<div className="row">
									<div className="col-6 food-icon-container no-padding">
										<div className="food-icon">
											<img src={iconHealth} alt="Health Icon" />
											<span className="food-icon-value">
												{this.props.foodHp}
											</span>
										</div>
									</div>
									<div className="col-6 food-icon-container no-padding">
										<div className="food-icon">
											<img src={iconHunger} alt="Hunger Icon" />
											<span className="food-icon-value">
												{this.props.foodHunger}
											</span>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-6 food-icon-container no-padding">
										<div className="food-icon">
											<img src={iconSanity} alt="Sanity Icon"  />
											<span className="food-icon-value">
												{this.props.foodSanity}
											</span>
										</div>
									</div>
									<div className="col-6 food-icon-container no-padding">
										<div className="food-icon">
											<img src={iconRot} alt="Rot Icon"  />
											<span className="food-icon-value">
												{this.props.foodRot}
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-2 no-padding"></div>
						</div>

						<div className="overlay-spacer"></div>

						{this.checkRecipes(this.props.foodRecipes)}
							
						<div className="row ingredient-restriction-container">
							{this.checkFoodRestrictions(this.props.foodRestrictions)}
						</div>
						
						<div className="overlay-spacer"></div>

						<div className="row">
							<div className="col-1"></div>
							<div className="col-10 notes-container">
								<span className="food-notes">
									{this.props.foodNotes}
								</span>
							</div>
							<div className="col-1"></div>
						</div>

						<OverlayBottom 
							foodFavorite={this.props.foodFavorite}
							foodWarly={this.props.foodWarly}
						/>

					</div>

				</div>
			)

		} else { return null; }

	}

}

export default Overlay;