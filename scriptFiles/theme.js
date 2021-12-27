/**
 * Enables or disables lightMode
 * localStorage is used to remember which theme was set even after resfresh
 */

let lightMode = localStorage.getItem("lightMode");
const lightModeToggle = document.querySelector("#theme");

const enableLightMode = () => {
    document.body.classList.add("lightMode");
    document.getElementById("theme").classList.add("light");


    localStorage.setItem("lightMode", "enabled");
};

const disableLightMode = () => {
    document.body.classList.remove("lightMode");
    document.getElementById("theme").classList.remove("light");

    localStorage.setItem("lightMode", null);
};


if(lightMode === "enabled"){
    enableLightMode();
}

lightModeToggle.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightMode");
    if(lightMode !== "enabled"){
        enableLightMode();
    }
    else{
        disableLightMode();
    }

});






 /*if(darkMode == 'enabled'){
        if (this.classList.contains("light")) { //Changes Everything to Dark Mode
            this.classList.remove("light");
            document.querySelector("body").style.backgroundColor = "var(--bg)";
            var heading = document.querySelectorAll("h1");
            for(var i = 0;i < heading.length;i++){
                heading[i].style.color = "var(--text)";
            }

            var paragraph = document.querySelectorAll("p");
            for(var i = 0;i < paragraph.length;i++){
                paragraph[i].style.color = "var(--text)";
            }

            localStorage.setItem('darkMode', null);
        } 
        else{ //Changes Everything to Light Mode
            this.classList.add("light");
            document.querySelector("body").style.backgroundColor = "var(--text)";
            var heading = document.querySelectorAll("h1");
            for(var i = 0;i < heading.length;i++){
                heading[i].style.color = "var(--bg)";
            }
    
            var paragraph = document.querySelectorAll("p");
            for(var i = 0;i < paragraph.length;i++){
                paragraph[i].style.color = "var(--bg)";
            }
    
            
            localStorage.setItem('darkMode', 'enabled');
        } 


    }*/