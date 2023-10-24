let menu = document.getElementById("menu");
let downarrow = document.getElementById("down");
let shorts = document.querySelector(".shorts-wrapper");
let sideBar = document.querySelector(".sidebar");
let pagecontent = document.querySelector(".page-content");
let down = document.querySelector(".down");

let videoContainer=document.querySelector(".video-container");
let shortsContainer=document.querySelector(".shorts-container");

$(".down");
let mainImg = document.querySelector(".main-img");
let selected = document.querySelector(".selected");

function deneme() {
  mainImg.style.padding = "0px";
}

menu.onclick = function() {
  sideBar.classList.toggle("small-sidebar");
  pagecontent.classList.toggle("resize");
};
downarrow.onclick = function() {
  down.classList.toggle("show");
};

$(".carousel-container").slick({
  infinite: true,
  slidesToShow: 15,
  slidesToScroll: 3,
  variableWidth: true,
  prevArrow: "<div><i class='fa-solid fa-chevron-left'></i></div>",
  nextArrow: "<div><i class='fa-solid fa-chevron-right'></i></div>",
});

const shortsElements = document.querySelectorAll(".shorts-item");
window.addEventListener("resize", function() {
  if (window.innerWidth < 1312) {
    sideBar.classList.add("small-sidebar");
    pagecontent.classList.add("resize");
    selected.classList.remove("selected");
  } else {
    sideBar.classList.remove("small-sidebar");
    pagecontent.classList.remove("resize");
    selected.classList.add("selected");
  }
});
window.addEventListener("resize",function(){
  if(this.window.innerWidth<600){
    videoContainer.classList.remove("p-5");
    videoContainer.classList.remove("py-4");
    videoContainer.classList.remove("container-fluid");
    shortsContainer.classList.remove("px-5");
    shortsContainer.classList.remove("py-2");
    shortsContainer.classList.remove("container-fluid");
 
    

  }
  else{
    videoContainer.classList.add("p-5");
    videoContainer.classList.add("py-4");
    videoContainer.classList.add("container-fluid");
    shortsContainer.classList.add("px-5");
    shortsContainer.classList.add("py-2");
    shortsContainer.classList.add("container-fluid");
  }
})
