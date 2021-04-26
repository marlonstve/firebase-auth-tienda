import data from '../categories.json'
import { Component } from 'react'
import Carousel from 'react-elastic-carousel';
import '../stilos/Carousel.css'
import am from '../assets/icons/1046784.svg'
import relog from '../assets/icons/149316.svg'
class Carrousel extends Component {
	render() {

		return (
		
				<div>

					<div  >
						<h4>Restaurants<img src={am} alt='..' width='20' height='20' />
						<button className="btn-1 "type="button" ><img src={relog} alt='..' width='20' height='20' />Delivery: Now</button>
                        </h4></div>
					<br></br>
					<br></br>
				<div className='rec.rec-arrow:Disabled'>
				< Carousel itemsToShow={8} itemsToScroll={2} pagination={0}  >
					{data.map((item) => {
						return (
							<div className="carousel">
								
								<img src={item.icon} alt="" width="45" height="45"></img>
								<h5>{item.name}</h5>
							</div>
							

						)
					})}
				</Carousel>
				</div>
			</div>
			
		)

	}
}

export default Carrousel