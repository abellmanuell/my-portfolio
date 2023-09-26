import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MyPortfolio from "./app/MyPortfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
