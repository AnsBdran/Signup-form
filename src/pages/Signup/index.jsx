import Button from "../../comps/Button";
import Input from "../../comps/Input";
import Or from "../../comps/Or";
import Quote from "../../comps/Quote";
import Checkbox from "../../comps/Checkbox";
import "./Before.scss";

function SignUp({ handleDirect }) {
  document.title = "Sign-up form";

  return (
    <main className="sign-up">
      <section className="sign-up__img">
        <img src="imgs/logo_white.svg" alt="gamers logo" className="logo" />
        <img src="imgs/square_of_dots.svg" alt="dots square" className="dots" />
        <Quote onDark={true} />
        <img src="imgs/corner.svg" alt="corner" className="corner" />
        <img src="imgs/two_circles.svg" alt="two circles" className="circles" />
      </section>
      <section className="sign-up__form">
        <div className="content">
          <div className="back">&lt; Back</div>
          <div className="title">
            <h1>Register Individual Account!</h1>
            <p>
              For the purpose of gamers regulation, your details are required.
            </p>
          </div>
          <form>
            <div>
              <Input
                type="email"
                title="Email address*"
                placeholder="Enter email address"
              />
            </div>
            <div>
              <Input
                type="password"
                title="Create password*"
                placeholder="Password"
              />
            </div>
            <div>
              <Input
                type="password"
                title="Repeat password*"
                placeholder="Repeat password"
              />
            </div>
            <div>
              <Checkbox label="I agree to terms & conditions" />
            </div>
            <div>
              <Button content="Register Account" handleClick={handleDirect} />
              <Or />
              <Button content="Login" light={true} />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignUp;
