// input styling 
let inputList = document.querySelectorAll("input");
console.log(inputList);
inputList.forEach((ele) => {
    ele.onfocus = function () {
        inputList.forEach((el) => {
            el.style.border = "1px solid #ccc";
            el.style.outline = "none";
        })
        ele.style.border = "1px solid rgb(147, 112, 65)";
        ele.style.outline = "4px solid rgb(173, 131, 76, .5)";
    }
})
// next button 
const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", function () {
    document.querySelector(".form1").style.transform = "translateX(-110%)";
    document.querySelector(".form2").style.transform = "translateX(0)";
})

// back button 
const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", function () {
    document.querySelector(".form1").style.transform = "translateX(0)";
    document.querySelector(".form2").style.transform = "translateX(110%)";
})

const toastMessage = document.querySelector(".toastMessage");
// send user data to data base by api 
      // Making API request

const registerButton = document.getElementById("sendData");
registerButton.onclick = function () {
         // form data
    var first_name = document.getElementById('firstName').value;
    var last_name = document.getElementById('lastName').value;
    var nid_number = document.getElementById('nId').value;
    var phone = document.getElementById('phone').value;
    var date_of_birth = `${document.querySelector(".date select").value}/${document.querySelector(".month select").value}/${document.querySelector(".year select").value}`;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;
    var password = document.getElementById('password').value;
    var password_confirmation = document.getElementById('passConfirm').value;

    console.log(date_of_birth);
    let formData = new FormData();

    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", password_confirmation);
    formData.append("nid_number", nid_number);
    formData.append("country", country);
    formData.append("date_of_birth",  date_of_birth);
    formData.append("phone", phone);
    formData.append("national_number", 53545657676);
    
axios.post('https://mydoctory.net/Hotel_management_system/public/api/register', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json"
        }
        })
    .then(function (response) {
        console.log(response);
            document.querySelector(".toastMessage .mark").innerHTML = `<img src="../img/download.png" alt="correct">`;
            document.querySelector(".toastMessage .data h2").innerHTML = `Success `;
            document.querySelector(".toastMessage .data p").innerHTML = `${response.data.message} `;
            document.querySelector(".toastMessage").setAttribute("style", "transform: translateX(0); border: 2px solid green; background-color: #ceffde;");
            localStorage.setItem("token", `${response.data.data.user_data.token}`);
            localStorage.setItem("userData", `${JSON.stringify(response.data.data.user_data)}`);
    })
    .catch(function(error) {
        console.log('Registration failed:', error.response.data.message);
        document.querySelector(".toastMessage .mark").innerHTML = `<img src="../img/wrong.webp" alt="correct">`;
        document.querySelector(".toastMessage .data h2").innerHTML = `Registration Failed `;
        document.querySelector(".toastMessage .data p").innerHTML = `${error.response.data.message} `;
        document.querySelector(".toastMessage").setAttribute("style", "transform: translateX(0); border: 2px solid red;background-color: #fffcdc;")
    });
    }

// closing toast message 
document.querySelector(".toastMessage .close i").onclick = function () {
    document.querySelector(".toastMessage").setAttribute("style", "transform: translateX(100%)")
}

document.querySelector(".logo").onclick = function () {
    window.location = "../index.html";
}
// localStorage.clear();