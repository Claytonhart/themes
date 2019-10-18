import React from "react";
import { useInput } from "../hooks/input-hook";

const Masthead = () => {
  const { value, valueHandler, clearInput } = useInput("");
  // const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
    clearInput();
  };

  return (
    <section className="masthead">
      <div className="masthead__container container">
        <h2 className="masthead__header">
          Build a landing page for your business or project and generate more
          leads!
        </h2>
        <form className="masthead-input" onSubmit={handleSubmit}>
          <input
            type="email"
            {...valueHandler}
            className="masthead-input__email"
            placeholder="Enter your email..."
          />
          <button className="btn masthead-input__button">Sign up!</button>
        </form>
      </div>
    </section>
  );
};

export default Masthead;
