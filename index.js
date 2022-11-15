let toggler=document.getElementsByClassName("bars")[0]
let nav=document.querySelector("nav")

toggler && toggler.addEventListener("click",()=>{
  nav.classList.toggle("active")
});