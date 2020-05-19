import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Mockup.css'

import food from './food'

import background from './images/bg/1.jpg'

import iconHealth from './images/icons/health.webp'
import iconHunger from './images/icons/hunger.webp'
import iconSanity from './images/icons/sanity.webp'
import iconRot from './images/icons/rot.webp'

import imgHoneyham from './images/crockpot/honeyham.webp'
import imgMeatystew from './images/crockpot/meatystew.webp'
import imgMeatballs from './images/crockpot/meatballs.webp'

const backgroundStyle = {
	backgroundSize: 'cover',
	backgroundImage: `url(${background})`,
	minHeight: '100vh'
}

class Mockup extends React.Component {

	render() {

		return(		

			<div className="app-container" style={backgroundStyle}>
				<header>
					<div className="logo">DST - All Things Food</div>
				</header>

				<div className="container">
					<div className="food-category-container">
						<div className="food-category">Recipes</div>
						<div className="food-category">Ingredients</div>
					</div>
					<div className="search-container">
						<input type="text" placeholder="Search" />
					</div>
					<div className="card-container row">



					{/*need to tie bootstrap in here*/}



					<div className="card col-lg-2 col-md-3 col-sm-4">
							<div className="food-img-container">
								<img src={imgHoneyham} className="food-img" />
							</div>
							<div className="food-name">Honey Ham</div>
							<div className="food-icon-container">
								<div className="food-icon">
									<img src={iconHealth} />
									<span className="food-icon-value">
										30
									</span>
								</div>
								<div className="food-icon">
									<img src={iconHunger} />
									<span className="food-icon-value">
										75
									</span>
								</div>
								<div className="food-icon">
									<img src={iconSanity} />
									<span className="food-icon-value">
										5
									</span>
								</div>
							</div>
						</div>

						<div className="card col-lg-2 col-md-3 col-sm-4">
							<div className="food-img-container">
								<img src={imgMeatballs} className="food-img" />
							</div>
							<div className="food-name">Meatballs</div>
							<div className="food-icon-container">
								<div className="food-icon">
									<img src={iconHealth} />
									<span className="food-icon-value">
										3
									</span>
								</div>
								<div className="food-icon">
									<img src={iconHunger} />
									<span className="food-icon-value">
										62.5
									</span>
								</div>
								<div className="food-icon">
									<img src={iconSanity} />
									<span className="food-icon-value">
										5
									</span>
								</div>
							</div>
						</div>

						<div className="card col-lg-2 col-md-3 col-sm-4">
							<div className="food-img-container">
								<img src={imgMeatystew} className="food-img" />
							</div>
							<div className="food-name">Meaty Stew</div>
							<div className="food-icon-container">
								<div className="food-icon">
									<img src={iconHealth} />
									<span className="food-icon-value">
										12
									</span>
								</div>
								<div className="food-icon">
									<img src={iconHunger} />
									<span className="food-icon-value">
										150
									</span>
								</div>
								<div className="food-icon">
									<img src={iconSanity} />
									<span className="food-icon-value">
										5
									</span>
								</div>
							</div>
						</div>









						

					</div>
				</div>

			</div>
		)

	}

}

export default Mockup;