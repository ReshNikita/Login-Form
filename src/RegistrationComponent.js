import React, { useState, useRef, useEffect } from "react";
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
import "./Registration.css";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const onFinish = (values) => {
  console.log(values);
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
  const [age, setAge] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="buttonBackHome">
        <Button type="primary" href="/">
          Back Home
        </Button>
      </div>
      <section className="sectionRegistration">
        <h1 className="registratioHeader">Sign in</h1>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          autoComplete="off"
        >
          <Form.Item
            name={["user", "name"]}
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
              className="formInput"
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
            name={["user", "email"]}
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
            <InputNumber value={age} onChange={(e) => setAge(e.target.value)} />
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
              onChange={(e) => setGender(e.target.value)}
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

          <div id="VPN">
            <Form.Item
              name="Do you use VPN?"
              label="Do you use VPN?"
              id="VPN__name"
            >
              <Radio.Group
                value={hasVPN}
                onChange={(e) => setHasVPN(e.target.value)}
              >
                <div id="VPN__radioButtons">
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </div>
              </Radio.Group>
            </Form.Item>
          </div>

          <Form.Item
            className="languagesCheckboxBlock"
            name="Languages"
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
  );
};

export default RegistrationComponent;
