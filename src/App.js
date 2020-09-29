import React from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Projects from './components/Projects/Projects';
import Media from './components/Media/Media';
import Settings from './components/Settings/Settings';
import Home from './components/Home/Home';
import UsersContainer from './components/Users/UsersContainer';
import Header from './components/Header/Header';
import LoginContainer from './components/Login/LoginContainer';
// import Footer from './components/Footer/Footer';

const App = (props) => {

  return (
      <div className="bg-clouds">
        <Header login={props.login} isAuth={props.isAuth}/>
        <Route exact path='/' render={() => <Home/>}/>
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
        <Route path='/messages' render={() => <DialogsContainer/>}/>
        <Route path='/projects' render={() => <Projects/>}/>
        <Route path='/media' render={() => <Media/>}/>
        <Route path='/settings' render={() => <Settings/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
         <Route path='/login' render={() => <LoginContainer/>}/>
        {/* <Footer /> */}
      </div>
  );
};

export default App;