var image = document.querySelector(".logo");

function logoClick(){
    window.location.href = "#";
}

//TODO
/*function tabSwitch(){
    this.classList.toggle('is-active'); 
}*/

document.getElementById("theme")
.addEventListener("click", function() {
  if (this.classList.contains("is-active")) {
    this.classList.remove("is-active");
    document.querySelector("body").style.backgroundColor = "#1a1a1a";

    var heading = document.querySelectorAll("h1");
    for(var i = 0;i < heading.length;i++){
        heading[i].style.color = "rgb(220, 220, 220)";
    }

    var paragraph = document.querySelectorAll("p");
    for(var i = 0;i < paragraph.length;i++){
        paragraph[i].style.color = "rgb(220, 220, 220)";
    }

  } 
  else{
    this.classList.add("is-active");
    document.querySelector("body").style.backgroundColor = "rgb(220, 220, 220)";

    var heading = document.querySelectorAll("h1");
    for(var i = 0;i < heading.length;i++){
        heading[i].style.color = "#1a1a1a";
    }

    var paragraph = document.querySelectorAll("p");
    for(var i = 0;i < paragraph.length;i++){
        paragraph[i].style.color = "#1a1a1a";
    }
    
    
  } 
});

