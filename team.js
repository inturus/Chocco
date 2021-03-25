$(document).ready(() => {
    $('.team__item').on('click', (e) => {
        const self = $(e.currentTarget);
        self.siblings('.team__item').removeClass('team__item_active');
        self.toggleClass('team__item_active');
        })
  })

