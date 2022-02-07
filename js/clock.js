const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 아래 Interval은 '1초 후에'함수를 실행하므로 처음 웹사이트가 새로고침 되자마자는clock 이 안보이고, 1초뒤에 보이기 시작한다. 그래서 일단 한번 함수를 호출해 주는것. 
setInterval(getClock, 1000); // 매초마다 