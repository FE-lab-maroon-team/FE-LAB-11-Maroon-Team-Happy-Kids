import { FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from '../actions/user-action'

const initialState = {
    loading: false,
    users: [],
    eror:null
}

export function usersReducer (state = initialState , action) {
    switch(action.type){
      case FETCH_USER_REQUEST:
          return{
              ...state,
              loading:true
          }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                loading:false
            }
        case FETCH_USER_FAILURE:
        return{
            ...state,
            loading:true
        }
        default:
            return{
               ...state
            }
    }
}

const userReducer = state => state.users;

export const getUsersRequest = state =>usersReducer(state).loading;
export const getUsersSuccess = state =>usersReducer(state).users;
export const getUsersError = state =>usersReducer(state).eror;