
const sections = $('.section')
const display = $('.maincontent')

const mobileDetect = new MobileDetect(window.navigator.userAgent)
const isMobile = mobileDetect.mobile()

let inScroll = false

sections.first().addClass('active')

const performTransition = sectionEq => {

    if(inScroll == false) {
        inScroll = true
        const position = sectionEq * -100 
        const sideMenu = $('.fixed-menu__list')
        display.css({
            transform: `translateY(${position}%)`
        })
    
        sections.eq(sectionEq).addClass('active').siblings().removeClass('active')

        sideMenu.find('.fixed-menu__item').eq(sectionEq).addClass('fixed-menu__item--active').siblings().removeClass('fixed-menu__item--active')

        setTimeout(()=> {
            inScroll = false
        }, 1200)
    } 

   
}

const scrollViewport = direction => {
    const activeSection = sections.filter('.active')
    const nextSection = activeSection.next()
    const prevSection = activeSection.prev()


    if(direction == 'next' && nextSection.length) {
        performTransition(nextSection.index())
    }

    if(direction == 'prev' && prevSection.length) {
        performTransition(prevSection.index())
    }
}

$(window).on('wheel', e => {
    e.preventDefault()
    const deltaY = e.originalEvent.deltaY
    if(deltaY > 0) {
        scrollViewport('next')
    }
    if(deltaY < 0) {
        scrollViewport('prev')
    }
})

$(window).on('keydown', e => {
    const tagName = e.target.tagName.toLowerCase()

    if(tagName != 'input' && tagName != 'textarea') {
        if(e.keyCode == 40) {
            scrollViewport('next')
        }

        if (e.keyCode == 38) {
            scrollViewport('prev')
        }
    }
    
})

$('.wrapper').on('touchmove', e => {
    e.preventDefault()
})

$('[data-scroll-to]').click(e => {
    e.preventDefault()

    const $this = $(e.currentTarget)
    const target = $this.attr('data-scroll-to')
    const reqSection = $(`[data-section-id=${target}]`)
    
    performTransition(reqSection.index())
})

if(isMobile) {
    $(".wrapper").swipe({
        swipe:function(event, direction) {
            // const scroller = scrollViewport()
            let scrollDirection = ''
            if(direction == 'up') scrollDirection = 'next'
            if(direction == 'down') scrollDirection = 'prev'
    
            scrollViewport(scrollDirection)
        }
      });
}

