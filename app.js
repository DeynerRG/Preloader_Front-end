const preloader = document.querySelector(".preloader");

document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
        hidePreloader(preloader);
    },5000); // this setTimeout is just to see the animation, it can be removed.
})



function hidePreloader(preloader){
    preloader.style.opacity = "0%";
    setTimeout(()=>{
        preloader.style.display = "none"
    },4000);
}