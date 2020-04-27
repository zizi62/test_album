import React, { useEffect } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { setUsers, getUser } from '../../Redux/reducers/usersReducer';



const UsersContainer = (props) => {

    useEffect(() => {
        props.setUsers()
    }, [props.users])
    return (
        <Users {...props} />
    )
}


const mapStateToProps = (state) => ({
    users: state.usersList.usersList,
    isError:state.usersList.isError
})

const mapDispatchToProps = (dispatch) => ({
    setUsers: () => dispatch(setUsers()),
    getUser: (userId) => dispatch(getUser(userId))
})


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
