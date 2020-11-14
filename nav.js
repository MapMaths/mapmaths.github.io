var obj;

obj = document.getElementById("to-navjs");
obj.innerHTML = "<nav id='navjs-nav'></nav>";

obj = document.getElementById("navjs-nav");
obj.style.backgroundColor = "black";
obj.style.position = "sticky";
obj.style.width = `${window.innerWidth}px`;
obj.innerHTML = "<a id='navjs-nav-address-for-pfp'></a>"

obj = document.getElementById("navjs-nav-address-for-pfp");
obj.setAttribute("href", "/");
obj.innerHTML = "<img src='favicon.ico' id='navjs-nav-address-img-for-pfp' />"

obj = document.getElementById("navjs-nav-address-img-for-pfp");
obj.style.borderRadius = "50%";
obj.style.marginTop = "1em";
