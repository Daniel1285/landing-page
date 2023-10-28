const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el)=> observer.observe(el));

document.getElementById("show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".article").classList.add("active");
});    
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    closePopup();
});

if (typeof(Storage) !== "undefined") {
    console.log("storage available")
  } else {
    console.log("Sorry! No Web Storage support..") 
  }


document.getElementById("sign").addEventListener("click", function(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email && password){
        document.getElementById("email").value= "";
        document.getElementById("password").value= "";
        document.getElementById("show-login").style.opacity = "0";
        closePopup();
    } else{
        console.log("fields are empty!");
    }
/*
    localStorage.setItem("userEmail", email.value);
    localStorage.setItem("userPassword", password.value);
*/
});



function closePopup(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".article").classList.remove("active");
}
