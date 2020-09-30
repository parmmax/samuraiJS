import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfile, setUserProfile } from '../../Redux/profileReducer'
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
   }

   render () {

      return (
         <Profile
            {...this.props}
            profile={this.props.profile}
         />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      profile: state.profilePage.profile,
   }
}

// let WithUrlContainerComponent = withRouter(ProfileContainer);
//
// export default withAuthRedirect( connect(mapStateToProps, { setUserProfile, getProfile })(WithUrlContainerComponent))

export default compose(
   connect(mapStateToProps, { setUserProfile, getProfile }),
   withRouter,
   withAuthRedirect,
)(ProfileContainer)