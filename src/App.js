import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { initializeApp } from './BLL/reducers/appReducer'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import PreLoader from './components/common/PreLoader/PreLoader'
import Login from './components/Login/Login'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import UsersContainer from './components/Users/UsersContainer'
import Projects from './components/Projects/Projects'
import Media from './components/Media/Media'
import Settings from './components/Settings/Settings'
import './App.scss'

// import Footer from './components/Footer/Footer';

class App extends React.Component {


   componentDidMount () {
      this.props.initializeApp()
      console.log('initialize App: ', this.props.initializeApp )
   }

   render () {

      // debugger

      if (!this.props.initialize) {

         return <PreLoader/>
      }


      // Пытался получить элемент с id='app' и проверить его класс:
      // Если элемент id='app' содержит className='bg-dark', то вернуть true.
      // передать это значение в ProfileInfo, для изменения c bg-dark на bg-light, если true
      let elem = document.getElementById("app")
      // debugger;
      // if(elem.classList.contains("bg-dark")) {
      //    return console.log('reversClass: ', elem);
      // }



      // function reversClass(element, classes) {
      //    return classes.some(function(c) {
      //       return element.classList.contains(c);
      //    });
      // }
      //
      // if (reversClass(element, ["bg-dark"])) {
      //    return "bg-white"
      // }

      return (
         <div id="app" className="bg-dark text-white">
            <Header />
            <Route exact path='/' render={() => <Home/>}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer reversClass={elem}/>}/>
            <Route path='/messages' render={() => <DialogsContainer/>}/>
            <Route path='/projects' render={() => <Projects/>}/>
            <Route path='/media' render={() => <Media/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <Login/>}/>
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   initialize: state.app.initialize
})

export default compose(
   withRouter,
   connect( mapStateToProps, { initializeApp }))(App)