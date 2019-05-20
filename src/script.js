function focusAbout(){
    document.getElementById('portfolio').style.zIndex=2;
    document.getElementById('about').style.zIndex=3;
    document.getElementById('contact').style.zIndex=1;
}

function focusPortfolio(){
    document.getElementById('portfolio').style.zIndex=3;
    document.getElementById('about').style.zIndex=2;
    document.getElementById('contact').style.zIndex=1;
}

function focusContact(){
    document.getElementById('portfolio').style.zIndex=1;
    document.getElementById('about').style.zIndex=2;
    document.getElementById('contact').style.zIndex=3;
}