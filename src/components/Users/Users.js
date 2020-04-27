import React from 'react';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import User from './User/User';
import SomeError from '../common/SomeError';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.info.light,
    minHeight: '100vh',
    padding: 60,
    position: "relative"

  },
  listBox: {
    paddingTop: 40,
    alignSelf: "start"
  }
}));

const Users = (props) => {
  const { users, getUser,isError } = props;
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h4" gutterBottom >Our Autors</Typography>
      <Container maxWidth="sm" className={classes.listBox}>
        {isError?<SomeError/>
        :<List component="nav" >
        {users.map((user) => <User key={user.id} user={user} getUser={getUser} />)}
      </List>}
      </Container>
    </Container>
  )
}

export default Users
