function del() {
    arr = document.querySelectorAll('.fixed-menu__item')
    arr.forEach(element => {
        element.classList.remove('fixed-menu__item--active')
    });
}

var i = 0;
var x = 0;

var bullet = document.querySelectorAll('.fixed-menu__link');

bullet.forEach(element => {
    element.addEventListener('click', ()=>{
        del();
        let link = element.closest('.fixed-menu__item')
        link.classList.add('fixed-menu__item--active')
        console.log(link.querySelector('a').getAttribute('id'))
        if(link.querySelector('a').getAttribute('id') == `about-btn`) {
            i = 0
        } else if (link.querySelector('a').getAttribute('id') == `why-btn`) {
            i = 1
        } else if (link.querySelector('a').getAttribute('id') == `bars-btn`) {
            i = 2
        } else if (link.querySelector('a').getAttribute('id') == `team-btn`) {
            i = 3
        } else if (link.querySelector('a').getAttribute('id') == `product-btn`) {
            i = 4
        } else if (link.querySelector('a').getAttribute('id') == `reviews-btn`) {
            i = 5
        } else if (link.querySelector('a').getAttribute('id') == `video-btn`) {
            i = 6
        } else if (link.querySelector('a').getAttribute('id') == `order-btn`) {
            i = 7
        } else if (link.querySelector('a').getAttribute('id') == `contacts-btn`) {
            i = 8
        }
        console.log('click '+i)
})
})



function scr(event) {
    event.preventDefault()
    let direction = event.deltaY

    if(direction > 0 && i == 0) {
        element = document.querySelector(`#why-btn`);
        element.click();
        i=1;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if(direction < 0 && i == 1) {
        element = document.querySelector(`#about-btn`);
        element.click();
        i=0;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if(direction > 0 && i == 1) {
        element = document.querySelector(`#bars-btn`);
        element.click();
        i=2;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if(direction < 0 && i == 2) {
        element = document.querySelector(`#why-btn`);
        element.click();
        i=1;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if (direction > 0 && i == 2) {
        element = document.querySelector(`#team-btn`);
        element.click();
        i=3;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if (direction < 0 && i == 3) {
        element = document.querySelector(`#bars-btn`);
        element.click();
        i=2;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if (direction > 0 && i == 3) {
        element = document.querySelector(`#product-btn`);
        element.click();
        i=4;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if (direction < 0 && i == 4) {
        element = document.querySelector(`#team-btn`);
        element.click();
        i=3;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if (direction > 0 && i == 4) {
        element = document.querySelector(`#reviews-btn`);
        element.click();
        i=5;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if (direction < 0 && i == 5) {
        element = document.querySelector(`#product-btn`);
        element.click();
        i=4;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if (direction > 0 && i == 5) {
        element = document.querySelector(`#video-btn`);
        element.click();
        i=6;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if (direction < 0 && i == 6) {
        element = document.querySelector(`#reviews-btn`);
        element.click();
        i=5;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if (direction > 0 && i == 6) {
        element = document.querySelector(`#order-btn`);
        element.click();
        i=7;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if (direction < 0 && i == 7) {
        element = document.querySelector(`#video-btn`);
        element.click();
        i=6;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if (direction > 0 && i == 7) {
        element = document.querySelector(`#contacts-btn`);
        element.click();
        i=8;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } else if (direction < 0 && i == 8) {
        element = document.querySelector(`#order-btn`);
        element.click();
        i=7;
        del();
        element.closest('.fixed-menu__item').classList.add('fixed-menu__item--active')
    } 
    console.log('scroll '+i)
  } 


const el = document.querySelector('.wrapper');
// onwheel = setTimeout(scr, 400)
el.onwheel = scr;


// $(document).ready(function(){
//     $('.wrapper').bxSlider( {
//         mode: 'vertical',
//         infiniteLoop: 'false',
//         keyboardEnabled: true,

//     });
//   });