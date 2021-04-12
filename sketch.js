var cat, catImg1, catImg2, catImg3, catImg4;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;

var garden;

function preload() {
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png");
    catImg3 = loadAnimation("images/cat3.png");
    catImg4 = loadAnimation("images/cat4.png");

    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png");
    mouseImg3 = loadAnimation("images/mouse3.png");
    mouseImg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    cat = createSprite(200,200,50,50);
    mouse = createSprite(200,100,50,50);
}

function draw() {
    background("white");

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.addAnimation("catLastImage", catImg3);
        cat.changeAnimation("catLastImage");
    }

    keyPressed();

    drawSprites();
}


function keyPressed(){
    if(keyCode ===  LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
    }
}
