import "./styles.css";
import { useState } from "react";

import tabsList from "./tabs";

export default function App() {
  var [option, setOption] = useState("anglesOfTriangle");

  function genreClickHandler(genre) {
    setOption(genre);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>Welcome to Fun with Triangles</h1>
        </div>

        <div className="displayTabsBtn">
          {Object.keys(tabsList).map((genre) => (
            <button
              className="tabsBtn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre === "anglesOfTriangle"
                ? "Angles of Triangle?"
                : genre === "calculateArea"
                ? "Calculate Area"
                : genre === "checkHypo"
                ? "Check Hypotenuse"
                : "Take a Quiz"}
            </button>
          ))}
        </div>

        <div>
          {tabsList[option].map((genre) => (
            <div>{genre.component}</div>
          ))}

          <footer>
            <div class="heading-footer">Get in touch with me</div>
            <ul>
              <li>
                <a href="https://github.com/Omkar-Ghate" target="blank">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/omkarghate/"
                  target="blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://omkarghate.netlify.app/" target="blank">
                  <i class="fas fa-briefcase"></i>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
}
