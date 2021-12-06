'use strict';

var mm = document.querySelector('nav p strong');
var mmtop = mm.getBoundingClientRect().top;
var mmleft = mm.getBoundingClientRect().left;
var mmn = document.querySelector('nav table tbody tr td:nth-of-type(1)')

var gh = document.getElementById("gh");
gh.onclick = () => {
    document.location.href = "https://github.com/MapMaths"
};

var gl = document.getElementById("gl");
gl.onclick = () => {
    document.location.href = "https://glitch.com/@MapMaths"
};

mmn.style.top = mmtop + "px";
mmn.style.left = mmleft + "px";
mmn.style.fontSize = "4rem";

window.addEventListener('scroll', () => {
    if (window.scrollY <= window.innerHeight) {
        document.querySelector('nav').style.background =
            "linear-gradient(" +
            (window.scrollY / window.innerHeight + 1) * 45 +
            "deg, tomato, yellow)";
        document.querySelector('tr').style.background = "none";
        document.querySelector('tr').style.boxShadow = "none";
        mmn.style.top = mmtop - window.scrollY / window.innerHeight * mmtop + "px";
        mmn.style.left = mmleft - window.scrollY / window.innerHeight * mmleft + 1 + "px";
        mmn.style.fontSize = 4 - window.scrollY / window.innerHeight * 2.7 + "rem";
    } else {
        document.querySelector('tr').style.background = "linear-gradient(90deg, tomato, yellow)";
        document.querySelector('tr').style.boxShadow = "2px 2px 2px #11111122";
        mmn.style.top = "0px";
        mmn.style.left = "1px";
        mmn.style.fontSize = "1.3rem";
    }
});