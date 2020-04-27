import { albumsApi, photosApi } from "../../api/api";


const SET_ALBUMS = 'albumsReducer/SET-ALBUMS'
const SET_ALBUM = 'albumsReducer/SET-ALBUM'
const IS_LOADING = 'albumsReducer/IS_LODING';
const SET_ERROR = 'albumsReducer/SET_ERROR';

const initialState = {
  albumsList: [],
  album: {},
  isAlbumsLoading: true,
  isError: false
}
const albumsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_ALBUMS:
      return {
        ...state,
        albumsList: action.albums
      }
    case SET_ALBUM:
      return {
        ...state,
        album: action.album
      }
    case IS_LOADING:
      return { ...state, isAlbumsLoading: action.loading }
      case SET_ERROR:
        return { ...state, isError: action.isError }

    default:
      return state;
  }

}

const getAlbumsSuccess = (albums) => ({ type: SET_ALBUMS, albums })
const setAlbum = (album) => ({ type: SET_ALBUM, album })
const setLoading = (loading) => ({ type: IS_LOADING, loading })
const setError = (isError)=>({type: SET_ERROR, isError})

export const setAlbums = (userId) => async (dispatch) => {
  dispatch(setError(false))
  dispatch(setLoading(false))
  let albumLength
  let albumImg
  try {
   
    let response = await albumsApi.getAlbums(userId)// забираем альбомы принадлежащие пользователю
    let albums = await Promise.all(response.map(album => photosApi.getPhotos(album.id).then(photosList => { 
    albumLength = photosList.length
      albumImg = photosList[0].url  
      return { ...album, albumLength, albumImg } 
    })))
    dispatch(getAlbumsSuccess(albums))
    dispatch(setLoading(true))
  } catch (error) {
      dispatch(setLoading(true))
      dispatch(setError(true))
  }
  
}
export const getAlbum = (albumId) => async (dispatch) => {
  let response = await albumsApi.getAlbum(albumId)
  dispatch(setAlbum(response))
}

export default albumsReducer;
