import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './reducers/UserReducer'
export const store = configureStore({
    reducer:{
        UserReducer: UserReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch