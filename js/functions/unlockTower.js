function unlockTower(event){
    const unlocktowerAudio = document.getElementById("unlocktowerAudio")
    if(event.target.id === "towersale1" && coins >= 25000000){
      if(soundActive) {unlocktowerAudio.play()}
      const towersale1 = document.getElementById("towersale1")
      towersale1.classList.add("towersaleoff")
      coins -= 25000000
      coinsDiv.innerText = coins
      
    }else
    if(event.target.id === "towersale2" && coins >= 320000000){
      if(soundActive) {unlocktowerAudio.play()}
      const towersale2 = document.getElementById("towersale2")
      towersale2.classList.add("towersaleoff")
      coins -= 320000000
      coinsDiv.innerText = coins
    }else
    if(event.target.id === "towersale3" && coins >= 2000000000){
      if(soundActive) {unlocktowerAudio.play()}
      const towersale3 = document.getElementById("towersale3")
      towersale3.classList.add("towersaleoff")
      coins -= 2000000000
      coinsDiv.innerText = coins
    }
  }
  