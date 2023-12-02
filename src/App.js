import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Transaction from "./components/Transaction.jsx";
import DataPage from "./components/DataPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/data" element={<DataPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
