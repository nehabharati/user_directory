import { GET_USERS, DELETE_USER, ADD_USER, UPDATE_USER, USERS_LOADING } from '../actions/types'

const initialState = {
    users: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.payload)
            }
        case ADD_USER:
            return {
                ...state,
                users: [action.payload, ...state.users]
            }
        case UPDATE_USER:
            const newUsers = state.users.filter(
                user => user._id !== action.payload
            );
            return {
                ...state,
                user: {},
                users: [...newUsers, action.payload]
            }
        case USERS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}