const initialState={
    number:1,
    layerToShow: 'sdsd',
    wardID: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'BOUNDS':
            
            break;
        case 'wardValue':
            return {
                ...state,
                wardID: action.ward
            }

    default:
        return state
    }
}

export default rootReducer