//================ Variables ===================

const btnNewImage = document.getElementById('btn-new-img');
const btnAddImg = document.getElementById('btn-add-img');
const url = "https://picsum.photos/200";
let img = document.getElementById('fetched-image');
const imgBox = document.getElementById('img-box');
let email = document.getElementById("email");

//================ Arrays =============================

let emailArray = [];
let imgArray = [];

//========== Fetch a new image when the 'new image' button is clicked ================

    function fetchNewImg() {
        fetch(url)
        .then(response => img.src = response.url)
        .catch(error => console.error(error));
    }

    //========= Event Listeners ==============================

    window.addEventListener('load', fetchNewImg('https://picsum.photos/200'));

    btnAddImg.addEventListener("click", (addEmail));

    btnNewImage.addEventListener("click", (fetchNewImg));


//========= Email Validation ==============================

// regular expression for email

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;


function emailValidation () {
if(!regex.test(email.value) || email.value === '') {
    email.style.border = '3px solid #d45b5b';
    email.style.boxShadow = '0 0 8px #d45b5b';
    email.placeholder = 'Please insert a valid email...';
    // document.querySelector('.email-message').innerHTML = `<h3>Email is invalid<h3>`;
    console.log('email invalid');
    return true;
    } else {
    email.style.border = '3px solid #5bd260';
    email.style.boxShadow = '0 0 8px #5bd260';
    email.placeholder = '';
    console.log('email is valid');
    return false;
    }
}

//======= Add submitted emails to an array ================

function addEmail() {        
    if (emailValidation(email.value) === false) {
        let emailArrayIndex = emailArray.indexOf(email.value);
        if (emailArrayIndex === -1) {
            emailArray.push(email.value);
            imgArray.push([img.src]);
        } else {
            let imgIndex = imgArray[emailArrayIndex].indexOf(img.src);
            if (imgIndex === -1) {
            imgArray[emailArrayIndex].push(img.src);
        }
        }
            document.querySelector('.array-list').innerHTML = `${listItems(emailArray)}`;
        } else {
            console.log('Sorry Chief! No email, No entry!');
        }
    };
    
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
    
    function createImageItems(arg) {
        let imgItems = "";
        for(let i = 0; i < arg.length; i++) {
        imgItems += `<img class="img-array-item" src="${arg[i]}" alt="random image">`;
        }
        return imgItems;
    }
    

//========== Add Images ========================

function addImg() {
    if (emailExists(email.value) === true) {
        let emailIndex = emailArray.indexOf(email.value);
        if(checkImage(img.src)) {
            console.log('image exists already');
            imageExists();
        } else {
            console.log('push image to existing array');
            imgArray[emailIndex].push(img.src);
            imageNotExists();
            }
        }  else {
        console.log('push email and image');
        emailArray.push(email.value);
        imgArray.push([img.src])
        imgDoesNotExist();
    }
}

// function assignImage() {
//     if(checkEmailPresent(input.value)) { 
//         let emailIndex = lastEmail.indexOf(input.value);
//         if(checkImage(img.src)) {
//             imageThere();
//         } else {
//             pic[emailIndex].push(img.src);
//             imageNotThere();
//         }          
//     } else { 
//         lastEmail.push(input.value);    
//         pic.push([img.src]);
//         imageNotThere();
//     }

// }

// ============== Check Functions ======================

function emailExists() {
    for (let i = 0; i < emailArray.length; i++) {
        if (emailArray[i] === email.value) {
            console.log('This matches an email.');
            return true;
        }
    }
    console.log('No match found.');
    return false;
}


    function checkImage() {
        let emailArrayIndex = emailArray.indexOf(email.value);
    
        if (emailArrayIndex === -1) {
            emailArray.push(email.value);
            imgArray.push([img.src]);
        } else {
            let imgIndex = imgArray[emailArrayIndex].indexOf(img.src);
            if (imgIndex === -1) {
            imgArray[emailArrayIndex].push(img.src);
            }
        }
    }

//======== check array for same images ==========

function imageExists() {
    // const err = document.getElementById('imageErr');
    // err.style.visibility = 'visible';
    // err.style.padding = '20px 0';
    console.log('Image already exist');
}

function imageDoesNotExist() {
    // const err = document.getElementById('imageErr');
    // err.style.visibility = 'hidden';
    // err.style.padding = '0';
    console.log('Image does not exist');
}

