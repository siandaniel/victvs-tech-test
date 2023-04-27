import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ExamList from "./components/ExamList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ExamList />
      <Footer />
    </div>
  );
}

export default App;
