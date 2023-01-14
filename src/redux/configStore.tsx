import {configureStore} from '@reduxjs/toolkit'
import ProjectReducer from './reducers/ProjectReducer'
import UserReducer from './reducers/UserReducer'
export const store = configureStore({
    reducer:{
        UserReducer: UserReducer,
        ProjectReducer:ProjectReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch