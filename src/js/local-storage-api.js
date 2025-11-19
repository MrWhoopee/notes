export function loadLS() {
  const data = JSON.parse(localStorage.getItem("tasks")) ?? [];

  return data;
}

export function saveLS(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
