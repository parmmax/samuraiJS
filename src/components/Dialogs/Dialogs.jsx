import React from 'react'
import {
    Container,
    Row,
    Col,
    Button,
} from 'react-bootstrap'
import Interlocutor from './Interlocutor/Interlocutor'
import Message from './Message/Message'
import SendMessageFormReduxForm from './SendMessageForm/SendMessageForm'

const Dialogs = (props) => {

   let dialogsElement = props.dialogs.dialogs.map(d =>
      <Interlocutor key={d.id}
                    id={d.id}
                    name={d.name}/>)

   let messagesElement = props.dialogs.messages.map(m =>
      <Message key={m.id}
               id={m.id}
               message={m.message}/>)

   // св-ва values.newMessageBody берется из <Field name="newMessageBody" />
   let onSubmit = (values) => {
      props.onSendMessageClick(values.addMessageBody)
      console.log(values.addMessageBody);
   }

   return (
      <Container className="py-4 min-vh-100">
         <section>
            <Row>
               <Col className="col-md-3 col-sm-4">
                  <header className="border-0">
                     <h4
                        className="font-family-secondary font-weight-bold text-center">Friends</h4>
                  </header>
                  <main className="mb-3">
                     {dialogsElement}
                  </main>
                  <footer>
                     <Button variant="outline-primary text-light" href="/profile"
                             size="sm">Back to profile</Button>
                  </footer>
               </Col>
               <Col className="col-md-9 col-sm-8">
                  <header className="border-0">
                     <h4 className="font-family-secondary font-weight-bold text-center">Messages</h4>
                  </header>
                  <main className="">
                     {messagesElement}
                  </main>
                  <footer>
                     <SendMessageFormReduxForm onSubmit={onSubmit}/>
                  </footer>
               </Col>
            </Row>
         </section>
      </Container>

   )
}

// const SendMessageForm = (props) => {
//     return (
//        // props.handleSubmit приходит из контейнерной компоненты, которая оборачивается HOC reduxFrom
//        <Form onSubmit={props.handleSubmit}>
//            <Form.Group className="w-100 mb-4 d-flex flex-column align-items-end"
//                        size="sm">
//                <Field component="textarea"
//                       name="addMessageBody"
//                       placeholder="Enter your message"
//                       className="form-control mb-2"
//                />
//                <InputGroup.Append>
//                    <Button variant="outline-secondary"
//                            size="md"
//                            className="px-4"
//                    >Send</Button>
//                </InputGroup.Append>
//            </Form.Group>
//        </Form>
//     )
// }
//
// const SendMessageFormReduxForm = reduxForm({
//
//     form: 'sendMessageForm',
//
// })(SendMessageForm)

export default Dialogs