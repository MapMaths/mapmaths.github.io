'use strict';

var mm = document.querySelector('nav p strong');
var mmtop = mm.getBoundingClientRect().top;
var mmleft = mm.getBoundingClientRect().left;
document.querySelector('nav table tbody tr td strong').style.top(mmtop + 'px');

var gh = document.getElementById("gh");
gh.onclick = () => {document.location.href = "https://github.com/MapMaths"};

var gl = document.getElementById("gl");
gl.onclick = () => {document.location.href = "https://glitch.com/@MapMaths"};

window.addEventListener('scroll', () => {
    if (window.scrollY <= window.innerHeight) {
        document.querySelector('nav').style.background =
            "linear-gradient(" +
            (window.scrollY / window.innerHeight + 1) * 45 +
            "deg, tomato, yellow)";
        mm.style.transform =
            "translateX(-" +
            window.scrollY / (mmleft - document.querySelector('nav').getBoundingClientRect().left) + "px)";
        document.querySelector('tr').style.background = "none";
        document.querySelector('tr').style.boxShadow = "none";
        //document.querySelector('nav table tbody tr td strong').style.visibility = "hidden";
    } else {
        document.querySelector('tr').style.background = "linear-gradient(90deg, tomato, yellow)";
        document.querySelector('tr').style.boxShadow = "2px 2px 2px #11111122";
        //document.querySelector('nav table tbody tr td strong').style.visibility = "visible";
    }
});