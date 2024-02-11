function gameoverController () {
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        enemy.update();
    
        if (enemy.position.x > 875) {
           hearts--;;
           heartsDiv.innerText = hearts;
          enemies.splice(i, 1);
    
          if (hearts === 0) {
            const gameoverAudio = document.getElementById("gameoverAudio")
            gameoverAudio.play()
            const gameoverDiv = document.getElementById("gameover")
            const gameoverInfo = gameoverDiv.querySelectorAll("div")
            gameoverInfo[1].innerText = `Score : ${waveIndex}`
            gameoverDiv.style.display = "flex"
            const body = document.getElementById("body")
            body.style.pointerEvents = "none"
            return true
          }
        }
      }
}