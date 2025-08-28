import "./App.css";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const h2 = `text-3xl font-semibold`;

// Interface
import type { ITask } from "./interfaces/ITask";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] text-center p-8">
        <div>
          <h2 className={h2}>O que você vai fazer?</h2>
         <TaskForm btnText="Criar Tarefa"/>
        </div>
        <div>
          <h2 className={h2}>Suas tarefas</h2>
            <TaskList/>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
