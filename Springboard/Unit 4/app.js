// 1
document.getElementById("container");

// 2
document.querySelector("#container");

// 3
document.querySelectorAll(".second");

// 4
let ol = document.querySelector("ol");
ol.querySelector(".third");

// 5
document.querySelector("#container").innerText = "Hello!";

// 6
let footer = document.querySelector("div.footer");
footer.classList.add("main");

// 7.
footer.classList.remove("main");

// 8
let litem = document.createElement("li");

// 9
litem.innerText = "four";

// 10
let unordList = document.querySelector("ul");
unordList.append(litem);

// 11
let ordList = document.querySelectorAll("ol > li");
for (let item of ordList) {
    item.style.backgroundColor = "green";
}

// 12
let footerTwo = document.querySelector("div.footer");
footerTwo.remove();
