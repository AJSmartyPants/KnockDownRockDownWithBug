class Block{
    constructor(x, y, width, height, randval){
        var options = {
            //width: width,
            //height: height,
            //image: image,
            randval: randval,
            restitution: 0.001,
            friction: 1,
            density: 1
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("blockimg.png");
        this.image2 = loadImage("blockimg2.png");
        this.image3 = loadImage("blockimg3.png");
        World.add(world, this.body);
    }
    display(){
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        if(randval === 1){
            image(this.image, this.body.position.x, this.body.position.x, this.width, this.height);
        } else if(randval === 2){
            image(this.image2, this.body.position.x, this.body.position.x, this.width, this.height);
        } else if(randval === 3){
            image(this.image3, this.body.position.x, this.body.position.x, this.width, this.height);
        }
        pop();
    }
}