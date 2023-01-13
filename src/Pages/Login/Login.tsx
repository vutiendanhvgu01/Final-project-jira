import React from "react";
import { Layout } from "antd";
import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Input from "antd/es/input/Input";
import { Button } from "antd";
// import { history } from "../..";
import { useFormik } from "formik";
import * as yup from "yup";
const { Sider, Content } = Layout;
type Props = {};

const Login = (props: Props) => {
  // const handleLogin = () => {
  //   history.push("/home");
  // };
  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email cannot be blank!")
        .email("Email is invalid!"),
      password: yup.string().required("Password cannot be blank!"),
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
            <h3>Login</h3>
            <div className="form-group">
              <p>User name</p>
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
                // onClick={() => {
                //   handleLogin();
                // }}
              >
                Login
              </Button>
            </div>
            <div className="socail mt-3 d-flex">
              <Button
                shape="circle"
                className="font-weight-bold"
                style={{ backgroundColor: "rgb(59,89,152", color: "black" }}
                icon={<FacebookOutlined />}
                size="large"
              ></Button>
              <Button
                type="primary"
                className="ms-3 font-weight-bold"
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
