const title = document.querySelector(".hello h1"); 

console.dir(title);

function handleTitleClick(){
    console.log("title was clicked");
    title.style.color = "red";
}
function handleTitleMouseenter(){
    console.log("mouseenter");
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleTitleMouseenter);
