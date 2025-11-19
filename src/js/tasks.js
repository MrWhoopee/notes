import { tasks } from "../main";

export function createTask(event, tasksList) {
  event.preventDefault();
  const form = event.target;
  const formData = Object.fromEntries(new FormData(form));
  //   tasks.push(formData);
  tasksList.push(formData);
}
