import React from 'react';

const DogImage = (props) => {
    return (
        <div>
            {props.item.map((dogs) => {
                return <img className='DogImage' src={dogs} alt='random dog'/>
            })}
        </div>
    )
}

export default DogImage;