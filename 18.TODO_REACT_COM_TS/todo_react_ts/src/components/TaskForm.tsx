import { useState, type ChangeEvent, type FormEvent, useEffect } from "react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

// Interface
import type { ITask } from "../interfaces/ITask";

type Props = {
  btnText: string;
};

const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaksHandler = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    e.preventDefault()

    if(e.target.name === "title"){
      setTitle(e.target.value)
    }else{
      setDifficulty(parseInt(e.target.value))
    }
    console.log(`${title} and ${difficulty}`)

  }

  return (
    <form onSubmit={addTaksHandler} className="space-y-4 w-135 mx-auto mb-10">
      <div className="grid gap-2">
        <Label htmlFor="title">Título:</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
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
        />
      </div>

      <Button type="submit" className="w-full" variant="default">
        {btnText}
      </Button>
    </form>
  );
};

export default TaskForm;
