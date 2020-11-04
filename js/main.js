const onetime = document.getElementById("onetime");
const subscribe = document.getElementById("subscribe");
const tooltip = document.querySelector(".tooltip");
const options = document.querySelectorAll(".selectBotels__select option");
const testVideoBox = document.querySelector(".testimonials__videowrapp__box");
const testVideo = document.querySelectorAll(".testBoxWrapp__box");
const videoWrapp = document.querySelector(".testimonials__videowrapp");
const cookiePop = document.querySelector(".cookies");

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

$(function () {
  $("#selectBottels").change(function () {
    const $option = $(this).find("option:selected").hover();
    $option.css("background-color", "#e4e4d7");
  });
  $("#selectBottels").mouseenter(function () {
    $(".tooltip").hide();
  });
  $("#selectBottels").mouseleave(function () {
    $(".tooltip").show();
  });
});

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

const showVideoBlock = () => {
  for (let i = 0; i < testVideo.length; i++) {
    testVideo[i].addEventListener("click", (event) => {
      videoWrapp.classList.add("show__wrap");
      let vid = event.currentTarget;
      testVideoBox.insertAdjacentHTML("afterbegin", vid.outerHTML);
    });
  }
};
showVideoBlock();
const closeVideoBlock = () => {
  videoWrapp.classList.remove("show__wrap");
  document.querySelector('.testimonials__videowrapp__box div').remove();
};

const hideMessage = () => {
  cookiePop.classList.add("close__popup");
};

//Tabs switch

$(function () {
  $(".btn__wrapper").on("click", "button:not(.active)", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.container")
      .find("div.gallery")
      .removeClass("gallery--shown")
      .eq($(this).index())
      .addClass("gallery--shown");
  });
});

//Footer lang


function formatState (state) {
  if (!state.id) {
    return state.text;
  }
  var baseUrl = "/img/icons/lang";
  var $state = $(
    '<span><img src="' + baseUrl +   '.png" class="img-flag" /> ' + state.text + '</span>'
  );
  return $state;
};

$(function(){
  $('#lang').select2({
    templateResult: formatState,
   
  });
  $('b[role=presentation]').hide();
  $('.select2-selection select2-selection--single').css('background-color','none')
});