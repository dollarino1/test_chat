const SET_USER_DATA ='SET_USER_DATA';
const SET_USER_MESSAGES ='SET_USER_MESSAGES';

let initialState = {
    userData: {},
    userMessages: []
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData
            }
        case SET_USER_MESSAGES:
            return {
                ...state,
                userMessages: [...state.userMessages, action.userMessages]
            }
        default: return state;
    }
}

export const setUserData = (userData) => ({type: SET_USER_DATA, userData})
export const setUserMessages = (userMessages) => ({type: SET_USER_MESSAGES, userMessages})

export default mainReducer;