const onetime = document.getElementById("onetime");
const subscribe = document.getElementById("subscribe");
const tooltip = document.querySelector(".tooltip");
const options = document.querySelectorAll(".selectBotels__select option");
const testVideoBox = document.querySelector(".testimonials__videowrapp__box");
const testVideo = document.querySelectorAll(".testBoxWrapp__box");
const videoWrapp = document.querySelector('.testimonials__videowrapp');
const cookiePop = document.querySelector('.cookies');


//Hero checkbox
if (subscribe.checked) {
  tooltip.style.display = "flex";
}

onetime.addEventListener("click", () => {
  onetime.checked = true;
  tooltip.style.display = "none";
  subscribe.checked = false;
});
subscribe.addEventListener("click", () => {
  onetime.checked = false;
  subscribe.checked = true;
  tooltip.style.display = "flex";
});
// Hero select
const setFocus = () => {
  tooltip.style.display = "none";
};
const removeFocus = () => {
  tooltip.style.display = "flex";
};
// Video popup
const showVideo = () => {
  document
    .querySelector(".popup")
    .setAttribute("style", "opacity:5;visibility:visible");
};

const hideVideo = () => {
  document
    .querySelector(".popup")
    .setAttribute("style", "opacity:0;visibility:hidden");
};

//Testimonials video
console.log(testVideo);
console.log(testVideoBox);
console.log(videoWrapp);

const showVideoBlock=()=>{
  for(let i=0;i<testVideo.length;i++){
    testVideo[i].addEventListener('click',(event)=>{
      videoWrapp.classList.add('show__wrap');
      let vid = event.currentTarget;
      testVideoBox.insertAdjacentHTML('afterbegin',vid.outerHTML);
    })
  }
}
showVideoBlock();


const closeVideoBlock=()=>{
  videoWrapp.classList.remove('show__wrap');
};

const hideMessage=()=>{
    cookiePop.classList.add('close__popup');
}