import { Input, Select } from 'antd'
import React, { useRef } from 'react'
import type { SelectProps } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configStore';
import { useFormik } from "formik";
import * as yup from "yup";
import { projectAll } from '../../redux/reducers/ProjectReducer';
import { PriorityTask, Status, TypeTask } from './TypeTask';




const optionsAssigner: SelectProps['options'] = [];
type Props = {}


const CreateTask: React.FC = (props: Props) => {
    const { allProjects, statusTask, taskType, Priority } = useSelector((state: RootState) => {
        return state.ProjectReducer
    })
    const handleChangeAntd = (value: string) => {
        console.log(`selected ${value}`);
        
    };
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            const valueDes: string = (((editorRef.current.getContent()).replace(/(&nbsp;)*/g, "")).replace(/(<p>)*/g, "")).replace(/<(\/)?p[^>]*>/g, "");
            return valueDes;
        }
    }

    interface formTypeTask {

    }

    const form = useFormik<formTypeTask>({
        initialValues: {
            projectId: '',
            statusId: '',
            priorityId: '',
            taskType:'',
            helo:'',

        },
        validationSchema: yup.object().shape({

        }),
        onSubmit: (values: formTypeTask) => {
            console.log(values)
        },
    }
    )

    return (
        <>
            <h1>Create Task</h1>
            <form onSubmit={form.handleSubmit}>
                <div className="form-group">
                    <p>Project</p>
                    <select className='w-100' name='projectId' onChange={form.handleChange} onBlur={form.handleBlur}>
                        {allProjects?.map((item: projectAll) => {
                            return <option value={item.id}>{item.projectName}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <p>Task name</p>
                    <Input size="large" placeholder="Task name" name='taskname' onChange={form.handleChange}/>
                </div>
                <div className="form-group">
                    <p>Status</p>
                    <select className='w-100' name='statusId' onChange={form.handleChange} onBlur={form.handleBlur}>
                        {statusTask?.map((item: Status) => {
                            return <option value={item.statusId}>{item.statusName}</option>
                        })}
                    </select>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="priority-task">
                            <div className="form-group">
                                <p>Priority</p>

                                <select className='w-100' name='priorityId' onChange={form.handleChange} onBlur={form.handleBlur}>
                                    {Priority?.map((item: PriorityTask) => {
                                        return <option value={item.priorityId}>{item.priority}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="task-type">
                            <div className="form-group">
                                <p>Task Type</p>
                      
                                   <select  className='w-100' name='typeId' onChange={form.handleChange} onBlur={form.handleBlur}>
                                    {taskType?.map((item: TypeTask) => {
                                        return <option value={item.id}>{item.taskType}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <Editor
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    init={{
                        height: 300,
                        menubar: true,
                        plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste code help wordcount",
                        ],
                        toolbar:
                            "undo redo | formatselect | " +
                            "bold italic backcolor | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist outdent indent | " +
                            "removeformat | help",
                        content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}



                />
                <div className="form-group">
                    <p>Assigners</p>
                    <Select
                        mode="tags"
                        style={{ width: '100%' }}
                        onChange={handleChangeAntd}
                        
                        tokenSeparators={[',']}
                        options={[{value:1,label:1},{value:2,label:2}]}
                    />
                </div>
                <button className='btn' type='submit'>Submit</button>




            </form>

        </>
    )
}

export default CreateTask