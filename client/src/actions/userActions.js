import axios from 'axios'
import { GET_USERS, DELETE_USER, ADD_USER, UPDATE_USER, USERS_LOADING } from './types'

export const getUsers = () => dispatch => {
    dispatch(setUsersLoading());
    axios.get('/api/users')
        .then(res =>
            dispatch({
                type: GET_USERS,
                payload: res.data
            }
            )
        )
}


export const addUser = user => dispatch => {
    axios
        .post('/api/users', user)
        .then(res =>
            dispatch({
                type: ADD_USER,
                payload: res.data
            }
            )
        )
}

export const deleteUser = id => dispatch => {
    axios
        .delete(`/api/users/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_USER,
                payload: id
            }))
}

export const updateUser = id => dispatch => {
    axios
        .put(`/api/users/${id}`)
        .then(res =>
            dispatch({
                type: UPDATE_USER,
                payload: id
            }))
}

export const setUsersLoading = () => {
    return {
        type: USERS_LOADING
    }
}