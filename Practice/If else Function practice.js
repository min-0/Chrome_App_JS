const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#f6e58d";

function handClick() {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    }
    else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handClick); // 이벤트 종류 : 클릭, 크기조절, 드래그, 더블 클릭, 마우스엔터 등등
}
init();

function handOffline() {
    console.log("Bye bye");
}
function handOnline() {
    console.log("welcome back");
}

window.addEventListener("offline", handClick);
window.addEventListener("online", handOnline);
