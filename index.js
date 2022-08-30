


setInterval(() => {
    let w1 = document.getElementById("user").value;
    let w2 = document.getElementById("pin").value;

    if (w1.length > 0 && w2.toString().length == 4) {
        document.getElementById("next").classList.remove("disabled");
    }
    
    if (w1.length == 0 || w2.toString().length<4) {
        document.getElementById("next").classList.add("disabled");
    }
}, 1);





function doIt() {
    let user = document.getElementById("user").value.toLowerCase().replaceAll(" ", "");
    let pin = document.getElementById("pin").value;
    let ch = user + pin;

    if (ch == 'papi0609') {
        user = "";
        pin = "";
        document.getElementById("next").style.color = "white";
        // document.getElementById("next").style.backgroundColor = "#28A745";

        document.getElementById("next").textContent = "getting you in...";
        document.getElementById("next").setAttribute('href', 'dashboard.html');

    }
    else {
        let add = document.getElementById("addText");
        let add1 = document.getElementById("addText1");



        if (user != 'papi') {
            document.getElementById("user").value = "";
            document.getElementById("next").classList.add("disabled");
            document.getElementById("rem1").classList.remove("mb-3");
            add1.textContent = `Username is not valid!`;
            let time = setTimeout(() => {
                add1.textContent = '';
                document.getElementById("rem1").classList.add("mb-3");

            }, 2000);
        }

        if (pin != 0609) {
            document.getElementById("pin").value = "";
            document.getElementById("next").classList.add("disabled");
            document.getElementById("rem").classList.remove("mb-3");
            add.textContent = `Pin is not valid!`;
            let time = setTimeout(() => {
                add.textContent = '';
                document.getElementById("rem").classList.add("mb-3");
            }, 2000)
        }





    }
}

let view = false;

function hide() {
    if (!view) {
        document.getElementById("basic").innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
        document.getElementById("pin").setAttribute('type', 'text');
        document.getElementById("pin").setAttribute('inputmode', 'numeric');
        view = true;
    }

    else {
        document.getElementById("basic").innerHTML = "<i class='fa-solid fa-eye'></i>";

        document.getElementById("pin").setAttribute('type', 'password');
        document.getElementById("pin").setAttribute('inputmode', 'numeric');
        view = false;
    }
}




$(window).on('load', function () {
    $("#loader").fadeOut(1000);
    $("#content").fadeIn(1000);
});


setInterval(()=> {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.getElementById("hea").style.color = "#" + randomColor;    
},500)
