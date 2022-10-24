let d;
let space;
let offset;
let c;
let inner;
let roll; //false or true
let t; //turn on/off
let noiseRes;
let colors=['#002EA6','#FFE78F','#D7000F'];
let z; //color

function setup() {
  createCanvas(600, 400);
     background(240);
  d=11;
  space=width/d;
  offset=35;
  c=7;
  t=0.05;
  frameRate(5);
noiseSeed(2);
}

function draw() {
translate(random(-30,25),random(-30,10));
 stroke(170);
  strokeWeight(1);
  noiseRes=random(0.01,0.2);
    roll=random(1);
    //横线
    for(i=0;i<=d;i++){
      //竖线
      for(let a=0;a<=d;a++){
        //里面的圈
        for(let b=0; b<=c; b++){
          let n=noise((i+t)*noiseRes,(a+t)*noiseRes);
          if(n>0.6){
            z=colors[0];
          }
          else if(n>0.3){
            z=colors[1];
          }
          else{
            z=colors[2];
          }
          
          fill(z);
          if(roll>t){
          inner = ((space/2)/c)* b;
      ellipse(space/2+i*space,space/2+a*space,space+random(offset)-inner,space+random(offset)-inner);
        }
      }
      }
      }
}
function mousePressed(){
  saveCanvas('png');
}