import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route/>
            <Route path="/search" element={<h1>this is search</h1>}  />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
