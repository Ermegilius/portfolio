
document.getElementById("year").innerHTML = new Date().getFullYear();

//back to top function
function back() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

//header background color on scroll function
function scrolled() {
    const header = document.querySelector("header");
    if (window.scrollY > 30) {
        header.style.filter = 'grayscale(1)';
    } else {
        header.style.filter = 'grayscale(0)';
    }
}

//header shrinking on scroll function
function headerSrinker() {
    const header = document.querySelector("header");
    const h1 = document.querySelector("h1");
    if (window.scrollY > 10) {
        h1.classList.add("hidden");
    } else {
        h1.classList.remove("hidden");
    }
};


//debouncer function
function debounce(func, delay) {
    let inDebounce;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, args), delay);
    }
}

//LOCAL links: shifts anchor positions in the document with current heigth of the header (used chatGPT to write this function)
document.querySelectorAll('.localLink').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        let headerHeigth = document.querySelector('header').offsetHeight;
        const offset = headerHeigth;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;//(position of the desired element relative to the viewport) + (current viewport shift along Y axis) - (current heigth of the header)

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    });
});

//shifts the viewport to the correct position after external link (used chatGPT to write this function)
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'auto',
            });
        }
    }
});

//mobile menu (hides/unhides nav buttons)
const mobileMenuButton = document.querySelector('#mobileMenuButton');
const navButtons = document.querySelectorAll('li');
function mobileMenuTooggler() {
    navButtons.forEach(button => {
        button.classList.toggle('hidden');
    });
}

//makes nav bar visible if user has hidden it in mobile/tablet view and then resized the window
function handleResize() {
    if (window.innerWidth >= 992) {
        navButtons.forEach(button => {
            button.classList.remove('hidden');
        });
    }
}

mobileMenuButton.addEventListener('click', mobileMenuTooggler);
document.querySelector('#backToTop').addEventListener('click', back);
window.addEventListener('scroll', debounce(scrolled, 500));
window.addEventListener('resize', debounce(handleResize, 30));
window.addEventListener('load', handleResize);
window.addEventListener("scroll", debounce(headerSrinker, 300));