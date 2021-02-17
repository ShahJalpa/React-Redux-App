import axios from 'axios';

export const FETCH_DOG_START = "FETCH_DOG_START"; //this is loading
export const FETCH_DOG_SUCCESS = "FETCH_DOG_SUCCESS"; //this is sucessfully fetching the data
export const FETCH_DOG_FAIL = "FETCH_DOG_FAIL"; //this logs the error if it doesnt fetch the data sucessfully

export const getDog = () => {
    return dispatch => {
        dispatch({ type:FETCH_DOG_START });

        axios
            .get('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                console.log(response)
                dispatch({ type:FETCH_DOG_SUCCESS, payload:response.data.message})
            })
            .catch((error) => {
                dispatch({type:FETCH_DOG_FAIL, payload:error})
            })

    }
}