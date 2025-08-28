import { useState } from "react";
import "./App.css";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const h2 = `text-3xl font-semibold`;

// Interface
import type { ITask } from "./interfaces/ITask";
import Modal from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskUpdate, setTaskUpdate] = useState<ITask | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const openEditModal = (task: ITask) => {
    setTaskUpdate(task);
    setIsModalOpen(true);
  };

  return (
    <>
      {taskUpdate && (
        <Modal
          task={taskUpdate}
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          handleEdit={(updatedTask) => {
            setTaskList(
              taskList.map((t) => (t.id === updatedTask.id ? updatedTask : t))
            );
            setTaskUpdate(null); // fecha o modal
          }}
        />
      )}

      <Header />
      <main className="min-h-[70vh] text-center p-8 w-full">
        <div>
          <h2 className={h2}>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2 className={h2}>Suas tarefas</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={openEditModal} // <- aqui
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
