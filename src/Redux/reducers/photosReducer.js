import { photosApi } from "../../api/api";


const SET_PHOTOS = 'photosReducer/SET-PHOTOS';
const SELECTED_PHOTO = 'photosReducer/SELECTED_PHOTO'
const IS_LOADING = 'photosReducer/IS_LODING';
const SET_ERROR = 'photosReducer/SET_ERROR';

const initialState = {
  photosList: [],
  selectedPhoto: null,
  isPhotosLoading: true,
  isError: false
}
const photosReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photosList: action.photos
      }
    case SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.index
      }
    case IS_LOADING:
      return { ...state, isPhotosLoading: action.loading }
    case SET_ERROR:
      return { ...state, isError: action.isError }

    default:
      return state;
  }

}

const getPhotosSuccess = (photos) => ({ type: SET_PHOTOS, photos })
const setSelectedPhoto = (index) => ({ type: SELECTED_PHOTO, index })
const setLoading = (loading) => ({ type: IS_LOADING, loading })
const setError = (isError) => ({ type: SET_ERROR, isError })

export const setPhotos = (albumId) => async (dispatch) => {
  dispatch(setError(false))
  dispatch(setLoading(false))
  try {
    let response = await photosApi.getPhotos(albumId)
    dispatch(getPhotosSuccess(response))
    dispatch(setLoading(true))
  } catch (error) {
    dispatch(setLoading(true))
    dispatch(setError(true))
  }

}

export const selectedPhoto = (index) => (dispatch) => {
  dispatch(setSelectedPhoto(index))
}



export default photosReducer;
