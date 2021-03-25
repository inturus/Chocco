const form = document.querySelector('#form');
const sendBtn = document.querySelector('#sendButton');

sendBtn.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(form.elements.pay.value);
})

const menu = document.querySelector('#modal-link');
const modal = document.querySelector('.modal');
const menuLink = document.querySelectorAll('.menu__link');
 
menu.addEventListener('click', function(event) {
    event.preventDefault();

    modal.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';

    [].forEach.call(menuLink,function(el){
        el.addEventListener('click', function (e) {
            modal.style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
        })
    });
})

const close = document.querySelector('#close');

close.addEventListener('click', function(event) {
    event.preventDefault();

    modal.style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
})




