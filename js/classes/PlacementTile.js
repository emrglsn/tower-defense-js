class PlacementTile {
    constructor(position){
        this.position = position 
        this.size = 40 
        this.color = "#DCFFB7"
        this.isOccupied = false
    }

    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x,this.position.y,this.size,this.size)
        ctx.strokeStyle = "#000"
        ctx.strokeRect(this.position.x,this.position.y,this.size,this.size)
    }
    update(mouse) {
        this.draw()
    
        if (
          mouse.x > this.position.x &&
          mouse.x < this.position.x + this.size &&
          mouse.y > this.position.y &&
          mouse.y < this.position.y + this.size
        ) {
          this.color = 'rgba(255, 164, 71, 0.75)'
        } else this.color = 'rgba(255, 255, 255, 0.15)'
      }
    
}