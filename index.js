//get the text boxes
let t1 = document.getElementById('#1');
let t2 = document.getElementById('#2');
let t3 = document.getElementById('#3');
let t4 = document.getElementById('#4');
let t5 = document.getElementById('#5');

function check () {
    if (t1.value.toLowerCase().replace(/\s+/g, '') == "deadlines" && 
            t2.value.toLowerCase().replace(/\s+/g, '') == "mean" && 
            t3.value.toLowerCase().replace(/\s+/g, '') == "nothing" && 
            t4.value.toLowerCase().replace(/\s+/g, '') == "you" && 
            t5.value.toLowerCase().replace(/\s+/g, '') == "fools") {
        window.location.href = window.location.href.replace("/index.html", "") + "/vault.html";
    }
}

//setInterval(check, 1000);