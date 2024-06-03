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

const registerBtn = document.querySelector("#register");
registerBtn.onclick = function () {
    window.open("registerPage.html", "_self");
}

const toastMessage = document.querySelector(".toastMessage");

let mainPage = document.querySelector(".mainPage");
const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", function () {
    const mail = document.getElementById("mail").value;
    const pass = document.getElementById("pass").value;
    // console.log(mail);
    // console.log(pass);
    axios.post("https://mydoctory.net/Hotel_management_system/public/api/login", {
        email: mail,
        password: pass
    }, {
        headers: {
            "Accept": "application/json"
        }
    }).then((response) => {
        if (response.data.status >= 200 && response.data.status < 400) {
            console.log(response);
            console.log(response.data.data.user_data.token);
            console.log(response.data.data.user_data);
            document.querySelector(".toastMessage .mark").innerHTML = `<img src="../img/download.png" alt="correct">`;
            document.querySelector(".toastMessage .data h2").innerHTML = `Success `;
            document.querySelector(".toastMessage .data p").innerHTML = `${response.data.message} `;
            document.querySelector(".toastMessage").setAttribute("style", "transform: translateX(0); border: 3px solid green");
            localStorage.setItem("token", `${response.data.data.user_data.token}`);
            localStorage.setItem("userData", `${JSON.stringify(response.data.data.user_data)}`);
        }
        else if (response.data.status >= 400) {
            document.querySelector(".toastMessage .mark").innerHTML = `<img src="../img/wrong.webp" alt="wrong">`;
            document.querySelector(".toastMessage .data h2").innerHTML = `Failed `;
            document.querySelector(".toastMessage .data p").innerHTML = `${response.data.message} `;
            document.querySelector(".toastMessage").setAttribute("style", "transform: translateX(0); border: 3px solid red");
            
        }
        })
})

document.querySelector(".toastMessage .close i").onclick = function () {
    document.querySelector(".toastMessage").setAttribute("style", "transform: translateX(100%)")
}


document.querySelector(".logo").onclick = function () {
    window.location = "../index.html";
}
// localStorage.clear();