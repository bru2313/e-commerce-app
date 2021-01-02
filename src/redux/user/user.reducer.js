import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUSer: null
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;


