import { createSlice } from '@reduxjs/toolkit'

import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { PriorityTask, Status, TypeTask } from '../../Pages/Task/TypeTask';
import { TOKEN_CYBERSOFT,ACCESS_TOKEN,getStore } from '../../util/config';
import { DispatchType, RootState } from '../configStore';


export interface category{
    id:number,
    projectCategoryName:string,
}



export interface projectAll {
    members:      any[];
    creator:      Creator;
    id:           number;
    projectName:  string;
    description:  string;
    categoryId:   number;
    categoryName: string;
    alias:        string;
    deleted:      boolean;
}

export interface Creator {
    id:   number;
    name: string;
}

export interface Project{
    projectName:string,
    description:string,
    categoryId:number
}
export interface ProjectState{
    categoryProject: category[],
    createProject: Project,
    allProjects: projectAll[],
    statusTask: Status[],
    taskType: TypeTask[],
    Priority: PriorityTask[]
}
const initialState = {
    categoryProject: [],
    createProject:null,
    allProjects: [],
    statusTask: [],
    taskType: [],
    Priority: []
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
    getAllProjects: (state:ProjectState,action:PayloadAction<projectAll[]>) => {
   state.allProjects = action.payload
    },
    getStatusTaskAction: (state:ProjectState, action:PayloadAction<Status[]>) => {
        state.statusTask = action.payload
    },
    getTaskTypeAction: (state:ProjectState, action:PayloadAction<TypeTask[]>) => {
        state.taskType = action.payload
    },
    getTaskPriorityAction: (state:ProjectState, action:PayloadAction<PriorityTask[]>) => {
        state.Priority = action.payload
    }
  }
});

export const {projectCategoryAction,getAllProjects,getStatusTaskAction,getTaskTypeAction,getTaskPriorityAction} = ProjectReducer.actions

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
            url:'https://jiranew.cybersoft.edu.vn/api/Project/createProjectAuthorize',
            method:'post',
            data: createProject,
            headers:{
                TokenCybersoft: TOKEN_CYBERSOFT,
                Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`
            }
        })
        console.log(result.data.content);
    }
}

export const getAllProject = () => {
    return async (dispatch:DispatchType) => {
        try {
            const result = await axios({
                url:'https://jiranew.cybersoft.edu.vn/api/Project/getAllProject',
                method:'get',
                headers: {
                    TokenCybersoft: TOKEN_CYBERSOFT
                }
            })
            console.log(result.data.content);
            const action = getAllProjects(result.data.content)
            dispatch(action)
            const actionGetStatusTask = getTaskStatus()
            dispatch(actionGetStatusTask)
            const actionGetTypeTask = getTaskType()
            dispatch(actionGetTypeTask)
            const actionGetPriorityTask = getTaskPriority()
            dispatch(actionGetPriorityTask)
        }
        catch (err) {
            console.log(err)
        }
        

    }
}
 export const getTaskStatus = () => {
    return async (dispatch:DispatchType) => {
        const result = await axios({
            url:'https://jiranew.cybersoft.edu.vn/api/Status/getAll',
            method:'get',
            headers:{
                TokenCybersoft: TOKEN_CYBERSOFT,
            }
        })
        console.log(result.data.content)
        const action = getStatusTaskAction(result.data.content)
        dispatch(action)

    }
 }

 export const getTaskType = () => {
    return async (dispatch:DispatchType) => {
        const result = await axios({
            url:'https://jiranew.cybersoft.edu.vn/api/TaskType/getAll',
            method:'get',
            headers:{
                TokenCybersoft: TOKEN_CYBERSOFT,
            }
        })
        console.log(result.data.content)
        const action = getTaskTypeAction(result.data.content)
        dispatch(action)

    }
 }

 
 export const getTaskPriority = () => {
    return async (dispatch:DispatchType) => {
        const result = await axios({
            url:'https://jiranew.cybersoft.edu.vn/api/Priority/getAll',
            method:'get',
            headers:{
                TokenCybersoft: TOKEN_CYBERSOFT,
            }
        })
        console.log(result.data.content)
        const action = getTaskPriorityAction(result.data.content)
        dispatch(action)

    }
 }


