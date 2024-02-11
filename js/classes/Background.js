class Background {
    constructor(){
        this.imageSrcList = [
            "./assets/backgrounds/map1.png",
            "./assets/backgrounds/map2.png",
            "./assets/backgrounds/map3.png",
            "./assets/backgrounds/map4.png",
            "./assets/backgrounds/map6.png",
            "./assets/backgrounds/map7.png",
            "./assets/backgrounds/map8.png",
          
          ];
        this.index = 0;
        this.frames = {
            current:0,
            elapsed:0,
            hold:8
        }
    }
    draw() {
        if (this.index >= this.imageSrcList.length-1) {
            this.index = 0;
        }

        const currentImageSrc = this.imageSrcList[this.index];
        const currentImage = new Image();
        currentImage.src = currentImageSrc;

        ctx.drawImage(
            currentImage,
            0,
            0,
            canvas.width,
            canvas.height
        );
        this.frames.elapsed++
        if(this.frames.elapsed % this.frames.hold === 0){
            this.index++
            if(this.index >= this.imageSrcList.length){
                this.index = 0
            }
        }

    }
}