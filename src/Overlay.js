import React from 'react'

import iconHealth from './images/icons/health.png'
import iconHunger from './images/icons/hunger.png'
import iconSanity from './images/icons/sanity.png'
import iconRot from './images/icons/rot.png'
import iconDonot from './images/icons/donot.png'
import iconFavorite from './images/icons/heart.png'
import iconAsterisk from './images/icons/asterisk.png'

import imgFrame from './images/ingredients/frame.png'

import warlyPortrait from './images/portraits/Warly_Portrait.png'

const frameStyle = {
	backgroundSize: "cover",
	backgroundImage: `url(${imgFrame})`
}

class Overlay extends React.Component {

	render() {

		if(this.props.visible !== false) {

			return(
				<div className="overlay-container" onClick={this.props.cardClicked}>
					<div className="food-card-overlay container">


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

						<div className="row ingredient-container">
							<div className="col-3 ingredient-icon" style={frameStyle}>
								<img src={require(`./images/ingredients/${this.props.foodRecipes[0]}.png`)} alt={this.props.foodRecipes[0]} />
							</div>
							<div className="col-3 ingredient-icon" style={frameStyle}>
								<img src={require(`./images/ingredients/${this.props.foodRecipes[1]}.png`)} alt={this.props.foodRecipes[1]} />
							</div>
							<div className="col-3 ingredient-icon" style={frameStyle}>
								<img src={require(`./images/ingredients/${this.props.foodRecipes[2]}.png`)} alt={this.props.foodRecipes[2]} />
							</div>
							<div className="col-3 ingredient-icon" style={frameStyle}>
								<img src={require(`./images/ingredients/${this.props.foodRecipes[3]}.png`)} alt={this.props.foodRecipes[3]} />
							</div>
						</div>

						<div className="row ingredient-container">
							<div className="col-3 ingredient-icon" style={frameStyle}>
								<img src={require(`./images/ingredients/${this.props.foodRecipes[0]}.png`)} alt={this.props.foodRecipes[0]} />
							</div>
							<div className="col-3 ingredient-icon" style={frameStyle}>
								<img src={require(`./images/ingredients/${this.props.foodRecipes[1]}.png`)} alt={this.props.foodRecipes[1]} />
							</div>
							<div className="col-3 ingredient-icon" style={frameStyle}>
								<img src={require(`./images/ingredients/${this.props.foodRecipes[2]}.png`)} alt={this.props.foodRecipes[2]} />
							</div>
							<div className="col-3 ingredient-icon" style={frameStyle}>
								<img src={require(`./images/ingredients/${this.props.foodRecipes[3]}.png`)} alt={this.props.foodRecipes[3]} />
							</div>
						</div>

						<div className="row ingredient-restriction-container">
							<div className="ingredient-icon col-3">
								<img src={imgFrame} className="food-icon-frame" alt="frame" />
								<img src={iconDonot} className="food-icon-donot" alt="restriction icon" />
								<img src={require(`./images/ingredients/${this.props.foodRestrictions}.png`)} className="food-icon-restriction" alt={this.props.foodRestrictions} />
							</div>
						</div>

						<div className="overlay-spacer"></div>

						<div className="row">
							<div className="col-1"></div>
							<div className="col-10">
								<span className="food-notes">
									{this.props.foodNotes}
								</span>
							</div>
							<div className="col-1"></div>
						</div>

						<div className="overlay-spacer"></div>

						<div className="row portrait-row">
							
							<div className="warly-icon-container">
								<div className="warly-icon">
									<img src={warlyPortrait} alt="Warly icon" />
								</div>
								<img src={iconAsterisk} className="asterisk-icon" alt="Asterisk icon" />
							</div>

							<div className="favorite-food-container">
								<div className="favorite-food-icon">
									<img src={require(`./images/portraits/Wilson_Portrait.png`)} alt="Wilson icon" />
								</div>
								<img src={iconFavorite} className="favorite-icon" alt="Favorite icon" />
							</div>

						</div>

					</div>

				</div>
			)

		} else { return null; }

	}

}

export default Overlay;