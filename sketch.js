let months = {
  x:50,
  y:105,
  speed:2,
}

let dayNames = [
  'MON', 
  'TUE', 
  'WED', 
  'THU', 
  'FRI', 
  'SAT',
  'SUN'
]


function setup() {
  createCanvas(500, 600);
}

function draw() {
  
  fill(0,255,0);
  textSize(60);
  let d = day();
  let u = year();
  let m = month();
  
background(100,(m*20),(m*20));
  
  //Floating Header
  text("IT IS " + m + "."+ d +"."+ u, months.x,months.y);
  
  if (months.x > width - months.x || months.x <0){
    months.speed = -months.speed;
  }
  months.x = months.x + months.speed;
  
  //Days of the Week
  for (let z=0; z<=dayNames.length; z++){
    textSize(15);
    text(dayNames[z], 23+ (70*(z)),155);
  };
  
  //Numbers
  for (var x =40; x <= width; x+= 70) {
    for (var y = 200; y <= height-50; y+= 70) {
      noFill();
      stroke(0,255,0);
      ellipse(x,y,60);
    }
      
    textSize(40);
    
    for(let a=1;a<6;a++){
      text(a,(a*70)+100,210);
    };
    
    for(let b=3;b<10;b++){
      for(let c=1;c<=3;c++){
        text((b+(7*c)),(b*70)-191,(70*(c+4))+5);
      }
      text(b,(b*70)-180,280);
    };
    
      text("31", 20, 565);
}}