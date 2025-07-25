import { useReducer, useState } from "react";

const HookUseReducer = () => {
  //1 - començando com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });
  //2 - avançando no useReducer
  const initialTask = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTasksText("");

        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTasksText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTask);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id: id });
  };
  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar número!</button>
      <h3>Tarefas: </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTasksText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}

      <hr />
    </div>
  );
};

export default HookUseReducer;
