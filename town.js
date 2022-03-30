//EventListener to make a pig move through the farm
document.addEventListener("keydown", movePig);

let key = {
    LEFT: 37, UP: 38, RIGHT: 39, DOWN:40
};

//Pulled 2d context from the canvas
let vp = document.getElementById("villa_platzi");
let paper = vp.getContext("2d");

//Created variables to contain each image data
let background = {
    url: "tile.png",
    cargaOK: false
};

let cow = {
    url: "cow.png",
    cargaOK: false
};

let pig = {
    url: "pig.png",
    cargaOK: false
};

let chicken = {
    url: "chicken.png",
    cargaOK: false
};

let movingPig = {
    url: "pig.png",
    cargaOK: false,
    xpig: 210,
    ypig: 210
};

//initializated images in order to get their contexts to draw

background.image = new Image();
background.image.src = background.url;
background.image.addEventListener("load", loadBackground);

cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", loadCow);

pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load", loadPig);

chicken.image = new Image();
chicken.image.src = chicken.url;
chicken.image.addEventListener("load", loadChicken);

movingPig.image = new Image();
movingPig.image.src = movingPig.url;
movingPig.image.addEventListener("load", movePig)

//Function to change the position of the moving pig
function movePig(event)
{
    switch(event.keyCode) {
        case key.LEFT:
            movingPig.xpig = movingPig.xpig - 5;
            break;
        case key.UP:
            movingPig.ypig = movingPig.ypig - 5;
            break;
        case key.RIGHT:
            movingPig.xpig = movingPig.xpig + 5;
            break;
        case key.DOWN:
            movingPig.ypig = movingPig.ypig + 5;
            break;
        default: 
        break;
    }

    movingPig.cargaOK = true;
    draw();
    
}

// Wait to load and then draw the images on the canvas

function loadBackground() {
    background.cargaOK = true;
    draw();
}
function loadCow() {
    cow.cargaOK = true;
    draw();
}
function loadPig() {
    pig.cargaOK = true;
    draw();
}
function loadChicken() {
    chicken.cargaOK = true;
    draw();
}

//Draws the tile first and then a random amount of animals
function draw()
{
    if (background.cargaOK)
    {
        paper.drawImage(background.image, 0, 0)
    }

    let cicles = random(1, 10);

    for (let i = 0; i < cicles; i++)
    {
        if (cow.cargaOK)
        {
            let x = random(0,420);
            let y = random(0,420);
            paper.drawImage(cow.image, x, y)
        }
    }
    for (let i = 0; i < cicles; i++)
    {
        if (pig.cargaOK)
        {
            let x = random(0,420);
            let y = random(0,420);
            paper.drawImage(pig.image, x, y)
        }
    }
    for (let i = 0; i < cicles * 2 ; i++) 
    {
        if (chicken.cargaOK)
        {
            let x = random(0,420);
            let y = random(0,420);
            paper.drawImage(chicken.image, x, y)
        }
    }
    if (movingPig.cargaOK)
    {
        paper.drawImage(movingPig.image, movingPig.xpig, movingPig.ypig)
    }

}

//Function to get randon numbers
function random(min, max)
{
    let result = 0;
    result = Math.floor(Math.random() * ((max - min +1))) + min;
    return result;
}