function openTab(tabId, element) {
    var contentEls = document.getElementsByClassName("tab-content");
    for (var i = 0; i < contentEls.length; i++) {
        contentEls[i].style.display = "none";
    }

    var tabLinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    document.getElementById(tabId).style.display = "block";
    element.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultTab").click();
});
