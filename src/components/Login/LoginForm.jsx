import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form } from 'react-bootstrap'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'

const LoginForm = (props) => {
   return (
      <Form onSubmit={props.handleSubmit}
            className="bg-light text-dark rounded-lg px-5 py-4"
            variant="light"
      >
         <h1 className="mb-4">Login</h1>

         <Form.Group controlId="formBasicEmail" className="d-flex flex-column">
            <Field component={Input}
                   type="email"
                   name="email"
                   placeholder="Enter email"
                   validate={[required]}
                   className="form-control"
            />
         </Form.Group>

         <Form.Group controlId="formBasicPassword"
                     className="d-flex flex-column">
            <Field component={Input}
                   type="password"
                   name="password"
                   placeholder="Enter password"
                   validate={[required]}
                   className="form-control"
            />
            <Form.Text className="">
               Find free account on
               <a href='https://social-network.samuraijs.com/'
                  className=""> Social Network SamuraiJS</a>
            </Form.Text>
         </Form.Group>

         <Form.Group controlId="formBasicCheckbox">
            <Field component={Input}
                   type="checkbox"
                   name="rememberMe"
                   validate={[required]}
                   className="form-check"
            /> Remember Me
         </Form.Group>

         {
            props.error &&
            <Form.Group>
               <Form.Text className="text-danger">
                  {props.error}
               </Form.Text>
            </Form.Group>
         }

         <Button className=""
                 variant="outline-primary"
                 type="submit"
                 size="md">
            Login
         </Button>
      </Form>
   )
}

const LoginReduxForm = reduxForm({

   form: 'login',

})(LoginForm)

export default LoginReduxForm
