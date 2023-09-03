var sumClicked_home = 0;
var sumClicked_summary = 0;
var sumClicked_about = 0;
var sumClicked_contact = 0;

function home_open(){
    sumClicked_home += 1;
    console.log('home clicked: ' + sumClicked_home)
}
function summary_open(){
    sumClicked_summary += 1;
    console.log('summary clicked: ' + sumClicked_summary)
    const summarySection = document.getElementById("summary");
    summarySection.scrollIntoView({ behavior: "smooth" });
}
function about_open(){
    sumClicked_about += 1;
    console.log('about clicked: ' + sumClicked_about)
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}
function contact_open(){
    sumClicked_contact += 1;
    console.log('contact clicked: ' + sumClicked_contact)
}
