import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withRouter} from 'react-router-dom';
import { setAlbums, getAlbum } from '../../Redux/reducers/albumsReducer';
import { getUser } from '../../Redux/reducers/usersReducer'
import UserAlbums from './UserAlbums';



const UserAlbumsContainer = (props) => {
    useEffect(() => {
        if(!props.match.params.userId) {
            props.history.push('/')
        }else{
            props.setAlbums(props.match.params.userId)
            props.getUser(props.match.params.userId)
        }
        
        

    }, [props.match.params.userId])
    return <UserAlbums  {...props}/>
}

const mapStateToProps = (state) => ({
    albums:state.albumsList.albumsList,
    isError: state.albumsList.isError,
    isAlbumsLoading: state.albumsList.isAlbumsLoading,
    userId: state.usersList.user.id,
    userName: state.usersList.user.name
    
})

const mapDispatchToProps = (dispatch) => ({
    setAlbums: (userId)=>dispatch(setAlbums(userId)),
    getAlbum: (album)=> dispatch(getAlbum(album)),
    getUser: (userId) => dispatch(getUser(userId))
})



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(UserAlbumsContainer)


