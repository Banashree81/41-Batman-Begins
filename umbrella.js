class Umbrella{

    constructor(x,y){

        this.body = Bodies.circle(x,y,50, { isStatic: true})
        World.add(world, this.body)
    }


    display(){

        fill("blue")
        circle(this.body.position.x, this.body.position.y, 100)

    }

    
}