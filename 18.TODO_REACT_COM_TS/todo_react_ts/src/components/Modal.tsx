import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ITask } from "@/interfaces/ITask";

import { useState } from "react";

type Props = {
  task: ITask;
  handleEdit(task: ITask): void;
  isOpen: boolean;
  onOpenChange(open: boolean): void;
};

const Modal = ({ task, handleEdit, isOpen, onOpenChange }: Props) => {
  const [title, setTitle] = useState(task.title);
  const [difficulty, setDifficulty] = useState(task.difficulty);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleEdit({ ...task, title, difficulty });
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Tarefa</DialogTitle>
          <DialogDescription>
            Altere os detalhes da sua tarefa e clique em salvar.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
            className="border p-2 rounded"
          />
          <input
            type="number"
            value={difficulty}
            onChange={(e) => setDifficulty(Number(e.target.value))}
            placeholder="Dificuldade"
            className="border p-2 rounded"
          />
          <Button type="submit">Salvar</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
