import React from 'react'
import Auth from './Auth'
import { getAuth, setAuthUserData } from '../../../Redux/authReducer'
import { connect } from 'react-redux'

class AuthContainer extends React.Component {

   componentDidMount () {
      this.props.getAuth()
   }

   render () {
      return (
         <Auth
            {...this.props}
         />
      )
   }
}

let mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login,
   }
}

export default connect(
   mapStateToProps, { setAuthUserData, getAuth },
)(AuthContainer)