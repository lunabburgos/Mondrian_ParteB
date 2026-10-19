function gradientFilter() {              
  let startColor = color(232,237,231);   
  let endColor = color(211,206,207);     
  strokeWeight(1);                       
  for (let y = 0; y < 784.31; y += 1) {  
    let amt = map(y, 0, 784.31, 0, 1);   
    let gradColor = lerpColor(startColor, endColor, amt); 
    stroke(gradColor);                   
    line(0, y, width, y);                
  }                                      
}
//Color Gradients(degradê de cores) - https://p5js.org/tutorials/color-gradients/


async function setup() {                 
  createCanvas(800, 784.31);             
  img = await loadImage('textura1.jpg'); //https://p5js.org/reference/p5/texture/
  frameRate(30); //corre 30 v ezes por segundo - https://p5js.org/reference/p5/frameRate/
  rectMode(CENTER); //https://p5js.org/reference/p5/rectMode/
}

function draw() {                       
  blendMode(BLEND);                     
  gradientFilter();                      

  stroke(20);//cor da linha
  strokeWeight(15);//espessura da linha
  line(0,319.5,800,319.5);//primeira horizontal
  line(0,509.5,800,509.5);//segunda horizontal
  //estão juntas porque têm a mesma espessura

  strokeWeight(10);//espessura da linha                      
  line(363,749.5,614,749.5);//terceira horizontal
  line(80,517,77,784.31);//primeira vertical
  line(367.5,0,363,784.31);//segunda vertical 
  line(614,517,614,784.31);//terceira vertical 
  //estão juntas porque têm a mesma espessura

  noStroke(); 

  let escalaV = 1; //escala do vermelho 
  if (random() < 0.03) { escalaV = random(1.05, 1.15); } //random: 3% dos frames o quadrado cresce entre 5% e 15%
  fill(231,6,3); //cor
  rect(181.5, 156, 363 * escalaV, 312 * escalaV); //centro (181.5, 156), tamanho 363x312 com escala

  let escalaA = 1; //escala do amarelo
  if (random() < 0.03) { escalaA = random(1.05, 1.15); } //random: 3% dos frames o quadrado cresce entre 5% e 15%
  fill(249,203,2); //cor
  rect(37.5, 650.655, 75 * escalaA, 267.31 * escalaA); //centro (37.5, 650.655), tamanho 75x267.31 com escala

  let escalaAz = 1; //escala do azul
  if (random() < 0.03) { escalaAz = random(1.05, 1.15); } //random: 3% dos frames o quadrado cresce entre 5% e 15%
  fill(26,26,105); //cor
  rect(489, 631, 242 * escalaAz, 228 * escalaAz); //centro (489, 631), tamanho 242x228 com escala
  //estão depois das linhas, por isso quando crescem tapam-nas
  //referência random - https://p5js.org/reference/p5/random/

  blendMode(MULTIPLY); //https://p5js.org/reference/p5/blendMode/                 
  tint(255, 90); // transparência da textura: 0 = invisível, 255 = total                      
  image(img, 0, 0, width, height);     
  noTint();                              
}

function windowResized() {              
  resizeCanvas(windowWidth, windowHeight); 
}