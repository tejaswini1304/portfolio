var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("I");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("I")
    }
    event.currentTarget.classList.add("I");
    document.getElementById(tabname).classList.add("I")
}