/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useForm } from "react-hook-form";

const LoginPage: React.FC<any> = (active) => {
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = (data: any) => {
    console.log("data :", data);
  }
  return (
    <div className={active.active ? "overlay openform" : "overlay invisible hidden"}>
      <div className="login-wrapper" id="login-content">
        <div className="login-content">
          <p style={{color: "#000", display: "block"}} className="close absolute top-0 right-0" onClick={() => active.handleModal(false)}>x</p>
          <h3>Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <label htmlFor="username-2">
                Username:
                <input type="text" name="username" id="username-2" placeholder="Your Username ..."
                  required
                  ref={register({ 
                    pattern: /^.{5,20}$/,
                  })} 
                />
                {errors.username && errors.username.type === "pattern" &&  (
                  <p className="perror">Username phải có từ 5 đến 20 kí tự</p>
                )}
              </label>
            </div>
            <div className="row">
              <label htmlFor="password-2">
                Password:
                <input type="password" name="password" id="password-2" placeholder="*****" 
                  required 
                  ref={register({ 
                    pattern: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                  })}
                />
                {errors.password && errors.password.type === "pattern" && (
                  <p className="perror">Password phải tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệ</p>
                )}
              </label>
            </div>
            <div className="row">
              <div className="remember">
                <div>
                  <input type="checkbox" name="remember" defaultValue="Remember me" /><span>Remember me</span>
                </div>
                <a href="#">Forget password ?</a>
              </div>
            </div>
            <div className="row">
              <button type="submit" onClick={onSubmit}>Login</button>
            </div>
          </form>
          <div className="row">
            <p>Or via social</p>
            <div className="social-btn-2">
              <a className="fb" href="#"><i className="ion-social-facebook" />Facebook</a>
              <a className="tw" href="#"><i className="ion-social-twitter" />twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;