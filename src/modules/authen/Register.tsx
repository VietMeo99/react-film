import React from 'react';

const Register: React.FC<any> = (active) => {
  return (
    <div className={active.active ? "overlay openform" : "overlay invisible hidden"}>
      <div className="login-wrapper" id="signup-content">
        <div className="login-content">
        <p style={{color: "#000", display: "block"}} className="close" onClick={() => active.handleModal(false)}>x</p>
          <h3>sign up</h3>
          <form method="post" action="signup.php">
            <div className="row">
              <label htmlFor="username-2">
                Username:
                <input type="text" name="username" id="username-2" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
              </label>
            </div>
            <div className="row">
              <label htmlFor="email-2">
                your email:
                <input type="password" name="email" id="email-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
              </label>
            </div>
            <div className="row">
              <label htmlFor="password-2">
                Password:
                <input type="password" name="password" id="password-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
              </label>
            </div>
            <div className="row">
              <label htmlFor="repassword-2">
                re-type Password:
                <input type="password" name="password" id="repassword-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
              </label>
            </div>
            <div className="row">
              <button type="submit">sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Register;