canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
race_track_image_array=["race track 1.jpg","Race Track 2.jpg","race track 3.jpg","race track 4.jpg"];
random_number=Math.floor(Math.random()*4);
car_width=100;
car_height=90;
car_x=10;
car_y=10;
background_image=race_track_image_array[random_number];
console.log("background_image="+background_image);
car_image="car1.png";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    car_imgTag=new Image();
    car_imgTag.onload=uploadrover;
    car_imgTag.src=car_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);