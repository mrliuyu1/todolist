function todoLS(data) {
  data = JSON.stringify(data);
  localStorage.setItem('todoList',data);
}

export { todoLS };
