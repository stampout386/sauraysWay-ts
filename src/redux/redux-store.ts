import {combineReducers, createStore, EmptyObject, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReduser";
import {sidebarReducer} from "./sidebarReducer";
import {ActionType, DialogsPageType, ProfilePageType, SidebarDataType} from "./store";
import {UsersPageType, usersReducer} from "./usersReduser";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarPage: SidebarDataType
    usersPage:UsersPageType
}


export let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebarPage: sidebarReducer,
        usersPage:usersReducer
    }
)


export type StoreReduxType = Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebarPage: SidebarDataType;usersPage:UsersPageType }, ActionType>

export let store = createStore(reducers)
