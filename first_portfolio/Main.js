var distance = document.querySelector(".right-column").offsetHeight;
console.log(distance);
const navBar = document.querySelector(".nav-bar");
const navBtn = document.querySelector("#nav-btn");
navBtn.addEventListener("click", function (){
  navBar.classList.toggle("show-nav-bar");
  navBtn.innerHTML = '<i class="fas fa-bars"></i>';
if (navBar.classList.contains("show-nav-bar")) {
 navBtn.innerHTML = '<i class="fas fa-times"> </i>';
}else{
  navBtn.innerHTML = '<i class="fas fa-bars"></i>';
}
    });
    
   let styleSheet = document.getElementById("style-sheet");
  let dots = document.querySelectorAll(".theme-dot");
 dots.forEach(function(dot){
   dot.addEventListener("click", backgroundColor);
 });
 function backgroundColor(e){
 var dotColor = e.currentTarget.dataset.id;
 console.log(dotColor);
 if(dotColor==="Default"){
   styleSheet.href= "Default.css";
 }
 if(dotColor==="Green"){
   styleSheet.href= "Green.css";
 }
 if(dotColor==="grey"){
   styleSheet.href= "Grey.css";
 }
 if(dotColor==="dark"){
   styleSheet.href= "Dark.css";
 }
 if(dotColor==="purple"){
   styleSheet.href= "Purple.css";
 }
 };
 console.log(window);
 window.addEventListener("scroll",scroll);
 function scroll(){
   const scrollHeight = window.pageYOffset;
   console.log(scrollHeight);
   if(scrollHeight>distance){
     navBar.classList.remove("show-nav-bar");
     navBtn.innerHTML = '<i class="fas fa-bars"></i>';
     console.log("counting");
   }
 }
 