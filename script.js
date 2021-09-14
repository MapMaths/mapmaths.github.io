/*
 * Change the background linear from 45deg to 90deg with the scrolling of user.
 * Change the position of the element `nav p strong` with the scrolling of user.
 */

window.addEventListener('scroll', () => {
    if (window.scrollY <= window.innerHeight){
        document.querySelector('nav').style.background = 
            "linear-gradient("
            + (window.scrollY / window.innerHeight + 1) * 45
            + "deg, tomato, yellow)";
        document.querySelector('tr').style.background = "none";
        document.querySelector('tr').style.boxShadow = "none";
        document.querySelector('nav table tbody tr td strong').style.visibility = "hidden";
    } else {
        document.querySelector('tr').style.background = "linear-gradient(90deg, tomato, yellow)";
        document.querySelector('tr').style.boxShadow = "2px 2px 2px #11111122";
        document.querySelector('nav table tbody tr td strong').style.visibility = "visible";
    }
});