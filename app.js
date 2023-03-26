const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        // header.style.background = "linear-gradient(to right,#031B34 , #540080)";
        header.style.backgroundColor = 'rgba(17,1,40,0.91)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});







fetch("./artWork.json")
    .then(function(response){
        return response.json();
    })
    .then(function(products){
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for(let product of products){
            out += `
         <tr class="">
            <td> <img src='${product.image}'> </td>
            <td>${product.kategorie}</td>
            <td>${product.material}</td>
            <td>${product.title}</td>
            <td>${product.groesse}</td>
            <td>${product.dateOfBirth}</td>
            <td>${product.preis}</td>
            <td>${product.verfügbar}</td>
            <td>${product.exemplare}</td>
            <td>${product.besonderheiten}</td>
            <td>${product.schicksal}</td>
         </tr>
      `;
        }

        placeholder.innerHTML = out;
    });













/*

var xmlhttp = new XMLHttpRequest();
var url = "http://192.168.178.138:7979";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        console.log("jaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        // myFunction(myArr);
    }

};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
            arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}
*/

/*
const btn = document.querySelector("#butt");
const obj = { hello: "world" };

btn.addEventListener("click", () => {

    const obj = { hello: "world" };

    const request = new Request("http://192.168.178.138:7979", {
        method: "POST",
        body: JSON.stringify(obj),
    });

    request.json().then((data) => {
        // do something with the data sent in the request
        console.log("jaaaa", data)
    });
});*/
