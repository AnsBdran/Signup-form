import Quote from "../../comps/Quote";
function SignupImage() {
  return (
    <section className="sign-up__img">
      <img src="imgs/logo_white.svg" alt="gamers logo" className="logo" />
      <img src="imgs/square_of_dots.svg" alt="dots square" className="dots" />
      <Quote onDark={true} />
      <img src="imgs/corner.svg" alt="corner" className="corner" />
      <img src="imgs/two_circles.svg" alt="two circles" className="circles" />
    </section>
  );
}

export default SignupImage;
