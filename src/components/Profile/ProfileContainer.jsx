import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
   getProfile,
   getStatus,
   setUserProfile, updateStatus,
} from '../../bll/reducers/profileReducer'
import Profile from './Profile'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

   componentDidMount () {
      // пусть userId = userId из параметра uri
      // Если userId нет, то присвой userId тот, кот-ый авторизован в даный момент
      // Но если user не залогинен, то измени путь на "/login"
      let userId = this.props.match.params.userId
      if (!userId) {
         userId = this.props.authUserId;
         if (!userId) {
            this.props.history.push("/login");
         }
      }
      this.props.getProfile(userId)
      this.props.getStatus(userId)
   }

   render () {
      console.log('render PROFILE');

      return (
         <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            reversClass={this.props.reversClass}
         />
      )
   }
}

let mapStateToProps = (state) => {
   console.log('mapStateToProps PROFILE');
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authUserId: state.auth.id,
      isAuth: state.auth.isAuth
   }
}

export default compose(
   connect(mapStateToProps,
      { setUserProfile, getProfile, getStatus, updateStatus }),
   withRouter,
   withAuthRedirect,
)(ProfileContainer)