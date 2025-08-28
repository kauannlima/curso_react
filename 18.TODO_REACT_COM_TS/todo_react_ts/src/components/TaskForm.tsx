import React, {
  useState,
  type ChangeEvent,
  type FormEvent,
  useEffect,
} from "react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// Interface
import type { ITask } from "../interfaces/ITask";

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null
};

const TaskForm = ({ btnText, taskList, setTaskList, task }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {

    if(task){
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  }, [task]);

  const addTaksHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTaks: ITask = { id, title, difficulty };

    setTaskList!([...taskList, newTaks]);

    setTitle("");
    setDifficulty(0);

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form
      onSubmit={addTaksHandler}
      className="space-y-4 max-w-[501px] mx-auto my-5"
    >
      <div className="grid gap-2">
        <Label htmlFor="title">Título:</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="difficulty">Dificuldade:</Label>
        <Input
          type="text"
          name="difficulty"
          id="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>

      <Button type="submit" className="w-full" variant="default">
        {btnText}
      </Button>
    </form>
  );
};

export default TaskForm;
