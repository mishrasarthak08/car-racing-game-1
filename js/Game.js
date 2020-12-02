class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();}
      car1 = createSprite(100,200); 
      car1.addImage(carimg1);
      car2 = createSprite(300,200); 
      car2.addImage(carimg2);
      car3 = createSprite(500,200); 
      car3.addImage(carimg3);
      car4 = createSprite(700,200);
      car4.addImage(carimg4); 
      cars =[car1,car2,car3,car4];
    
  }
  play(){
    form.hide();
    Player.getPlayerinfo();
    player.getcarsatend();
    //console.log(allPlayers);
    if(allPlayers!==undefined){
      background("#c68767");
      image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index =0;
      var x= 175;
      var y ;
      for(var plr in allPlayers){
        index = index+1;
        x = x+200;
        y = displayHeight-allPlayers[plr].distance;
        cars[index-1].x= x;
        cars[index-1].y= y;
        if(index===player.index){
          ellipseMode(RADIUS);
          stroke(10);
          fill("red");
          ellipse(x,y,30,30);
        cars[index-1].shapeColor = "red";
        camera.position.x = displayWidth/2;
        camera.position.y = cars[index-1].y;
        }
      }    }
     
      if(keyIsDown(UP_ARROW)&&player.index!==null ){
        player.distance = player.distance+10;
        //console.log(player.distance);
        player.update();
      }
      if(player.distance>=3750){
        gameState =2;
        player.rank = player.rank+1;
        Player.updatecarsatend(player.rank);
      
      }

    drawSprites();
  }
  end(){
    console.log("game ended")
    console.log(player.rank);
  }
}
