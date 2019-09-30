import { GET_USER } from '../sign-in';
export default function (state = {}, action) {
    switch (action.type) {
        case GET_USER:
        return action.payload;
    default:
        return state;
    }
}