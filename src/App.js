import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Projects /> {/* Routes should be implemented here */}
      </Sidebar>
    </div>
  );
}

export default App;
