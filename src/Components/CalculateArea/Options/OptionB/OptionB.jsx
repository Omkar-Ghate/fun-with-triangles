import "./B.css";
import { useState } from "react";
function OptionB() {
  var [firstSide, setFirstSide] = useState("");
  var [secondSide, setSecondSide] = useState("");
  var [thirdSide, setThirdSide] = useState("");
  var [area, setArea] = useState("");
  function handleChange(event) {
    var item = event.target.name;
    if (item === "firstSide") setFirstSide(event.target.value);
    else if (item === "secondSide") setSecondSide(event.target.value);
    else if (item === "thirdSide") setThirdSide(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    var s = (Number(firstSide) + Number(secondSide) + Number(thirdSide)) / 2;

    setArea(
      Math.sqrt(
        s *
          (s - Number(firstSide)) *
          Number(s - Number(secondSide)) *
          Number(s - Number(thirdSide))
      )
    );
  }

  return (
    <div>
      <h2>Enter the length of 3 sides</h2>
      <div className="triangleImgB"></div>
      <form className="form" action="" onSubmit={handleClick}>
        <div className="formInput">
          <label htmlFor="number">a=</label>
          <input
            type="number"
            value={firstSide}
            onChange={handleChange}
            name="firstSide"
            min="1"
            max="180"
            required
          />
          <label htmlFor="number">b=</label>
          <input
            type="number"
            value={secondSide}
            onChange={handleChange}
            name="secondSide"
            min="1"
            max="180"
            required
          />
          <label htmlFor="number">c=</label>
          <input
            type="number"
            value={thirdSide}
            onChange={handleChange}
            name="thirdSide"
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

export default OptionB;
