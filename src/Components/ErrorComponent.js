import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link className="BackHomeButton" to="/">
            Back Home
          </Link>
        }
      />
    </>
  );
};

export default ErrorComponent;
