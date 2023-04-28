import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import ExamList from "./components/ExamList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/myexams" element={<ExamList />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
