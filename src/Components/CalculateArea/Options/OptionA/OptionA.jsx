import "./A.css";
import { useState } from "react";
function OptionA() {
  var [base, setBase] = useState(0);
  var [height, setHeight] = useState(0);
  var [area, setArea] = useState(0);

  function handleChange(event) {
    var type = event.target.name;
    if (type === "base") setBase(event.target.value);
    else if (type === "height") setHeight(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setArea(0.5 * Number(base) * Number(height));
  }

  return (
    <div>
      <h2>Enter the length of base and height of right angled triangle</h2>
      <div className="triangleImgA"></div>
      <form className="form" action="" onSubmit={handleClick}>
        <div className="formInput">
          <label htmlFor="number">Base(b)=</label>
          <input
            type="number"
            value={base}
            onChange={handleChange}
            name="base"
            min="0.0001"
            step="0.00001"
            required
          />

          <label htmlFor="number">Height(h)=</label>
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
        {area === "0" ? (
          <h2>The area of the triangle will appear here</h2>
        ) : (
          <h2>Area = {Math.round(area * 10000000000) / 10000000000}</h2>
        )}
      </div>
    </div>
  );
}

export default OptionA;
