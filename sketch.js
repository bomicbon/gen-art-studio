var SCREEN_WIDTH = 900;
var SCREEN_HEIGHT = 720;
var CenterX = SCREEN_WIDTH / 2;
var CenterY = SCREEN_HEIGHT / 2;

var defs;
var of;

function preload() {
}

function setup() {
    var myCanvas = createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    myCanvas.parent('myContainer');
}

function draw() {
    background(0);
    ellipseMode(CENTER);
    noSmooth();
    strokeWeight(random(2));
    strokeCap(ROUND);
    
    var curve_tightness = map(mouseX, 0, width, 5, -5);
    curveTightness(curve_tightness);
    //noFill();
    p = rand_coord();
    recycle_curves(p.x1, p.y1, p.x2, p.y2, p.x3, p.y3, p.x4, p.y4);
}

function rand_col() {
    choice = random(3);
    if (choice <= 1) {
        r = random(175, 255);
        g = random(90);
        b = random(80);
    }
    else if (choice >= 2) {
        r = random(97);
        g = random(87);
        b = random(185, 255);
    }
    stroke(r,g,b);
    fill_alpha = map(mouseX, 0, width, 0.1, 2);
    fill(r,g,b,fill_alpha);
}
function rand_coord() {
    x1 = random(SCREEN_WIDTH);
    y1 = random(SCREEN_HEIGHT);
    x2 = mouseX;
    y2 = mouseY;
    x3 = random(SCREEN_WIDTH);
    y3 = random(SCREEN_HEIGHT);
    while (x3 - x2 < 400 && y3 - y2 < 100){
        x3 = random(SCREEN_WIDTH + 500);
        y3 = random(SCREEN_HEIGHT + 800);
    }
    x4 = random(SCREEN_WIDTH);
    y4 = random(SCREEN_HEIGHT);
    p = {x1:x1, y1:y1, x2:x2, y2:y2, x3:x3, y3:y3, x4:x4, y4:y4};
    return p;
}
function recycle_curves(x1, y1, x2, y2, x3, y3, x4, y4) {
    rand_col();
    curve(x1, y1, x2, y2, x3, y3, x4, y4);
    rand_col();
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    rand_col();
    triangle(x1, y1, x2, y2, x3, y3);
    rand_col();
    triangle(x2, y2, x3, y3, x4, y4);
    steps = 5;
    for (i = 0; i <= steps; i++) {
        t = i / steps;
        x = curvePoint(x1, x2, x3, x4, t);
        y = curvePoint(y1, y2, y3, y4, t);
        tx = curveTangent(x1, x2, x3, x4, t);
        ty = curveTangent(y1, y2, y3, y4, t);
        a = atan2(ty, tx);
        a -= PI / 2.0;
        recycle_ellipse(x,y, (cos(a)*random(80)) + x, (sin(a)*random(80)) + y);
    }
    if (Math.abs(x3 - x2 > 50)) {
        x1 = random(SCREEN_WIDTH);
        x4 = random(SCREEN_WIDTH);
        x2 += random(25);
        x3 -= random(25);
        recycle_curves(x1, y1, x2, y2, x3, y3, x4, y4);
    }
    else if(Math.abs(y3 - y2 > 60)) {
        y1 = random(SCREEN_HEIGHT);
        y4 = random(SCREEN_HEIGHT);
        y2 += random(30);
        y3 -= random(30);
        recycle_curves(x1, y1, x2, y2, x3, y3, x4, y4);
    }
}

function recycle_ellipse(x1, y1, w, h){
    ellipse(x1, y1, x2, y2);
    if (w > 50 || h > 40) {
        w = w * 0.66;
        h = h * 0.66;
        dw = w / 2;
        dh = h / 2;
        ellipse(x1 - dw, y1 - dh, w, h);
        ellipse(x1 + dw, y1 - dh, w, h);
        ellipse(x1 - dw, y1 + dh, w, h);
        ellipse(x1 + dw, y1 + dh, w, h);
    }
}
