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
                users:action.payload,
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

export const getUsersRequest = state =>userReducer(state).loading;
export const getUsersSuccess = state =>userReducer(state).users;
export const getUsersError = state =>userReducer(state).eror;