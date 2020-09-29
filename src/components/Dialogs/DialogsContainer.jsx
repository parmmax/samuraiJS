import React from 'react'
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom'
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";


class DialogsContainer extends React.Component {
    render () {

        // if (this.props.isAuth) return <Redirect to={'/login'}/>
        alert( this.props.isAuth);

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
        isAuth: state.auth.isAuth,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newTextMessage: state.dialogsPage.newMessageText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (newTextFromTextarea) => {
            let action = updateNewMessageTextCreator(newTextFromTextarea);
            dispatch(action);
        },
        onSendMessageClick: () => {
            let sendMessage = sendMessageCreator();
            dispatch(sendMessage);
        }
    }
};

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

// export default DialogsContainer

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(DialogsContainer)

