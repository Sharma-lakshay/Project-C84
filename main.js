canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
car_width= 90;
car_height= 70;
car1_width= 90;
car1_height= 70;

background_image= "racing_road.jpg";
car_image= "download.png";
car1_image= "car1.png";

car_x= 10;
car_y= 10;
car1_x= 10;
car1_y= 100;

function add() {
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_image;
    
    car_imgTag= new Image();
    car_imgTag.onload= uploadcar;
    car_imgTag.src= car_image;

    car1_imgTag= new Image();
    car1_imgTag.onload= uploadcar1;
    car1_imgTag.src= car1_image;

}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
   keyPressed= e.keycode;
   console.log(keyPressed);
   if (keyPressed=="38")
   {
    up();
    console.log("up");
   }

   
  if (keyPressed=="40")
   {
    down();
    console.log("down");
   } 


   if (keyPressed=="39")
   {
    right();
    console.log("right");
   }


   if (keyPressed=="37")
   {
    left();
    console.log("left");
   }
}