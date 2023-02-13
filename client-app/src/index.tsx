import { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import App from "./app/layout/App";
import "./app/layout/styles.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const onRender = (
  id: any,
  phase: any,
  actualDuration: any,
  baseDuration: any,
  startTime: any,
  commitTime: any,
) => {
  // Aggregate or log render timings...
  //console.log(id, phase, actualDuration, baseDuration, startTime, commitTime);
};

root.render(
  <Profiler
    id='App'
    onRender={onRender}
  >
    <App />
  </Profiler>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
