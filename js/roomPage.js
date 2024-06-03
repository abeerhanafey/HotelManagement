const params = new URLSearchParams(window.location.search)
let post_id = params.get("postId")? params.get("postId") : 0;
console.log(post_id);

function viewAllRoomsInRoomPage(post_id) {
    document.querySelector(".rooms").innerHTML = "";
    axios.get(`https://mydoctory.net/Hotel_management_system/public/api/allRooms/${post_id}`).then((Response) => {
        console.log(Response.data.data);
        const rooms = Response.data.data.all_room;
        for (const room of rooms) {
            const roomCard = `
                <div data-aos="fade-up"
                data-aos-anchor-placement="center-bottom" class="room">
                    <img src= data:ImageBitmap/jpg;base64,${room.img_base64} alt="notFound">
                    <h2>${room.title}</h2>
                    <span style = "margin-left: 100px;">(${room.view})</span>
                    
                    <div class="fetures">
                        <div class="top">
                            <span><img src="../img/icons/bed.png" alt="" style="width: 25px; height: 30px;"> ${room.bed_style}</span>
                            <span><img src="../img/icons/travelers.png" alt="" style="width: 30px; height: 28px;"> ${room.total_adult} Adult   ${room.total_child} Child</span>
                        </div>
                        <div class="buttom">
                            <img style="width: 60px; height: 50px; margin-top: 10px;" src="../img/icons/air-conditioner.png" style="width: 30px; height: 30px;" alt="">
                            <i class="fa-solid fa-mug-hot"></i> 
                            <img src="../img/icons/wifi.png" style="width: 30px; height: 30px;" alt="">
                            <i class="fa-solid fa-bell-concierge"></i>                            </div>
                    </div>
                    <div class="price">
                        <span>Starting From </span>
                        <span>$${room.price} / night</span>
                    </div>
                    <div class="booking">
                        <button class="book">Book Now</button>
                        <button class="details">View Details</button>
                    </div>
                </div>
            `;

            document.querySelector(".rooms").innerHTML += roomCard
        }
    });
}

viewAllRoomsInRoomPage(post_id)