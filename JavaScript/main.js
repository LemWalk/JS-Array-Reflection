//================ Variables ===================

const btnNewImage = document.getElementById('btn-new-img');
const btnAddImg = document.getElementById('btn-add-img');
const url = "https://picsum.photos/200";
let img = document.getElementById('fetched-image');
const imgBox = document.getElementById('img-box');
let email = document.getElementById("email");
const emailMessage =  document.querySelector('.email-message');
const btnClear = document.getElementById('btn-clear');
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

//================ Arrays =============================

let emailArray = [];
let imgArray = [];

//========== Prevent Default in the form ================

const form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
// });

form.addEventListener('submit', (event) => {
    event.preventDefault();
});


//========== Fetch a new image when called ================

    function fetchNewImg() {
        fetch(url)
        .then(response => img.src = response.url)
        .catch(error => console.error(error));
    }


//========= Email Validation ==============================

function emailValidation () {
    if(!regex.test(email.value) || email.value === '') {
            email.style.border = '3px solid #d45b5b';
            email.style.boxShadow = '0 0 8px #d45b5b';
            email.placeholder = 'Please insert a valid email...';
            // console.log('email invalid');
            return true;
        } else {
            email.style.border = 'solid 3px #b09ee9';
            email.style.boxShadow = '';
            email.placeholder = '';
            // console.log('email is valid');
            clearError();
            return false;
        }
    }

//======== Create the image items for the emails ================

function createImageItems(arg) {
    let imgItems = "";
    for(let i = 0; i < arg.length; i++) {
    imgItems += `<img class="img-array-item" src="${arg[i]}" alt="Randomly generated image from Picsum">`;
    }
    return imgItems;
}

//======= Create the list Items HTML ================
    
function listItems(arg) {
    let listItems = "";
    for (let i = 0; i < arg.length; i++) {
    listItems += `
        <li class='array-list-item'>
            <div class='email-pushed'>${arg[i]}</div>
            <div class='img-display'>
                <div class='img-array-item'>${createImageItems(imgArray[i])}</div>
            </div>
        </li>`;
    }
    return listItems;
    }



//======= Add submitted emails and images to an array ================

function addEmail() {        
    if (emailValidation(email.value) === false) {
        let emailArrayIndex = emailArray.indexOf(email.value);
        if (emailArrayIndex === -1) {
            emailArray.push(email.value);
            imgArray.push([img.src]);
            // console.log('Push email and image to array');
        } else {
            let imgIndex = imgArray[emailArrayIndex].indexOf(img.src);
            if (imgIndex === -1) {
                imgArray[emailArrayIndex].push(img.src);
                // console.log('push image to existing array');
            } else {
                invalidImgError();
                // console.log('img assigned to email already');
                }   
            }
            document.querySelector('.array-list').innerHTML = `${listItems(emailArray)}`;
            btnClear.style.visibility = 'visible';
        } else {
            invalidEmailError();
            // console.log('Invalid entry Rejected');
        }
    };

//======== Error message functions ==========

function invalidEmailError( ) {
    emailMessage.innerHTML = `<h3>Please insert a valid email...</h3>`
}

function invalidImgError( ) {
    emailMessage.innerHTML = `<h3>The current image has already been assigned...</h3>`
}

function clearError () {
    emailMessage.innerHTML = ``
}

//======= clear all button function =================

function clearAll() {
    const arrayList = document.querySelector('.array-list');
    emailArray.length = 0;
    imgArray.length = 0;
    arrayList.innerHTML = "";
    btnClear.style.visibility = 'hidden';
}

   //========= Event Listeners ==============================

    btnAddImg.addEventListener("click", (addEmail));

    btnNewImage.addEventListener("click", (fetchNewImg));

    btnClear.addEventListener('click', clearAll);
