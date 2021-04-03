

let video = document.querySelector('video')
let p = 0

let player = document.querySelector('.video__player')



const play = document.querySelector('.video__state')
play.addEventListener('click', () => {
    function changePos (el) {
        el.style.left = `${currentTimePercent}%`
    }

    

    const durationSec = Math.floor(video.duration)
    
    let progress = document.querySelector('.video__progressbar-btn')
    document.querySelector('.video__time-estimate').innerText = (formatTime(durationSec))

    if(p == 0) {
        player.classList.add('video__player--active')
        player.classList.remove('video__player--paused')
        video.play()
        p = 1
    } else {
        player.classList.add('video__player--paused')
        video.pause()
        p = 0
    }
    video.addEventListener('timeupdate', ()=> {
        let currentTimePercent = video.currentTime / durationSec * 100
        document.querySelector('.video__time-completed').innerText = (formatTime(video.currentTime))
        progress.style.left = `${currentTimePercent}%`
    })
})

const formatTime = timeSec => {
    const roundTime =Math.round(timeSec)
    const minutes = addZero(Math.floor(roundTime/60))
    const seconds = addZero(roundTime - minutes*60)

    function addZero(num) {
        return num<10 ? `0${num}` : num
    }

    return `${minutes} : ${seconds}`
}

document.querySelector('.video__progressbar').addEventListener('click',(e) => {
            const bar = $(e.currentTarget);
            const clickedPosition = e.layerX;
            const newButtonPositionPercent = (clickedPosition / bar.width()) * 100
            const newPlybackPositionSec = (video.duration / 100) * newButtonPositionPercent
            document.querySelector('.video__progressbar-btn').style.left = `${newButtonPositionPercent}%`
            video.currentTime = newPlybackPositionSec
        })

document.querySelector('.video__splash').addEventListener('click', ()=>{
    play.click()
})

