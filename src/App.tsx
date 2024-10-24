import "./App.css";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="bg-[#a7a7a7]">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
