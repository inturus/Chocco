$(document).ready(()=> {
    const alena = document.querySelector('#alena-a');
    const vadim = document.querySelector('#vadim-a');
    const maria = document.querySelector('#maria-a');
    
    $('#im1').css('border', '4px solid #365A49');

    

    alena.addEventListener('click', (e)=> {
        e.preventDefault();
        $('#alena-item').addClass('active');
        $('#vadim-item').removeClass('active');
        $('#maria-item').removeClass('active');
        $('#im1').css('border', '5px solid #365A49');
        $('#im2').css('border', '5px solid transparent');
        $('#im3').css('border', '5px solid transparent');

        $('.reviews__name-mob').text('Алёна Хмельницкая')
    })
    vadim.addEventListener('click', (e)=> {
        e.preventDefault();
        $('#alena-item').removeClass('active');
        $('#vadim-item').addClass('active');
        $('#maria-item').removeClass('active');
        $('#im2').css('border', '5px solid #365A49');
        $('#im1').css('border', '5px solid transparent');
        $('#im3').css('border', '5px solid transparent');

        $('.reviews__name-mob').text('Вадим Грачев')
    })
    maria.addEventListener('click', (e)=> {
        e.preventDefault();
        $('#alena-item').removeClass('active');
        $('#vadim-item').removeClass('active');
        $('#maria-item').addClass('active');
        $('#im3').css('border', '5px solid #365A49');
        $('#im2').css('border', '5px solid transparent');
        $('#im1').css('border', '5px solid transparent');
        
        $('.reviews__name-mob').text('Мария Орлова')
    })
})