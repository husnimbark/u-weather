import ReactDOM from "react-dom/client";
import "./style/index.css";
import HomePage from "./pages/HomePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<HomePage />);
