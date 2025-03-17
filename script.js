console.log("print")
// Select the main image
let mainImage = document.getElementById("large-image");

// Select all thumbnail images
let thumbnails = document.querySelectorAll(".thumb");

// Loop through each thumbnail and add click event
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
        // clicked thumbnail
        mainImage.src = this.src;
    });
});



