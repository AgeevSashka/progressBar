let btn = document.querySelectorAll('.btn');
let elem = document.querySelector('.move');
let label = document.querySelector('.label');
let width = 5,
    start = 0;
let firstBtn = document.querySelector('.firstBtn'),
    secBtn = document.querySelector('.secBtn'),
    thridBtn = document.querySelector('.thridBtn');

    firstBtn.addEventListener('click', function() {
        if(width < 100) {
            width += 1;
            elem.style.width = `${width}%`;
            label.innerHTML = `${width}%`;
        } else {
            width = start;
        }
    });
    secBtn.addEventListener('click', function() {
        if(width < 100) {
            width += 3;
            elem.style.width = `${width}%`;
            label.innerHTML = `${width}%`;
        } else {
            width = start;
        }
    });
    thridBtn.addEventListener('click', function() {
        if(width < 100) {
            width += 7;
            elem.style.width = `${width}%`;
            label.innerHTML = `${width}%`;
        } else {
            width = start;
        }
    });
