function home_open(){
    console.log('home clicked !')
}
function summary_open(){
    console.log('summary clicked !')
    const summarySection = document.getElementById("summary");
    summarySection.scrollIntoView({ behavior: "smooth" });
}
function about_open(){
    console.log('about clicked !')
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}
function contact_open(){
    console.log('contact clicked !')
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
    
}
