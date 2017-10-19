//write complex structure for multiple shells 
// Each shell will have electrons moving at different speed's

let shell_count = 3;
let electron_structure = [
    9,6,3  //Numbers of electrons at each shell  
];
let electron_container = []; 

//Useful in electron proper positioning and speed
let shell_offset = 0;
let orbital_speed = 0.03;


function setup(){

  color("black");
  createCanvas(window.innerWidth ,window.innerHeight);
   
  //for each shell
   for (var i = 0; i < shell_count; i++) {

     let start_angle = 0;
      //put appropriate no of electrons
      for(let j = 0 ; j < electron_structure[i] ; j++){

        electron_container.push(new Particle("white" , 30 , orbital_speed ,4 + shell_offset , start_angle));
        start_angle += 10; //change for next particle
      }
      orbital_speed -= 0.01;
      shell_offset += 2.5 ; //adjust shell offset
   }
}
function draw(){
    background("black");
    
      electron_container.forEach(function(p){
        push();
        translate(width/2, height/2);
        p.update();
        p.draw();
       pop();
      });

  }
