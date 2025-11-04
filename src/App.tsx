import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "../src/pages/Home";
import WhoWeAre from "../src/pages/WhoWeAre";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import EngineeringAndDevelopment from "./pages/ServicesPages/SoftwareEngineeringPage";
import LLMAndAISolutions from "./pages/ServicesPages/LLMAndAISolutions";
import DesignAndExperience from "./pages/ServicesPages/DesignAndExperience";
import Contact from "./pages/ConatctUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route
            path="/services/engineering-and-development"
            element={<EngineeringAndDevelopment />}
          />
          <Route
            path="/services/llm-and-ai-solutions"
            element={<LLMAndAISolutions />}
          />
          <Route
            path="/services/design-and-experience"
            element={<DesignAndExperience />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
