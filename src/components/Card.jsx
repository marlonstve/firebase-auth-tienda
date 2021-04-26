import React from 'react'
import ms from '../assets/images/headerimage.png'
import '../stilos/Card.css'
import ca from '../assets/images/d.png'
const Card = () => {
    return (
        <div className="card mx-auto Fitness-Card">
            <div className="card-body">
                <div className="row center">
                    <img src={ms} alt="Imagen1" className="col-4"></img>
                    <div className=" Fitness-Card-Info">
                        <h1>$0 delivery for 30 days!
                    <img src={ca} alt='..' width='20' height='20' /></h1>
                        <p>$ delivery fee for over $10 for 30 days</p>
                        <h2 className='col-16'>learn more </h2>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Card