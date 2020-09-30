import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

let mapStateToPropsForRedirect = (state) => {
   return {
      isAuth: state.auth.isAuth,
   }
}

export const withAuthRedirect = (Component) => {

   // First HOC
   class RedirectComponent extends React.Component {
      render () {
         console.log('this.props.isAuth: ' + this.props.isAuth)
         // if (!this.props.isAuth === false) return <Redirect to={'/login'}/>

         return <Component {...this.props} />
      }
   }

   // Second HOC
   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
   return ConnectedAuthRedirectComponent

}