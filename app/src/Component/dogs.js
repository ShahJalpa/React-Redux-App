import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {getDog} from '../actions/actions.js';

const Dogs = (props) => {
    const {dogs, isGetting, error} = props;

    const handelButton = () => {
        props.getDog();
    }

    useEffect(() => {
        props.getDog();
    }, []);

    if(error) {
        return <h3>Something went wrong, please try again!</h3>
    }

    if (isGetting){
        return <h3>Getting the dogs!</h3>
    }

    return (
        <div>
            <h2>Dog Lovers: {dogs}</h2>
            <button onClick={handelButton}>Dog Images</button>
            {/* <img className='Dog' src= alt='random dog' /> */}
        </div>
    )
};

const mapStateToProps = state => {
    return{
        dogs: state.dogs,
        isGetting: state.isGetting,
        error: state.error
    };
};

export default connect(mapStateToProps, {getDog})(Dogs);