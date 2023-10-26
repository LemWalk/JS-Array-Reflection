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

    btnNewImage.addEventListener("click", () => {
        fetch(url)
        .then(response => img.src = response.url)
        .catch(error => console.error(error));
    });


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
            emailArray.push(email.value);

            let listItems = "";

                    for (let i = 0; i < emailArray.length; i++) {
                        listItems += `
                        <li class='array-list-item'>
                        <div class='email-pushed'>${emailArray[i]}</div>
                        </li>`;
                    }

            document.querySelector('.array-list').innerHTML = `${listItems}`;

            // console.log('Push it real good!');
        } else {
            // console.log('Sorry Chief! No email, No entry!');
        }
    };

        btnAddImg.addEventListener("click", (addEmail));


        
        // function createImageItems(arg) {
        //     let imgItems = "";
        //     for(let i = 0; i < arg.length; i++) {
        //         imgItems += `<img class="img-array-item" src="${arg[i]}" alt="random image">`;
        //     }
        //     return imgItems;
        
        
        // function createImageItems(arg) {
        //     let imgItems = "";
        //     for(let i = 0; i < arg.length; i++) {
        //         imgItems += `<img class="img-array-item" src="${arg[i]}" alt="random image">`;
        //     }
        //     return imgItems;
        // } 

//     function createListItems(arg) {        
//         let listItems = "";

//         for (let i = 0; i < emailArray.length; i++) {
//             listItems += `
//             <li class='array-list-item'>
//             <div class='email-pushed'>${emailArray[i]}</div>
//             <div class='assigned-img'>{${createImageItems}}<div>
//             </li>`;
//         }
//         return listItems
//     }

    
// function displayData() {
//     const content = document.querySelector('.email-display');
    
//     content.innerHTML = `
//     <ul class="array-list">
//     ${createListItems(emailArray)}
//     </ul>
//     `;
//     // removeBtn.style.visibility = 'visible';
//  }






    // function generateListItems(arg) {
    //         let items = "";
    //         for(let i = 0; i < arg.length; i++) {
    //             items += `
    //             <li class="user">
    //             <div class="user-email" style="background-image: url(images/space-g2f7526c66_1280.jpg);">
    //             <h3 class="email-header">${arg[i]}</h3>
    //             </div>
    //             <div class="user-imgs">
    //             ${generateImageItems(pic[i])}
    //             </div>
    //             </li>`;
    //         }
    //         return items;}

        

        // function generateListItems(arg) {
        //     let items = "";
        //     for(let i = 0; i < arg.length; i++) {
        //         items += `
        //         <li class="user">
        //         <div class="user-email" style="background-image: url(images/space-g2f7526c66_1280.jpg);">
        //         <h3 class="email-header">${arg[i]}</h3>
        //         </div>
        //         <div class="user-imgs">
        //         ${generateImageItems(pic[i])}
        //         </div>
        //         </li>`;
        //     }
        //     return items;


        

    // function generateImageItems(arg) {
    //     let items = "";
    //     for(let i = 0; i < arg.length; i++) {
    //         items += `<img class="small-img" src="${arg[i]}" alt="random image">`;
    //     }
    //     return items;
    // } 
        


        // function displayData() {
        //     const content = document.querySelector('.assigned');
            
        //     content.innerHTML = `
        //     <ul class="user-data">
        //     ${generateListItems(lastEmail)}
        //     </ul>
        //     `;
        //     removeBtn.style.visibility = 'visible';
        //  }


// function assignImage() {

//     if(checkEmailPresent(input.value)) { 
//         let emailIndex = emailArray.indexOf(input.value);
//         if(checkImage(img.src)) {
//             imageThere();
//         } else {
//             imgArray[emailIndex].push(img.src);
//             imageNotThere();
//         }          
//     } else { 
//         emailArray.push(input.value);
//         imgArray.push([img.src]);
//         imageNotThere();
//     }
// }






