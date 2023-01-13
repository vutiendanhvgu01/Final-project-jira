import { Input, Select } from 'antd'
import React from 'react'


const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};
type Props = {}

const CreateTask: React.FC = (props: Props) => {
    return (
        <>
            1
            <div>
                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Create Task</button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: '720px' }}>
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Create Task</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <hr></hr>
                    <div className="offcanvas-body" style={{ padding: '0 55px' }}>
                        <div className="form-group">
                            <p>Project</p>
                            <Select
                                defaultValue="lucy"
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
                            <Input size="large" placeholder="large size" />
                        </div>
                        <div className="form-group">
                            <p>Status</p>
                            <Select
                                defaultValue="lucy"
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
                        <div className="row">
                            <div className="col-6">
                                <div className="priority-task">
                                    <div className="form-group">
                                        <p>Priority</p>
                                        <Select
                                            defaultValue="lucy"
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
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="task-type">
                                    <div className="form-group">
                                        <p>Task Type</p>
                                        <Select
                                            defaultValue="lucy"
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
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>



        </>
    )
}

export default CreateTask