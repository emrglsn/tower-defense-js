function changeCurrentBuildingType(event) {
    
    if(currentBuildingType !== event.target.id &&
      !(event.target.id === "towersale1" || event.target.id === "towersale2" || event.target.id === "towersale3")){

      currentBuildingType = event.target.id;
      const div = document.getElementById(event.target.id)
      const buildingBarDiv = document.querySelector(".buildingBar")
      const allDivs = buildingBarDiv.getElementsByClassName("item")
      const inside = div.querySelectorAll("div")
      for(var i = 0; i < allDivs.length;i++){
        allDivs[i].style.backgroundImage = "url('./assets/buttons/Button_Blue.png')"
        allDivs[i].querySelector("div").style.marginTop = "7px"
       }
       div.style.backgroundImage = "url('./assets/buttons/Button_Blue_Pressed.png')"
       inside[0].style.marginTop = "12px"

       if(soundActive){

         const buildingClick = document.getElementById("buildingClick")
         buildingClick.play()
       }
    
       
    }
  }