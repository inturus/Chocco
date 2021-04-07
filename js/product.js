$(document).ready(() => {
    $('.product__item').on('click', (e) => {
        e.preventDefault();
        const self = $(e.currentTarget);
        self.siblings('.product__item').find('.product__desc').removeClass('product__desc_active');
        self.find('.product__desc').toggleClass('product__desc_active');
        if(document.querySelector('.product').scrollWidth <= 480) {
            if($('.product__desc').find('.product__desc_active') == true) {
                // $('.product__head').toggleClass('product__head_mob')
                console.log('leo')
            }
        }
    })
})