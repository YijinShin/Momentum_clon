const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(tomato){  //함수가 하나의 argument를 받도록하고, 그걸 js에 넘겨주고잇다. 
    tomato.preventDefault(); // submit해도 페이지 새로고침 안되도록함.
    console.log(loginInput.value);

    //const username = loginInput.value;
    //console.log(username);
}

loginForm.addEventListener("submit",onLoginSubmit); // 엔터를 누르거나, 버튼을 누르면 발생 

//onLoginSubmit(); // 이렇게 함수를 쓰면 