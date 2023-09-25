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
                src="images/img-9.jpg"
                text='Explore hidden waterfall deep inside the Amazon jungle'
                label='Adventure'
                path='/services'
                />
                

            </ul>
        </div>
     </div>
    </div>
  )
}

export default Cards
