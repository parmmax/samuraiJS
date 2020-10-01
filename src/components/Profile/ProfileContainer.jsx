import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {
   getProfile,
   getStatus,
   setUserProfile, updateStatus,
} from '../../Redux/profileReducer'
import Profile from './Profile'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

   componentDidMount () {

      let userId = this.props.match.params.userId
      if (!userId) {
         userId = 8206
      }

      this.props.getProfile(userId)
      // setTimeout( () => {
      this.props.getStatus(userId)
      // }, 3000)
   }

   render () {

      return (
         <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
         />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
   }
}

export default compose(
   connect(mapStateToProps,
      { setUserProfile, getProfile, getStatus, updateStatus }),
   withRouter,
   withAuthRedirect,
)(ProfileContainer)