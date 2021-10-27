let slide_left = document.getElementById("slide_left"),
  slide_right = document.getElementById("slide_right"),
  body = document.body,
  idx = 0;

slide_left.addEventListener("click", moveRight);
slide_right.addEventListener("click", moveLeft);

function moveRight() {
  idx--;
  if (idx > 2) {
    idx = 0;
  } else if (idx < 0) {
    idx = 2;
  }
  if (idx === 0) {
    body.style.background =
      "#000 url(../img/bg/main-bg-1.jpg) no-repeat top right / cover";
  } else if (idx === 1) {
    body.style.background =
      "#000 url(../img/bg/main-bg-2.jpg) no-repeat center / cover";
  } else if (idx === 2) {
    body.style.background =
      "#000 url(../img/bg/main-bg-3.jpg) no-repeat center / cover";
}
  console.log(idx);
}

  

function moveLeft() {
  idx++;
  if (idx > 2) {
    idx = 0;
  } else if (idx < 0) {
    idx = 2;
  }
  if (idx === 0) {
    body.style.background =
      "#000 url(../img/bg/main-bg-1.jpg) no-repeat top right / cover";
  } else if (idx === 1) {
    body.style.background =
      "#000 url(../img/bg/main-bg-2.jpg) no-repeat center / cover";
  } else if (idx === 2) {
    body.style.background =
      "#000 url(../img/bg/main-bg-3.jpg) no-repeat bottom right / cover";
}
  console.log(idx);
}

let menu_header = document.getElementById('menu-header');
let menu_content = document.getElementById('menu-content');
let main = document.getElementById('main')

menu_header.addEventListener('click', active);

function active() {

  if(menu_content.classList.contains("active")){
    menu_content.classList.remove("active");
    menu_header.classList.remove("active");
    main.classList.remove('active');
  } else {
    menu_content.classList.add("active");
    menu_header.classList.add("active");
    main.classList.add('active');
  }

}