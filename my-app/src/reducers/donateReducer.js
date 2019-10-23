import {CREATE_PAYMENT_SUCCESS,CREATE_PAYMENT_ERROR,UPDATE_DB_SUCSESS} from '../actions/donateAction'
const initialState = {
    pending: false,
    project:[],
    error: null
}

export function donateReducer(state = initialState,action){
    switch(action.type){
        case CREATE_PAYMENT_SUCCESS:
           return{
               ...state,
               pending:true,
               project: action.payload
           }
        case CREATE_PAYMENT_ERROR:
            return{
                ...state,
                pending:false,
                project:action.payload
            }
        case UPDATE_DB_SUCSESS:
            return {
                ...state,
                project:action.payload
            }
        default:
            return state;
    }
}

export default donateReducer