function towerinfoFunc(){
    function levelUpHandlerHTML(){
      const damage = document.getElementById("damage").querySelectorAll("div")
      damage[0].innerText = formatNumber(activeTower.damage)
      damage[1].innerText = "+ " + formatNumber(activeTower.type[activeTower.level].damage)
    
      const rate = document.getElementById("rate").querySelectorAll("div")
      rate[0].innerText = formatNumber(activeTower.rate)
      rate[1].innerText = "+ " + formatNumber(activeTower.type[activeTower.level].rate)
    
      const range = document.getElementById("range").querySelectorAll("div")
      range[0].innerText = formatNumber(activeTower.radius)
      range[1].innerText = "+ " + formatNumber(activeTower.type[activeTower.level].range)
    
    
    }
    towerinfo = true
    const upgrade = document.getElementById("upgrade")
    upgrade.classList.add("upgradeActive")
    upgrade.style.top = activeTower.position.y + "px"
    upgrade.style.left = activeTower.position.x + 260 + "px"
  
    levelUpHandlerHTML()
  
    
    const closebutton = document.getElementById("closebutton")
    closebutton.addEventListener("click",()=>{
      towerinfo = false
      activeTower = null
      upgrade.classList.remove("upgradeActive")
    })
  
    const existingLevelupButton = document.getElementById("levelupbutton");
    const existingDestroyButton = document.getElementById("destroybutton")
    if (existingLevelupButton) {
      existingLevelupButton.removeEventListener("click",()=>{
        activeTower.levelUp()
        levelUpHandlerHTML()
        levelupbutton.innerText = formatNumber(activeTower.type[activeTower.level].levelupcost)
      });
      existingDestroyButton.removeEventListener("click",()=>{
        const towerIndex =  buildings.findIndex((tower)=>{
          return tower === activeTower
        })
        const tileIndex = placementTiles.findIndex((tile)=>{
          return (
            tile.position.x === activeTower.position.x &&
            tile.position.y === activeTower.position.y
            )
          })
          placementTiles[tileIndex].isOccupied = false
          buildings.splice(towerIndex,1)
        closebutton.click()
      })
      existingLevelupButton.parentNode.removeChild(existingLevelupButton);
      existingDestroyButton.parentNode.removeChild(existingDestroyButton)
    }
  
    const destroybutton = document.createElement("div")
    destroybutton.className = "button"
    destroybutton.id = "destroybutton"
    destroybutton.innerText = "Destroy"
    upgrade.appendChild(destroybutton)
  
  
  
    const levelupbutton = document.createElement("div")
    levelupbutton.id = "levelupbutton"
    levelupbutton.className = "button"
    levelupbutton.innerText = "Level up"
    const LUImage = document.createElement("img")
    LUImage.src = "https://cdn1.iconfinder.com/data/icons/lottery-7/64/cash_coins_currency_dollar_finance-256.png"
    LUImage.style.height = "10px"
    LUImage.style.width = "10px"
    levelupbutton.appendChild(LUImage)
    levelupbutton.innerText = "Level up " + formatNumber(activeTower.type[activeTower.level].levelupcost)
    upgrade.appendChild(levelupbutton)
  
   
  
    levelupbutton.addEventListener("click",()=>{
      if(coins >= activeTower.levelupcost && activeTower.level < 5){
        coins -= activeTower.levelupcost
        coinsDiv.innerText = formatNumber(coins)
        activeTower.levelUp()
        levelUpHandlerHTML()
        levelupbutton.innerText = "Level up" + formatNumber(activeTower.type[activeTower.level].levelupcost)
        if(soundActive){
          const levelupAudio = document.getElementById("levelupAudio")
          levelupAudio.play()
  
        }
      }
    })
  
    destroybutton.addEventListener("click",()=>{
      const towerIndex =  buildings.findIndex((tower)=>{
        return tower === activeTower
      })
      const tileIndex = placementTiles.findIndex((tile)=>{
        return (
          tile.position.x === activeTower.position.x &&
          tile.position.y === activeTower.position.y
          )
        })
        placementTiles[tileIndex].isOccupied = false
        buildings.splice(towerIndex,1)
      closebutton.click()
    })
  
  
  }