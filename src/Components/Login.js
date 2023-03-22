import React, { useState, useEffect, useRef } from "react";
import { Button, Input, Form, Checkbox } from "antd";
import "../Styles/login.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    try {
      await axios
        .post("https://reqres.in/api/users", { username, password })
        .then((response) => {
          console.log(response.status, response.data);
        });

      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      {success ? (
        <>
          <h1 className="Success__header">You're logged in!</h1>
          <div className="blockBackHomeButton">
            <Link
              className="BackHomeButton"
              onClick={(e) => setSuccess(!e)}
              to="/"
            >
              Back Home
            </Link>
          </div>
        </>
      ) : (
        <section className="signInSection">
          <h1 className="section__header">Login</h1>
          <Form
            onFinish={handleSubmit}
            name="basic"
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                className="formInput"
                type="text"
                ref={inputRef}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                className="formInput"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <div className="section__buttonBlock">
                <Button
                  shape="round"
                  type="primary"
                  htmlType="submit"
                  className="section__buttonLogin"
                >
                  Log in
                </Button>
              </div>
              <Link className="section__registrationLink" to="/register">
                Register for an account
              </Link>
            </Form.Item>
          </Form>
        </section>
      )}
    </>
  );
};

export default Login;
