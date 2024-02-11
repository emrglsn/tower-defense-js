function buildingOP () {
    buildings.forEach((building) => {
        building.update();
        building.target = null;
    
        const validEnemies = enemies.filter((enemy) => {
          const distanceX = enemy.center.x - building.center.x;
          const distanceY = enemy.center.y - building.center.y;
          const distance = Math.hypot(distanceX, distanceY);
          return distance < enemy.radius + building.radius;
        });
        if(building.areaDamage){
          validEnemies.forEach((enemy)=>{
            enemy.health -= building.damage
          })
        }
        building.target = validEnemies[0];
    
        for (let i = building.bullets.length - 1; i >= 0; i--) {
          const bullet = building.bullets[i];
          const bulletDamage = building.damage;
          bullet.update();
    
          const distanceX = bullet.enemy.center.x - bullet.position.x;
          const distanceY = bullet.enemy.center.y - bullet.position.y;
          const distance = Math.hypot(distanceX, distanceY);
    
          // hit
          if (distance < bullet.enemy.radius + bullet.radius) {
            bullet.enemy.health -= bulletDamage;
            building.bullets.splice(i, 1);
          }
        }
    
    
    
      });
}