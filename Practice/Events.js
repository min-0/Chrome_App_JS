//창 크기를 변경할 때 I have been resized 문구가 생김
// const title = document.querySelector("#title");

// function handleResize(){
//     console.log("I have been resized");

// }

// window.addEventListener("resize", handleResize);

// 창 크기를 변경할 때 log를 남겨줌
// const title = document.querySelector("#title");

// function handleResize(event) {
//     console.log(event);
// }

// window.addEventListener("resize", handleResize);

//타이틀을 클릭하면 타이틀 색이 red로 바뀜
const title = document.querySelector("#title");

function handClick() {
    title.style.color = "red";
}

title.addEventListener("click", handClick);
