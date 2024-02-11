function soundController () {
    const backgroundAudio = document.getElementById("backgroundAudio")
    const switchAudio = document.getElementById("switch")
    const sound = document.getElementById("sound")
    switchAudio.play()
    if(soundActive){
        soundActive = false
        backgroundAudio.pause()
        sound.style.backgroundImage = "url('../../assets/icons/soundPressed.png')"
        sound.style.backgroundPosition = "-4px -2px"
    }else{
        soundActive = true
        backgroundAudio.play()
        sound.style.backgroundImage = "url('../../assets/icons/soundOn.png')"
        sound.style.backgroundPosition = "-4px 0px"


    }
}