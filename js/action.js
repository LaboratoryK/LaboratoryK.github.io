var obtn1=document.getElementById("btn1");
var changeStyle = function (elem, attr, value) {
    elem.style[attr] = value;
};
var omain=document.getElementsByName("main");
omain.onclick = changeStyle(omain,'border','10px');