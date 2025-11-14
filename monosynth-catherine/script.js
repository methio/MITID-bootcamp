// Your variables go here
let synth;
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

    bodyPose.detectStart(video, res => poses = res);

    synth = new p5.MonoSynth();
}

function draw() {
    image(video, 0, 0);

    if (poses.length > 0) {
        let part = poses[0].right_wrist;

        synth.play(
            map(part.y, 0, height, 880, 220),
            map(part.x, 0, width, 1, 0),
            0.1,
            0.2
        );
    }
}