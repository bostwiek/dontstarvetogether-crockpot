import React from 'react'

import iconFavorite from './images/icons/heart.png'
import iconAsterisk from './images/icons/asterisk.png'

import warlyPortrait from './images/portraits/Warly_Portrait.png'


class OverlayBottom extends React.Component {
	
	////////////////////////////////
	//														//
	//			Favorite Dish +				//
	//	Warly Recipe containers		//
	//														//
	////////////////////////////////

	checkFavoriteFood = (foodFavorite) => {
		if(foodFavorite !== '') {
			return(
				<div className="favorite-food-container">
					<div className="favorite-food-icon">
						<img src={require(`./images/portraits/${foodFavorite}_Portrait.png`)} alt={foodFavorite} />
					</div>
					<img src={iconFavorite} className="favorite-icon" alt="Favorite icon" />
				</div>
			)
		} else { return false; }
	}

	checkWarlyRecipe = (warlyFood) => {
		
		if(warlyFood === true) {
			return(
				<div className="warly-icon-container">
					<div className="warly-icon">
						<img src={warlyPortrait} alt="Warly icon" />
					</div>
					<img src={iconAsterisk} className="asterisk-icon" alt="Asterisk icon" />
				</div>
			)
		} else { return false; }
	}
	
	render() {
		if((this.props.foodFavorite) || (this.props.foodWarly)) {
			return(
				<>
					<div className="overlay-spacer"></div>

					<div className="row portrait-row">

						<div className="portrait-container-abs">

							{this.checkFavoriteFood(this.props.foodFavorite)}

							{this.checkWarlyRecipe(this.props.foodWarly)}

						</div>

					</div>
				</>
			)
		} else { return false; }
	}
}

export default OverlayBottom;