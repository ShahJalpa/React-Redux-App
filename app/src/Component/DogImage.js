import React from 'react';

const DogImage = (props) => {
    return (
        <div>
            
                <img className='DogImage' src={props.dogurl} alt='random dog'/>
            
        </div>
    )
}

export default DogImage;