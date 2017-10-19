//write complex structure for multiple shells 
// Each shell will have electrons moving at different speed's

////////work in progress

let particles = [];
let shell_offset = 0;
let orbital_speed = 0.05;


function setup(){

  color("black");
  createCanvas(window.innerWidth ,window.innerHeight);
   for (var i = 0; i < 5; i++) {
     particles[i] = new Particle("white" , 30 , orbital_speed ,4 + shell_offset);
     
     shell_offset += 1.2; //adjust shell offset
     orbital_speed -= 0.01;

   }
}
function draw(){
    background("black");
    
      particles.forEach(function(p){
        push();
        translate(width/2, height/2);
        p.update();
        p.draw();
       pop();
      });

  }
