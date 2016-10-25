var img;
var smallPoint, largePoint;
var SCREEN_WIDTH = 1080;
var SCREEN_HEIGHT = 720;
var CenterX = SCREEN_WIDTH / 2;
var CenterY = SCREEN_HEIGHT / 2;

function preload() {
    //font = loadFont("assets/reg.otf");
    //img = loadImage("assets/moonwalk.jpg");
}

function setup() {
    var myCanvas = createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    myCanvas.parent('myContainer');
    smallPoint = 20;
    largePoint = 100;
    //imageMode(Center);
    noStroke();
    background(0);
    var fountain1 =
        {
            name: "test", 
            colors: ["blue", "green", "red"],
            lifetime: 300,
            angle: [330, 360],
            size: [2, 8],
            speedx: 0.7,
            x:0.2,
            y:0.1  
        };
    //var fountain = newFountain(null, objectDef);
    fountain1 = newFountain(null, t);
}

function Particle() {
    this.velocity = createVector();
    this.partSize = 0; // width & height or scale factor for images
    this.life = 0.35; // 0 to 1
    this.rotation = 36; // in degrees
    this.id = 0; // unique id counter per Fountain
}

//Fountain(defs, nameOrF [ , x, y]);

//x.length = 10; // number of active particles
//x.left // number of particles left to create
//x.done // Fountain has generated all particles and they have all terminated
//x.Draw(); // Draw all particles
//x.Step(); // Step all particles, e.g. location.add(velocity)
//x.Stop(); // Set left=0 and clear all active particles
//x.Create( [x, y [, angle]]); // Create one particle, returns a Particle object or null if left == 0
//x.CreateN( [x, y [, angle]]); // Uses a Fountain's "rate" property to create bursts of particles

function Fountain_display(name, proc) {
    fdisplay[name] = proc
}

function fpoint(fountain, particle) {
    stroke (fountain.colors[Math.floor(particle.life*fountain.colors.length)]);
    noFill();
    point(particle.location.x, particle.location.y);
}

va
function draw() {
    // LINE 1
    var rand_xpos = random(-1, 2) * 20;
    var rand_ypos = random(-1, 2) * 5;
    var rand_length = random(75) * 4;
    var rand_width = random(50) * 0.01;
    angleMode(DEGREES);
    var r_col_lo = random(0, 64);
    var r_col_hi = random(120, 256);
    var red = 0;
    var blue = (random(255) * 1090) % 255;
    var green = 0;
    var c = color(red, blue, green);
    fill(c);
    var a = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(mouseX, mouseY);
    push();
    rotate(a);
    shearX(a);
    shearY(a);
    ellipse(rand_xpos, rand_ypos, rand_length, rand_width);
    pop();

    // LINE 2
    rand_xpos = random(-1, 2) * 40;
    rand_ypos = random(-2, 3) * 3;
    rand_length = random(50) * 5;
    rand_width = random(100) * 0.0025;
    angleMode(RADIANS);
    red = random(r_col_lo, r_col_hi);
    blue = 0;
    green = 0;
    c = color(red, blue, green)
    fill(c);
    var b = cos(mouseY - height / 2);
    translate(mouseX - width / 2, mouseY - height / 2);
    push();
    rotate(b);
    shearY(a/b);
    shearX(b/a);
    ellipse(rand_xpos, rand_ypos, rand_length, rand_width);
    pop();

    // Line 3
    rand_xpos = random(-3, 4) * 10;
    rand_ypos = random(-1, 2) * 4;
    rand_length = random(100) * 3;
    rand_width = random(60) * 0.015;
    angleMode(DEGREES);
    red = (random(255) * 255) % 255;
    blue = (random(255) * 3000) % 255;
    green = (random(255) * 2000) % 255;
    c = color(red, blue, green)
    fill(c);
    var d = cos(a) / sin(b);
    translate(mouseX - (width / 2), mouseY - height / 2);
    push();
    rotate(d);
    shearX(d/a);
    shearY(b/a);
    ellipse(rand_xpos, rand_ypos, rand_length, rand_width);
    pop();

    // LINE 4
    rand_xpos = random(-1, 2) * 9;
    rand_ypos = random(-1, 2) * 2;
    rand_length = random(200) * 2;
    rand_width = random(10) * 0.1;
    red = (random(999) * 800) % 255;
    blue = (random(r_col_hi) * random(25)) % 255;
    green = (random(1000) * 8090) % 255;
    c = color(red, blue, green)
    fill(c);
    var bx1 = mouseX;
    var by1 = mouseY;
    var bx2 = bx1 * a;
    var by2 = by1 * a;
    var bx3 = bx1 + random(-1, 2) * random(50, 100);
    var by3 = by1 + random(-1, 2) * random(50, 100);
    var bx4 = bx3 * b;
    var by4 = by3 * b;
    var e = cos(d) / tan(b);
    translate(mouseX - (width / 2), mouseY - (height / 2));
    push();
    rotate(e);
    shearX(e/d*a);
    shearY(d/e*b/a);
    ellipse(rand_xpos, rand_ypos, rand_length, rand_width);
    pop();

    // LINE 5
    rand_length = random(500) * 0.5;
    rand_width = random(20) * 0.02;
    red = (random(100, 200) * HALF_PI) % 255;;
    blue = 0;
    green = (random(100, 140) * HALF_PI) % 255;
    c = color(red, blue, green);
    fill(c);
    var f = tan(a);
    translate(mouseX - (width / 2), mouseY - (height / 2));
    push();
    rotate(a/b);
    ellipse(rand_xpos, rand_ypos, rand_length, rand_width);
    pop();

    // LINE 6
    rand_length = random(10000) * 0.1;
    rand_width = random(30) * 0.015;
    red = 0;
    blue = (random(100, 130) * 4.09) % 255;
    green = 0;
    c = color (red, blue, green);
    fill (c);
    translate(mouseX - (width / 2), mouseY - (height / 2));
    push();
    rotate(e/f);
    ellipse(rand_xpos, rand_ypos, rand_length, rand_width);
    pop();

    // LINE 7
    rand_length = rand_length / 3;
    red = (random(200, 250) * 1.39) % 255;
    green = (random(180, 200) * 1.68) % 255;
    blue = 0;
    c = color(red, blue, green);
    fill(c);
    push();
    rotate(a/f);
    ellipse(rand_xpos, rand_ypos, rand_length, rand_width);
    pop();

    

    
    
}
