function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsList = document.getElementById("skills-list");
    
    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
        skills.innerHTML = "Hide Skills";
    } else {
        skillsList.style.display = "none";
        skills.innerHTML = "Show Skills";
    }
}