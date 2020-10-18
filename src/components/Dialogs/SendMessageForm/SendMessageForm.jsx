import { Button, Form, InputGroup } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import React from 'react'
import { maxLengthCreator, minLengthCreator, required, } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'

let maxLength200 = maxLengthCreator(200);
let minLength2 = minLengthCreator(2);

const SendMessageForm = (props) => {
   return (
      // props.handleSubmit приходит из контейнерной компоненты, которая оборачивается HOC reduxFrom
      <Form onSubmit={props.handleSubmit}
            className="d-flex flex-column align-items-end w-100">
         <Form.Group className="w-100 mb-4 d-flex flex-column"
                     size="sm">
            <Field component={Textarea}
                   name="addMessageBody"
                   placeholder="Enter your message"
                   className="form-control mb-2"
                   validate={[required, maxLength200, minLength2]}
            />
         </Form.Group>
         <InputGroup.Append>
            <Button type="submit"
                    variant=""
                    size="sm"
                    className="px-4 btn-outline-primary text-light"
            >Send</Button>
         </InputGroup.Append>
      </Form>
   )
}

const SendMessageFormReduxForm = reduxForm({

   form: 'sendMessageForm',

})(SendMessageForm)

export default SendMessageFormReduxForm