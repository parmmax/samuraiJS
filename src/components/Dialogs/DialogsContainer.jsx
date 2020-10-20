import React from 'react'
import { connect } from 'react-redux'
import { sendMessageCreator } from '../../bll/reducers/dialogsReducer'
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
      dialogs: state.dialogsPage,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onSendMessageClick: (addMessageBody) => {
         dispatch (sendMessageCreator(addMessageBody))
      }
   }
}

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// export default DialogsContainer

export default compose(
   connect( mapStateToProps, mapDispatchToProps ),
   withAuthRedirect,
)(DialogsContainer)