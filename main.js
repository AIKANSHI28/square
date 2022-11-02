noseX=0;
noseY=0;
diffrence=0;
leftWristX=0;
rightWristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(560,100);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('POSE NET IS INITIALIZED!');
}



function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        
        leftWristX=results[0].pose.leftWrist.x; 
        rightWristX=results[0].pose.rightWrist.x;
        diffrence=floor(leftWristX-rightWristX);

        console.log("leftWristX ="+leftWrist+"rightWristX ="+rightWristX+"difference="+diffrence);
    }
}

function draw(){
    background('#FFD700');
    document.getElementById("square_side").innerHTML="width and hieght of a square will be="+diffrence+"px";
    fill('#964B00');
    stroke('#964B00');
    square(noseX,noseY,diffrence)
}