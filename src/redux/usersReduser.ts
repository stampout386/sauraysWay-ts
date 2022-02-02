import {ActionType, DialogsPageType, MessagesDataType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
export type UsersPageType = {
    users: Array<UsersType>
}

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://www.blast.hk/attachments/68493/',
        //     followed: true,
        //     fullName: 'Mik',
        //     status: 'I am boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-22.jpg',
        //     followed: false,
        //     fullName: 'Dmitry',
        //     status: 'I am groot',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://www.blast.hk/attachments/68493/',
        //     followed: true,
        //     fullName: 'Jonn',
        //     status: 'I am good',
        //     location: {city: 'New-York', country: 'USA'}
        // },
        // {
        //     id: 4,
        //     photoUrl: 'https://www.blast.hk/attachments/68493/',
        //     followed: false,
        //     fullName: 'Artem',
        //     status: 'I am pet',
        //     location: {city: 'Warshaw', country: 'Poland'}
        // },

    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(item => item.id === action.payload.userId ? {
                    ...item,
                    followed: !item.followed
                } : item)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => item.id === action.payload.userId ? {
                    ...item,
                    followed: !item.followed
                } : item)
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.payload.users]}

        default :
            return state

    }
}


export const followAC = (userId: number) => {
    return {
        type: FOLLOW, payload: {
            userId
        }
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW, payload: {
            userId
        }
    } as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS, payload: {users}
    } as const
}