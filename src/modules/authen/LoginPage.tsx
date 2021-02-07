/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const LoginPage: React.FC<any> = (active) => {
  return (
    <div className={active.active ? "overlay openform" : "overlay invisible hidden"}>
      <div className="login-wrapper" id="login-content">
        <div className="login-content">
          <p style={{color: "#000", display: "block"}} className="close" onClick={() => active.handleModal(false)}>x</p>
          <h3>Login</h3>
          <form method="post" action="login.php">
            <div className="row">
              <label htmlFor="username">
                Username:
                <input type="text" name="username" id="username" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required autoComplete="off" style={{ backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%', cursor: 'auto' }} />
              </label>
            </div>
            <div className="row">
              <label htmlFor="password">
                Password:
                <input type="password" name="password" id="password" placeholder="******" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required autoComplete="off" style={{ backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%' }} />
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
              <button type="submit">Login</button>
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