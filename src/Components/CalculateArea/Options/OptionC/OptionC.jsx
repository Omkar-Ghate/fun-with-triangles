import { useState } from "react";
import "./C.css";
function OptionC() {
  var [firstSide, setFirstSide] = useState("");
  var [secondSide, setSecondSide] = useState("");
  var [angle, setAngle] = useState("");
  var [area, setArea] = useState("");
  function handleChange(event) {
    var item = event.target.name;
    if (item === "firstSide") setFirstSide(event.target.value);
    else if (item === "secondSide") setSecondSide(event.target.value);
    else if (item === "angle") setAngle(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    setArea(
      0.5 *
        Number(firstSide) *
        Number(secondSide) *
        Math.sin((Number(angle) * Math.PI) / 180)
    );
  }

  return (
    <div>
      <h2>Enter the length of 2 sides and included angle</h2>
      <div className="triangleImgC"></div>
      <form className="form" action="" onSubmit={handleClick}>
        <div className="formInput">
          <label htmlFor="number">h =</label>
          <input
            type="number"
            value={firstSide}
            onChange={handleChange}
            name="firstSide"
            min="1"
            max="180"
            required
          />
          <label htmlFor="number">b =</label>
          <input
            type="number"
            value={secondSide}
            onChange={handleChange}
            name="secondSide"
            min="1"
            max="180"
            required
          />
          <label htmlFor="number">α =</label>
          <input
            type="number"
            value={angle}
            onChange={handleChange}
            name="angle"
            min="1"
            max="180"
            required
          />
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>

      <div className="output">
        {area === 0 ? (
          <h2>The area of the triangle will appear here</h2>
        ) : (
          <h2>Area = {Math.round(area * 10000000000) / 10000000000}</h2>
        )}
      </div>
    </div>
  );
}

export default OptionC;
