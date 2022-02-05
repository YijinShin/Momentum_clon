const h1 = document.querySelector("div.hello:first-child h1");  



function handleTitleClick(){
    //const clickedClass = "clicked";
    //if(h1.classList.contains(clickedClass)) 
    //    h1.classList.remove(clickedClass);
    //else h1.classList.add(clickedClass); // css에 선언해놓은 active class를 불러옴
    //위의 조건을 toggle로 줄일수있다. 
    h1.classList.toggle("clicked"); // 리스트에 있으면 제거하고, 없으면 추가함 
}

h1.addEventListener("click", handleTitleClick);
//위와 같은 이야기인데 이렇게도 쓸 수 있다. title.onclick = handleTitleClick;
//그래도 addEventListener을 써서 리스너를 붙이는게 나중에 remove도 가능해서 좋음 