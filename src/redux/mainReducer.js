const SET_USERDATA ='SET_USERDATA';

let initialState = {
    userData: {}
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERDATA:
            return {
                ...state,
                userData: action.userData
            }
        default: return state;
    }
}

export const setUserData = (userData) => ({type: SET_USERDATA, userData})

// Thunk Creators ------------------------------------

export const getUserDataThunk = (page, perPage) => async (dispatch) => {
    // let payload = await animeAPI.getAnimeData(page, perPage)
    // dispatch(setTrendingAnimeData(payload.media))
}

export default mainReducer;