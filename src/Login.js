import React, { useState, useEffect, useRef } from "react";
import { Button, Input, Form, Checkbox } from "antd";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios
        .post(
          "https://reqres.in/api/users",
          JSON.stringify({ username, password })
          //   {
          //     headers: { "Content-Type": "application/json" },
          //     withCredentials: true,
          //   }
        )
        .then((response) => {
          console.log(response.status, response.data);
        });

      setUserName("");
      setPassword("");
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
        <h1 className="Success__header">You're logged in!</h1>
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
                  //   onClick={handleSubmit}
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

//autoComplete="off" isn't supported in type='password'
// in input this value={user} - makes it a controlled component

/* 

const userRef = useRef(); // for focus
  const errRef = useRef(); // to focus an error especially for screen readers

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, password);

    setUser(""); //
    setPassword(""); //  these two lines for emptying the inputs after submitting
    setSuccess(true);
  };

{success ? (
        <section>
          <h1>You're logged in!</h1>
          <br />
          <p>
            <a href="#">Go to home</a>
          </p>
        </section>
      ) : (
        <section className="signInSection">
          <p
            ref={errRef}
            className={errorMessage ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errorMessage}
          </p>
          * aria-live="assertive" - it'll announce the screen reader immediately that we got a mistake *
          <h1 className="section__header">Sign in</h1>
          <Form.Item onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <Input
              allowClear
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <Input
              allowClear
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <Button onClick={handleSubmit} type="primary">
              Sign in
            </Button>
          </Form.Item>
          <p>
            Need an acount? <br />
            <span className="line">
              <a href="#">Sign up</a>
            </span>
          </p>
        </section>
      )} */
