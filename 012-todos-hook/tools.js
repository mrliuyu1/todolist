export default function store(data){
    console.log(1);
    data = JSON.stringify(data)
    localStorage.setItem('todoList',data)
}