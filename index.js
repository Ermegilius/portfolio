
document.getElementById("year").innerHTML = new Date().getFullYear();

// window.on("scroll", function () {
//     if (window.scrollTop() > 50) {
//         document.querySelector("header").addClass("colored");
//     } else {
//         document.querySelector("header").removeClass("colored");
//     }
// });

//back to top function
function back() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

document.querySelector("#backToTop").addEventListener('click', back);