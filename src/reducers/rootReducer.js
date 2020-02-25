const initialState={
    number:1,
    layerToShow: 'sdsd'
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'BOUNDS':
            
            break;
        case 'changeGeoJson':
            return {
                ...state,
                layerToShow: action.id
            }

    default:
        return state
    }
}

export default rootReducer