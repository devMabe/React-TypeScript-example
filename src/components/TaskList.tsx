import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (id:number) => void;
}

export default function TaskList({ tasks, deleteTask }: Props) {
  return (
    <>
      {tasks.map((task) => (
        <div className="col-md-3 p-2" key={task.id}>
          <TaskCard task={task} deleteTask={deleteTask}/>
        </div>
      ))}
    </>
  );
}
