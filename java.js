const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}
const button=document.getElementsByClassName("productButton");
for(let i=0; i<button.length; i++){
    const element= button[i];
    element.addEventListener("click",function(event){
        location.href="payment/index.html";
    });
}



