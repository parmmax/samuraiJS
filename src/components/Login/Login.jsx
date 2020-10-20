import React from 'react'
import { Container } from 'react-bootstrap'
import LoginReduxForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../bll/reducers/authReducer'
import { Redirect } from 'react-router-dom'

const Login = (props) => {

   const onSubmit = (formData) => {
      console.log((formData));
      props.login(formData.email, formData.password, formData.rememberMe);

   }
   console.log('Login component isAuth: ', props.isAuth);
   if (props.isAuth) {
      return <Redirect to="/profile"/>
   }

   return (
      <Container fluid className="min-vh-100 zIndex-1">
         <Container className="vh-100 text-left d-flex justify-content-center align-items-center">
            <section>
               <LoginReduxForm onSubmit={onSubmit} />
            </section>
         </Container>
      </Container>
   )
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})

export default connect( mapStateToProps, { login } )(Login)