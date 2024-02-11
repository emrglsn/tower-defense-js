function canvasclick () {
    canvas.addEventListener("click", () => {
      if(soundActive){

        backgroundAudio.play()
      }
        const buildingType = findBuildingType(currentBuildingType);
      
        if(activeTower && !towerinfo){
          towerinfoFunc()
        }
        if (activeTile && !activeTile.isOccupied && buildingType ) {
          buildings.push(
            new Building(
              {
                x: activeTile.position.x,
                y: activeTile.position.y,
              },
              buildingType
            )
          );
          activeTile.isOccupied = true;
        }
      
      
      });
}