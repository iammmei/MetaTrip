import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these Epic destinations!</h1>
     <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src="images/img-9.jpg"
                text='Explore hidden waterfall deep inside the Amazon jungle'
                label='Adventure'
                path='/services'
                />
                <CardItem 
                src="images/img-2.jpg"
                text='Travel through the islands of Bali in Private Cruise'
                label='Luxury'
                path='/services'
                />
                <CardItem 
                src="images/img-3.jpg"
                text='Set Sail in the Atlantic Ocean Uncharted WAters '
                label='Mystery'
                path='/services'
                />
                 <CardItem 
                src="images/img-8.jpg"
                text='Ride through the Sahara Desert camel tour'
                label='Adrenaline'
                path='/services'
                />
                

            </ul>
        </div>
     </div>
    </div>
  )
}

export default Cards
