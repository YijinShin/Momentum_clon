const TODO_KEY = "todos";

const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input"); //전체 HTML문서에서가 아니라 todoForm 내에서 찾기 const todoInput = document.querySelector("#todo-form input"); // 이거랑 같은거임

let toDos = [];


function SayHello(item){
    console.log("sayheelo", item);
}

function SaveTodos(){
    localStorage.setItem(TODO_KEY,JSON.stringify(toDos));
}

function DeleteTodo(event){
    const li= event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //  filter()안에 함수를 따로 선언해서 넣어도 됨. 여기서는 한줄이니까 그냥 arrow func으로 할게
    SaveTodos(); // 특정 아이템을 제외한 새로운 array를 local storage에 저장 
    li.remove(); // 이건 html element를 지우는거지 localstorage의 데이터를 지우는 것이 아니다.
    

}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;    
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", DeleteTodo);
    
    li.appendChild(span); // li안에 span넣기
    li.appendChild(button); // li안에 button넣기
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value; //값은 받고
    todoInput.value = ""; // form은 지우기 
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }; 
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); // 이거는 새로운todo를 제출하고나서 다시 list 그려주는 것. 
    SaveTodos();
}

// 필터 함수는 특정 오브젝트를 새 arrat에 포함시키고싶으면 true를 반환해야한다. 


todoForm.addEventListener("submit", handleToDoSubmit);

const saveTodos = localStorage.getItem(TODO_KEY);
console.dir(saveTodos);
if(SaveTodos !== null){ // null일 숭도 있으니까 
    const parsedTodos = JSON.parse(saveTodos) // js가 알아듣는 array로 만들기
    console.dir(parsedTodos);
    toDos = parsedTodos;
    // array의 각 item마다함수를 실행할 수 있도록함. 
    //parsedTodos.forEach(SayHello); 아래랑 같은거임 
    //parsedTodos.forEach((item)=>console.log("sayheelo", item)); // arrow function 따로 함수 선언안하고 가능 
    parsedTodos.forEach(paintToDo); // 이건 첨에 새로고침 하자마자 리스트에 있는ㄴ to do를 그린다. 
}

