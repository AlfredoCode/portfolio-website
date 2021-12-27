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
