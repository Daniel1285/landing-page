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
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".article").classList.remove("active");
});