import React from 'react'

import './Mockup.css'

import food from './food'

import iconHealth from './images/icons/health.webp'
import iconHunger from './images/icons/hunger.webp'
import iconSanity from './images/icons/sanity.webp'
import iconRot from './images/icons/rot.webp'
import iconDonot from './images/icons/donot.png'

import imgHoneyham from './images/crockpot/honeyham.webp'
import imgMeatystew from './images/crockpot/meatystew.webp'
import imgMeatballs from './images/crockpot/meatballs.webp'

import imgFrame from './images/ingredients/frame.png'
import imgMeats from './images/ingredients/meats.png'
import imgAny from './images/ingredients/any.png'
import imgInedible from './images/ingredients/inedible/twigs.webp'


class Card extends React.Component {

	render() {

		return(

			<div className="test-card">
				<div className="row-top">

					<div className="row-half row-left">
						<img src={this.props.foodImg} className="food-img" />
					</div>

					<div className="row-half row-right">

						<div className="row-top">
							<div className="food-icon-container">
								
								<div className="food-icon">
									<img src={iconHealth} />
									<span className="food-icon-value">
										+12
									</span>
								</div>

								<div className="food-icon">
									<img src={iconHunger} />
									<span className="food-icon-value">
										+150
									</span>
								</div>

							</div>
						</div>

						<div className="row-btm">
							<div className="food-icon-container">
								<div className="food-icon">
									<img src={iconSanity} />
									<span className="food-icon-value">
										+5
									</span>
								</div>

								<div className="food-icon">
									<img src={iconRot} />
									<span className="food-icon-value">
										10
									</span>
								</div>
							</div>
						</div>
						
					</div>
				</div>

				<div className="row-mid">
					<div className="food-name">
						{this.props.foodName}
					</div>
				</div>

				<div className="row-bot">
					<div className="ingredient-icon">
						<img src={imgMeats} />
					</div>
					<div className="ingredient-icon">
						<img src={imgAny} />
					</div>
					<div className="ingredient-icon">
						<img src={imgAny} />
					</div>
					<div className="ingredient-icon">
						<img src={imgAny} />
					</div>
					
					<div className="ingredient-icon ingredient-restriction">
						<img src={imgFrame} className="food-icon-frame" />
						<img src={iconDonot} className="food-icon-donot" />
						<img src={imgInedible} className="food-icon-restriction" />
					</div>
				</div>
			</div>
		)

	}

}

export default Card;