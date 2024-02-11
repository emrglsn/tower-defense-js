function mousemove () {
    window.addEventListener("mousemove", (event) => {
        mouse.x = event.clientX - 230;
        mouse.y = event.clientY;
      
        activeTile = null;
        !towerinfo ? activeTower = null : ""
        canvas.style.cursor = "url('../../assets/pointers/default.png') 20 20,auto"
      
        for (let i = 0; i < placementTiles.length; i++) {
          const tile = placementTiles[i];
          if (
            mouse.x > tile.position.x &&
            mouse.x < tile.position.x + tile.size &&
            mouse.y > tile.position.y &&
            mouse.y < tile.position.y + tile.size
          ) {
            activeTile = tile;
            canvas.style.cursor = "url('../../assets/pointers/pointer.png') 20 20,auto"
            break;
          }
        }
        for (let i = 0; i < buildings.length; i++) {
          const tile = buildings[i];
          
          if (
            mouse.x > tile.position.x &&
            mouse.x < tile.position.x + 32 &&
            mouse.y > tile.position.y &&
            mouse.y < tile.position.y + 32 && !towerinfo
            
          ) {
            activeTower = tile
            break;
          }
        }
      });
}