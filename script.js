const exitModal = document.querySelector("#closeBtn");
const modalBox = document.querySelector("#modalBox");
const modalImg = document.querySelector("#modalImg");
const imgGallery = document.querySelectorAll(".imageGallery img");
const themetoggle = document.querySelector("#themeToggle");
const body = document.documentElement;

/* const currentTheme = localStorage.getItem("theme");
 if ( currentTheme) {
    body.classList.add(currentTheme);
};
 themetoggle.addEventListener("click", function () { body.classList.toggle("darkMode")
    if (body.classList.contains("darkMode")) {
localStorage.setItem("theme", "dark mode")
    } else {
        localStorage.setItem("theme", "")
    }
}); 
 
 */
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    body.classList.add(currentTheme);
};

themetoggle.addEventListener("click", () => {
    body.classList.toggle("darkMode");
    if (body.classList.contains("darkMode")) {
        localStorage.setItem("theme", "darkMode")
    } else {localStorage.setItem("theme", "")
}
})

//loop around all images
//add click event to each image
// update modal box image src & alt, with clicked img src & alt
//display clicked image inside  modal box
imgGallery.forEach(img => {
    img.addEventListener("click", () => {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalBox.style.display = "flex";
    })
})
//close modal box when user click exit button
exitModal.addEventListener("click", () => {
    modalBox.style.display = "none";
});
//hide modal box when user clicks outside the image
window.addEventListener("click", (event) => {
    if (event.target === modalBox) {
        modalBox.style.display = "none";
    }
});

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const scrollBtn = document.querySelector(".topLink");
    if (scrollHeight > 500) {
        scrollBtn.classList.add("show")
    } else {        scrollBtn.classList.remove("show")
}
});

 