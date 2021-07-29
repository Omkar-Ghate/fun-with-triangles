import "./hypo.css";
import { useState } from "react";
function CheckHypo() {
  var [base, setBase] = useState(0);
  var [height, setHeight] = useState(0);
  var [hypo, setHypo] = useState(0);

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
      <h2>Enter the length of sides of a right angled triangle</h2>
      <div className="triangleImg"></div>
      <form className="form" action="" onSubmit={handleClick}>
        <div className="formInput">
          <label htmlFor="number">Base</label>
          <input
            type="number"
            value={base}
            onChange={handleChange}
            name="base"
            min="0.0001"
            step="0.00001"
            required
          />

          <label htmlFor="number">Height</label>
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
          <h2>The lenght of hypotenuse will be appear here</h2>
        ) : (
          <h2>Hypotenuse = {Math.round(hypo * 100000) / 100000}</h2>
        )}
      </div>
    </div>
  );
}

export default CheckHypo;
