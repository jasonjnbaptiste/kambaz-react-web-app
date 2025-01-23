import { Navigate } from "react-router";
import Labs from "./Labs";
import { HashRouter, Route, Routes } from "react-router-dom";
import Kambaz from "./Kambaz";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />}/>
          <Route path="/Labs/*" element={<Labs />}/>
          <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
    </HashRouter>
);}