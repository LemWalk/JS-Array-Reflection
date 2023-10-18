const btnNewImage = document.getElementById('btn-new-img');
const url = fetch("https://picsum.photos/200");
let img = document.getElementById('fetched-image');
const imgBox = document.getElementById('img-box');

//========== Fetch a new image when the 'new image' button is clicked ================

    btnNewImage.addEventListener("click", () => {
    fetch('https://picsum.photos/200')
    .then(response => response.blob())
    .then(blob => {
    const objectURL = URL.createObjectURL(blob);
    img.src = objectURL;
    imgBox.appendChild(img);
    });
        });





// regular expression for email
// ^[a-z]+@[^\s]+\.[^\s]+$