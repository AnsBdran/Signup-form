import { useNavigate } from "react-router-dom";
import Button from "../../comps/Button";
import Icons from "../../comps/Icons";
import Input from "../../comps/Input";
import Or from "../../comps/Or";
import Quote from "../../comps/Quote";

import "./LoggedIn.scss";

function Login() {
  const navigate = useNavigate();

  function handleSignIn() {
    navigate("/game");
  }

  return (
    <main className="logged-in__main">
      <section className="left">
        <img src="imgs/logo_blue.svg" alt="gamers logo" className="logo" />
        <Quote />
        <img
          src="imgs/controller.png"
          alt="playstation controller"
          className="controller"
        />
      </section>
      <section className="right">
        <div className="content">
          <div className="title">
            <h1>Join the game!</h1>
            <p>Go inside the best gamers social network!</p>
          </div>
          <div className="icons">
            <Icons />
          </div>
          <Or />
          <form onSubmit={handleSignIn}>
            <div className="field">
              <Input
                type="email"
                title="Your email"
                placeholder="write your email"
              />
            </div>
            <div className="field">
              <Input
                type="password"
                title="Enter your password"
                placeholder="write your password"
              />
            </div>
            <Button content="Login" />
          </form>
          <p>
            Don't have an account?{" "}
            <span className="register">
              <a href="#"> Register</a>
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
