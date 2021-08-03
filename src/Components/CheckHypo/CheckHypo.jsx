import "./hypo.css";
import { useState } from "react";
function CheckHypo() {
  var [base, setBase] = useState("");
  var [height, setHeight] = useState("");
  var [hypo, setHypo] = useState("");

  function handleChange(event) {
    var type = event.target.name;
    if (type === "base") setBase(event.target.value);
    else if (type === "height") setHeight(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setHypo(Math.sqrt(Math.pow(Number(base), 2) + Math.pow(Number(height), 2)));
  }

  return (
    <div>
      <h2 className="subHeading">
        Enter the length of sides of a right angled triangle
      </h2>
      <div className="triangleImg"></div>
      <form className="form" action="" onSubmit={handleClick}>
        <div className="formInput">
          <label htmlFor="number">Base(b) = </label>
          <input
            type="number"
            value={base}
            onChange={handleChange}
            name="base"
            min="0.0001"
            step="0.00001"
            required
          />

          <label htmlFor="number">Height(a) = </label>
          <input
            type="number"
            value={height}
            onChange={handleChange}
            name="height"
            min="0.0001"
            step="0.00001"
            required
          />
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
      <div className="output">
        {hypo === 0 ? (
          <h2>The length of hypotenuse will appear here</h2>
        ) : (
          <h2>Hypotenuse(h) = {Math.round(hypo * 100000) / 100000}</h2>
        )}
      </div>
    </div>
  );
}

export default CheckHypo;
