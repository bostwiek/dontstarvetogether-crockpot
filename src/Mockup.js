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

import imgFrame from './images/ingredients/frame.png'
import imgMeats from './images/ingredients/meats.png'
import imgAny from './images/ingredients/any.png'
import imgInedible from './images/ingredients/inedible/twigs.webp'

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

				{/*
					Categories:
						Sort by (each category)
						Vegetarian
						Meat
						...
				*/}

					<div className="food-category-container">
						<div className="food-category">Carnivore</div>
						<div className="food-category">Vegetarian</div>
					</div>

					<div className="card-container">

						<Card foodName="Honey Ham" foodImg={imgHoneyham} />
						<Card foodName="Meaty Stew" foodImg={imgMeatystew} />
						<Card foodName="Meatballs" foodImg={imgMeatballs} />
						<Card foodName="Honey Ham" foodImg={imgHoneyham} />
						<Card foodName="Meaty Stew" foodImg={imgMeatystew} />
						<Card foodName="Meatballs" foodImg={imgMeatballs} />
						<Card foodName="Honey Ham" foodImg={imgHoneyham} />
						<Card foodName="Meaty Stew" foodImg={imgMeatystew} />
						<Card foodName="Meatballs" foodImg={imgMeatballs} />
						<Card foodName="Honey Ham" foodImg={imgHoneyham} />
						<Card foodName="Meaty Stew" foodImg={imgMeatystew} />
						<Card foodName="Meatballs" foodImg={imgMeatballs} />
						<Card foodName="Honey Ham" foodImg={imgHoneyham} />
						<Card foodName="Meaty Stew" foodImg={imgMeatystew} />
						<Card foodName="Meatballs" foodImg={imgMeatballs} />
						<Card foodName="Honey Ham" foodImg={imgHoneyham} />
						<Card foodName="Meaty Stew" foodImg={imgMeatystew} />
						<Card foodName="Meatballs" foodImg={imgMeatballs} />

					</div>


					{/* OLD BUILDS: */}

					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					
					<div className="card-container row">

						<div class="card" style={{'width': '18rem'}}>
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
								<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="card-link">Card link</a>
								<a href="#" class="card-link">Another link</a>
							</div>
						</div>


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

			</>
		)

	}

}

export default Mockup;