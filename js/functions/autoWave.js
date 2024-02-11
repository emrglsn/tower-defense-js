function autoWave () {
    const autowaveButton = document.getElementById("autowave")
    if(autowave){
        autowave = false
        autowaveButton.style.backgroundImage = "url('./assets/buttons/Button_Red.png')"
        autowaveButton.style.paddingTop = "20px"
        autowaveButton.style.bottom = "120px"
    }else{
        autowave = true
        autowaveButton.style.backgroundImage = "url('./assets/buttons/Button_Red_Pressed.png')"
        autowaveButton.style.paddingTop = "30px"
        autowaveButton.style.bottom = "116px"
    }
} 