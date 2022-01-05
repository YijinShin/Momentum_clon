const age = parseInt(prompt("How old are you?"));
// age에 숫자가 아닌 다른것을 입력하면 parseInt 결과가 NaN이 나옴. 
if (isNaN(age)){ 
    console.log("Please write number");
    
}else if (age < 18 || ){
    console.log("You are too young.")
}
else{
    console.log("You can drink");
}


