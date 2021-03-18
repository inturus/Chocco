const form = document.querySelector('#form');
const sendBtn = document.querySelector('#sendButton');

sendBtn.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(form.elements.pay.value);
})

const menu = document.querySelector('#modal-link');
const modal = document.querySelector('.modal');
 
menu.addEventListener('click', function(event) {
    event.preventDefault();

    modal.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
})

const close = document.querySelector('#close');

close.addEventListener('click', function(event) {
    event.preventDefault();

    modal.style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
})