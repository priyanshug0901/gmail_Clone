import Content from "./Components/Content/Content";
import Navbar from "./Components/Navigation/Navbar";
import SideBar from "./Components/SideBar/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <hr style={{ borderColor: "#f1f3f4" }} />
        <div className="body">
          <SideBar />
          <Content />
        </div>
      </div>
    </Router>
  );
}

export default App;
