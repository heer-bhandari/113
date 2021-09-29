function preload(){}

function setup(){
    canvas = createCanvas(600 , 500);
    canvas.position(  440 , 250  );
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";}

function draw(){
    image(video , 0 , 0 , 600 , 500);
    tint(tint_color);}

function take_snapshot(){
        save('image_filtering.png');}

function filter123(){
    tint_color = document.getElementById("inputb1").value;}



