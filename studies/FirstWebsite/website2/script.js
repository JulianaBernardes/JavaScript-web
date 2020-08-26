function load(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('image')
var data = new Date()
var hour = data.getHours()
msg.innerHTML = `It's now ${hour} o'clock.`
if(hour >= 0 && hour < 12){    
    img.src = 'PicMorning.png'
    document.body.style.background = '#ffc174'
}else if (hour >= 12 && hour <= 18){   
    img.src = 'PicAfternoon.png'
    document.body.style.background = '#e6a271'
}else{    
    img.src = 'PicNight.png'
    document.body.style.background = '#082243'
}
}
