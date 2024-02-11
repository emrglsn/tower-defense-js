class Building {
    constructor(position,type) {
        this.type = type
        this.position = position
        this.level = 0
        this.damage = type[this.level].damage
        this.center = {
            x: this.position.x + 32 / 2,
            y: this.position.y + 32 / 2
        }
        this.areaDamage = type[this.level].areaDamage
        this.image = new Image()
        this.image.src = this.type[this.level].src
        this.weaponImage = new Image()
        this.weaponImage.src = this.type[this.level].weaponSrc
        this.bullets = []
        this.radius = this.type[this.level].range
        
        this.target
        this.elapsedSpawnTimes = 0
        this.rate = this.type[this.level].rate
        this.cost = this.type[this.level].cost
        this.frames = {
            current:this.type[this.level].frames.current,
            max:this.type[this.level].frames.max
        }
        this.weaponFrame = {
            current : 0,
            max : this.type[this.level].weaponFrames.max,
            elapsed :0,
            hold: 3
        }
        this.size = type[this.level].size
        this.weaponProps = type[this.level].weaponProps
        this.levelupcost = type[this.level].levelupcost
        this.weaponRotate = type[0].weaponRotate
        
        
    }

    draw(){
        
        const cropWidth = this.image.width / this.frames.max
        const crop = {
            position : {
                x:cropWidth * this.frames.current,
                y:0
            },
            width:cropWidth,
            height:this.image.height
        }

        // building
        ctx.drawImage(this.image,
             crop.position.x,
             crop.position.y,
             crop.width,
             crop.height,
             this.position.x,
             this.position.y- this.size.dy,
             this.size.dw,
             this.size.dh
             )


            // range circle

            if(this.areaDamage){

                ctx.beginPath()
                ctx.fillStyle = "rgba(255,255,255,0.07)"
                ctx.arc(this.center.x,this.center.y,this.radius,0,Math.PI * 2)
                ctx.fill()
                ctx.closePath()
            }

    }

    drawWeapon(){

        const cropWidth = this.weaponImage.width / this.weaponFrame.max
        const crop = {
            position : {
                x:cropWidth * this.weaponFrame.current,
                y:0
            },
            width:cropWidth,
            height:this.weaponImage.height
        }
        
        ctx.save(); 
        
        ctx.translate(this.position.x +20, this.position.y + this.weaponProps.translate);
        ctx.rotate(
            this.target !== undefined && this.weaponRotate? Math.atan2(
            this.target.position.y - this.position.y,
            this.target.position.x - this.position.x) + Math.PI/2 : 0
        );
        ctx.drawImage(
            this.weaponImage,
            crop.position.x,
            crop.position.y,
            crop.width,
            crop.height,
            -this.weaponProps.size/2, 
            -this.weaponProps.size/2, 
            this.weaponProps.size,
            this.weaponProps.size
        );
        
        ctx.restore(); 
        

            this.weaponFrame.elapsed++
            if(this.weaponFrame.elapsed % this.weaponFrame.hold === 0) {
                // this.weaponFrame.hold
                if(this.target){
                    this.weaponFrame.current++

                }
                    
               if(this.weaponFrame.current >= this.weaponFrame.max -1){
                   this.weaponFrame.current = 0
               }
            }
        
    }
    
    levelUp(){
        this.level = this.level + 1
        this.damage = this.type[this.level].damage
        this.radius = this.type[this.level].range;
        this.rate = this.type[this.level].rate;
        this.cost = this.type[this.level].cost
        this.size = this.type[this.level].size
        this.image.src = this.type[this.level].src
        this.weaponImage.src = this.type[this.level].weaponSrc
        this.weaponFrame.max = this.type[this.level].weaponFrames.max
        this.frames.current = this.type[this.level].frames.current
        this.levelupcost = this.type[this.level].levelupcost
        this.weaponProps = this.type[this.level].weaponProps
    }

    update(){
        this.draw()
        if(this.elapsedSpawnTimes % this.rate === 0 && this.target && !this.areaDamage){
            this.bullets.push(
                new Bullet({x:this.center.x ,y:this.center.y},this.target,this.type[this.level])
                )
            }
            this.elapsedSpawnTimes++
            this.drawWeapon()

    }
}