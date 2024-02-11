function enemyHealthController(){
    for(let i = enemies.length -1 ;i>=0;i-- ){
        if (enemies[i].health <= 0) {
          const enemyIndex = enemies.findIndex((enemy) => {
            return enemies[i] === enemy;
          });
          if (enemyIndex !== -1) {
            coins += enemies[enemyIndex].coins;
            enemies.splice(enemyIndex, 1);
            coinsDiv.innerText = formatNumber(coins);
          }
        }
      }
}