var obj;

obj = document.getElementById("to-navjs");
obj.innerHTML = "<nav id='navjs-nav'></nav>";

obj = document.getElementById("navjs-nav");
obj.style.backgroundColor = "black";
obj.style.position = "absolute";
obj.innerHTML = "<a id='navjs-nav-address-for-pfp'></a>"

obj = document.getElementById("navjs-nav-address-for-pfp");
obj.setAttribute("href", "/");
obj.innerHTML = "<img src='favicon.ico' width='55' height='60' id='navjs-nav-address-img-for-pfp' />"

obj = document.getElementById("navjs-nav-address-img-for-pfp");
obj.style.borderRadius = "50%";
obj.style.marginTop = "1em";