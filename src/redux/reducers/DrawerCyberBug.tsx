import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface popUp{
    visibleState:boolean
}
export interface DrawerState{
    visible: popUp
}
const initialState = {
    visible:false
}

const DrawerCyberBug = createSlice({
  name: "drawerReducer",
  initialState,
  reducers: {
    openDrawer:(state= initialState, action:PayloadAction<popUp>)=>{
        state.visible = !state.visible
        
    },
    CloseDrawer:(state= initialState, action:PayloadAction<popUp>)=>{
        state.visible = !state.visible
        
    }
  }
});

export const {openDrawer,CloseDrawer} = DrawerCyberBug.actions

export default DrawerCyberBug.reducer