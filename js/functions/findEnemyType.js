function findEnemyType(type) {
    if (type === 0) {
      return enemyTypes.torch;
    } else if (type === 1) {
      return enemyTypes.tnt;
    }  
  }