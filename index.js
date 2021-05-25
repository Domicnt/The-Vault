//get the text boxes
let t1 = document.getElementById('#1');
let t2 = document.getElementById('#2');
let t3 = document.getElementById('#3');
let t4 = document.getElementById('#4');
let t5 = document.getElementById('#5');

function check () {
    if (t1.value.toLowerCase() == "deadlines" && 
            t1.value.toLowerCase() == "mean" && 
            t1.value.toLowerCase() == "nothing" && 
            t1.value.toLowerCase() == "you" && 
            t1.value.toLowerCase() == "fools") {
        window.location.href = "http://www.w3schools.com";
    } else {
        console.log(t1.value);
    }
}