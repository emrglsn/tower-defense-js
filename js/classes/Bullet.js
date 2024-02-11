class Bullet {
    constructor(position,enemy,props) {
        this.position = position
        this.velocity = {
            x:0,
            y:0
        }
        this.enemy = enemy
        this.radius = 10
        this.bulletImage = new Image()
        this.bulletImage.src = props.bulletSrc
        this.bulletFrames = {
           current : 0,
           max : props.bulletFrames.max,
           elapsed : 0,
           hold : 1
        }
        
        this.bulletProps = props.bulletProps
    }
    
    draw(){
        const cropWidth = this.bulletImage.width / this.bulletFrames.max
        const crop = {
            position : {
                x:cropWidth * this.bulletFrames.current,
                y:0
            },
            width:cropWidth,
            height:this.bulletImage.height
        }
        ctx.save(); 
        
        ctx.translate(this.position.x , this.position.y-this.bulletProps.translate);
        ctx.rotate(
            this.enemy !== undefined ? Math.atan2(
            this.enemy.center.y - this.position.y +17,
            this.enemy.center.x - this.position.x +3) + Math.PI/2 : 0
        );
        ctx.drawImage(
            this.bulletImage,
            crop.position.x,
            crop.position.y,
            crop.width,
            crop.height,
            -this.bulletProps.x/2, 
            -this.bulletProps.y/2, 
            this.bulletProps.x,
            this.bulletProps.y
        );
        
        ctx.restore(); 

        this.bulletFrames.elapsed++
             if(this.bulletFrames.elapsed % this.bulletFrames.hold === 0) {
                this.bulletFrames.current++
                if(this.bulletFrames.current >= this.bulletFrames.max -1){
                    this.bulletFrames.current = 0
                }
             }
    }

    update(){
        this.draw()

        const angle = Math.atan2(
            this.enemy.center.y - this.position.y,
            this.enemy.center.x - this.position.x
        )

        this.velocity.x = Math.cos(angle)
        this.velocity.y = Math.sin(angle)

        this.position.x += this.velocity.x * 10
        this.position.y += this.velocity.y * 10


    }
}