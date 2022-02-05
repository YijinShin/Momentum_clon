const h1 = document.querySelector(".hello h1"); 

console.dir(h1); // title의 내부를 볼 수 있다. 

function handleTitleClick(){
    console.log("title was clicked");
    h1.style.color = "red";
}
function handleTitleMouseenter(){
    h1.innerText = "mouse is here";
}
function handleMouseLeave(){
    h1.innerText = "mouse is leave";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copied!");
}
function handleWindowOffline(){
    alert("No wifi");
}
function handleWindowOnline(){
    alert("No wifi");
}

h1.addEventListener("click", handleTitleClick);
//위와 같은 이야기인데 이렇게도 쓸 수 있다. title.onclick = handleTitleClick;
//그래도 addEventListener을 써서 리스너를 붙이는게 나중에 remove도 가능해서 좋음 
h1.addEventListener("mouseenter", handleTitleMouseenter);
h1.addEventListener("mouseleave", handleMouseLeave);

//window를 resize 
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);