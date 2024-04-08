var typed = new Typed(".typing",{
    strings:["Web designer","Web-developer","Team-leader","Joint-secretary","Class-Represetive"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,
})
function changecolor()
{
    var color = document.getElementById("button").value;
    var body = document.getElementsByTagName('body')[0];

    body.style.backgroundColor = color;
}