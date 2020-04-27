import { usersApi } from "../../api/api";

const SET_USERS = 'usersReducer/SET-USERS'
const SET_USER = 'usersReducer/SET-USER'
const IS_LOADING = 'usersReducer/IS_LODING';
const SET_ERROR = 'usersReducer/SET_ERROR';

const initialState = {
  usersList: [],
  user: {},
  isUsersLoading: true,
  isError: false

}
const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USERS:
      return { ...state, usersList: action.users }
    case SET_USER:
      return {
        ...state, user: action.user
      }
    case IS_LOADING:
      return { ...state, isUsersLoading: action.loading }
    case SET_ERROR:
      return { ...state, isError: action.isError }

    default:
      return state;
  }

}

const getUsersSuccess = (users) => ({ type: SET_USERS, users })
const setUser = (user) => ({ type: SET_USER, user })
const setLoading = (loading) => ({ type: IS_LOADING, loading })
const setError = (isError) => ({ type: SET_ERROR, isError })

export const setUsers = () => async (dispatch) => {
  dispatch(setLoading(false))
  try {
    let response = await usersApi.getUsers()
    dispatch(getUsersSuccess(response))
    dispatch(setLoading(true))
  } catch (error) {
    dispatch(setLoading(true))
    dispatch(setError(true))
  }
}


export const getUser = (userId) => async (dispatch) => {
  let response = await usersApi.getUser(userId)
  dispatch(setUser(response))
}

export default usersReducer;
