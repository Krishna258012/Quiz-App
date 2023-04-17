let score = localStorage.getItem("score");
let time = localStorage.getItem("time");
let unAttemped = localStorage.getItem("unAttemped");

 let Question = "10";

 let attempted = Question - unAttemped;
 let percentage = score/Question * 100;
let wrong = attempted - score;

document.getElementById("Wrong").innerHTML = wrong;
document.getElementById("timee").innerHTML = time;
document.getElementById("percentage").innerHTML = percentage;
document.getElementById("attempted").innerHTML = attempted;


const url = window.location.search;
const urlParams = new URLSearchParams(url);
const category = urlParams.get('category');
const nam = urlParams.get('name');

document.getElementById("namee").innerHTML = nam;

if (score == null){
    document.getElementById("score").innerHTML = "0";
}else{
    document.getElementById("score").innerHTML = score;
}


function repeat(){
    let score = localStorage.removeItem("score");
    let time = localStorage.removeItem("time");
    let unAttemped = localStorage.removeItem("unAttemped");
    window.location.href= "./quiz_page.html?name="+nam+"&category="+category+"";
}

function repeat1(){
    let score = localStorage.removeItem("score");
    let time = localStorage.removeItem("time");
    let unAttemped = localStorage.removeItem("unAttemped");
}


