import React from 'react';
import { useForm } from "react-hook-form";

const Register: React.FC<any> = (active) => {
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = (data: any) => {
    console.log("data :", data);
  }
  return (
    <div className={active.active ? "overlay openform" : "overlay invisible hidden"}>
      <div className="login-wrapper" id="signup-content">
        <div className="login-content">
        <p style={{color: "#000", display: "block"}} className="close absolute top-0 right-0" onClick={() => active.handleModal(false)}>x</p>
          <h3>sign up</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <label htmlFor="username-2">
                Username:
                <input type="text" name="username" id="username-2" placeholder="Your Username ..."
                  required
                  ref={register({ 
                    pattern: /^.{5,20}$/,
                  })} 
                  //  style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}}
                />
                {errors.username && errors.username.type === "pattern" &&  (
                  <p className="perror">Username phải có từ 5 đến 20 kí tự</p>
                )}
              </label>
            </div>
            <div className="row">
              <label htmlFor="email-2">
                Your email:
                <input type="text" name="email" id="email-2" placeholder="Your Email" 
                  required
                  ref={register({ 
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                  })} 
                />
                {errors.email && errors.email.type === "pattern" && (
                  <p className="perror">Email chưa đúng </p>
                )}
              </label>
            </div>
            <div className="row">
              <label htmlFor="password">
                Password:
                <input type="password" name="password" id="password-2" placeholder="required *****" 
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
              <label htmlFor="repassword-2">
                re-type Password:
                <input type="password" name="rePassword" id="password-2" placeholder="required *****" 
                  required 
                  ref={register({ 
                    pattern: /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                  })}
                />
                {errors.rePassword && errors.rePassword.type === "pattern" && (
                  <p className="perror">Password phải tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệ</p>
                )}
              </label>
            </div>
            <div className="row">
              <button type="submit" onClick={onSubmit}>sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Register;