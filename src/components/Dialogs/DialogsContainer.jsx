import React from 'react'
import { connect } from 'react-redux'
import { sendMessageCreator, updateNewMessageTextCreator, } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class DialogsContainer extends React.Component {
   render () {

      return (
         <Dialogs
            {...this.props}
            dialogs={this.props.dialogs}
         />
      )
   }
}

const mapStateToProps = (state) => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      newTextMessage: state.dialogsPage.newMessageText,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onNewMessageChange: (newTextFromTextarea) => {
         let action = updateNewMessageTextCreator(newTextFromTextarea)
         dispatch(action)
      },
      onSendMessageClick: () => {
         let sendMessage = sendMessageCreator()
         dispatch(sendMessage)
      },
   }
}

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// export default DialogsContainer

export default compose(
   connect( mapStateToProps, mapDispatchToProps ),
   withAuthRedirect,
)(DialogsContainer)