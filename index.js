
document.getElementById("year").innerHTML = new Date().getFullYear();

//back to top function
function back() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

document.querySelector("#backToTop").addEventListener('click', back);