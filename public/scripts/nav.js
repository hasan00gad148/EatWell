const navBtn = document.querySelector(".navBtn"); 
const nav = document.querySelector("nav ul"); 

navBtn.addEventListener("click",(e)=>{
    let expandedB = navBtn.getAttribute("data-expanded");
    let expandedU = nav.getAttribute("data-expanded");
    if (expandedB === "false"){
        navBtn.setAttribute("data-expanded","true");
        nav.setAttribute("data-expanded","true");
    }
    else{
        navBtn.setAttribute("data-expanded","false");
        nav.setAttribute("data-expanded","false");
    }
});









