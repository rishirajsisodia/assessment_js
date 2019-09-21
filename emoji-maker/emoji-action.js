var disp=document.getElementById('card-wrapper');
var eyes=document.getElementById('select-eyes-card');
var mouth=document.getElementById('select-mouth-card');
var skin=document.getElementById('select-skin-card');

function showskin(){
mouth.style.display="none";
skin.style.display="block";
eyes.style.display="none";
}

function showmouth(){
mouth.style.display="block";
skin.style.display="none";
eyes.style.display="none";
}

function showeyes(){
eyes.style.display="block";
skin.style.display="none";
mouth.style.display="none";
}

var d_skin=document.getElementById('skin');
var d_eyes=document.getElementById('eyes');
var d_mouth=document.getElementById('mouth');

function yellow_s(){
    d_skin.src="./assets/skin/yellow.png";
}
function green_s(){
    d_skin.src="./assets/skin/green.png";

}
function red_s(){
    d_skin.src="./assets/skin/red.png";

}

function teeth(){
    d_mouth.src="./assets/mouth/teeth.png";
}

function sm_open(){
    d_mouth.src="./assets/mouth/open.png";
}

function smile(){
    d_mouth.src="./assets/mouth/smiling.png";
}
function straight(){
    d_mouth.src="./assets/mouth/straight.png";
}
function sad(){
    d_mouth.src="./assets/mouth/sad.png";
}


function normaleye(){
    d_eyes.src="./assets/eyes/normal.png";
}
function eyeclose(){
    d_eyes.src="./assets/eyes/closed.png";
}
function longeye(){
    d_eyes.src="./assets/eyes/long.png";
}
function laugheye(){
    d_eyes.src="./assets/eyes/laughing.png";
}
function rolleye(){
    d_eyes.src="./assets/eyes/rolling.png";
}
function winkeye(){
    d_eyes.src="./assets/eyes/winking.png";
}