export default (infoCards = [], action) => {
    if(action.type === 'Create'){
        switch (action.type){
            case 'FETCH_ALL':
                return infoCards;
            case 'CREATE':
                return infoCards;
            default:
                return infoCards;
        }
    }
} 