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

class Overlay extends React.Component {

	render() {

		if(this.props.visible !== false) {

			return(
				<div className="overlay-container" onClick={this.props.cardClicked}>
					<div className="food-card-overlay">
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
								<span>{this.props.foodName}</span>
							</div>
						</div>

						<div className="row-bot">
							<div className="ingredient-container">
								<div className="ingredient-icon" style={frameStyle}>
									<img src={require(`./images/ingredients/${this.props.foodRecipes[0]}.png`)} alt={this.props.foodRecipes[0]} />
								</div>
								<div className="ingredient-icon" style={frameStyle}>
									<img src={require(`./images/ingredients/${this.props.foodRecipes[1]}.png`)} alt={this.props.foodRecipes[1]} />
								</div>
								<div className="ingredient-icon" style={frameStyle}>
									<img src={require(`./images/ingredients/${this.props.foodRecipes[2]}.png`)} alt={this.props.foodRecipes[2]} />
								</div>
								<div className="ingredient-icon" style={frameStyle}>
									<img src={require(`./images/ingredients/${this.props.foodRecipes[3]}.png`)} alt={this.props.foodRecipes[3]} />
								</div>
							</div>
						</div>

						
						<div className="row-bot">
							<div className="ingredient-restriction-container">
								<div className="ingredient-restriction">
									<img src={imgFrame} className="food-icon-frame" alt="frame" />
									<img src={iconDonot} className="food-icon-donot" alt="restriction icon" />
									<img src={require(`./images/ingredients/${this.props.foodRestrictions}.png`)} className="food-icon-restriction" alt={this.props.foodRestrictions} />
								</div>
							</div>
						</div>

						<div className="row-bot text-left">
							<span className="food-notes">{this.props.foodNotes}</span>
						</div>

					</div>
				</div>
			)

		} else { return null; }

	}

}

export default Overlay;