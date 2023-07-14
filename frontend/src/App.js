import ParchmentForm from "./components/ParchmentForm";
import Header from "./components/Header";
import bowl from "./assets/bowl_final.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="body">
          <ParchmentForm />
          <div id="">
            <img className="bowlAndWords" alt="Bowl" src={bowl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
