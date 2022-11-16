import { AiOutlinePlus } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../interfaces/Task";

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  addNewTask: (task: Task) => void;
}

const initialState = {
  title: "",
  description: "",
}

export default function TaskForm({ addNewTask }: Props) {
  const [tasks, setTasks] = useState(initialState);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTasks({ ...tasks, [name]: value });
  };
  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(tasks);
    setTasks(initialState);
  };

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Añadir tarea</h1>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Escribe un titulo"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          onChange={handleInputChange}
          value={tasks.title}
        />
        <textarea
          className="form-control mb-3 shadow-none border-0"
          name="description"
          rows={2}
          placeholder="Escribe una descripción"
          onChange={handleInputChange}
          value={tasks.description}
        ></textarea>
        <button className="btn btn-primary">
          Guardar <AiOutlinePlus />{" "}
        </button>
      </form>
    </div>
  );
}
