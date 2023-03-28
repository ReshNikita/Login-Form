import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Checkbox,
  Radio,
  Col,
} from "antd";

import "../Registration.css";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const RegistrationComponent = () => {
  const genderOptions = [
    { value: "", text: "--Choose an option--" },
    { value: "female", text: "female" },
    { value: "male", text: "male" },
    { value: "other", text: "other" },
  ];

  const [username, setUserName] = useState("");
  const [nickname, setNickname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("");
  const [hasVPN, setHasVPN] = useState(false);
  const [gender, setGender] = useState(genderOptions[0].value);
  const [age, setAge] = useState("");
  const [success, setSuccess] = useState(false);

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    try {
      const { status, data } = await axios.post(process.env.REACT_APP_URL, {
        username,
        password,
        nickname,
        userEmail,
        language,
        hasVPN,
        gender,
        age,
      });

      console.log(status, data);

      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      {success ? (
        <>
          <h1 className="Success__header">Welcome!</h1>
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
        <>
          <div className="blockBackHomeButton">
            <Link className="BackHomeButton" to="/">
              Back Home
            </Link>
          </div>
          <section className="sectionRegistration">
            <h1 className="registratioHeader">Sign in</h1>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={(e) => handleSubmit(e)}
              onSubmit={(e) => e.preventDefault()}
              style={{
                maxWidth: 600,
              }}
              autoComplete="off"
              initialValues={{
                language,
                hasVPN,
                nickname,
                password,
                gender,
                user: { username, age, userEmail },
              }}
            >
              <Form.Item
                name={["user", "username"]}
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  ref={inputRef}
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="Nickname"
                name="nickname"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                  },
                ]}
              >
                <Input
                  className="RegistrationInput"
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Item>

              <Form.Item
                name={["user", "userEmail"]}
                label="Email"
                rules={[
                  {
                    type: "email",
                    required: true,
                  },
                ]}
              >
                <Input
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name={["user", "age"]}
                label="Age"
                rules={[
                  {
                    type: "number",
                    min: 0,
                    max: 120,
                  },
                ]}
              >
                <InputNumber value={age} onChange={(e) => setAge(e)} />
              </Form.Item>

              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  value={gender}
                  onChange={(e) => setGender(e)}
                  placeholder="Select a option and change input text above"
                  allowClear
                >
                  {genderOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.text}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item name="hasVPN" label="Do you use VPN">
                <Radio.Group
                  value={hasVPN}
                  onChange={(e) => setHasVPN(e.target.value)}
                >
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                className="languagesCheckboxBlock"
                name="language"
                label="Languages"
              >
                <Checkbox.Group value={language}>
                  <Col span={10}>
                    <Checkbox
                      onChange={(e) => setLanguage(e.target.value)}
                      className="languagesCheckboxItem"
                      value="English"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      English
                    </Checkbox>
                  </Col>

                  <Col span={10}>
                    <Checkbox
                      onChange={(e) => setLanguage(e.target.value)}
                      className="languagesCheckboxItem"
                      value="Русский"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      Русский
                    </Checkbox>
                  </Col>
                  <Col span={10}>
                    <Checkbox
                      onChange={(e) => setLanguage(e.target.value)}
                      className="languagesCheckboxItem"
                      value="日本語"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      日本語
                    </Checkbox>
                  </Col>
                </Checkbox.Group>
              </Form.Item>

              <div className="registrationButtonBlock">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="registrationSubmitButton"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </section>
        </>
      )}
    </>
  );
};

export default RegistrationComponent;
