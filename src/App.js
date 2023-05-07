import React from "react";
import { Route, Routes } from "react-router-dom";
import Cheque from "./Cheque";
import "./App.css";
import PaymentForm from "./PaymentForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaymentForm />} />
        <Route path="/cheque" element={<Cheque />} />
      </Routes>
    </div>
  );
}

export default App;
