import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";// Your Navbar component
import Home from "./Component/Home/Home";
import Navbar from "./Component/Home/Navbar/Navbar";
import Footer from "./Component/Home/Footer/Footer";
import Accountant from "./Component/Accountant/Accountant";
import AreaCoordinator from "./Component/AreaCoordinator/AreaCoordinator";
import SubjectKnowledge from "./Component/Accountant/subjectKnowledge";
import GeneralKnowledge from "./Component/AreaCoordinator/AreaGk";
import AreaSubjectKnowledge from "./Component/AreaCoordinator/AreaSubjectKnowledge";
import ComputerScience from "./Component/Accountant/Computer";


const App = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accountant" element={<Accountant />} />
        <Route path="/areacoordinator" element={<AreaCoordinator />} />
        <Route path="/accountant/subject-knowledge" element={<SubjectKnowledge />} />
        <Route path="/gk" element={<GeneralKnowledge />} />
        <Route path="/area/subject-knowledge" element={<AreaSubjectKnowledge />} />
        <Route path="/computer-science" element={<ComputerScience />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
