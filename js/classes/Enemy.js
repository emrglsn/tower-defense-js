class Enemy {
  constructor(
    position,
    type,
    waveIndex
  ) {
    this.position = position;
    this.waveIndex = waveIndex
    this.height = type.height;
    this.width = type.width;
    this.index = 0;
    this.speed = type.speed;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.radius = 20;
    this.health = type.health * Math.pow(waveIndex,3)
    this.coins = type.coins * Math.pow(waveIndex,2.5)
    this.EnemyFrames = {
      current : 0,
      max: type.frames.max, 
      elapsed : 0,
      hold : 10
    }
    this.EnemyImage = new Image()
    this.EnemyImage.src = type.enemySrc
    this.maxHealth = type.health * Math.pow(waveIndex,3)
  }

  draw() {
    const cropWidth = this.EnemyImage.width / this.EnemyFrames.max
    const crop = {
        position : {
            x:cropWidth * this.EnemyFrames.current,
            y:0
        },
        width:cropWidth,
        height:this.EnemyImage.height
    }

    ctx.drawImage(this.EnemyImage,
      crop.position.x,
      crop.position.y,
      crop.width,
      crop.height,
      this.position.x,
      this.position.y-40,
      80,
      80
      )

      this.EnemyFrames.elapsed++
             if(this.EnemyFrames.elapsed % this.EnemyFrames.hold === 0) {
                this.EnemyFrames.current++
                if(this.EnemyFrames.current >= this.EnemyFrames.max -1){
                    this.EnemyFrames.current = 0
                }
             }
    // health
    
    ctx.fillStyle = "#6D2932";
    ctx.fillRect(this.position.x+22, this.position.y - 22, 35 , 5);
    ctx.fillStyle = "#EBD9B4";
    ctx.fillRect(this.position.x+22, this.position.y - 22, 35  *((this.health * 100 ) / this.maxHealth) / 100, 5);

  }

  update() {
    this.draw();

    

    //calc

    const waypoint = States.waypoints[this.index];
    const distanceX = waypoint.x - this.center.x;
    const distanceY = waypoint.y - this.center.y;
    const angle = Math.atan2(distanceY, distanceX);

    this.velocity.x = Math.cos(angle) * this.speed;
    this.velocity.y = Math.sin(angle) * this.speed;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };

    if (
      Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) <
        Math.abs(this.velocity.x) &&
      Math.abs(Math.round(this.center.y) - Math.round(waypoint.y)) <
        Math.abs(this.velocity.y) &&
      this.index < States.waypoints.length - 1
    ) {
      this.index++;
    }
  }
}
