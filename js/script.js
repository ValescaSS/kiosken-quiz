let plusArr = document.getElementsByClassName('plus');
let minusArr = document.getElementsByClassName('minus');
let prisArr = document.getElementsByClassName('pris');
let radioBtnArr = document.getElementsByClassName('radio-btn');
let tPris = document.getElementById('total-pris').innerHTML;

for (let i = 0; i < prisArr.length; i++) {

    let pris = prisArr[i].getAttribute("data-value");

    plusArr[i].addEventListener('click', function (e) {
        e.preventDefault();
        let x = document.getElementById('item' + i).innerHTML;
        x = ++x;
        document.getElementById('item' + i).innerHTML = x;
        document.getElementById('pris' + i).innerHTML = totalItemPris(x);

        totalPris();
        moms();

    })

    minusArr[i].addEventListener('click', function (e) {
        e.preventDefault();
        let x = document.getElementById('item' + i).innerHTML;
        x = --x;
        if (x >= 0) {
            document.getElementById('item' + i).innerHTML = x;
            document.getElementById('pris' + i).innerHTML = totalItemPris(x);

            if (tPris === 79) {
                document.getElementById('pris' + i).innerHTML = +tPris + +totalItemPris(x);
            }

            totalPris();
            moms();

        }
    })

    function totalItemPris(antal) {
        let nyTotalItemPris = antal * pris;
        return nyTotalItemPris;
    }

}

for (let i = 0; i < radioBtnArr.length; i++) {
    radioBtnArr[i].addEventListener('change', function () {

        tPris = document.getElementById('total-pris').innerHTML;
        document.getElementById('total-pris').innerHTML = +tPris + +this.value;
        moms();

    });
}

function moms() {

    let x = 0.25 * totalPris();

    document.getElementById('total-moms').innerHTML = Math.round(x);

}

function totalPris() {
    let nyTotalPris = 0;
    for (let i = 0; i < prisArr.length; i++) {
        nyTotalPris += +prisArr[i].innerHTML;
    }

    let x = document.getElementById('hemleverans').checked;

    if (x === true) {
        return document.getElementById('total-pris').innerHTML = 79 + +nyTotalPris;
    } else {
        return document.getElementById('total-pris').innerHTML = nyTotalPris;
    }

}

// let editBtn = document.getElementsByClassName('fa-pencil');
// for (let i = 0; i < editBtn.length; i++) {
//     editBtn[i].addEventListener('click', function(e){
//         e.preventDefault();
//         on();
//     })    
// }


// Overlay
let editBtn1 = document.getElementById('edit-btn-1');

editBtn1.addEventListener('click', function(e){
    e.preventDefault();
    on();
}) 

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
