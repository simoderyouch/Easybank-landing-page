// bar menu 
console.log('helo')
var bar = document.querySelector(".bar");
var close = document.querySelector(".close");
var menu = document.querySelector(".menu");

bar.addEventListener('click', function() {
    menu.classList.add('show')
    bar.classList.toggle('hid')
    close.classList.toggle('show')
});
close.addEventListener('click', function() {
    menu.classList.remove('show')
    bar.classList.remove('hid')
    close.classList.remove('show')
});
//scroll top 
let up = document.querySelector('.up')
window.onscroll = function () {
    
    if (this.scrollY > 500) {
        up.classList.add('show')
    }
    else {
        up.classList.remove('show')
    }

};

up.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
} 