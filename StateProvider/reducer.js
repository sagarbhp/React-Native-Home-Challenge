export const initialState={
    address:null,
    user:null
};

export const actionTypes = {
    SET_USER: "SET_USER",
    SET_ADDRESS:"SET_ADDRESS"
};

const reducer = (state, action) =>{
    
    switch (action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                user:action.user,
            };
        case actionTypes.SET_ADDRESS:
            return{
                ...state,
                address:action.address
            };
        
        default:
            return state;
    }
}

export default reducer;