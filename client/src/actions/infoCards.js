import * as api from '../api';

export const getInfoCards = () => async (dispatch) => {
    try {
        const { data } = await api.fetchInfoCards();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch(error) {
        console.log(error.message);
    }


};

