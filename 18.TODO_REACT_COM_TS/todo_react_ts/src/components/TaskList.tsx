//Hook
import { useState } from "react";

//interfaces
import type { ITask } from "@/interfaces/ITask";

//Modal
import Modal from "./Modal"; // seu modal

//Components
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";

//Icons
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
};

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (task: ITask) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-[500px] mx-auto my-5">
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle className="text-xl text-left">{task.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Dificuldade: {task.difficulty}
              </p>
              <div className="flex flex-col gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleEdit(task)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>

                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(task.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>Não tem tarefas cadastradas!</p>
      )}

      {/* Modal */}
      {selectedTask && (
        <Modal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          task={selectedTask}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default TaskList;
