function autoWaveController () {
    if(enemies.length === 0 && autowave){
        const wave = setWaveType()
        for (let e = 0; e < wave.length; e++) {
          const enemyType = findEnemyType(wave[e]);
          setTimeout(()=>{
            
            enemies.push(
              new Enemy(
                { x: States.waypoints[0].x , y: States.waypoints[0].y },
                enemyType,
                waveIndex + 1 
              )
            );
          },e*450)
          
        }
      
        waveIndex++;
        waveButton.innerText = "next wave " + waveIndex;
      }
}