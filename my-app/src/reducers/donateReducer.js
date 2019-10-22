import {CREATE_PROJECT,CREATE_PROJECT_ERROR,UPDATE_DB_SUCSESS} from '../actions/donateAction'
const initialState = {
    pending: false,
    project:[],
    error: null
}

export function donateReducer(state = initialState,action){
    switch(action.type){
        case CREATE_PROJECT:
           return{
               ...state,
               pending:true,
               project: action.payload
           }
        case CREATE_PROJECT_ERROR:
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