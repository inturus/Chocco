const form = document.querySelector('#form');
const sendBtn = document.querySelector('#sendButton');

sendBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    if(validateForm(form)) {
        let data = {
            name: form.elements.name.value,
            phone: form.elements.phone.value,
            comment: form.elements.comment.value,
            to: 'real@mail.ug'
        };
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', ()=> {
            // document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('.modal-window').style.display = 'flex';
            document.querySelector('.modal-window__desc').textContent = (JSON.parse(xhr.response)).message;
        })
    }
});

document.querySelector('#modal-window__close').addEventListener('click', (e) => {
    e.preventDefault();
    // document.querySelector('body').style.overflow = 'visible';

            document.querySelector('.modal-window').style.display = 'none';
});

function validateForm(form) {
    let value = true;

    if(!validateField(form.elements.name)) {
        value = false
    }
    if(!validateField(form.elements.phone)) {
        value = false
    }
    if(!validateField(form.elements.comment)) {
        value = false
    }

    return value;
}

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}