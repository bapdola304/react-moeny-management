import React from "react";
import Button from "react-bootstrap/Button";
import TextFieldInput from "../../components/text_field_input";
// @ts-ignore
import { AvForm } from "availity-reactstrap-validation";
import "../login/style.scss";
import { Link } from "react-router-dom";

export default function SignUp() {
  function handleSubmit(event: any, errors: any, values: any) {}

  return (
    <div className="login d-flex flex-column align-center sign-up">
      <div className="login__logo">
        <img src="/src/assets/icons/logo.png" alt="logo" width={320} />
      </div>
      <div className="login__form">
        <AvForm onSubmit={handleSubmit}>
          <TextFieldInput
            label="Tên người dùng"
            name="fullName"
            validate={{
              required: {
                value: true,
                errorMessage: "Vui lòng nhập Tài khoản",
              },
              pattern: {
                value: "^[A-Za-z0-9]+$",
                errorMessage: "Tài khoản không chứa ký tự đặc biệt",
              },
            }}
          />
          <TextFieldInput
            className="mt25"
            label="Tài khoản"
            name="username"
            validate={{
              required: {
                value: true,
                errorMessage: "Vui lòng nhập Tài khoản",
              },
              pattern: {
                value: "^[A-Za-z0-9]+$",
                errorMessage: "Tài khoản không chứa ký tự đặc biệt",
              },
            }}
          />
          <TextFieldInput
            className="mt25"
            label="Mật khẩu"
            name="password"
            type="password"
            validate={{
              required: {
                value: true,
                errorMessage: "Vui lòng nhập Mật khẩu",
              },
            }}
          />
          <TextFieldInput
            className="mt25"
            label="xác nhận mật khẩu"
            name="confirmPassword"
            type="password"
            validate={{
              required: {
                value: true,
                errorMessage: "Vui lòng nhập Mật khẩu",
              },
              match: {
                value: "password",
                errorMessage: "Xac nhận mật khẩu không khớp",
              },
            }}
          />
          <Button className="login__submit-button" type="submit">
            Đăng nhập
          </Button>
        </AvForm>
        <div className="login__have-account d-flex align-center justify-center mt20">
          <div>Đã có tài khoản?</div>
          <Link to={"/login"} className="fw600 fs18 ml10">
            Đăng nhập ngay
          </Link>
        </div>
      </div>
    </div>
  );
}
