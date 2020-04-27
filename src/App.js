import React from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UsersContainer from './components/Users/UsersContainer';
import UserAlbumsContainer from './components/UserAlbums/UserAlbumsContainer';
import PhotosContainer from './components/Photos/PhotosContainer';




function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path={'/'} component={UsersContainer} />
      <Route  path={'/albums/:userId?'} component={UserAlbumsContainer} />
      <Route  path={'/photos/:albumId?'} component={PhotosContainer} />
      <Footer/>
      
    </div>
  );
}

export default App;
