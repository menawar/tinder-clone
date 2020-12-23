import { SwipeableDrawer } from '@material-ui/core';
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg'
        }, 
        {
            name: 'Jeff Bezos',
            url: 'https://specials-images.forbesimg.com/imageserve/5f469ea85cc82fc8d6083f05/960x0.jpg?fit=scale'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }
    
    const outOffFrame = (name) => {
       console.log(name + "left the Screen!");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                 {people.map((person) => (
                     <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOffFrame(person.name)}
                     >
                         <div 
                              style={{ backgroundImage: `url(${person.url})` }}
                              className="card"
                         >
                           <h3>{person.name}</h3>
                         </div>
                     </TinderCard>
                 ))}
            </div>
        </div>
    )
}

export default TinderCards
