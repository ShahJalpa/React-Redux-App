import {FETCH_DOG_START, FETCH_DOG_SUCCESS, FETCH_DOG_FAIL} from '../actions/actions.js';

const initialState = {
    dogs: [],
    isGetting: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_DOG_START):
           return({
                ...state,
                isGetting: true
            });

        case(FETCH_DOG_SUCCESS):
           return({
               ...state,
               dogs: action.payload,
               isGetting: false
           })
        
        case(FETCH_DOG_FAIL):
           return({
               ...state,
               error: action.payload,
               isGetting: false
           })

        default:
           return state;
        
    }
}


