import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import MyPortfolio from "./app/MyPortfolio";
import Portfolio from "@/app/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
