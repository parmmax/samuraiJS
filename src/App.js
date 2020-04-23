import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Projects from "./components/Projects/Projects";
import Media from "./components/Media/Media";
import Settings from "./components/Settings/Settings";
import Main from "./components/Main/Main";

const App = (props) => {

    return (
        <Route path='/' render={() =>
            <div>
                <div className="app-wrapper">
                    <Header/>
                    <Route path='/home'
                           render={() => <Main/>}/>
                    <Route path='/profile'
                           render={() => <Profile
                               stateProfile = {props.state.profilePage}
                               dispatch = {props.dispatch}
                           />}/>
                    <Route path='/messages'
                           render={() => <Dialogs
                               stateDialogs={props.state.dialogsPage}
                               dispatch = {props.dispatch}
                           />}/>
                    <Route path='/projects'
                           render={() => <Projects/>}/>
                    <Route path='/media'
                           render={() => <Media/>}/>
                    <Route path='/settings'
                           render={() => <Settings/>}/>
                </div>
                <Footer/>
            </div>}/>
    );
}

export default App;