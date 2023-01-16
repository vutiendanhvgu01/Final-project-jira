import {configureStore} from '@reduxjs/toolkit'
import DrawerCyberBug from './reducers/DrawerCyberBug'
import ProjectReducer from './reducers/ProjectReducer'
import UserReducer from './reducers/UserReducer'
export const store = configureStore({
    reducer:{
        UserReducer: UserReducer,
        ProjectReducer:ProjectReducer,
        DrawerCyberBug:DrawerCyberBug,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch