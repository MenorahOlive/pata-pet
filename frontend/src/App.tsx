import { Routes, Route } from "react-router";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </>
  );
};

export default App;
