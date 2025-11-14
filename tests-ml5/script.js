// Your variables go here
let video;
let bodyPose;
let poses = [];

function preload() {
    // Load ressources before setup
    bodyPose = ml5.bodyPose();
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");

    video = createCapture(VIDEO);
    video.hide();

    bodyPose.detectStart(video, function(results){
        poses = results;
    });
}

function draw() {
    // Code that runs repeatedly code here
    // background(200);

    image(video, 0,0);

    if(poses.length > 0){
        // circle(poses[0].left_eye.x, poses[0].left_eye.y, 20);
        let lear = poses[0].left_ear;
        let rear = poses[0].right_ear;

        // hat
        strokeWeight(4);
        line(lear.x, lear.y - 140, rear.x, rear.y - 140);
        /*
        coordinates of the quad
             4 _________ 3
              /         \
             /           \
            /             \
        ___/_______________\____
           1                2
        */
        quad(   rear.x + 20, 
                rear.y - 140,

                lear.x - 20,
                lear.y - 140,

                lear.x - 40,
                lear.y - 200,

                rear.x + 40,
                rear.y - 200
        );


        // show green background if hand is up
        let hand = poses[0].right_wrist;
        circle(hand.x, hand.y, 30);

        if(hand.y < 100){
            // semi transparent green background
            background(0, 255, 0, 50); 
        }

        // get distance
        let leye = poses[0].left_eye;
        let reye = poses[0].right_eye;

        let distance = dist(leye.x, leye.y, reye.x, reye.y);
        console.log(distance);

        // draw glasses
        strokeWeight(2);
        stroke(255,0,0);
        noFill();

        circle(leye.x, leye.y, distance);
        


        
    }
    

}

function mousePressed() {

        console.log(poses[0]);
}