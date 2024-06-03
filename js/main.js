// making header navbar fixed 
const navbar = document.querySelector(".navbar");
window.onscroll = function () {
    if (scrollY >= 400) {
        navbar.setAttribute("style", "width: 100%; background-color: #333333ce; position: fixed; top: 0; left: 0; border-radius: 0; z-index: 101; transition: 1s;");
    } else {
        navbar.removeAttribute("style");
    }
}

// booking
// date 
const today = new Date();
const formattedToday = today.toISOString().split('T')[0];

const dateInput = document.getElementById('myDate1');
dateInput.min = formattedToday;

const dateInput2 = document.getElementById('myDate2');
dateInput2.min = formattedToday;

// num guests 

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

axios.get("https://mydoctory.net/Hotel_management_system/public/api/room/type")
    .then((response) => {
        console.log(response)
        const allRooms = response.data.data.all_room_types;
        console.log(allRooms);
        
        for (const room of allRooms) {
            
            const Room = `
            <div class="room" data-aos="zoom-in">
            <div class="top">
                <div class="price">
                <span>From$ ${room.price} / night</span>
            </div>
            <div class="offer">
                <span>${room.discount}% OFF</span>
            </div>
            <img src= data:image/jpg;base64,${room.image_base64} class="sec4_img_bove">
            </div>
            <div class="info">
                <p>${room.name}</p>
                <hr>
                <div class="details">
                    <div>
                        <img src="img/icons/bed.png">
                        <span>${room.bed_style}</span>
                    </div>

                    <div>
                        <img src="img/icons/travelers.png">
                        <span>${room.price} Guest</span>
                    </div>
                </div>

                <div class="details">                 
                    <div class="btn1" onclick = "viewRoomTypeFunc(${room.id})">
                        <a href="#">View More</a>
                    </div>
                    <div class="btn2">
                        <a href="#">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
            `
            document.querySelector(".roomCards").innerHTML += Room;
            // let img = new Image();
            // img.src = `data:image/jpg;base64,${room.img_base64}`;
            // img.alt = "notFound";
            // img.addEventListener("load", () => {
            // });


        }
        return response
    }).then((response) => {
        console.log(response);
        });


function viewRoomTypeFunc(postId) {
    window.location = `./html/roomPage.html?postId=${postId}`
}
    