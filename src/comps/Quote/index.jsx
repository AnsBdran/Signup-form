import "./Quote.scss";

function Quote({ onDark }) {
  let styleObj = {
    color: "#fff",
  };
  return (
    <figure className="quote" style={onDark ? styleObj : null}>
      <img
        src={onDark ? "imgs/quotes.svg" : "imgs/quotes-gray.svg"}
        alt="quotes icon"
      />
      <blockquote>
        <p>
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
        </p>
      </blockquote>
      <figcaption>Hideo Kojima</figcaption>
    </figure>
  );
}

export default Quote;
