import { useRef } from "react";
import "./Form.css";

const Form = () => {
  const minRef = useRef();
  const maxRef = useRef();
  const submitHandler = () => {
    const minVal = minRef.current.value;
    const maxVal = maxRef.current.value;

    if (minVal <= -10000 || minVal >= 10000) {
    }
  };

  return (
    <>
      <div className="nav-pointer"></div>
      <div className="form">
        <div className="form-main">
          <h1 className="form-header">Input min and max number </h1>
          <p className="form-nb">
            minimum number from -10,000 to max-number of 10,000
          </p>
          <div className="form-detail">
            <div>
              <label htmlFor="min">Min:</label>
              <input
                type="number"
                id="min"
                placeholder="Type a number"
                ref={minRef}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 5))}
              />
            </div>
            <div>
              <label htmlFor="min">Max:</label>
              <input
                type="number"
                id="max"
                maxLength="5"
                placeholder="Type a number"
                ref={maxRef}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 5))}
              />
              <div className="error">dmddkdkdkkd</div>
            </div>
          </div>
          <button type="submit" className="submit-btn" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
