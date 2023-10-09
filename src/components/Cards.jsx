import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h2>Chose your next destination</h2>
     <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src="images/img-9.jpg"
                text='Explore and live the Maya Culture'
                label='Time Machine'
                path='/services'
                />
                <CardItem 
                src="images/img-2.jpg"
                text='Travel through the islands of Bali'
                label='Travel'
                path='/services'
                />
                <CardItem 
                src="images/img-3.jpg"
                text='Find the secret of Atlantide '
                label='Adventure'
                path='/services'
                />
                 <CardItem 
                src="images/img-8.jpg"
                text='Travel back in time into Ancient Egypt'
                label='Time Machine'
                path='/services'
                />
                 <CardItem 
                src="images/img-6.jpg"
                text='Explore the Galaxy'
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
