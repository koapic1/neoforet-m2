const mainVisualSlider = new Swiper("#mainVisual", {
    autoplay: true,
    speed: 1000,
    effect: "fade",
    loop: true,
    pagination: {
        el: "#mainVisual .pagination",
        type: "bullets",
        clickable: true,
    },
});

const productSlider = new Swiper("#product .list", {
    speed: 600,
    slidesPerView: 3, //화면에 보여지는 갯수
    slidesPerGroup: 3, //묶음
    navigation: {
        prevEl: "#product .prev",
        nextEl: "#product .next",
    },
});

const btnAll = document.querySelector("#header .all");
const gnb = document.querySelector("#gnb");
const btnClose = document.querySelector("#gnb .close");
console.log(btnClose);
btnAll.addEventListener("click", function () {
    gnb.classList.add("on");
});
btnClose.addEventListener("click", () => {
    console.log("close");
    gnb.classList.remove("on");
});
// const btnAll = document.querySelector("#header .all");
// const gnb = document.querySelector("#gnb");
// console.log(btnAll);
// btnAll.addEventListener("click", function () {
//     gnb.classList.toggle("on");
//     btnAll.classList.toggle("on");
// });

//f(x,y) = x+y*3; f(3,5) = 18
