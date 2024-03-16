import { create } from "zustand";

const useTasksStore = create((set) => ({
  tasks: [],
  setTasks: (newTasks) => set({ tasks: newTasks }),
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
}));

export default useTasksStore;
