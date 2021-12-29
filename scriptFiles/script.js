function loadPage(){
    window.scrollTo(0,0); 

    homeBtn.classList.add("is-active");
    contactBtn.classList.remove("is-active");
    aboutBtn.classList.remove("is-active");
    techBtn.classList.remove("is-active");
}


var homeBtn = document.getElementById('homeBtn');
var about = document.getElementById('about');
var aboutBtn = document.getElementById('aboutBtn');

var contact = document.getElementById('contact');
var contactBtn = document.getElementById('contactBtn');

var tech = document.getElementById('tech');
var techBtn = document.getElementById('techBtn');

function getHome(){
    scrollTo(0,0);
    if(!homeBtn.classList.contains("is-active")){
        homeBtn.classList.add("is-active");
        contactBtn.classList.remove("is-active");
        aboutBtn.classList.remove("is-active");
        techBtn.classList.remove("is-active");
    }
}

function aboutClick() {   
    about.scrollIntoView();
    if(!aboutBtn.classList.contains("is-active")){
        aboutBtn.classList.add("is-active");
        contactBtn.classList.remove("is-active");
        homeBtn.classList.remove("is-active");
        techBtn.classList.remove("is-active");
    }
}

function contactClick() {
    contact.scrollIntoView();
    if(!contactBtn.classList.contains("is-active")){
        contactBtn.classList.add("is-active");
        aboutBtn.classList.remove("is-active");
        homeBtn.classList.remove("is-active");
        techBtn.classList.remove("is-active");
    }
}

function techClick() {
    tech.scrollIntoView();
    if(!techBtn.classList.contains("is-active")){
        techBtn.classList.add("is-active");
        aboutBtn.classList.remove("is-active");
        homeBtn.classList.remove("is-active");
        contactBtn.classList.remove("is-active");
    }
}


//TODO
    //Switching tabs also depends on position of scroll



