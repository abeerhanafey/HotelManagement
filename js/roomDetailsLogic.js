const today = new Date();
const formattedToday = today.toISOString().split('T')[0];

const dateInput = document.getElementById('myDate1');
dateInput.min = formattedToday;

const dateInput2 = document.getElementById('myDate2');
dateInput2.min = formattedToday;

const inputs = document.querySelectorAll("input");
inputs.forEach((el) => {
    el.onfocus = function () {
        el.style.outline = "none";
        // console.log(el);
    }
})

const booking = document.querySelector(".booking");
window.onscroll = function () {
    // console.log(window.scrollY);
    if (window.scrollY >= 460&& window.scrollY <= 1460) {
        booking.setAttribute("style", "position: fixed; top: 140px;")
    } else if (window.scrollY >= 1460) {
        booking.removeAttribute("style");
        // console.log("abeer");
    }
}
// room number 
document.querySelector(".roomNum").onclick = function () {
    document.querySelector(".roomNum .timer").classList.toggle("toggle")
}

document.getElementById("minusRoom").onclick = function () {
    if (document.getElementById("numRoom").innerHTML == 1) {
        document.getElementById("numRoom").innerHTML == 1;
    } else {
        document.getElementById("numRoom").innerHTML = parseInt(document.getElementById("numRoom").innerHTML) - 1;
    }

    document.querySelector(".roomNum p").innerHTML = document.getElementById("numRoom").innerHTML;
}

document.getElementById("plusRoom").onclick = function () {
    document.getElementById("numRoom").innerHTML = parseInt(document.getElementById("numRoom").innerHTML) + 1;
    document.querySelector(".roomNum p").innerHTML = document.getElementById("numRoom").innerHTML;

}

// guests number 
document.querySelector(".guestsNum").onclick = function () {
    document.querySelector(".guests .timer").classList.toggle("toggle")
}

// num adult 

document.getElementById("minusAdult").onclick = function () {
    if (document.getElementById("numAdult").innerHTML == 1) {
        document.getElementById("numAdult").innerHTML == 1;
    } else {
        document.getElementById("numAdult").innerHTML = parseInt(document.getElementById("numAdult").innerHTML) - 1;
    }

    document.querySelector(".guests .A span").innerHTML = document.getElementById("numAdult").innerHTML;
}

document.getElementById("plusAdult").onclick = function () {
    document.getElementById("numAdult").innerHTML = parseInt(document.getElementById("numAdult").innerHTML) + 1;
    document.querySelector(".guests .A span").innerHTML = document.getElementById("numAdult").innerHTML;

}

// num child 
document.getElementById("minusChild").onclick = function () {
    if (document.getElementById("numChild").innerHTML == 1) {
        document.getElementById("numChild").innerHTML == 1;
    } else {
        document.getElementById("numChild").innerHTML = parseInt(document.getElementById("numChild").innerHTML) - 1;
    }

    document.querySelector(".guests .C span").innerHTML = document.getElementById("numChild").innerHTML;
}

document.getElementById("plusChild").onclick = function () {
    document.getElementById("numChild").innerHTML = parseInt(document.getElementById("numChild").innerHTML) + 1;
    document.querySelector(".guests .C span").innerHTML = document.getElementById("numChild").innerHTML;

}