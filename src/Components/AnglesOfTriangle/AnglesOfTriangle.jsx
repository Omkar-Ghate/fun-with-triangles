import { useState } from "react";
import "./angleStyle.css";
function AnglesOfTriangle() {
  var [firstAngle, setFirstAngle] = useState("");
  var [secondAngle, setSecondAngle] = useState("");
  var [thirdAngle, setThirdAngle] = useState("");
  var [sum, setSum] = useState(0);
  function handleChange(event) {
    var item = event.target.name;
    if (item === "firstAngle") setFirstAngle(event.target.value);
    else if (item === "secondAngle") setSecondAngle(event.target.value);
    else if (item === "thirdAngle") setThirdAngle(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    setSum(Number(firstAngle) + Number(secondAngle) + Number(thirdAngle));
  }

  return (
    <div>
      <h2>
        Enter the angles in below input boxes and we will tell you <br />
        if those angles make a Triangle
      </h2>
      <form className="form" action="" onSubmit={handleClick}>
        <div className="formInput">
          <input
            type="number"
            value={firstAngle}
            onChange={handleChange}
            name="firstAngle"
            min="1"
            max="180"
            required
          />

          <input
            type="number"
            value={secondAngle}
            onChange={handleChange}
            name="secondAngle"
            min="1"
            max="180"
            required
          />

          <input
            type="number"
            value={thirdAngle}
            onChange={handleChange}
            name="thirdAngle"
            min="1"
            max="180"
            required
          />
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>

      {/* <h2>
        {firstAngle} {secondAngle} {thirdAngle}
      </h2>
      <br />
      <h3>{sum}</h3> */}
      <div className="output">
        {sum === 0 ? (
          <h2>Please enter all angles</h2>
        ) : sum === 180 ? (
          <h2>Yuhu! these angles can make a triangle</h2>
        ) : (
          <h2>Oops! these angles cannot make a triangle </h2>
        )}
      </div>
    </div>
  );
}

export default AnglesOfTriangle;