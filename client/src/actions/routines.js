import { GET_USER_ROUTINES } from './actionTypes';
import { allRoutines } from '../api/routines';

export const getAllUserRoutines =  () => dispatch => {
    allRoutines().then(data => {
        dispatch({
            type: GET_USER_ROUTINES,
            payload: data
        })
    })
}