// section for clicable dropdown starts here 

document.addEventListener('DOMContentLoaded', function () {

    let button1= document.querySelector('.dropbtn1');
    let button2 = document.querySelector('.dropbtn2')
    let button3 = document.querySelector('.dropbtn3')
    let button4 = document.querySelector('.dropbtn4')
    let button5 = document.querySelector('.dropbtn5')
    let button6 = document.querySelector('.dropbtn6')


    let dropdowncontent1 = document.getElementById("pdropdown1");
    let dropdowncontent2 = document.getElementById("pdropdown2");
    let dropdowncontent3 = document.getElementById("pdropdown3");
    let dropdowncontent4 = document.getElementById("pdropdown4");
    let dropdowncontent5 = document.getElementById("pdropdown5");
    let dropdowncontent6 = document.getElementById("pdropdown6");

// dropdown content shows on button1  click

// button1
    button1.addEventListener("click", function () {
     dropdowncontent1.style.display = (dropdowncontent1.style.display === 'block') ? "none" : 'block';
    });
//button2
    button2.addEventListener("click", function () {
    dropdowncontent2.style.display = (dropdowncontent2.style.display === "block") ? "none" : "block";    
    })
//button3
    button3.addEventListener("click", function () {
    dropdowncontent3.style.display = (dropdowncontent3.style.display === "block") ? "none" : "block";    
    })  
//button4
    button4.addEventListener("click", function () {
    dropdowncontent4.style.display = (dropdowncontent4.style.display === "block") ? "none" : "block";    
    }) 
//button5
    button5.addEventListener("click", function () {
    dropdowncontent5.style.display = (dropdowncontent5.style.display === "block") ? "none" : "block";    
    })        
//button6
    button6.addEventListener("click", function () {
    dropdowncontent6.style.display = (dropdowncontent6.style.display === "block") ? "none" : "block";    
    }) 
// close the dropdown if user click anywhere else
//button1
window.addEventListener("click",function (event) {
    if (!event.target.matches('.dropbtn1')) {
        if (dropdowncontent1.style.display === "block") {
            dropdowncontent1.style.display = "none";
        }
    }    
});
//button2
window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn2")){
        if (dropdowncontent2.style.display === "block") {
            dropdowncontent2.style.display = "none";
        }
    }
});
//button3
window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn3")){
        if (dropdowncontent3.style.display === "block") {
            dropdowncontent3.style.display = "none";
        }
    }
});
//button4
window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn4")){
        if (dropdowncontent4.style.display === "block") {
            dropdowncontent4.style.display = "none";
        }
    }
});
//button5
window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn5")){
        if (dropdowncontent5.style.display === "block") {
            dropdowncontent5.style.display = "none";
        }
    }
});
//button6
window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn6")){
        if (dropdowncontent6.style.display === "block") {
            dropdowncontent6.style.display = "none";
        }
    }
});
});
// section for clickable dropdown ends here


// script for form section starts here 
    let form = document.getElementById("form")
    let email = document.getElementById("input1")
    let password = document.getElementById("input2")

    const eerror = document.getElementById("ptag1")
    const perror = document.getElementById("ptag2")

    if (window.history.replaceState) {
        window.history.replaceState(null,null, window.location.href);
    }
    
    form.addEventListener("submit", (e)=>{
        const FixForm = (tag,message) => {
            tag.textContent = message
            setTimeout(() =>{
                tag.textContent = "";
            }, 3000);
        }
        e.preventDefault()

        if (email.value.length<1){
            eerror.textContent ="Please enter a valid email or phone number."
            setTimeout(() =>{
                eerror.textContent =""
            }, 3000);
        }


        if (password.value.length<5){
            perror.textContent ="Your password must contain between 4 and 60 characters."
            setTimeout(() =>{
                perror.textContent =""
            }, 3000);
        }
    });
    // script for form section ends here
    