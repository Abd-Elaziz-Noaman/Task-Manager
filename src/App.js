import { useEffect } from "react";

import useTasksStore from "./store/tasks";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./pages/Projects/Projects";

const tasks = [
  {
    id: 1,
    description: "shoot 90 photos - MAF",
    items: 30,
    qty: 3,
    total: 90,
    status: "DEVELOPMENT",
    date: "",
  },
  {
    id: 2,
    description: "shoot 90 photos - MAF",
    items: 20,
    qty: 2,
    total: 40,
    status: "STAGING",
    date: "",
  },
  {
    id: 3,
    description: "shoot 90 photos - MAF",
    items: 20,
    qty: 3,
    total: 60,
    status: "PRODUCTION",
    date: "",
  },
];

function App() {
  const { setTasks } = useTasksStore();

  useEffect(() => {
    setTasks(tasks);
  }, []);

  return (
    <div className="App">
      <Sidebar>
        <Projects /> {/* Routes should be implemented here */}
      </Sidebar>
    </div>
  );
}

export default App;
