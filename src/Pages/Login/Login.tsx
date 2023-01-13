import React from "react";

import { Layout } from "antd";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { useFormik } from "formik";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import * as yup from "yup";
const { Header, Footer, Sider, Content } = Layout;
type Props = {};

const Login = (props: Props) => {
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email can not be blank!")
        .email("Email is invalid!"),
      password: yup.string().required("Password can not be blank!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Layout>
        <Sider
          style={{
            height: window.innerHeight,
            backgroundImage: "url(https://picsum.photos/2000)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          width={window.innerWidth / 2}
        ></Sider>
        <Content>
          <form
            onSubmit={form.handleSubmit}
            className="container d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column", paddingTop: "200px" }}
          >
            <h3 className="underline">Login</h3>
            <div className="form-group">
              <p>User email</p>
              <Input
                name="email"
                size="large"
                prefix={<UserOutlined />}
                placeholder="email"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.errors.email && (
                <p className="text-danger">{form.errors.email}</p>
              )}
            </div>
            <div className="form-group">
              <p>Password</p>
              <Input
                name="password"
                size="large"
                prefix={<LockOutlined />}
                placeholder="password"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                type="password"
              />
               {form.errors.password && (
              <p className="text-danger">{form.errors.password}</p>
            )}
            </div>
           
            <div className="form-group">
              <Button
                htmlType="submit"
                size="large"
                className="mt-5"
                style={{ backgroundColor: "rgb(102,117,223" }}
              >
                Login
              </Button>
            </div>
            <div className="social mt-3 d-flex">
              <Button
                shape="circle"
                className="font-weight-bold"
                style={{ backgroundColor: "rgb(59,89,152", color: "black" }}
                icon={<FacebookOutlined />}
                size="large"
              ></Button>
              <Button
                type="primary"
                className="ms-3 font-weight-bold bg-secondary"
                shape="circle"
                icon={<TwitterOutlined />}
                size="large"
              ></Button>
            </div>
          </form>
        </Content>
      </Layout>
    </>
  );
};

export default Login;
