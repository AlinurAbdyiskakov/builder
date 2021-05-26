
import classes from "./Auth.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { auth, start } from "../../store/actions/auth";
// import showPwdImg from '../../imges/show-password.svg';
// import hidePwdImg from "../../imges/hide-password.svg";
const Auth = () => {
  // const [pwd, setPwd] = useState('');
  // const [isRevealPwd, setIsRevealPwd] = useState(false);
  const dispatch = useDispatch();
  const { token, error, loading } = useSelector(state => state.auth);
  const [method, setMethod] = useState("signin");

  const submitCallback = (event) => {
    event.preventDefault();

    dispatch(start());

    const data = new FormData(event.target);

    dispatch(auth(method, data.get('email'), data.get('password')));
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <h4 style={{ color: "red" }}>{error}</h4>;
  }

  let redirectOutput = null;
  if (token) {
    redirectOutput = <Redirect to="/" />
  }

  return (
    <div className={classes.Auth}>
      <h1>Welcome to the My builder</h1>
      {errorOutput}
      <form onSubmit={submitCallback} className={classes.input}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        {/* <div className="pwd-container">
        <input
          name="pwd"
          placeholder="Enter Password"
          type={isRevealPwd ? "text" : "password"}
          value={pwd}
          onChange={e => setPwd(e.target.value)}
          required
        />
        <img 
          title={isRevealPwd ? "Hide password" : "Show password"}
          src={isRevealPwd ? hidePwdImg : showPwdImg}
          onClick={() => setIsRevealPwd(prevState => !prevState)}
       alt={"heloo"} />
      </div> */}

        <div className={classes.color}>
        <button onClick={() => setMethod("signin")} disabled={loading}>Зойти</button>
        <button onClick={() => setMethod("signup")} disabled={loading}>Регистрация</button>
      </div></form>
      {redirectOutput}
    </div>
  );
}
 
export default Auth;