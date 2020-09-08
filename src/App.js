import React from 'react';
import { Route } from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Projects from "./components/Projects/Projects";
import Media from "./components/Media/Media";
import Settings from "./components/Settings/Settings";
import Main from "./components/Main/Main";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    return (
        <div className="">
            <Header />
            <Route exact path='/' render={() => <Main />} />
            <Route path='/profile' render={() => <Profile />} />
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