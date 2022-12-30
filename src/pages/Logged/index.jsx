import Button from "../../comps/Button";
import Icons from "../../comps/Icons";
import Input from "../../comps/Input";
import Or from "../../comps/Or";
import Quote from "../../comps/Quote";

import "./After.scss";

function Login() {
  return (
    <main>
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
          <form>
            <Input
              type="email"
              title="Your email"
              placeholder="write your email"
            />
            <Input
              type="password"
              title="Enter your password"
              placeholder="write your password"
            />
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
