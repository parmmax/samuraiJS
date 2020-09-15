import React from 'react';
import { Route } from "react-router-dom";
import './App.scss';
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Projects from "./components/Projects/Projects";
import Media from "./components/Media/Media";
import Settings from "./components/Settings/Settings";
import Main from "./components/Main/Main";
import UsersContainer from "./components/Users/UsersContainer";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = (props) => {

    return (
        <div className="">
            <Header login={props.login} isAuth={props.isAuth} />
            <Route exact path='/' render={() => <Main />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} /> 
            {/* params can be much more/ For example: path='/profile/:userId/:secondParam/:thirdParam/:ect' */}
            <Route path='/messages' render={() => <DialogsContainer />} />
            <Route path='/projects' render={() => <Projects />} />
            <Route path='/media' render={() => <Media />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Footer />
        </div>
    );
};

export default App;