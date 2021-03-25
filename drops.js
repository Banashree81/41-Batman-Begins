class Drop{

    constructor(x,y){

        var options = {
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,3, options)
        World.add(world, this.body)
    }


    display(){

        fill("blue")
        circle(this.body.position.x, this.body.position.y, 6)

    }

     update(){
       // console.log(this.body.position.y)
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:this.body.position.x, y: 0})
        }

     }
}