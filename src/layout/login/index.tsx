import React from "react";
import "./style.scss";
import Button from "react-bootstrap/Button";
import TextFieldInput from "../../components/text_field_input";
// @ts-ignore
import { AvForm } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";
import Loading from "../../components/loading";
import { useGetUsers } from "../../hooks/useAuth";
import { isEmpty } from "../../utils/data_format";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { data, isLoading, isError }: any = useGetUsers();
  console.log(data);
  function handleSubmit(event: any, errors: any, values: any) {
    if (isEmpty(errors)) {
      const username = values.username;
      const password = values.password;
      const isInArray = data.some(
        (user: any) => user.username === username && user.password === password
      );
      if (isInArray) {
        const token = "token_check_yes";
        localStorage.setItem("token", token);
        navigate("/app");
      }
    }
  }

  return (
    <div className="login d-flex flex-column align-center">
      {isLoading && <Loading />}
      <div className="login__logo">
        <img src="/src/assets/icons/logo.png" alt="logo" width={320} />
      </div>
      <div className="login__form">
        <AvForm onSubmit={handleSubmit}>
          <TextFieldInput
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
          <Button className="login__submit-button" type="submit">
            Đăng nhập
          </Button>
        </AvForm>
        <div className="login__have-account d-flex align-center justify-center mt20">
          <div>Không có tài khoản?</div>
          <Link to={"/sign-up"} className="fw600 fs18 ml10">
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
}
