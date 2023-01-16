import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import UpdateProfile from '../../Pages/User/UpdateProfile';
export interface popUp {
    visibleState: boolean,

}
export interface DrawerState {
    visible: popUp,
    compo:JSX.Element
}


const initialState = {
    visible: false,
    compo: <UpdateProfile />

}

const DrawerCyberBug = createSlice({
    name: "drawerReducer", 
    initialState,
    reducers: {
        openDrawer: (state = initialState, action: PayloadAction<popUp>) => {
            state.visible = true

        },
        CloseDrawer: (state = initialState, action: PayloadAction<popUp>) => {
            state.visible = false
        },
        // changeContent: (state: DrawerState, action: PayloadAction<JSX.Element>) => {
        //     state.compo = action.payload
        // }
    }
});

export const { openDrawer, CloseDrawer } = DrawerCyberBug.actions

export default DrawerCyberBug.reducer