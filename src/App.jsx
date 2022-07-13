import "./App.css";

import { Routes, Route } from "react-router-dom";

import Nav from "./components/navigation/Nav";

import Home from "./pages/home/Home";
import Members from "./pages/members/Members";
import Groups from "./pages/groups/Groups";
import Finance from "./pages/finance/Finance";
import School from "./pages/school/School";
import Setting from "./pages/school/School";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/school" element={<School />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
