//Create variables here
var dog,happyDog,foods,foodStock;
var database;

function preload()
{ dogImage=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,100,100);
  dog.addImage(dogImage);
  dog.scale=0.3;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() { 
  background("cyan");
textSize(20) ;
text("press space to feed the dog",200,40);

  drawSprites();
  if(foods!==undefined){
   text("food left: "+foods,300,100);
  }

  //add styles here

}
function keyPressed(){
  if(keyCode===32){
    console.log("space");
    writeStock(foods);
    dog.addImage(happyDog);
  }
 
}
function readStock(data){
 foods=data.val();

}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
    console.log("else");
  }
  database.ref('/').update({
    Food:x
  })

}



