// Your variables go here
// a variable to store the video element
let video;
// a variable to store the bodypose model
let bodyPose; 
//  a variable to store the results
let poses = [];

function preload() {
    // Load ressources before setup
    bodyPose = ml5.bodyPose();
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");
    frameRate(15); // set a lower framerate

    video = createCapture(VIDEO);
    video.hide();

    // start the model detection
    bodyPose.detectStart(video, function(results){
        // store the results in a global variable
        poses = results;
    })

}

function draw() {
    // Code that runs repeatedly code here
    // background(200);
    image(video, 0,0);

    // make sure we detect at least one pose
    if(poses.length > 0){
        // target the nose position
        let nose = poses[0].nose;
        // console.log(nose);
        // draw a circle on the nose
        fill(255, 0, 0);
        circle(nose.x, nose.y, 20); 

        // target the left wrist position
        let leftWrist = poses[0].left_wrist;
        if(leftWrist.y < 100){
            // do stuff if hand is raised
            background(0, 255, 0, 150);
        }

        // draw glasses
        // get positions
        let leftEye = poses[0].left_eye;
        let rightEye = poses[0].right_eye;
        // get the distance between eyes
        let distance = dist(leftEye.x, leftEye.y, rightEye.x, rightEye.y);
        console.log(distance);
        // draw glasses
        noFill();
        stroke(255, 0, 0);
        strokeWeight(10);
        circle(leftEye.x, leftEye.y, distance);
        circle(rightEye.x, rightEye.y, distance);
    }
}

function mousePressed(){
    console.log(poses);
    

}