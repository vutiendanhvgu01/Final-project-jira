import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { DispatchType, RootState } from '../../redux/configStore';
import { CloseDrawer, openDrawer } from '../../redux/reducers/DrawerCyberBug';

const { Option } = Select;
type Props = {}

const MODALCYBERBUG = (props: any) => {
    console.log(props);
    const {visible} = useSelector((state:RootState)=>state.DrawerCyberBug)
    const dispatch:DispatchType = useDispatch()
    const showDrawer = () => {
      dispatch(openDrawer())
    };
    
    const onClose = () => {
      dispatch(CloseDrawer())
    };
    console.log(visible)
  return (
    <>
     <button onClick={showDrawer}>Show Drawer</button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
       
      </Drawer>
    </>
  )
}

export default MODALCYBERBUG