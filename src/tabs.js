import AnglesOfTriangle from "./Components/AnglesOfTriangle/AnglesOfTriangle";
import CalculateArea from "./Components/CalculateArea/CalculateArea";
import TriangleQuiz from "./Components/TriangleQuiz/TriangleQuiz";
import CheckHypo from "./Components/CheckHypo/CheckHypo";

export default {
  anglesOfTriangle: [{ component: <AnglesOfTriangle /> }],
  calculateArea: [{ component: <CalculateArea /> }],
  quiz: [{ component: <TriangleQuiz /> }],
  checkHypo: [{ component: <CheckHypo /> }]
};
