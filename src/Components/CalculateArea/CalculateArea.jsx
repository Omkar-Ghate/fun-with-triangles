import { useState } from "react";
import "./area.css";
import OptionA from "../CalculateArea/Options/OptionA/OptionA";
import OptionB from "../CalculateArea/Options/OptionB/OptionB";
import OptionC from "../CalculateArea/Options/OptionC/OptionC";

function CalculateArea() {
  var setOfOptions = {
    optionA: [{ component: <OptionA /> }],
    optionB: [{ component: <OptionB /> }],
    optionC: [{ component: <OptionC /> }]
  };

  var [subMenu, setSubMenu] = useState("optionA");

  function optionClickHandler(option) {
    setSubMenu(option);
  }

  return (
    <div>
      <h2 className="subHeading">
        Select the options as per the data you of a triangle
      </h2>
      <div className="optionsDiv">
        {Object.keys(setOfOptions).map((option) => (
          <button
            className="subMenuBtn"
            onClick={() => optionClickHandler(option)}
          >
            {option === "optionA"
              ? "Base & Height"
              : option === "optionB"
              ? "3 Sides"
              : "2 Sides & 1 Angle"}
          </button>
        ))}
      </div>
      <div>
        {setOfOptions[subMenu].map((option) => (
          <div>{option.component}</div>
        ))}
      </div>
    </div>
  );
}

export default CalculateArea;
