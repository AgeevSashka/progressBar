let btn = document.querySelectorAll('.btn');
let elem = document.querySelector('.move');
let label = document.querySelector('.label');
let width = 5,
    start = 0;
let firstBtn = document.querySelector('.firstBtn'),
    secBtn = document.querySelector('.secBtn'),
    thridBtn = document.querySelector('.thridBtn');
function move(arg) {
    if(width < 100) {
        width += arg;
        elem.style.width = `${width}%`;
        label.innerHTML = `${width}%`;
    } else {
        width = start;
    }
}
    firstBtn.addEventListener('click', function() {
        move(1);
    });
    secBtn.addEventListener('click', function() {
        move(3);
    });
    thridBtn.addEventListener('click', function() {
        move(7);
    });
