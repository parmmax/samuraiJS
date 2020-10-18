import React from 'react'
import Auth from './Auth'
import { logout } from '../../../BLL/reducers/authReducer'
import { connect } from 'react-redux'

class AuthContainer extends React.Component {



   render () {
      return <Auth {...this.props} />
   }
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
   }
}

export default connect( mapStateToProps, { logout } )(AuthContainer)