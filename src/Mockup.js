import React from 'react'

import Card from './Card'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Mockup.css'

import food from './food'

import logo from './images/icons/crockpot.webp'

import background from './images/bg/1.jpg'

import iconHealth from './images/icons/health.webp'
import iconHunger from './images/icons/hunger.webp'
import iconSanity from './images/icons/sanity.webp'
import iconRot from './images/icons/rot.webp'
import iconDonot from './images/icons/donot.png'

import imgHoneyham from './images/crockpot/honeyham.webp'
import imgMeatystew from './images/crockpot/meatystew.webp'
import imgMeatballs from './images/crockpot/meatballs.webp'

import imgFrame from './images/ingredients/frame.webp'
import imgMeats from './images/ingredients/meats.webp'
import imgAny from './images/ingredients/any.webp'
import imgInedible from './images/ingredients/twigs.webp'

const bgStyle = {
	backgroundImage: `url(${background})`
}

class Mockup extends React.Component {

	render() {

		return(		

			<>

				<div className="bg" style={bgStyle}></div>
				<div className="bg-gradient"></div>

				<header>
					<div className="logo">
						<span className="logo-subtext">Don't Starve Together</span>
						<span className="logo-text">All Things Crockpot</span>
						<img src={logo} alt="Crockpot Logo" />
					</div>
				</header>

				<div className="container">

					<div className="search-container">
						<input type="text" placeholder="Search" />
					</div>

					<div className="food-category-container">
						<div className="food-category">
							Sort By...
							<br />
							Hunger, Health, Sanity, Spoil time
							
						</div>
						<div className="food-category">
							• Contains Meat
							<br />
							(true / false)

						</div>
					</div>

					<div className="card-container">

						{Object.keys(food).map(
								(key, value) => {

									/*if(food[key].name.toLowerCase().includes(props.searchState.toLowerCase())){*/

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
											/>
										)

								}
						)}

					</div>
				</div>

			</>
		)

	}

}

export default Mockup;