import React, { useState } from 'react';
import { TableProps, Tag } from 'antd';
import { Button, Space, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';
import {CheckCircleOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons'
import { DispatchType, RootState } from '../../redux/configStore';
import { getProjectDetailAPI } from '../../redux/reducers/ProjectReducer';

type Props = {}
interface DataType {
    members: [],
    creator: {
      id: number,
      name: string
    },
    id: number,
    projectName: string,
    description: string,
    categoryId: number,
    categoryName: string,
    alias: string,
    deleted: boolean
  }
  
  const data: DataType[] = [
    {
        "members": [],
        "creator": {
          "id": 2417,
          "name": "Admin Cyberlearn - 01"
        },
        "id": 10441,
        "projectName": "vu tien danh",
        "description": "<p>123</p>",
        "categoryId": 1,
        "categoryName": "Dự án web",
        "alias": "vu-tien-danh",
        "deleted": false
      },
      {
        "members": [],
        "creator": {
          "id": 3943,
          "name": "danh"
        },
        "id": 10445,
        "projectName": "Danh123",
        "description": "<p>123</p>",
        "categoryId": 1,
        "categoryName": "Dự án web",
        "alias": "danh123",
        "deleted": false
      },
      {
        "members": [],
        "creator": {
          "id": 3943,
          "name": "danh"
        },
        "id": 10446,
        "projectName": "Danh123456",
        "description": "<p>123</p>",
        "categoryId": 3,
        "categoryName": "Dự án di động",
        "alias": "danh123456",
        "deleted": false
      },
      {
        "members": [],
        "creator": {
          "id": 3943,
          "name": "danh"
        },
        "id": 10447,
        "projectName": "vutiendanh123",
        "description": "<p>123</p>",
        "categoryId": 2,
        "categoryName": "Dự án phần mềm",
        "alias": "vutiendanh123",
        "deleted": false
      },
      {
        "members": [],
        "creator": {
          "id": 3943,
          "name": "danh"
        },
        "id": 10448,
        "projectName": "danhdanh",
        "description": "123",
        "categoryId": 2,
        "categoryName": "Dự án phần mềm",
        "alias": "danhdanh",
        "deleted": false
      }
      
  ];

 
const ProjectManagement = (props: Props) => {
    const {projectDetail} = useSelector((state:RootState)=>state.ProjectReducer)
    const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({});
    const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
    const dispatch:DispatchType = useDispatch()
    console.log(projectDetail)
    useEffect(()=>{
        
        const action = getProjectDetailAPI()
        dispatch(action)
    },[])
    const handleChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter) => {
      console.log('Various parameters', pagination, filters, sorter);
      setFilteredInfo(filters);
      setSortedInfo(sorter as SorterResult<DataType>);
    };
  
    const clearFilters = () => {
      setFilteredInfo({});
    };
  
    const clearAll = () => {
      setFilteredInfo({});
      setSortedInfo({});
    };
  
    const setAgeSort = () => {
      setSortedInfo({
        order: 'descend',
        columnKey: 'age',
      });
    };
  
    const columns: ColumnsType<DataType> = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
      
       
      },
      {
        title: 'projectName',
        dataIndex: 'projectName',
        key: 'projectName',
       
      },
      {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
        render: (text,record,index)=>{
            let tsxContent = ((text.replace(/(&nbsp;)*/g, "")).replace(/(<p>)*/g, "")).replace(/<(\/)?p[^>]*>/g, "")
            return <div>{tsxContent}</div>
            
       }
      },
      {
        title: 'category',
        dataIndex: 'categoryName',
        key: 'categoryName',
       
      },
      {
        title: 'creator',
        
        key: 'creator',
       render:(text,record,index)=>{
        return <Tag color="green">{record.creator?.name}</Tag>
       }
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record,index) => (
          <Space size="middle">
            <a><EditOutlined/></a>
            <a><DeleteOutlined/></a>
          </Space>
        ),
      },
    ];
  return (
    <>
    <div className='text-center fs-5'>Project Management</div>
      <Space style={{ marginBottom: 16 }}>
        
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} rowKey={"id"} dataSource={projectDetail} onChange={handleChange} />
    </>
  )
}

export default ProjectManagement