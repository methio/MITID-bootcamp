// Your variables go here
let sensor;
let synth;
let osc;


function preload() {
    // Load ressources before setup
    loadBoard();
}

function setup() {
    // Code that runs once here
    createCanvas(500, 500).parent("sketch-container");

    synth = new p5.MonoSynth();
    osc = new p5.Oscillator('triangle');

    sensor = new five.Sensor("A0");
    sensor.on("change", function() {
        console.log(sensor.scaleTo(0, 10));
        // background(`hsl(400, 100%, ${this.scaleTo(0, 100)}%)`);
        // synth.play(this.scaleTo(100, 1000));

        // osc.start();
        // osc.freq(this.scaleTo(100, 1000), .1);
        // osc.amp(map(mouseY, 0, height, 1, 0), 0.1);
  });
}

function draw() {
    // Code that runs repeatedly code here
    
    
}