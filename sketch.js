const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, drops= []

function preload(){

bruce_walking = loadAnimation("WalkingFrame/walking_1.png","WalkingFrame/walking_2.png","WalkingFrame/walking_3.png", 
"WalkingFrame/walking_4.png", "WalkingFrame/walking_5.png","WalkingFrame/walking_6.png","WalkingFrame/walking_7.png",
"WalkingFrame/walking_8.png")

thunderbolt1 = loadImage("thunderbolt/1.png")
thunderbolt2 = loadImage("thunderbolt/2.png")
thunderbolt3 = loadImage("thunderbolt/3.png")
thunderbolt4= loadImage("thunderbolt/4.png")
    
}

function setup(){
   canvas = createCanvas(700,700)

    engine = Engine.create();
    world = engine.world;

   bruce= createSprite(300, 550)
   bruce.addAnimation("bruce_walking", bruce_walking)
   bruce.scale = 0.4

   umbrella = new Umbrella(300,450)

   maxDrops = 100

   if(frameCount%180===0){
   for(var i =0; i < maxDrops; i++){
       drops.push(new Drop(random(0,690), random(0,690)))
   }
   }
    

    
}

function draw(){

    Engine.update(engine)
    background(0)

    drawSprites()

    
    //umbrella.display()
    for(var i =0; i < drops.length; i++){
       drops[i].display();
       drops[i].update()
    }

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(50,650), 80, 10, 10);
        switch(rand){
            case 1: thunder.addAnimation("1", thunderbolt1);
            break;
            case 2: thunder.addAnimation("2",thunderbolt2);
            break; 
            case 3: thunder.addAnimation("3", thunderbolt3);
            break;
            case 4: thunder.addAnimation("4",thunderbolt4);
            break; 
           
            default: break;
        }
        thunder.scale = random(0.2,0.5)
        thunder.lifetime= 14
       
    }
    

}   

