import React from "react";

import {
    ActionType,
} from "../../redux/store";
import {addMessageAC, onChangeNewMessageTextAC} from "../../redux/dialogsReduser";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";


// export function DialogsContainer(props: DialogsContainerPropsType) {
//
//     const addMessage = () => {
//         props.store.dispatch(addMessageAC(props.store.getState().dialogsPage.newMessageText))
//
//     }
//
//     const onchangeNewMessageText = (message: string) => {
//         props.store.dispatch(onChangeNewMessageTextAC(message))
//     }
//
//     return (
//         <div>
//             <Dialogs dialogsPage={props.store.getState().dialogsPage} addMessage={addMessage}
//                      onchangeNewMessageText={onchangeNewMessageText}/>
//         </div>
//
//
//     )
// }


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        auth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addMessage: (message: string) => {
            dispatch(addMessageAC(message))
        },
        onchangeNewMessageText: (message: string) => {
            dispatch(onChangeNewMessageTextAC(message))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);