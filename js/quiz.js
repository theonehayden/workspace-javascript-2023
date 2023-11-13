// generate the numbers for the quiz
function randInt(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

var M  = randInt(200, 300);
var N = randInt(100, M);
var K = randInt(1, N);

console.log(M, N, K);



document.getElementById("s1").textContent = M.toString();
document.getElementById("s2").textContent = N.toString();
document.getElementById("s3").textContent = K.toString();





// Generate the correct answer:

var T = N + K;
var S = N - K;


document.querySelector('[value="4"]').nextSibling.nodeValue = M.toString() + "-" + N.toString() + "+" + K.toString(); // This is because there is no tag


// Action -- click and change style
function changeStyle(e) {
    e.preventDefault(); // This prevents the default action.
    // get the style of the element
    var classname = this.getAttribute("class");

    if(classname == "answer)"){
        this.setAttribute("class", "answer selected");
    }
    else{
        this.setAttribute("class", "answer");
    }
    // format like[{},{}]
    this.animate([{transform:'rotate(0deg)'},{transform:'rotate(180deg)'}],{duration:3000,fill:"forwards"});
    //change the style of this element
    //this.setAttribute("class", "answer selected");
}

for (var i=0; i<4; i++) {
    document.getElementsByClassName("answer")[i].addEventListener("click",changeStyle, false);
   
}

// submit actions are optional