// error display functions /////////////////////////////////////////////////

// function invalidEmail() {
//     const err = document.getElementById('emailErr');
//     if(!emailFormat.test(input.value)) {  
//         err.style.visibility = "visible";
//         err.style.padding ="15px 0";
//     }
// }

// function validEmail() {
//     const err = document.getElementById('emailErr');
//     if(emailFormat.test(input.value)) {  
//         err.style.visibility = "hidden";
//         err.style.padding = "0";
//     }
// }




// btnAddImg.addEventListener("click", () => {
//     if(checkEmailPresent(input.value)) { 
//       let emailIndex = emailArray.indexOf(input.value);
//       if(checkImage(img.src)) {
//           imageThere();
//       } else {
//           imgArray[emailIndex].push(img.src);
//           imageNotThere();
//       }          
//   } else { 
//       emailArray.push(input.value);
//       imgArray.push([img.src]);
//       imageNotThere();
//   }
// });



//  // Create a new div for each email address and append it to the img-review div
//  let emailDiv = document.createElement("div");
//  emailDiv.innerHTML = email;
//  emailDiv.classList.add("email-display");
//  document.getElementById("img-review").appendChild(emailDiv);



// let index = emailArray.findIndex(obj => obj.email === email);
// let picture = document.getElementById("imgBox").src;

// btnAddImg.addEventListener("click", () => {
// emailArray.push(email.value);

//     console.log('Still Working Bro, Big UPs');

// });




// btnAddImg.addEventListener("click", () => {    
//     if (index === -1) {
//         emailArray.push({email: email, img: [url]});
//     } else {
//         emailArray[index].pictures.push(url);
//     }
//     console.log('hello');
// });




    

// function addEmail(email, picture) {
//     let index = emailArray.findIndex(obj => obj.email === email);
//     if (index === -1) {
//         emailArray.push({email: email, pictures: [picture]});
//     } else {
//         emailArray[index].pictures.push(picture);
//     }
// }

// document.getElementById("btnAddImg").addEventListener("click", function() {
//     let email = document.getElementById("emailInput").value;
//     let picture = document.getElementById("imgBox").src;
//     addEmail(email, picture);
// });

// let email = document.getElementById("email").value;
// let picture = document.getElementById("imgBox").src;

// function addEmail(email, picture) {
//     let index = emailArray.findIndex(obj => obj.email === email);
//     if (index === -1) {
//         emailArray.push({email: email, pictures: [picture]});
//     } else {
//         emailArray[index].pictures.push(picture);
//     }
// }

// document.getElementById("btnAddImg").addEventListener("click", function() {
//     addEmail(email, picture);
// });



// let emailArray = [];

// function addEmail(email, picture) {
//     let index = emailArray.findIndex(obj => obj.email === email);
//     if (index === -1) {
//         emailArray.push({email: email, pictures: [picture]});
//     } else {
//         emailArray[index].pictures.push(picture);
//     }
// }

// document.getElementById("btnAddImg").addEventListener("click", function() {
//     let email = document.getElementById("email").value;
//     let picture = document.getElementById("imgBox").src;
//     addEmail(email, picture);
// });



// // Step 1: Create a container element in your HTML to display the images.
// <div id="images"></div>

// // Step 2: Loop through the emailArray and create a new container element for each email address.
// emailArray.forEach(function(obj) {
//     let email = obj.email;
//     let pictures = obj.pictures;

//     let emailContainer = document.createElement("div");
//     emailContainer.innerHTML = "<h3>" + email + "</h3>";
//     document.getElementById("images").appendChild(emailContainer);

//     // Step 3: Inside each container element, loop through the pictures array and create an img element for each picture.
//     pictures.forEach(function(picture) {
//         let img = document.createElement("img");
//         img.src = picture;

//         // Step 4: Set the src attribute of each img element to the corresponding picture URL.
//         emailContainer.appendChild(img);
//     });
// });
