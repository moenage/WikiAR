export default (infoCards = [], action) => {

    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...infoCards, action.payload];
        default:
            return infoCards;
    }
    
} 