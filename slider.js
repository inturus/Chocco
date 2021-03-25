
 (function () {
    let slides = document.querySelectorAll('.bars__slide');
    let container = document.querySelector('.bars__slider');
    let rightBtn = document.querySelector('#right');
    let leftBtn = document.querySelector('#left');
    let step = setCurrentWidth();
    let maxRight = step * slides.lenght;
    let currentRight = 0;

    container.style.right = currentRight;

    window.addEventListener('resize',()=>{
        step = setCurrentWidth();
    })

    rightBtn.addEventListener('click', (e)=> {
        console.log('r')
        console.log(step)
        console.log(slides.length)
        console.log('current right is' + currentRight)
        console.log('maxRight is ' + maxRight)
        changeSlide(e,'right')
        console.log(currentRight)
    })
    leftBtn.addEventListener('click', (e)=> {
        changeSlide(e,'left')
    })
    
    function changeSlide(e,direction) {
        e.preventDefault();
        if(direction == 'right') {
            if(currentRight < maxRight) {
                currentRight += step;
                container.style.right = `${currentRight}px`
            }
            if(currentRight == maxRight) {
                currentRight += 0;
                container.style.right = `0px`
            }
        } else {
                if(currentRight >= 0) {
                    currentRight -= step;
                    container.style.right = currentRight + 'px';
                }
                if (currentRight < 0) {
                    currentRight = maxRight - step;
                    container.style.right = currentRight + 'px';
                }
        }
        
    }

    function setCurrentWidth() {
        let itemWidth = document.querySelector('.bars__slider').clientWidth;
        slides.forEach((slide)=>{
            slide.style.maxWidth = `${itemWidth}px`
        })
        return itemWidth;
    }
 })
 (

 );
   
