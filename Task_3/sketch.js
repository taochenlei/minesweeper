const re = 25,
      rr = re * 2;

let showMessage = false;

let shapes = {
    "cors": [
        {
            "x": 100,
            "y": 100,
            "color": "blue"
        },
        {
            "x": 200,
            "y": 110,
            "color": "blue"
        },
        {
            "x": 120,
            "y": 210,
            "color": "red"
        },
        {
            "x": 230,
            "y": 210,
            "color": "red"
        },
        {
            "x": 300,
            "y": 130,
            "color": "yellow"
        },
        {
            "x": 240,
            "y": 300,
            "color": "yellow"
        },
    ],
    "rects": [
        {
            "appear": true,
            "stroke": 0
        },
        {
            "appear": true,
            "stroke": 0
        },
        {
            "appear": true,
            "stroke": 0
        },
        {
            "appear": true,
            "stroke": 0
        },
        {
            "appear": true,
            "stroke": 0
        },
        {
            "appear": true,
            "stroke": 0
        },        
    ]
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(250);
    textSize(20); textAlign(LEFT); fill(0);
    text('Chenlei Tao (Jesse), s5108596', 100, 40);
    textSize(11); textAlign(LEFT); fill(0);noStroke();
    text('Coloring Minesweeper for 7805ICT milestone 3.', 50, 450);
    rectMode(CENTER);
    stroke(0);
    
//    draw lines
    drawline(1, 3);
    drawline(1, 4);
    drawline(1, 6);
    drawline(2, 3);
    drawline(2, 5);
    drawline(4, 5);
    drawline(5, 6);
    
//    winLoseMessage
    if (showMessage) {
        text(message, 50, 370);
    }

//    reset
    fill(255);rect(100, 400, 80, 30, 20);
    textSize(10);fill(0);text('New  Game', 75, 403);
    resetGame();
    
//    draw ellipses
    for (i=0; i<shapes.cors.length; i++) {
        fill(shapes.cors[i].color);
        stroke(0);
        ellipse(shapes.cors[i].x, shapes.cors[i].y, re, re);
//    draw rects
        if (shapes.rects[i].appear) {
            stroke(shapes.rects[i].stroke);
            fill(200);
            rect(shapes.cors[i].x, shapes.cors[i].y, rr, rr);
        }
    }
    
//    hightlight and disappear rects
    clickOnR();
    
//    win and lose
    winAndLose();
}

function winAndLose() {
    if (mouseX > shapes.cors[5].x - re &&
        mouseX < shapes.cors[5].x + re &&
        mouseY > shapes.cors[5].y - re &&
        mouseY < shapes.cors[5].y + re) {
        if (mouseIsPressed) {
            showMessage = true;
            message = "Game Over!";
        }
    }
    else if (mouseX > shapes.cors[3].x - re &&
            mouseX < shapes.cors[3].x + re &&
            mouseY > shapes.cors[3].y - re &&
            mouseY < shapes.cors[3].y + re) {
        if (mouseIsPressed) {
            showMessage = true;
            message = "Congrates! You win!";
        }
    }
}


function resetGame() {
    if (mouseX > 60 &&
        mouseX < 140 &&
        mouseY > 385 &&
        mouseY < 415) {
        if (mouseIsPressed) {
            for (i=0; i<shapes.cors.length; i++) {
                shapes.rects[i].appear = true;
            }
            showMessage = false;
        }
    }
}

function clickOnR() {
    for (i=0; i<shapes.cors.length; i++) {
        if (mouseX > shapes.cors[i].x - re &&
            mouseX < shapes.cors[i].x + re &&
            mouseY > shapes.cors[i].y - re &&
            mouseY < shapes.cors[i].y + re) {
            shapes.rects[i].stroke = 200;
            if (mouseIsPressed) {
                shapes.rects[i].appear = false;
            }
        }
        else {
            shapes.rects[i].stroke = 0;
        }
    }
}

function drawline(n1, n2) {
    line(shapes.cors[n1-1].x, shapes.cors[n1-1].y, shapes.cors[n2-1].x, shapes.cors[n2-1].y);
}