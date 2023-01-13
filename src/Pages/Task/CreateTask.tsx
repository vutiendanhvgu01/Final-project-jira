import { Input, Select } from 'antd'
import React from 'react'
import type { SelectProps } from 'antd';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
const optionsAssigner: SelectProps['options'] = [];
type Props = {}

const CreateTask: React.FC = (props: Props) => {
    return (
        <>
            <h1>Create Task</h1>
            <div className="form-group">
                <p>Project</p>
                <Select
                    placeholder='Project name'

                    style={{ width: '100%' }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'jack',
                            label: 'Jack',
                        },
                        {
                            value: 'lucy',
                            label: 'Lucy',
                        },
                        {
                            value: 'Yiminghe',
                            label: 'yiminghe',
                        },
                    ]}
                />
            </div>
            <div className="form-group">
                <p>Task name</p>
                <Input size="large" placeholder="Task name" />
            </div>
            <div className="form-group">
                <p>Status</p>
                <Select
                    defaultValue="lucy"
                    style={{ width: '100%' }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'backlog',
                            label: 'BACKLOG',
                        },
                        {
                            value: 'selectedfordevelopment',
                            label: 'SELECTED FOR DEVELOPMENT',
                        },
                        {
                            value: 'inprogess',
                            label: 'IN PROGESS',
                        },
                        {
                            value: 'done',
                            label: 'DONE',
                        },
                    ]}
                />
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="priority-task">
                        <div className="form-group">
                            <p>Priority</p>
                            <Select
                                defaultValue="high"
                                style={{ width: '100%' }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'high',
                                        label: 'High',
                                    },
                                    {
                                        value: 'medium',
                                        label: 'Medium',
                                    },
                                    {
                                        value: 'low',
                                        label: 'Low',
                                    },
                                    {
                                        value: 'lowest',
                                        label: 'lowest',
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="task-type">
                        <div className="form-group">
                            <p>Task Type</p>
                            <Select
                                defaultValue="bug"
                                style={{ width: '100%' }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'bug',
                                        label: 'Bug',
                                    },
                                    {
                                        value: 'newtask',
                                        label: 'New Task',
                                    },

                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <p>Assigners</p>
                <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    onChange={handleChange}
                    tokenSeparators={[',']}
                    options={optionsAssigner}
                />
            </div>

        </>
    )
}

export default CreateTask