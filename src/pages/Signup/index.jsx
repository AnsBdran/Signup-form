import "./Signup.scss";
import Form from "../../comps/Form";
import SignupImage from "../../comps/SignupImage";
// import { useNavigate } from "react-router-dom";

function SignUp({ handleDirect }) {
  document.title = "Sign-up form";
  // const navigate = useNavigate();
  return (
    <main className="sign-up">
      <SignupImage />
      <section className="sign-up__form">
        <div className="content">
          <div className="back">&lt; Back</div>
          <div className="title">
            <h1>Register Individual Account!</h1>
            <p>
              For the purpose of gamers regulation, your details are required.
            </p>
          </div>
          <Form />
        </div>
      </section>
    </main>
  );
}

export default SignUp;
