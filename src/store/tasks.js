import { create } from "zustand";

function getRandomDateFormatted() {
  const randomDateFormatted = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
  })
    .format(new Date(2024, 0, 1 + Math.floor(Math.random() * 365)))
    .split(" ")
    .reverse()
    .join(" ");
  console.log(
    "🚀 ~ getRandomDateFormatted ~ randomDateFormatted:",
    randomDateFormatted
  );
  return randomDateFormatted;
}

const useTasksStore = create((set) => ({
  tasks: [],
  setTasks: (newTasks) =>
    set({
      tasks: newTasks.map((task) => ({
        ...task,
        status: "DEVELOPMENT",
        date: getRandomDateFormatted(),
      })),
    }),
  resetTasks: () => set({ tasks: [] }),
  changeTaskStatus: (taskId, newStatus) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      ),
    })),
  moveTaskUp: (taskId) =>
    set((state) => {
      const index = state.tasks.findIndex((task) => task.id === taskId);
      if (index > 0) {
        const tasks = [...state.tasks];
        const taskToMove = tasks[index];
        tasks[index] = tasks[index - 1];
        tasks[index - 1] = taskToMove;
        return { tasks };
      }
      return { tasks: state.tasks };
    }),
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
  addTasks: (newTasks) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        ...newTasks.map((task) => ({
          ...task,
          status: "DEVELOPMENT",
          date: getRandomDateFormatted(),
        })),
      ],
    })),
}));

export default useTasksStore;
