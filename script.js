var pick1 = document.getElementsByTagName("input")[0];
var pick2 = document.getElementsByTagName("input")[1];
var css = document.querySelector("h3");
var body = document.getElementById("gra");
var random = document.getElementsByTagName("button")[0];



function colorpick(){
    body.style.background  = 
        "linear-gradient(to right," 
        + pick1.value 
        + "," 
        + pick2.value 
        + ")"
        css.textContent = body.style.background+";";
}

function randomcolor(){
    body.style.background =
    "linear-gradient(to right,"
    + "#"+((1<<24)*Math.random()|0).toString(16)
    + ","
    + "#"+((1<<24)*Math.random()|0).toString(16)
    + ")"
    css.textContent = body.style.background+";";
}

random.addEventListener("click",randomcolor);
pick1.addEventListener("input",colorpick);
pick2.addEventListener("input",colorpick);


