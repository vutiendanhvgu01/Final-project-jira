import { createSlice } from '@reduxjs/toolkit'

import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN_CYBERSOFT } from '../../util/config';
import { DispatchType } from '../configStore';


export interface category{
    id:number,
    projectCategoryName:string,
}
export interface Project{
    projectName:string,
    description:string,
    categoryId:number
}
export interface ProjectState{
    categoryProject: category[],
    createProject: Project,
}
const initialState = {
    categoryProject: [],
    createProject:null,
}

const ProjectReducer = createSlice({
  name: "projectReducer",
  initialState,
  reducers: {
    projectCategoryAction:(state:ProjectState, action: PayloadAction<category[]>)=>{
        state.categoryProject = action.payload
    },
    // createProjectaction:(state:ProjectState, action:PayloadAction<Project>)=>{
    //     state.createProject = action.payload
    // }
  }
});

export const {projectCategoryAction} = ProjectReducer.actions

export default ProjectReducer.reducer


export const getProjectCategoryApi = ()=>{
    return async(dispatch:DispatchType)=>{
        const result = await axios({
            url:'https://jiranew.cybersoft.edu.vn/api/ProjectCategory',
            method:'get',
            headers:{
                TokenCybersoft: TOKEN_CYBERSOFT,
            }
        })
        const content:category[] = result.data.content
        const action:PayloadAction<category[]> = projectCategoryAction(content)
        dispatch(action)
    }
}
export const createProjectAPI = (createProject:Project)=>{
    return async (dispatch:DispatchType)=>{
        const result = await axios({
            url:'https://jiranew.cybersoft.edu.vn/api/Project/createProject',
            method:'post',
            data: createProject,
            headers:{
                TokenCybersoft: TOKEN_CYBERSOFT,
            }
        })
        console.log(result.data.content);
    }
}