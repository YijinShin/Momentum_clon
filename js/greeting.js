const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("h1#greeting"); //id니까 #으로 검색


// 최대한 같은 string을 여러번 쓰지 않도록 
// string만 포함된 변수인 경우 이름을 대문자로 짓는다. 
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username){
    // greeting.innerText = "Hello "+ username; //h1에 text넣어주기 
    greeting.classList.remove(HIDDEN_CLASSNAME);//윗줄을 이렇게 쓸 수 있음. 이게 더 직관적이고 편할 수 있다.   ('' 이게 아니라 ``이거다!! option누르고 ~ 누르면 됨)
    greeting.innerText = `Hello ${username}`; 
}

function onLoginSubmit(tomato){  //함수가 하나의 argument를 받도록하고, 그걸 js에 넘겨주고잇다. 
    tomato.preventDefault(); // submit해도 페이지 새로고침 안되도록함.
    loginForm.classList.add(HIDDEN_CLASSNAME); // 유저이름을 입력받으면 폼을 없앰
    const username = loginInput.value; // 입력받은 유저이름 저장 
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
if(saveUsername === null){
    //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit); // 엔터를 누르거나, 버튼을 누르면 발생 
}
else{
    // show greeting
    paintGreetings(saveUsername);
}