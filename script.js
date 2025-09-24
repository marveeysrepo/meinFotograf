const exitModal = document.querySelector("#closeBtn");
const modalBox = document.querySelector("#modalBox");
const modalImg = document.querySelector("#modalImg");
const imgGallery = document.querySelectorAll(".imageGallery img");
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
