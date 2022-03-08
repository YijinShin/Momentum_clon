function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in ",lat, lng);
    console.log(position);
}

function onGeoError(){
    alert("Can't find you.");
}

const pos = navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); // 1. 잘 되었을때의 함수, 2. 에러났을 때의 함수 