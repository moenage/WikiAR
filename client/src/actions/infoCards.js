import * as api from '../api';

export const getInfoCards = () => async (dispatch) => {
    try {
        const { data } = await api.fetchInfoCards();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch(error) {
        console.log(error.message);
    }


};

export const createInfoCard = (infoCard) => async (dispatch) => {
    try {
        const {data} = await applicationCache.createInfoCard(infoCard);

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
} 

