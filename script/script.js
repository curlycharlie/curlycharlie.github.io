var pages = {
    "aboutMePage": "buttonAboutme",
    "experiencePage": "buttonExperience",
    "projectsPage": "buttonProjects",
    "contactPage": "buttonContact"
};
let currentPageId =  "aboutMePage";


//show the initial page and hide others
document.getElementById("aboutMePage").style.display = "block";
document.getElementById("experiencePage").style.display = "none";
document.getElementById("projectsPage").style.display = "none";
document.getElementById("contactPage").style.display = "none";

//add event listeners to buttons
document.getElementById("buttonAboutme").addEventListener("click", () => changePage("aboutMePage"));
document.getElementById("buttonExperience").addEventListener("click", () => changePage("experiencePage"));
document.getElementById("buttonProjects").addEventListener("click", () => changePage("projectsPage"));
document.getElementById("buttonContact").addEventListener("click", () => changePage("contactPage"));

function changePage(selectedPageId) {
    if(currentPageId === selectedPageId) {
        return; // No change if the same page is clicked
    }

    // Get Id Names wihout referencing to do animation before changing the current page
    let currentPageIdValue = currentPageId;
    let  selectedPageIdValue = selectedPageId;
    
    document.getElementById(currentPageIdValue).style.zIndex = "0"; // Set z-index to 0 to allow the new page to be on top
    document.getElementById(currentPageIdValue).classList.remove("animateSlideInCard");
    requestAnimationFrame(() => {
        document.getElementById(currentPageIdValue).classList.add("animateSlideOutCard");
    });

    document.getElementById(selectedPageIdValue).style.zIndex = "1";
    document.getElementById(selectedPageIdValue).classList.remove("animateSlideOutCard");
    document.getElementById(selectedPageIdValue).classList.add("animateSlideInCard");

    // The Dom will play animation by just appearing without needing for requestAnimationFrame
    document.getElementById(selectedPageIdValue).style.display = "block";

    // Hide the current page after the animation ends
    setTimeout(() => {
        // to fix the problem of clicking back to previous page before the animation ends 
        // that would cause the current page to dispear
        if(currentPageId === currentPageIdValue) return;
        
        document.getElementById(currentPageIdValue).style.display = "none";
    }, 1500);

    currentPageId = selectedPageId;
}