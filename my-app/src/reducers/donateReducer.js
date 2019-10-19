
const initialState = {
    pending: false,
    events:[],
    error: null
}

export function donateReducer(state = initialState,action){
    switch(action.type){
        case 'CREATE_PROJECT':
           return{
               ...state,
               pending:true,
               events: action.payload
           }
        case 'CREATE_PROJECT_ERROR':
            return{
                ...state,
                pending:false,
                events:action.payload
            }
        default:
            return state;
    }
}
export default donateReducer